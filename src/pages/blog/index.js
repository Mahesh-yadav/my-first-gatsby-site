import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.edges.map((edge) => (
        <article key={edge.node.id}>
          <h2>
            <Link to={`/blog/${edge.node.slug}`}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {edge.node.frontmatter.date}</p>
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
          slug
        }
      }
    }
  }
`;

export default BlogPage;
