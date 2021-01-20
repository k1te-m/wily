import axios from "axios";

export default {
  getPosts: async () => {
    await axios.get("/api/posts");
  },
  savePost: async (data) => {
    await axios.post("/api/posts", data);
  },
};
