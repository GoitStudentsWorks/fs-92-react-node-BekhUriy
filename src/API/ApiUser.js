import {apiServices } from "../API/apiServices";

const token = localStorage.getItem()

export const updateApi = async (updates) => {
  const { data } = await apiServices.put(
    'user',
    updates
  );
  return data;
};