import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    'x-access-key': 'abc123abc123',
  }
});