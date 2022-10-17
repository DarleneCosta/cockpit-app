import api from "../api";

export const createdComplain = async (complain) => {
  try {
    const resultado = await api.post(`/complains/createComplain`, complain);
    return resultado.data;
  } catch (error) {
    console.log(error);
    alert("Ops, aconteceu algo erro");
  }
};
