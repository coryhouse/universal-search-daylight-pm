import "./globals.css";

type SearchResult = {
  proNumber: string;
  weight: number;
  pallets: number;
  pieces: number;
  pickupDate: string;
  serviceDate: string;
  shipmentTags: Array<string>;
  status: string;
};

const searchResults: SearchResult[] = [
  {
    proNumber: "123456789",
    weight: 100,
    pallets: 1,
    pieces: 1,
    pickupDate: "2021-01-01",
    serviceDate: "2021-01-01",
    shipmentTags: ["tag1", "tag2"],
    status: "status",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function renderResults(result: SearchResult) {
    return <div key={result.proNumber}>{result.proNumber}</div>;
  }

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>
          <input type="search" />
          {searchResults.map(renderResults)}
        </div>
        {children}
      </body>
    </html>
  );
}
