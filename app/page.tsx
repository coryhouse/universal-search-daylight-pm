"use client";
import { useState } from "react";
import { getShipments } from "../services/shipmentsService";
import { Shipment } from "../types/Shipment.types";
import styles from "./page.module.css";
import ShipmentResults from "./ShipmentResults";

export default function Home() {
  const [search, setSearch] = useState("");
  const [shipments, setShipments] = useState<Shipment[]>([]);

  // Deriving state
  const matchingShipments = shipments.filter((shipment) => {
    return shipment.proNumber.includes(search);
  });

  function renderResults() {
    if (!search) return null;

    if (matchingShipments.length > 0) {
      return <ShipmentResults matchingShipments={matchingShipments} />;
    } else {
      return <div>No results found</div>;
    }
  }

  return (
    <div>
      <input
        placeholder="Enter proNumber"
        type="search"
        onChange={async (event) => {
          setSearch(event.target.value);
          if (event.target.value) {
            // NOTE: Must use event.target.value here because setSearch is async, and thus, not updated yet.
            const results = await getShipments(event.target.value);
            setShipments(results);
          } else {
            setShipments([]);
          }
        }}
        value={search}
      />
      {renderResults()}
    </div>
  );
}
