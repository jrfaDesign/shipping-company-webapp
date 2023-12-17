import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  shipper: {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  deliveryStatus: {
    type: String,
    enum: ["Completed", "Cancelled", "On the road"],
    required: true,
  },
  requestedDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  client: {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: String,
    deliveryAddress: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
  },
});

export const OrdersModel = mongoose.model("orders", OrdersSchema);
