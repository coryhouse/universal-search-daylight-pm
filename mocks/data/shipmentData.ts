import { Shipment } from "../../types/Shipment.types";

export const shipments: Shipment[] = [
  {
    proNumber: "1239",
    weight: 100,
    pallets: 1,
    pieces: 1,
    pickupDate: "2021-01-01",
    serviceDate: "2021-01-01",
    shipmentTags: ["tag1", "tag2"],
    status: "docked",
  },
  {
    proNumber: "999",
    weight: 200,
    pallets: 12,
    pieces: 11,
    pickupDate: "2021-01-01",
    serviceDate: "2021-01-01",
    shipmentTags: ["tag1", "tag2"],
    status: "enroute",
  },
];
