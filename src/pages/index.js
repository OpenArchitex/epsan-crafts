import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { Container } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fontAwesomeIcons } from "../helpers/fontawesomeicons";
import Gallery from "../components/gallery";

library.add(fontAwesomeIcons);

const sendEmailLInk = (
  <a
    aria-label="email"
    style={{ textDecoration: "none" }}
    href="mailto:email2gihani@gmail.com"
  >
    send us an email
  </a>
);

const scheduleMeeting = (
  <a
    aria-label="contact link"
    style={{ textDecoration: "none" }}
    target="_blank"
    rel="noopener noreferrer"
    href="https://zcal.co/sudharaka/troubleshoot"
  >
    schedule a meeting
  </a>
);

const IndexPage = () => {
  return (
    <Layout>
      <Container className="py-5">
        <p>
          High quality, custom-built wood products like home decor
          and more that will bring lasting warmth, beauty and elegance to any
          home. We will work with you to create that truly unique designs that
          you've always wanted; handcrafted to perfection!
        </p>
        <p>
          Have something in mind, {sendEmailLInk} or {scheduleMeeting}.
        </p>
      </Container>
      <Container>
        <Gallery />
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Portfolio" />;
