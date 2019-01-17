import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({ url }) => (
  <StaticQuery
    query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
    render={data => (
      <Img fluid={data.allImageSharp.edges.find(element => element.node.fluid.src.split('/').pop() === url).node.fluid} />
    )}
  />
);

Image.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Image;