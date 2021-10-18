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
};

export default ArticleAPI;
