import styled from "styled-components";
import PlantCard from "@/components/PlantCard";
import BtnBackLink from "@/components/BtnBackLink";
import PlantForm from "@/components/PlantForm";

const StyledPlantList = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function MyPlants({ plants, onToggleBookmark }) {
  const bookmarkedPlants = plants.filter((plant) => plant.isBookmarked);

  return (
    <>
      <BtnBackLink />
      <h2>Create a new Plant</h2>
      <PlantForm></PlantForm>
    </>
  );
}
