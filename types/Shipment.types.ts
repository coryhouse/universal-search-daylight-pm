export type Shipment = {
  proNumber: string;
  weight: number;
  pallets: number;
  pieces: number;
  pickupDate: string;
  serviceDate: string;
  shipmentTags: Array<string>;
  status: string;
};
