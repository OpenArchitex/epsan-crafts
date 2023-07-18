import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fontAwesomeIcons } from "../helpers/fontawesomeicons";
import { Container } from "react-bootstrap";
import { Script } from "gatsby";

library.add(fontAwesomeIcons);

const About = () => (
  <Layout>
    <Container className="pt-3">
      <p>
        My name is Pasan Madushanka, owner of Epsan Crafts. Here's a little
        insight into the story and the heart behind Epsan Crafts. Growing up in
        Sri Lanka, I was trained as a Veterinarian. Some years into my career, I
        realized my passion lied elsewhere. As I reflected on the direction I
        wanted to take in life, and the career path I was going to pursue, I
        knew two things - I love to help people, and two, I really enjoy
        building things using my creativity and craftsmanship. I wanted to find
        a way to combine these two passions of mine and I remembered how much I
        enjoyed making crafts as a child. I decided to pursue this passion and
        started making crafts as a hobby. I soon realized that this is what I
        wanted to do for the rest of my life.
      </p>
      <p>
        As I gained more experience I realized what I pursue my passion even
        more and help others create the home they always wanted. This is why I
        created Epsan Crafts. Now Epsan Crafts is there to help you create the
        perfect environment to bring love and warmth to your home.
      </p>

      <Container className="py-4 px-0">
        <h4>Get in touch...</h4>
        <Script
          type="text/javascript"
          src="https://static.zcal.co/embed/v1/embed.js"
        ></Script>
        <div className="zcal-inline-widget">
          <a href="https://zcal.co/i/_e_bhGdx">
            Discovery Call - Schedule a meeting
          </a>
        </div>
      </Container>
    </Container>
  </Layout>
);

export const Head = () => (
  <>
    <Seo title="About" />
  </>
);

export default About;
