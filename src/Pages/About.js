import React from "react";
import ContactForm from "../components/contactForm";
import Navbar from "../components/Navbar";
import LandingPage from "./landingPage";

export default function About() {
  return (
    <div className="aboutPageWrapper">
      <Navbar />
      <LandingPage />
      <div className="aboutContainer">
        <div className="whoWeAreContainer">
          <div>
          <h3>Who we are </h3>
          <p>
            Lorem ipsun dolor glascow Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque blandit ut nulla a pretium. Nunc mattis
            urna odio, vel interdum velit imperdiet in. Aenean vulputate
            venenatis magna id consequat. Sed pellentesque feugiat feugiat. In
            at eleifend arcu. Vivamus semper odio a iaculis malesuada. Curabitur
            nec turpis vitae odio vestibulum accumsan nec non nisl. Vivamus sed
            congue leo. Ut fringilla feugiat libero sed condimentum. Sed at
            libero non nunc gravida congue vitae at erat. Pellentesque ut est a
            ante maximus posuere. Mauris lacinia blandit arcu. Integer purus
            turpis, pharetra vel turpis ut, volutpat interdum quam. Suspendisse
            at erat quam. Aliquam eget diam orci. Phasellus sollicitudin nibh eu
            nisi tempor, in gravida lacus lobortis. Nulla sit amet tempor
            tortor, quis pharetra ligula. Quisque mattis egestas mi quis
            egestas. Curabitur pulvinar consequat enim pharetra fermentum. Duis
            eleifend nibh quis elementum posuere. Cras eu placerat quam. Nullam
            porttitor est nibh, id sodales augue consectetur id. Aenean porta
            nisl at posuere mattis.
          </p>
          </div>
         <img className="images" alt = "" src={"https://cms.canex.africa/wp-content/uploads/2022/10/canex-dance.png"}></img>
        </div>
        <div className="creativeAndCultural">
           <img className="images" alt = "" src={"https://cms.canex.africa/wp-content/uploads/2022/10/canex-fashion.png"}></img>
            <div>
            <h3>Creative and Cultural Industries </h3>
            <p>
            Lorem ipsun dolor glascow Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque blandit ut nulla a pretium. Nunc mattis
            urna odio, vel interdum velit imperdiet in. Aenean vulputate
            venenatis magna id consequat. Sed pellentesque feugiat feugiat. In
            at eleifend arcu. Vivamus semper odio a iaculis malesuada. Curabitur
            nec turpis vitae odio vestibulum accumsan nec non nisl. Vivamus sed
            congue leo. Ut fringilla feugiat libero sed condimentum. Sed at
            libero non nunc gravida congue vitae at erat. Pellentesque ut est a
            ante maximus posuere. Mauris lacinia blandit arcu. Integer purus
            turpis, pharetra vel turpis ut, volutpat interdum quam. Suspendisse
            at erat quam. Aliquam eget diam orci. Phasellus sollicitudin nibh eu
            nisi tempor, in gravida lacus lobortis. Nulla sit amet tempor
            tortor, quis pharetra ligula. Quisque mattis egestas mi quis
            egestas. Curabitur pulvinar consequat enim pharetra fermentum. Duis
            eleifend nibh quis elementum posuere. Cras eu placerat quam. Nullam
            porttitor est nibh, id sodales augue consectetur id. Aenean porta
            nisl at posuere mattis.
          </p>
            </div>   
        </div>
        <div className="nexusProgramme">
          <div>
          <h3> The Creative Africa Nexus Programme </h3>
          <p>
            Lorem ipsun dolor glascow Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque blandit ut nulla a pretium. Nunc mattis
            urna odio, vel interdum velit imperdiet in. Aenean vulputate
            venenatis magna id consequat. Sed pellentesque feugiat feugiat. In
            at eleifend arcu. Vivamus semper odio a iaculis malesuada. Curabitur
            nec turpis vitae odio vestibulum accumsan nec non nisl. Vivamus sed
            congue leo. Ut fringilla feugiat libero sed condimentum. Sed at
            libero non nunc gravida congue vitae at erat. Pellentesque ut est a
            ante maximus posuere. Mauris lacinia blandit arcu. Integer purus
            turpis, pharetra vel turpis ut, volutpat interdum quam. Suspendisse
            at erat quam. Aliquam eget diam orci. Phasellus sollicitudin nibh eu
            nisi tempor, in gravida lacus lobortis.
            </p>
          </div>
           <img className="images" alt = "" src={"https://cms.canex.africa/wp-content/uploads/2022/10/CANEX-FILM.png"}></img>
        </div>
        <div className="objectives">
            <img className="images" alt = "" src={"https://cms.canex.africa/wp-content/uploads/2022/10/canex-music.png"}></img>
            <div>
            <h3>Objectives </h3>
            <p>
            Lorem ipsun dolor glascow Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque blandit ut nulla a pretium. Nunc mattis
            urna odio, vel interdum velit imperdiet in. Aenean vulputate
            venenatis magna id consequat. Sed pellentesque feugiat feugiat. In
            at eleifend arcu. Vivamus semper odio a iaculis malesuada. Curabitur
            nec turpis vitae odio vestibulum accumsan nec non nisl. Vivamus sed
            congue leo. Ut fringilla feugiat libero sed condimentum. Sed at
            libero non nunc gravida congue vitae at erat. Pellentesque ut est a
            ante maximus posuere. Mauris lacinia blandit arcu. Integer purus
            turpis, pharetra vel turpis ut, volutpat interdum quam. Suspendisse
            at erat quam. Aliquam eget diam orci. Phasellus sollicitudin nibh eu
            nisi tempor, in gravida lacus lobortis. Nulla sit amet tempor
            tortor, quis pharetra ligula. Quisque mattis egestas mi quis
            egestas. Curabitur pulvinar consequat enim pharetra fermentum. Duis
            eleifend nibh quis elementum posuere. Cras eu placerat quam. Nullam
            porttitor est nibh, id sodales augue consectetur id. Aenean porta
            nisl at posuere mattis.
          </p>
            </div>
        </div>
      </div>
      <ContactForm/>
    </div>
  );
}
