import axios from "axios";

const authToken = localStorage.getItem("token") ?? null;

// Create an instance of axios
const api = authToken
  ? axios.create({
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
  : axios;

export { api as axios };
