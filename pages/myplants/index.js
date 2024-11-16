import styled from "styled-components";
import PlantCard from "@/components/PlantCard";
import BtnBackLink from "@/components/BtnBackLink";

const StyledPlantList = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function MyPlants({ plants, onToggleBookmark }) {
  const bookmarkedPlants = plants.filter((plant) => plant.isBookmarked);

  return (
    <>
      <BtnBackLink />
      <h2>My Plants</h2>
      {bookmarkedPlants.length === 0 && (
        <p>Unfortunately, you have not yet added any plants as favourites.</p>
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
