import { useRouter } from "next/navigation";
import { useState } from "react";
import { Shipment } from "../types/Shipment.types";

type ShipmentResults = {
  matchingShipments: Shipment[];
};

export default function ShipmentResults({
  matchingShipments,
}: ShipmentResults) {
  const [selectedShipments, setSelectedShipments] = useState<Shipment[]>([]);
  const router = useRouter();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                id="select-all"
                onChange={(event) =>
                  setSelectedShipments(
                    event.target.checked ? matchingShipments : []
                  )
                }
              />{" "}
              <label htmlFor="select-all" hidden>
                Select all
              </label>
            </th>
            <th>Pro Number</th>
            <th>Plts | Pcs</th>
            <th>Weight</th>
            <th>Pick Up Date</th>
            <th>Service Date</th>
            <th>Shipment Tags</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {matchingShipments.map((match) => (
            <tr key={match.proNumber}>
              <td>
                <input
                  type="checkbox"
                  id={match.proNumber + "-checkbox"}
                  checked={selectedShipments.some(
                    (s) => s.proNumber === match.proNumber
                  )}
                  onChange={(event) => {
                    setSelectedShipments((prev) =>
                      event.target.checked
                        ? [...prev, match]
                        : prev.filter((s) => s.proNumber !== match.proNumber)
                    );
                  }}
                />
                <label htmlFor={match.proNumber + "-checkbox"} hidden>
                  Select {match.proNumber}
                </label>
              </td>
              <td>{match.proNumber}</td>
              <td>{match.pallets}</td>
              <td>{match.weight}</td>
              <td>{match.pickupDate}</td>
              <td>{match.serviceDate}</td>
              <td>{match.shipmentTags}</td>
              <td>{match.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={() => {
          if (selectedShipments.length === 0) {
            alert("Select at least one shipment");
            return;
          }

          router.push(
            `/shipment-details?proNumbers=${selectedShipments
              .map((s) => s.proNumber)
              .join(",")}`
          );
        }}
      >
        VIEW SHIPMENT DETAILS
      </button>
    </>
  );
}
