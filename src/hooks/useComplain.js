import { useState, useEffect } from "react";
import { create } from "../services/loadData";

export default function useComplain() {
  const [order, setOrder] = useState(null);

  return order;
}
