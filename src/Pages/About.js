import React from "react";
import image1 from "../images/CANEX1.png";
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
              All Africa Music Awards, AFRIMA, in partnership with the African
              Union Commission, AUC, is an innovative awards platform that
              rewards excellence in the African music industry and showcases the
              cultural and entertainment uniqueness of Africa to the rest of the
              world. The music property recognises and rewards the work and
              talent of myriad of African artists from the old to the new
              generation of musicians. AFRIMA also stimulates conversations
              among Africans and between Africa and the rest of the world about
              the potential of the creative arts for real humanising enterprise
              on the continent contributing significantly to social cohesion,
              national, regional and continental integration as well as
              sustainable economic development in Africa. Six editions of the
              awards ceremony have been held between 2014 and 2019 and 3,104
              nominees have emerged in the 37 categories of the awards across
              the traditional and contemporary forms of African music. Amongst
              these nominees, 211 African creative talents have emerged winners
              of the coveted 23.9 Karat gold-plated AFRIMA trophy for excellence
              in music and artistry.
            </p>
          </div>
          <img className="images" alt="" src={image1}></img>
        </div>
        <div className="creativeAndCultural">
          <img
            className="images"
            alt=""
            src={
              "https://cms.canex.africa/wp-content/uploads/2022/10/canex-fashion.png"
            }
          ></img>
          <div>
            <h3>VISION, VALUE & MISSION </h3>
            <h4>VISION</h4>
            <p>The ultimate recognition of African music globally</p>
            <h4>MISSION OF AFRIMA</h4>
            <ul>
              <li>
                {" "}
                Towards a peaceful, prosperous and integrated Africa through the
                joyous celebration of excellence in African music and culture
              </li>
              <li>
                {" "}
                Reward up and coming artistes as well as established talents
              </li>
              <li>
                {" "}
                Promote and showcase African artistes and their music to the
                largely untapped African population in Africa and to a global
                audience as well promote African cities and tourism
              </li>
              <li>
                Create sustainable growth of the African music industry as a
                contributor to national and continental economies
              </li>
            </ul>
          </div>
        </div>
        <div className="nexusProgramme">
          <div>
            <h3> AFRIMA VALUE & PAY OFF </h3>
            <p>
              FACE IT is an acronym coined by the International Committee of
              AFRIMA. It represents the core values of the All Africa Music
              Awards which are: Fairness, Authenticity, Creativity, Excellence,
              Integrity and Transparency. The AFRIMA Mantra: “FOR HOPE, FOR
              CELEBRATION” revolves round the universal power of music as a tool
              of hope and unity in the African continent despite the challenges
              it faces.
            </p>
          </div>
          <img
            className="images"
            alt=""
            src={
              "https://cms.canex.africa/wp-content/uploads/2022/10/CANEX-FILM.png"
            }
          ></img>
        </div>
        <div className="objectives">
          <img
            className="images"
            alt=""
            src={
              "https://cms.canex.africa/wp-content/uploads/2022/10/canex-music.png"
            }
          ></img>
          <div>
            <h3>Objectives </h3>
            <p>
              Lorem ipsun dolor glascow Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque blandit ut nulla a pretium. Nunc mattis
              urna odio, vel interdum velit imperdiet in. Aenean vulputate
              venenatis magna id consequat. Sed pellentesque feugiat feugiat. In
              at eleifend arcu. Vivamus semper odio a iaculis malesuada.
              Curabitur nec turpis vitae odio vestibulum accumsan nec non nisl.
              Vivamus sed congue leo. Ut fringilla feugiat libero sed
              condimentum. Sed at libero non nunc gravida congue vitae at erat.
              Pellentesque ut est a ante maximus posuere. Mauris lacinia blandit
              arcu. Integer purus turpis, pharetra vel turpis ut, volutpat
              interdum quam. Suspendisse at erat quam. Aliquam eget diam orci.
              Phasellus sollicitudin nibh eu nisi tempor, in gravida lacus
              lobortis. Nulla sit amet tempor tortor, quis pharetra ligula.
              Quisque mattis egestas mi quis egestas. Curabitur pulvinar
              consequat enim pharetra fermentum. Duis eleifend nibh quis
              elementum posuere. Cras eu placerat quam. Nullam porttitor est
              nibh, id sodales augue consectetur id. Aenean porta nisl at
              posuere mattis.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
