"use client";
import { useEffect, useState } from "react";
import { shipments } from "../mocks/data/shipmentData";
import { Shipment } from "../types/Shipment.types";
import styles from "./page.module.css";
import ShipmentResults from "./ShipmentResults";

async function getSearchResults() {
  const response = await fetch("http://localhost:3001/search");
  const results = await response.json();
  return results;
}

export default function Home() {
  const [search, setSearch] = useState("");
  // const [shipments, setShipments] = useState<Shipment[]>([]);

  // useEffect(() => {
  //   async function fetchSearchResults() {
  //     setTimeout(async () => {
  //       const results = await getSearchResults();
  //       setShipments(results);
  //     }, 1000);
  //     debugger;
  //   }
  //   fetchSearchResults();
  // });

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
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      {renderResults()}
    </div>
  );
}
