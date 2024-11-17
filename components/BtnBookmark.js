import Image from "next/image";
import styled, { css } from "styled-components";

const StyledToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 20px;
  position: absolute;
  z-index: 2;

`;

const StyledToggleBookmark = styled.button`
  width: var(--width-btn);
  height: var(--height-btn);

  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 0 0 10px 10px;
`;

const StyledBookmarkImg = styled.div`
  position: absolute;
  width: calc( var(--width-btn) - 15px);
  height: calc( var(--height-btn) - 15px);
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
        <StyledBookmarkImg>

          <Image
            src={bookmarkIconSrc}
            alt={bookmarkAltTxt}
            fill
            unoptimized
            />
            </StyledBookmarkImg>
      </StyledToggleBookmark>
    </StyledToggleWrapper>
  );
}
