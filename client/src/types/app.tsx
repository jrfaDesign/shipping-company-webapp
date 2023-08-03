export interface User {
  _id: string;
  accessToken: string;
  admin?: boolean;
  name: string;
  lastName: string;
  email: string;
}

export interface Orders {
  _id: string;
  shipper: {
    _id: string;
    name: string;
  };
  deliveryStatus: "Completed" | "Cancelled" | "On the road";
  requestedDate: Date | string;
  deliveryDate: Date | string;
  weight: number;
  client: {
    name: string;
    contact: string;
    email?: string;
    deliveryAddress: string;
    state: string;
    region: string;
    zip: string;
  };
}

export interface RegisteredUser {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  contact: string;
  company: string;
}

export interface RegistedComapny {
  _id: string;
  name: string;
  email: string;
  contact: string;
  address: string;
  state: string;
  zip: string;
  allOrder: [];
}

export interface KeyToLabel {
  [key: string]: string;
}
