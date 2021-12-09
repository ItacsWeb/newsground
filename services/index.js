import { request, gql } from "graphql-request";

const graphQlApi  = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query MyQuery{
    postsConnection {
      edges {
        node {
          categories {
            id
            name
            slug
            photo {
              url
            }
          }
          excerpt
          slug
          title
          featuredImage {
            id
            url
          }
          createdAt
          author {
            id
            name
            createdAt
          }
          featuredPost
          id
          inPostPhoto {
            url
          }
          content{
            raw
          }
        }
      }
    }
  }
  
  
  
  `;
  const result = await request(graphQlApi , query);

  return result.postsConnection.edges;
};




export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
            title
            excerpt
            featuredImage {
              url
            }
            author{
              name
            }
            createdAt
            slug
            content {
              raw
              html
            }
            categories {
              name
              slug
            }
            inPostPhoto {
              url
            }
      }
    }
  `;

  const result = await request(graphQlApi , query, { slug });

  return result.post;
};


export const getRecentPosts = async()=>{
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy : createdAt_ASC
        last :6
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }`
    const result = await request(graphQlApi , query);

  return result.posts;
}


export const getSimilarPosts = async()=>{
  const query = gql`
    query GetPostDetails( $slug : String!, $categories : [String!]){
      posts(
        where : { slug_not :  $slug ,AND {categories_some { slug_in : $categories}}}
        last: 7
        ){
          title
          featuredImage{
            url
          }
          createdAt
          slug
        }
    }`
    const result = await request(graphQlApi , query);

  return result.posts;
}

export const getRecentPostsCard = async()=>{
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy : createdAt_ASC
      ){
        id
        excerpt
        title
        featuredImage{
          id
          url
        }
        createdAt
        slug
        inPostPhoto {
          url
        }
      }
    }`
    const result = await request(graphQlApi , query);

  return result.posts;
}


export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              name
              id
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphQlApi , query, { slug });

  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphQlApi , query);

  return result.categories;
};

export const getCategoryDisplay = async () => {
  const query = gql`
    query GetCategoryDisplay{
      categories {
        id
        name
        slug
        photo{
          url
          id
        }
        post {
          excerpt
          id
          slug
          title
        }
      }
    }`
  const result = await request(graphQlApi, query);

  return result.categories;
}