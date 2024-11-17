import Head from "next/head";
import NavBar from "./NavBar";
import styled from "styled-components";
import Image from "next/image";

const StyledH1 = styled.h1`
  color: var(--accentcolor);
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 4vw;
  }
`;
const StyledH4 = styled.h4`
  color: var(--accentcolor);
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    font-size: 2vw;
  }
`;

const StyledHeader = styled.header`
border-bottom: 3px var(--accentcolor) solid;
margin-bottom: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

const StyledLogo = styled.div`

  width: 100px;
  height: 100px;
  position: relative;

  @media (min-width: 768px) {
    width: 10vw;
    height: 10vw;
  }
`;

const StyledImage = styled(Image)`
width: 100%;
height: 100%;
  object-fit: cover;
`;

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Leaf Logger</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <StyledHeader>
        <StyledH1>Leaf Logger</StyledH1>
        <StyledLogo>
          <StyledImage
            src={"/image/Logo.png"}
            alt="Logo"
            fill
            />
        </StyledLogo>
        <StyledH4>--- the logbook for your plants ---</StyledH4>
      </StyledHeader>
      <main>{children}</main>
      <NavBar />
    </>
  );
}
