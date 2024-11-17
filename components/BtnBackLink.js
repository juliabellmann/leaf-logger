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
  `;


export default function BtnBackLink() {
  return (
    <BackLinkWrapper>
      <Link href="/" aria-label="Link to the Homepage">
          <Image
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
