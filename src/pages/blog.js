import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.edges.map((edge) => (
        <article key={edge.node.id}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>Posted: {edge.node.frontmatter.date}</p>
          <MDXRenderer>{edge.node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          body
        }
      }
    }
  }
`;

export default BlogPage;
