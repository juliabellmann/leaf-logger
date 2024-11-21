import styled from "styled-components";
import PlantCard from "@/components/PlantCard";
import BtnBackLink from "@/components/BtnBackLink";
import Image from "next/image";
import NoPlantSvg from "@/assets/icons/bonsai-plant-svgrepo-com.svg";


export default function MyPlants({ plants, onToggleBookmark }) {
  const bookmarkedPlants = plants.filter((plant) => plant.isBookmarked);

  return (
    <>
      <BtnBackLink />

      <h2>My Plants</h2>
      {bookmarkedPlants.length === 0 && (
        <>
        <StyledNoMarkWrapper>
          <p>Unfortunately, you have not yet added any plants as favourites.</p>
          <StyledSvgContainer>
            <NoPlantSvg />
          </StyledSvgContainer>
        </StyledNoMarkWrapper>
        </>
      )}
      {/* FYI: Icon for error message follows after merge */}
      <StyledPlantList>
        {bookmarkedPlants.map((plant) => {
          return (
            <li key={plant.id}>
              <PlantCard plant={plant} onToggleBookmark={onToggleBookmark} />
            </li>
          );
        })}
      </StyledPlantList>
    </>
  );
}

const StyledNoMarkWrapper = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5vh;
`;

const StyledSvgContainer = styled.div`
  width: 40vw;
  height: 40vw;
`;



const StyledPlantList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2vw;
  }
`;