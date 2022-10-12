import moment from "moment";

const formatMoney = (balanceValue) => {  
    const value  = balanceValue || 0
    const formattedBalance = parseFloat(value).toFixed(2)
    const stringFormatted = `R$ ${formattedBalance.replace(",", ".").replace(".", ",")}`;
    return stringFormatted;
  };

const formatDate = (value, format="DD/MM/YYYY") => {
    return moment(value).format(format)
  }

const formatMetric = (obj) => {
    return `${obj.value} ${obj.metric}`
  }

  export default { formatDate, formatMetric, formatMoney };
