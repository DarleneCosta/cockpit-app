import moment from "moment";

const formatMoney = (balanceValue) => {  
    const formattedBalance = parseFloat(balanceValue).toFixed(2)
    const stringFormatted = `R$ ${formattedBalance.replace(",", ".").replace(".", ",")}`;
    return stringFormatted;
  };

  const formatDate = (value, format="DD/MM/YYYY") => {
    return moment(value).format(format)
  }

  export default { formatDate, formatMoney };
