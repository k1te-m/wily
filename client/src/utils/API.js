import axios from "axios";

export default {
  getPosts: async () => {
    return await axios.get("/api/posts");
  },
  savePost: async (data) => {
    return await axios.post("/api/posts", data);
  },
};
