export const TABLE_HEADER = {
  orders: [
    { label: "Data do Pedido" },
    { label: "Estado de Entrega" },
    { label: "Data de Entrega" },
    { label: "Expeditor ID", tableForAdmin: true },
    { label: "Expeditor Nome", tableForAdmin: true },
    { label: "Peso" },
    { label: "Destinatário" },
    { label: "Contacto" },
    { label: "Email" },
    { label: "Morada" },
    { label: "Código Postal" },
    { label: "Concelho" },
    { label: "Região" }
  ],

  users: [
    { label: "Id" },
    { label: "Nome", width: "300px" },
    { label: "Contacto" },
    { label: "Email", width: "450px" },
    { label: "Morada" },
    { label: "Código Postal" },
    { label: "Concelho" },
    { label: "Região" }
  ]
};

// TODO: change the index.ts to use this
export const STATUS_CLASS = {
  Completed: "completed",
  Cancelled: "cancelled",
  "On the road": "on-the-road"
};

export const STATUS_LABEL = {
  Completed: "Completa",
  Cancelled: "Cancelada",
  "On the road": "Em distribuição"
};

// TODO: add exception if no sort function is to be enable
export const KEY_TO_LABEL = {
  "Data do Pedido": "requestedDate",
  "Estado de Entrega": "deliveryStatus",
  "Data de Entrega": "deliveryDate",
  Peso: "weight",
  "Cliente Destino": "client.name",
  Morada: "client.deliveryAddress",
  "Código Postal": "client.zip",
  Cidade: "client.state",

  Nome: "name",
  Empresa: "company"
};

export const SORT_EXCEPTIONS = ["deliveryStatus", undefined];
