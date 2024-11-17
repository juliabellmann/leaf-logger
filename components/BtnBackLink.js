import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const BackLinkWrapper = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 10;

  width: var(--width-btn);
  height: var(--height-btn);
  color: var(--accentcolor);
  background-color: white;
  border-radius: 50px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(21, 53, 43);
  `;

const StyledImage = styled(Image)`
    color: rgb(21, 53, 43);
`;


export default function BtnBackLink() {
  return (
    <BackLinkWrapper>
      <Link href="/" aria-label="Link to the Homepage">
          <StyledImage
            src={"/icons/reply-solid.svg"}
            alt={"Link to the Homepage"}
            width="30"
            height="30"
            optimized
            />
      </Link>
    </BackLinkWrapper>
  );
}
