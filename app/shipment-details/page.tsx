"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getShipments } from "../../services/shipmentsService";
import { Shipment } from "../../types/Shipment.types";

export default function ShipmentDetails() {
  const searchParams = useSearchParams();
  const [shipment, setShipment] = useState<Shipment | null>(null);

  const proNumbers = searchParams.get("proNumbers");
  if (!proNumbers) throw new Error("No proNumbers provided");
  const proNumbersArray = proNumbers.split(",");
  const currentProNumber = proNumbersArray[0];

  useEffect(() => {
    async function fetchSearchResults() {
      // By convention, display the first shipment in the URL.
      const res = await getShipments(currentProNumber);
      setShipment(res[0]);
    }
    fetchSearchResults();
    // The empty dependency array [] means this effect will only run once
  }, [currentProNumber]);

  return (
    <>
      <ul>
        {proNumbersArray.map((proNumber) => (
          <li key={proNumber}>
            <button>{proNumber}</button>
          </li>
        ))}
      </ul>

      {shipment && (
        <>
          <h1>PRO #{shipment.proNumber}</h1>
          <h2>Shipment Details</h2>
          Total Pieces: {shipment.pieces}
        </>
      )}
    </>
  );
}
