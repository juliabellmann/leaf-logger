import styled from "styled-components";
import PlantCard from "@/components/PlantCard";
import BtnBackLink from "@/components/BtnBackLink";
import Image from "next/image";

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

export default function MyPlants({ plants, onToggleBookmark }) {
  const bookmarkedPlants = plants.filter((plant) => plant.isBookmarked);

  return (
    <>
      <BtnBackLink />
      <h2>My Plants</h2>
      {bookmarkedPlants.length === 0 && (
        <>
          <p>Unfortunately, you have not yet added any plants as favourites.</p>
          <Image
            src={"/icons/bonsai-plant-svgrepo-com.svg"}
            alt="Icon dead plant"
            width="50"
            height="50"
          />
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
