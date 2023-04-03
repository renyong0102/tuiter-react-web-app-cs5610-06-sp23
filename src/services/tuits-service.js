// import axios
import axios from 'axios';
// location of http services
// const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://tuiter-node-server-app-cs5610-06.onrender.com/api/tuits'
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

// The findTuits function sends an HTTP GET request to TUITS_API using the axios.get() function.
// The request is asynchronous as evidenced by the async and await keywords and the response
// will be set when the request resolves from the server.
export const findTuits  = async ()     => {
    // send HTTP GET request to TUITS_API
    const response = await axios.get(TUITS_API);
    // extract JSON array from response from server
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    // service function accepts tuit to send server
    // send HTTP PUT request appending tuit's ID
    // to URL, and embed tuit object in BODY
    // return tuit update to update in reducer's
    // state's store
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}

