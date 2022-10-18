import { useState, useEffect } from "react";
import { loadOrder } from "./../services/repositories/order";

export default function useOrder() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const retorno = loadOrder();
    setOrder(retorno);
  }, []);

  return order;
}
