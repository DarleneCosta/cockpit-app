import { useState, useEffect } from "react";
import { loadOrder } from "./../services/repositories/order";

export default function useOrder() {
  const [order, setOrder] = useState(null);

  const getOrder =  () => {
    const result = loadOrder();
    setOrder(result);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return [ order, getOrder];
}
