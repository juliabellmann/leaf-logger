import Head from "next/head";
import NavBar from "./NavBar";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Leaf Logger</title>
      </Head>
      <header>
        <h1>Leaf Logger</h1>
      </header>
      <main>{children}</main>
      <NavBar />
    </>
  );
}
