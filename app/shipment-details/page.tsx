"use client";
import { useSearchParams } from "next/navigation";

export default function ShipmentDetails() {
  const searchParams = useSearchParams();

  const proNumbers = searchParams.get("proNumbers");
  if (!proNumbers) throw new Error("No proNumbers provided");
  const proNumbersArray = proNumbers.split(",");

  return (
    <>
      <h1>Shipment Details</h1>
      <ul>
        {proNumbersArray.map((proNumber) => (
          <li key={proNumber}>
            <button>{proNumber}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
