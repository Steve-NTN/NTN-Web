export const discussionsBody = `
{
  repository(name: "ntn-web", owner: "anhnghia47") {
    discussions(first: 100) {
      nodes {
        bodyText
        author {
          ... on User {
            id
            email
          }
          login
          avatarUrl
        }
        category {
          id
        }
        number
        createdAt
        id
        lastEditedAt
        title
        publishedAt
        url
      }
    }
  }
}`;

export const discussionsCategoriesBody = `
{
  repository(name: "ntn-web", owner: "anhnghia47") {
    discussionCategories(first: 100) {
      nodes {
        id
        name
      }
    }
  }
}
`;

export const discussionDetail = (blog_id) => `
{
  repository(name: "ntn-web", owner: "anhnghia47") {
    discussion(number: ${blog_id}) {
      author {
        avatarUrl
        login
      }
      bodyHTML
      bodyText
      category {
        id
        name
      }
      comments(first: 100) {
        nodes {
          bodyHTML
          author {
            avatarUrl
            login
          }
          createdAt
          id
        }
      }
      createdAt
      id
      title
      updatedAt
      viewerCanReact
    }
  }
}
`;
