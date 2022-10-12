const order = {
    id:"000123158",
    dateCreated: 1664395482, 
    dateUpdated: 1664654682, 
    value:500.6, 
    status:"Cancelado", 
    delivery: "Correios",
    historic: [
        {id:"PED", status: "OK", describe: "Pedido realizado 28/09/2022", dateCreated:123 },
        {id:"PAG", status: "OK", describe: "Pagamento aprovado", dateCreated:123 },
        {id:"NF", status: "NOK", describe: "Erro ao Gerar Nota Fiscal", dateCreated:123 }, 
        {id:"ENV", status: "", describe: "Enviado" },
        {id:"SUC", status: "", describe: "Entregue" }
    ],
    items: [
        {   
            id:"1257452585",
            name: "Teste 1", 
            specification: {size: {height:30, width:50, metric: 'cm' }, color: 'Black', weight:{value:'350',  metric: 'gm'} },
            qtd: 4,
            unitaryValue: 60,
            amount: 240
        }
    ]
}

export default order
