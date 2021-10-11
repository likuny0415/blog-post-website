import axios from "axios";

import { SERVER_BASE_URL } from "../utils/constant";

const UserAPI = {
  login: async (email, password) => {
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/user/login`,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  register: async (email, username, password) => {
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/user/register`,
        JSON.stringify({email, username, password}),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      return response;
    } catch (error) {
      return error.response;
    }
  }
};

export default UserAPI;
