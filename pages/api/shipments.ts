// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { shipments } from "../../mocks/data/shipmentData";
import { Shipment } from "../../types/Shipment.types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Shipment[]>
) {
  const { search } = req.query;
  if (!search) return res.status(400).json([]);
  const matchingShipments = shipments.filter((shipment) =>
    shipment.proNumber.includes(search as string)
  );
  res.status(200).json(matchingShipments);
}
