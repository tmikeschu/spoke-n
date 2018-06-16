import React from "react"

const Support = () => (
  <div className="Support__wrapper">
    <article className="Support">
      <h2>Support!</h2>
      <p>People are good.</p>
      <p>
        Thank you to everyone that has gone out of their way to make this trip
        possible, we truly could not be doing this without your help and
        support!
      </p>
      <p>
        Want to buy us a meal? Maybe pay for a border crossing? Or nose plugs to
        save us from tent farts? Feel free to send us a donation! All money will
        go towards trip expenses.
      </p>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input
          type="hidden"
          name="encrypted"
          value="-----BEGIN PKCS7-----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-----END PKCS7-----"
        />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
      <section className="sponsor">
        <article>
          <h3>
            <a href="http://blackholemediafilm.com/">Black Hole Media</a>
          </h3>
          <p>
            Those videos on our page were shot, edited and produced by
            videographer and creative guru Jessica Markowitz. Check her out at
            Black Hole Media (link above) and on Instagram
            <a href="https://www.instagram.com/jessimarko/"> @jessimarko </a>
            for some general life inspiration and overall baddassness.
          </p>
        </article>
        <img
          src="https://static1.squarespace.com/static/56632d5ee4b0c4c43295eafd/t/57e8018b37c58188b675963a/1474822567053/"
          alt="Jessica Markowitz"
        />
      </section>
      <section className="sponsor">
        <article>
          <h3>
            <a href="http://www.tmikeschu.co/">Mike Schutte</a>
          </h3>
          <p>
            You wouldn’t be reading this if it wasn’t for Schutte. Everything on
            this website, including the badass map, was built by Mike and his
            keyboard. Like what you see? Check him out by clicking his big name
            above.
          </p>
        </article>
        <img
          src="https://pbs.twimg.com/profile_images/906270836302127104/tSfPsyWR_400x400.jpg"
          alt="Mike Schutte"
        />
      </section>
      <section className="sponsor whitePhoto">
        <article>
          <h3>
            <a href="https://www.whycycles.com/">Why Cycles</a>
          </h3>
          <p>
            Titanium. Sweet, sweet titanium. Adam and the Why Cycles crew are
            putting out a new brand of do-it-all bicycles. From ripping
            single-track in Fruita to bikepacking 15,000 miles to Patagonia,
            these bikes can do it all!
          </p>
        </article>
        <div>
          <img
            src="https://www.whycycles.com/wp-content/uploads/2016/08/Med-Logo-1.png"
            alt="Why Cycles"
          />
        </div>
      </section>
      <section className="sponsor">
        <article>
          <h3>
            <a href="http://freewheelbike.com/">Freewheel Bike</a>
          </h3>
          <p>
            Trying to outfit your bike for an epic adventure? Or maybe just a
            Sunday cruise? Freewheel Bike is THE spot! Customer service is
            fantastic and they carry only the best bicycle parts for you and
            your ride.
          </p>
        </article>
        <img
          src="http://freewheelbike.com/synd/merchant/589/images/site/Freewheel-Chevron-White-Cloud.gif"
          alt="Freewheel Bike"
        />
      </section>
      <section className="sponsor">
        <article>
          <h3>
            <a href="https://www.otterbox.com/">OtterBox</a>
          </h3>
          <p>
            Need a bomb-proof, tested and true case for your most important
            stuff? Look no further than OtterBox. From phone cases to dryboxes
            OtterBox has it all.
          </p>
        </article>
        <img
          src="http://www.vcasesmobile.com.au/wp-content/uploads/2016/02/otterbox-tag-centered.png"
          alt="Otter Box"
        />
      </section>
      <section className="sponsor">
        <article>
          <h3>
            <a href="http://pineprintshop.com/">Pine Brand</a>
          </h3>
          <p>
            Those beautiful logos you’ve been seeing? They were designed by
            Colorado’s own Pine Brand. Need custom screenprinting? Look no
            further; Garrett and the Pine crew have you covered!
          </p>
        </article>
        <img
          src="http://static1.squarespace.com/static/5643a334e4b0d7ba4d702664/t/58532982d1758ec6d7c3ff5b/1492436927771/?format=1500w"
          alt="Pine Brand"
        />
      </section>
    </article>
  </div>
)

export default Support
