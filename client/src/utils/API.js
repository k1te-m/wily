import axios from "axios";

export default {
  getPosts: async () => {
    return await axios.get("/api/posts");
  },
  savePost: async (data) => {
    return await axios.post("/api/posts", data);
  },
  getPostsById: async (id) => {
    return await axios.get("/api/posts/" + id);
  },
  getUserByUsername: async (id) => {
    return await axios.get("/api/users/" + id);
  },
  getPostsForFav: async (id) => {
    return await axios.get("/api/posts/fav/" + id);
  },
};
