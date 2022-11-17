import { rest } from "msw";
import { shipments } from "./data/shipmentData";

export const handlers = [
  rest.get("http://localhost:3001/search", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(shipments));
  }),
];
