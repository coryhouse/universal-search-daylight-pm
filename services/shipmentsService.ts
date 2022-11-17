// Centralizing fetch calls here so they can be reused and implemented consistently.
import { Shipment } from "../types/Shipment.types";

export async function getShipments(search: string) {
  const res = await fetch("/api/shipments?search=" + search);
  if (!res.ok) throw res;
  // Consider validating the JSON returned at runtime via Zod or similar.
  return res.json() as Promise<Shipment[]>;
}
