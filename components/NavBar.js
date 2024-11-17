import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: var(--bg-navbar);
  z-index: 10;
`;

const StyledNavLink = styled(Link)`
  /* padding: 0 30px; */
`;

export default function NavBar() {
  return (
    <StyledNav>
      <StyledNavLink href="/">
        <Image
          src="/icons/home.svg"
          alt="Icon steering wheel"
          width="35"
          height="35"
          optimized
        />
      </StyledNavLink>
      <StyledNavLink href="/myplants">
        <Image
          src="/icons/seedling-solid-nav.svg"
          alt="Icon bookmarked"
          width="35"
          height="35"
          optimized
        />
      </StyledNavLink>
      <StyledNavLink href="/newplant">
        <Image
          src="/icons/plus-solid.svg"
          alt="Icon bookmarked"
          width="35"
          height="35"
          optimized
        />
      </StyledNavLink>
    </StyledNav>
  );
}
