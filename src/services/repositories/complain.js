import api from "../api";
import { types } from "./../mocks/complains";

export const loadTypes = () => {
  return types;
};

export const createdComplain = async (complain) => {
  if (complain.image) {
    const { url, payload, headers } = createdComplainWithEvidence(complain);
    const {data} =  await sendCreatedComplain(url, payload, headers);
    return data
  }
  const {data} =  await sendCreatedComplain(
    `/complains/createComplain`, 
    complain, {
    "Content-Type": "application/json",
  });
  return data
};

const sendCreatedComplain = async (payload, url, headers) => {
  try {
    const resultado = await api.post(url, payload, {
      headers: headers,
    });
    return resultado.data;
  } catch (error) {
    console.log(error);
    alert("Ops, aconteceu algo erro");
  }
};

const createdComplainWithEvidence = async (data) => {
  const filename = data.image.split("/").pop();

  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : `image`;

  const formData = new FormData();
  formData.append("photo", { uri: localUri, name: filename, type });
  formData.append("type", data.type);
  formData.append("orderId", data.orderId);
  formData.append("titleComplain", data.titleComplain);
  if (describeComplain) {
    formData.append("describeComplain", data.describeComplain);
  }

  return {
    url: "/complains/createComplainWithEvidence",
    payload: formData,
    headers: { "Content-Type": "multipart/form-data" },
  };

};
