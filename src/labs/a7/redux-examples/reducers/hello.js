// Notice that we could have stored the data {message: 'Hello World'} into a static JSON file,
// but the point here is to learn how data can be shared across multiple components,
// and how each can interact with the data like reading and writing to it.

// store the data and then it will be able to share with global
const hello = () => ({message: 'Hello World'});
export default hello;