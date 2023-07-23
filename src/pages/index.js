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
    href="mailto:epsanlito@gmail.com"
  >
    send us an email
  </a>
);

const callLink = (
  <a
    aria-label="contact link"
    style={{ textDecoration: "none" }}
    href="tel:+94770444855"
  >
    give us a call
  </a>
);

const IndexPage = () => {
  return (
    <Layout>
      <Container className="py-5">
        <p>
          High quality, custom-built wood products like home decor and more that
          will bring lasting warmth, beauty and elegance to any home. We will
          work with you to create that truly unique designs that you've always
          wanted; handcrafted to perfection!
        </p>
        <p>
          Have something in mind, {sendEmailLInk} or {callLink}.
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
