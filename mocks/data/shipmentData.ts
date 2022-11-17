import { Shipment } from "../../app/layout";

export const shipments: Shipment[] = [
  {
    proNumber: "123",
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
