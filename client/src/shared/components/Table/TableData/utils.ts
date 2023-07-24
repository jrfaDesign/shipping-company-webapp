export const TABLE_HEADER = {
  orders: [
    { label: "Data do Pedido" },
    { label: "Estado de Entrega" },
    { label: "Data de Entrega" },
    { label: "Peso" },
    { label: "Cliente Destino" },
    { label: "Morada" },
    { label: "Código Postal" },
    { label: "Cidade" }
  ],

  users: [
    { label: "Id" },
    { label: "Nome", width: "300px" },
    { label: "Empresa", width: "350px" },
    { label: "Contacto" },
    { label: "Email", width: "450px" }
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
  "Cliente Destino": "requestedClient",
  Morada: "deliveryAddress",
  "Código Postal": "zip",
  Cidade: "state",
  Nome: "name",
  Empresa: "company",
  Contacto: "contact",
  Email: "email"
};
