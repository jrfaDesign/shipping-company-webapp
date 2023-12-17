import express from "express";

import { OrdersModel } from "../models/Orders.js";
import { validateToken } from "../utils.js";

const router = express.Router();

router.get("/orders", async (req, res) => {
  try {
    const startDate = new Date(req.query.startDate); // Parse the string to a Date object
    const endDate = new Date(req.query.endDate); // Parse the string to a Date object

    // Set the time portion to start of the day for startDate
    startDate.setUTCHours(0, 0, 0, 0);

    // Set the time portion to end of the day for endDate
    endDate.setUTCHours(23, 59, 59, 999);

    const response = await OrdersModel.find();

    const filteredResponse = response.filter(item => {
      const requestedDate = new Date(item.requestedDate);
      return requestedDate >= startDate && requestedDate <= endDate;
    });

    res.status(200).json(filteredResponse);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { router as ordersRouter };
