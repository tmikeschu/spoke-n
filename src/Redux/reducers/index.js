import { combineReducers } from "redux"
import * as types from "../types"

const photos = (state = [], action) => (
  action.type === types.ADD_PHOTOS ? action.data : state
)

const suggestions = (state = [], action) => {
  switch (action.type) {
    case types.ADD_SUGGESTIONS:
      return action.data
    default:
      return state
  }
}

const suggestionPin = (state = {}, action) => (
  action.type === types.ADD_SUGGESTION_PIN ? action.data : state
)

export default combineReducers({
  photos,
  map: combineReducers({
    suggestions,
    suggestionPin
  })
})

