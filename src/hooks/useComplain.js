import { useState, useEffect } from "react";
import { createdComplain } from "../services/requests/complain";

export default function useComplain() {
  const [complain, setComplain] = useState(null);

  const createComplain = async (data) => {
    const complain = await createdComplain(data);
    return complain;
  };

  return complain;
}
