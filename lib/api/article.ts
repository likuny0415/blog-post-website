import axios from "axios";

import { SERVER_BASE_URL } from "../utils/constant";

const ArticleAPI = {
  create: async (authorId, body, title, description) => {
    try {
      const response = await axios({
        method: "post",
        url: `${SERVER_BASE_URL}/article/create`,
        data: {
          authorId,
          body,
          title,
          description,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  find: async (id) => {
    try {
      const response = await axios({
        method: "post",
        url: `${SERVER_BASE_URL}/article/find`,
        data: {
          id,
        },
      });
      return response.data;
    } catch (error) {
      return error.response;
    }
  },
  get: (slug) =>
    axios.get(`${SERVER_BASE_URL}/article/${encodeURIComponent(slug)}`).then(res => res.data),
};

export default ArticleAPI;
