import "./globals.css";

async function getSearchResults() {
  const response = await fetch("http://localhost:3001/search");
  const results = await response.json();
  return results;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    require("../mocks");
  }

  // const searchResults = await getSearchResults();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
