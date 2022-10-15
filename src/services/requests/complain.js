import api from "../api";

export async function createdComplain(complain) {
  try {
    const resultado = await api.post(`/complains/createComplain`, complain);
    return resultado.data;
  } catch (error) {
    console.log(error);
    alert("Ops, aconteceu algo erro");
  }
}
