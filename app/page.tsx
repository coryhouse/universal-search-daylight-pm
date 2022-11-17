"use client";
import { useState } from "react";
import { Shipment } from "../types/Shipment.types";
import styles from "./page.module.css";
import ShipmentResults from "./ShipmentResults";

export default function Home() {
  const [search, setSearch] = useState("");
  const [shipments, setShipments] = useState<Shipment[]>([]);

  // Keeping here merely for reference of how to do a fetch on initial load on the client.
  // useEffect(() => {
  //   async function fetchSearchResults() {
  //     const response = await fetch("/api/shipments");
  //     const results = await response.json();
  //     setShipments(results);
  //   }
  //   fetchSearchResults();
  //   // The empty dependency array [] means this effect will only run once
  // }, []);

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
        type="search"
        onChange={async (event) => {
          setSearch(event.target.value);
          // NOTE: Must use event.target.value here because setSearch is async, and thus, not updated yet.
          const response = await fetch(
            "/api/shipments?search=" + event.target.value
          );
          const results = await response.json();
          setShipments(results);
        }}
        value={search}
      />
      {renderResults()}
    </div>
  );
}
