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
  requestedClient: string;
  deliveryStatus: "Completed" | "Cancelled" | "On the road";
  requestedDate: Date;
  deliveryDate: Date;
  deliveryAddress: string;
  state: string;
  zip: string;
  weight: number;
}
