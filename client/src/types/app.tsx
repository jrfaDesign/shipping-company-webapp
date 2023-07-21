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
  _companyId: string;
  requestedClient: string;
  deliveryStatus: "Completed" | "Cancelled" | "On the road";
  requestedDate: Date;
  deliveryDate: Date;
  deliveryAddress: string;
  state: string;
  zip: string;
  weight: number;
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
}
