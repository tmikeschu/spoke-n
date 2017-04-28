import React, { Component } from "react"
import APIService from "../../APIService/APIService"
import { Notification } from "react-notification"
import "../../App.css"

export default class SuggestionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      label: "",
      description: "",
      category: "",
      message: "",
      suggestionSent: false,
      suggestionFailed: false,
      formNotification: "",
      service: new APIService("https://spoken-api.herokuapp.com")
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const pin = { 
      pin: {
        label: this.state.label,
        description: this.state.description,
        category: this.state.category,
        lat: this.props.suggestionPin.lat,
        lng: this.props.suggestionPin.lng,
        message: this.state.message,
        name: this.state.name,
        email: this.state.email,
      }
    }
    try {
      await this.state.service.post("/api/v1/suggestion_pins", pin) 
      this.submitSuccess()
    } catch(error) {
      this.submitFail(error)
    }
  }

  submitSuccess() {
    this.props.getSuggestions()
    this.props.setSuggestion({})
    this.setState({
      formNotification: "Suggestion sent!",
      suggestionSent: true,
      label: "",
      description: "",
      category: "",
      message: "",
    })
  }

  submitFail(error) {
    this.setState({
      formNotification: error.responseJSON["error"],
      suggestionFailed: true,
    })
  }

  deactivate() {
    this.setState({
      suggestionSent: false,
      suggestionFailed: false,
    })
  }

  render() {
    const form = (
      <form onSubmit={this.handleSubmit}>
        <input required type="text" name="name" value={this.state.name}
          onChange={this.handleChange} placeholder="Name" />

        <input required type="email" name="email" value={this.state.email}
          onChange={this.handleChange} placeholder="Email (our eyes only!)" />

        <input required type="text" name="label" value={this.state.label}
          onChange={this.handleChange} placeholder="Label" />

        <textarea required name="description" value={this.state.description} 
          onChange={this.handleChange} placeholder="Description" />

        <select required name="category" value={this.state.category} 
          onChange={this.handleChange} >
          <option value="">--Category--</option>
          <option value="0">Place to stay</option>
          <option value="1">Cool spot</option>
          <option value="2">Avoid this place</option>
          <option value="3">Bike shop</option>
          <option value="4">Other</option>
        </select>

        <textarea name="message" value={this.state.message} 
          onChange={this.handleChange} placeholder="Message (optional)" />

        <p style={{
            display: this.props.suggestionPin.lat === undefined ? "block" : "none"
          }} 
          value="Drop It!"
        >
          Click the map to drop a pin!
        </p>

        <input type={
            this.props.suggestionPin.lat === undefined ? "hidden" : "submit"
          } 
          value="Drop It!" />

      </form>
    );
    return (
      <article className="suggestion-form" >
        <h4>Drop a Pin</h4>
        { form }
        <Notification
          isActive={this.state.suggestionSent}
          message={this.state.formNotification}
          onClick={() => this.deactivate() }
          action="✖"
        />
      </article>
    );
  }
}

