import Image from "next/image";
import styled, { css } from "styled-components";

const StyledToggleBookmark = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 0 0 5px 5px;
`;

const StyledToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 20px;
  position: absolute;
  z-index: 2;
`;

export default function BtnBookmark({
  onToggleBookmark,
  plantId,
  isBookmarked,
}) {
  let bookmarkIconSrc = "";
  let bookmarkAltTxt = "";

  if (isBookmarked) {
    bookmarkIconSrc = "/icons/seedling-solid.svg";
    bookmarkAltTxt = "Icon bookmarked";
  } else {
    bookmarkIconSrc = "/icons/seedling-line.svg";
    bookmarkAltTxt = "Icon not bookmarked";
  }

  return (
    <StyledToggleWrapper>
      <StyledToggleBookmark onClick={() => onToggleBookmark(plantId)}>
        <Image
          src={bookmarkIconSrc}
          alt={bookmarkAltTxt}
          width={20}
          height={20}
          unoptimized
        />
      </StyledToggleBookmark>
    </StyledToggleWrapper>
  );
}
