import api from "../api";
import {types} from "./../mocks/complains";

export const createdComplain = async (complain) => {
  try {
    const resultado = await api.post(`/complains/createComplain`, complain);
    return resultado.data;
  } catch (error) {
    console.log(error);
    alert("Ops, aconteceu algo erro");
  }
};


export const loadTypes = () => {
  return types;
};

