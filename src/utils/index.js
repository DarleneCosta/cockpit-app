import moment from "moment";

const formatDate = (value, format = "DD/MM/YYYY") => {
  return moment.unix(value).format(format);
};

const formatCep = (value) => {
  if (!value) return "";
  const result = `${value.substring(0, 5)}-${value.substring(5)}`;
  return result;
};

const formatMetric = (obj) => {
  return `${obj.value} ${obj.metric}`;
};

const formatMoney = (balanceValue) => {
  const value = balanceValue || 0;
  const formattedBalance = parseFloat(value).toFixed(2);
  const stringFormatted = `R$ ${formattedBalance
    .replace(",", ".")
    .replace(".", ",")}`;
  return stringFormatted;
};

const formatPhone = (value) => {
  if (!value) return "";

  if (value.length === 13)
    return `+${value.substring(0, 2)} (${value.substring(
      2,
      4
    )}) ${value.substring(4, 9)}-${value.substring(9)}`;

  return `+${value.substring(0, 2)} (${value.substring(
    2,
    4
  )}) ${value.substring(4, 8)}-${value.substring(8)}`;
};

const random = () =>{
  return Math.floor(Math.random()* 100000).toString().padStart(8,'0')
}

export default {
  formatCep,
  formatDate,
  formatPhone,
  formatMetric,
  formatMoney,
  random
};
