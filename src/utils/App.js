import axios from "axios";

export default axios.create({
  baseURL: "https://api.devrudolf.com",
  responseType: "json"
});