import { callAuth } from "../helper/apiHelper";

export const createBuilding = async (request) => {
  try {
    const response = await callAuth(
      "/api/building/create-building",
      "POST",
      request
    );
    return response;
  } catch (error) {
    throw error;
  }
};
