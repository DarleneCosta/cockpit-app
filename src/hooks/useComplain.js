import { useState, useEffect } from "react";
import { createdComplain, loadTypes } from "../services/requests/complain";

export const useComplain= () =>  {
  const [complain, setComplain] = useState(null);

  const createComplain = async (data) => {
    const result = await createdComplain(data);
    setComplain(result)
  };

  return [ complain, createComplain ];
}

export const useTypesComplain = () => {
  
  const [typesComplain, setTypesComplain] = useState([]);

  useEffect(() => {
    const retorno = loadTypes();
    setTypesComplain(retorno);
  }, []);

  return typesComplain;
}

