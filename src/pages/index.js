import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fontAwesomeIcons } from "../helpers/fontawesomeicons";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

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

const getFeaturedImages = (featuredImages) => {
  return featuredImages?.map((featuredImage) => {
    const image = featuredImage?.childImageSharp?.gatsbyImageData;
    const folderName = featuredImage.relativePath.split("/")[0];
    return (
      <Col md className="pb-4">
        <Link to={`/gallery/${folderName}`}>
          <Container className="featureImageContainer">
            <GatsbyImage
              className="featureImage"
              image={image}
              alt={folderName}
            />
            <Container className="featureImageTitle">{folderName}</Container>
          </Container>
        </Link>
      </Col>
    );
  });
};

const IndexPage = ({ data }) => {
  const featuredImages = data?.allFile.nodes;
  console.log(data);
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
      <Container className="py-5 text-center">
        <Row>{getFeaturedImages(featuredImages.slice(0, 2))}</Row>
        <Row>{getFeaturedImages(featuredImages.slice(2, 4))}</Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const featuredImageQuery = graphql`
  query FeaturedImageQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "portfolio-images" }
        relativePath: { regex: "//1.jpg/" }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Portfolio" />;
