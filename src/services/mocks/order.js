const order = {
  id: "000123158",
  dateCreated: 1664395482,
  dateUpdated: 1664654682,
  value: 500.6,
  status: "Cancelado",
  delivery: { type: "Correios", value: 0 },
  historic: [
    {
      id: "PED",
      status: "OK",
      describe: "Pedido realizado 28/09/2022",
      dateCreated: 123,
    },
    {
      id: "PAG",
      status: "OK",
      describe: "Pagamento aprovado",
      dateCreated: 123,
    },
    {
      id: "NF",
      status: "NOK",
      describe: "Erro ao Gerar Nota Fiscal",
      dateCreated: 123,
    },
    { id: "ENV", status: "", describe: "Enviado" },
    { id: "SUC", status: "", describe: "Entregue" },
  ],
  items: [
    {
      id: "012574525805",
      name: "Fone de Ouvido Bluetooth, JBS",
      specification: {
        size: { value: "13.2 x 8.5 x 3.5", metric: "cm" },
        color: "Preto",
        weight: { value: "60", metric: "gm" },
      },
      qtd: 1,
      unitaryValue: 240,
      amount: 240,
      imageUrl:
        "https://m.media-amazon.com/images/I/51Z7AxeZKKL._AC_SX679_.jpg",
    },
    {
      id: "545454852722",
      name: "Filtro de Linha PowerLine com 12",
      specification: {
        size: { value: "46.5 x 4.8 x 4.5", metric: "cm" },
        color: "Branco",
        weight: { value: "700", metric: "gm" },
      },
      qtd: 2,
      unitaryValue: 130.3,
      amount: 260.6,
      imageUrl:
        "https://m.media-amazon.com/images/I/71aF7j4PuQL._AC_SL1500_.jpg",
    },
  ],
  payments: [
    {
      id: "15454548451",
      type: { id: "pix", describe: "PIX" },
      value: 500.6,
      dateCreated: 1664395482,
      dateUpdated: 1664395486,
    },
  ],
  adresses: [{
    type: 'cobrança',
    nameResponsible: "Fernanda Correia",
    city: "São Paulo",
    uf: "SP",
    cep: "08375000",
    number: "1522",
    describe: "Avenida Ragueb Chohfi, Jardim Três Marias",
    complement: 'apt. 265',
    contact: { phoneNumber: "5513968942132", name: "Annabel Correia" },
  },{
    type: 'entrega',
    nameResponsible: "Annabel Correia",
    city: "São Paulo",
    uf: "SP",
    cep: "69010080",
    number: "52",
    describe: "Rua 24 de Maio, Centro",
    complement: null,
    contact: { phoneNumber: "5513968942132", name: "Annabel Correia" },
  }]
};

export default order;
