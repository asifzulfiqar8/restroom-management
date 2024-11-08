import { callAuth } from "../helper/apiHelper";

export const addSensor = async (request) => {
  try {
    const response = await callAuth("/api/sensor/create", "POST", request);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getAllSensors = async () => {
  try {
    const data = await callAuth("/api/sensor/all", "GET");

    console.log("API response:", data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteSensor = async (sensorId) => {
  try {
    const response = await callAuth(`/api/sensor/single/${sensorId}`, "delete");
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateSensor = async (sensorId, sensorData) => {
  try {
    const response = await callAuth(
      `/api/sensor/single/${sensorId}`,
      "put",
      sensorData
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSensorById = async (sensorId) => {
  try {
    const response = await callAuth(`/api/sensor/single/${sensorId}`, "get");
    return response;
  } catch (error) {
    throw error;
  }
};
