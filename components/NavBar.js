import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import HomeSvg from "@/assets/icons/home.svg";
import MyPlantsSvg from "@/assets/icons/seedling-solid-nav.svg";
import NewPlantsSvg from "@/assets/icons/plus-solid.svg";

export default function NavBar() {
  const { pathname } = useRouter();

  const isActive = true;

  return (
    <StyledNav>

      <StyledNavLink href="/myplants" $isactive={pathname === "/myplants"}>
        <MyPlantsSvg />
      </StyledNavLink>

      <StyledNavLink href="/" $isactive={pathname === "/"}>
        <HomeSvg />
      </StyledNavLink>

      <StyledNavLink href="/newplant" $isactive={pathname === "/newplant"}>
      <NewPlantsSvg />
      </StyledNavLink>

    </StyledNav>
  );
}

// ----- Styled Components -----

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;

  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;

  height: var(--nav-height);

  background-color: var(--bg-navbar);
`;

const StyledNavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  padding: 5px;

  border: ${({ $isactive }) => $isactive ? "3px solid var(--bg-color-btn)" : "3px solid var(--accent-color)"};
`;