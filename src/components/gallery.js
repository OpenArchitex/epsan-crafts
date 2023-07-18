import * as React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useState } from "react";
import ImageModal from "./image-modal";
import Seo from "./seo";

const getArraySlices = (array) => {
  const slices = [[], [], [], [], []];
  for (let i = 0; i < 5; i++) {
    for (let j = i; j < array.length; j += 5) {
      slices[i].push(array[j]);
    }
  }
  return slices;
};

const getFileName = (relativePath) => {
  return parseInt(relativePath.split(".")[0]);
};

const Gallery = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query FeaturedImageQuery {
        allFile(filter: { sourceInstanceName: { eq: "portfolio-images" } }) {
          nodes {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    `
  );

  const images = allFile.nodes.sort(
    (a, b) => getFileName(a.relativePath) > getFileName(b.relativePath)
  );
  const arraySlices = getArraySlices(images);
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const getImages = (images) => {
    return images?.map((image) => {
      const portfolioImage = image?.childImageSharp?.gatsbyImageData;
      return (
        <Row
          md
          className="pb-2 image-container"
          onClick={() => handleShow(portfolioImage)}
        >
          <GatsbyImage image={portfolioImage} alt="Epsan Craft Image" />
        </Row>
      );
    });
  };

  return (
    <Container>
      <Container>
        <Row>
          {images &&
            arraySlices.map((slice) => (
              <Col sm className="px-3">
                {getImages(slice)}
              </Col>
            ))}
        </Row>
      </Container>
      <ImageModal image={selectedImage} show={show} handleClose={handleClose} />
    </Container>
  );
};

export const Head = () => <Seo title="Gallery" />;

export default Gallery;
