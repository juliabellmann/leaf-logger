import Head from "next/head";
import NavBar from "./NavBar";
import styled from "styled-components";
import Image from "next/image";

const StyledH1 = styled.h1`
  color: var(--accentcolor);
  margin-bottom: 0;
`;
const StyledH4 = styled.h4`
  color: var(--accentcolor);
  margin-top: 0;
`;

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Leaf Logger</title>
      </Head>
      <header>
        <StyledH1>Leaf Logger</StyledH1>
        <Image
          src={"/image/Logo.png"}
          alt="Logo"
          width="70"
          height="70"
        />
        <StyledH4>--- the logbook for your plants ---</StyledH4>
        <hr></hr>
      </header>
      <main>{children}</main>
      <NavBar />
    </>
  );
}
