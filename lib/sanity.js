import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'u5i352de',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skWymHxMOHHbiG4qv7RlMYkCNmmg17gWuYvNbvLINl7F9KEWHkSgLpBDUcwWstVJ10lJATC96YabiKTxRmY5oYnRVXWn1qD2F7oWeOeKnXcdqFKC8XFxxrbSWWFQo3IJIITQYVS5256Fibx8BTfMS3PaQHOZGTeKeUeFD0QWF5IT4c7IxR55', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})
