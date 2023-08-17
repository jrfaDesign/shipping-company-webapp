import { KeyToLabel } from "~/types/app";

interface TableColumn {
  label: string;
  tableForAdmin?: boolean;
  width?: string;
}

export interface TableHeaders {
  orders?: TableColumn[];
  users?: TableColumn[];
  shippers?: TableColumn[];
}

export const TABLE_HEADER: TableHeaders = {
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
    { label: "Empresa", width: "300px" }
  ],

  shippers: [
    { label: "Id" },
    { label: "Nome" },
    { label: "Encomendas" },
    { label: "Contacto" },
    { label: "Email", width: "350px" },
    { label: "Morada", width: "450px" },
    { label: "Código Postal" },
    { label: "Concelho" }
  ]
};

// TODO: change the index.ts to use this
export const STATUS_CLASS: KeyToLabel = {
  Completed: "completed",
  Cancelled: "cancelled",
  "On the road": "on-the-road"
};

export const STATUS_LABEL: KeyToLabel = {
  Completed: "Completa",
  Cancelled: "Cancelada",
  "On the road": "Em distribuição"
};

// TODO: add exception if no sort function is to be enable

export const KEY_TO_LABEL: KeyToLabel = {
  "Data do Pedido": "requestedDate",
  "Estado de Entrega": "deliveryStatus",
  "Data de Entrega": "deliveryDate",
  Peso: "weight",
  "Cliente Destino": "client.name",
  Morada: "client.deliveryAddress",
  "Código Postal": "client.zip",
  Cidade: "client.state",
  Nome: "name",
  Empresa: "company",
  Encomendas: "orders",
  Concelho: "state"
};

export const SORT_EXCEPTIONS = [
  "deliveryStatus",
  "client.deliveryAddress",
  "state",
  "address",
  "zip",
  "client.zip",
  undefined
];
