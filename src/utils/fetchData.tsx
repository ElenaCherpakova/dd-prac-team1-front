import axios from "axios";

export const register = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  return axios.post(
    "http://localhost:3000/api/v1/auth/register",
    {
      username: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export const login = (email: string, password: string) => {
  return axios.post(
    "http://localhost:3000/api/v1/auth/login",
    {
      email: email,
      password: password
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export const searchWithOpenAI = (search: string) => {
  return axios.post(
    "http://localhost:3000/api/v1/ai-recipe",
    {
      query: search
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
