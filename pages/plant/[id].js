import Image from "next/image";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import BtnBackLink from "@/components/BtnBackLink";
import { useState } from "react";
import { StyledButton } from "@/components/StyledButton";
import PlantForm from "@/components/PlantForm";

const StyledSeasonList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IconsContainer = styled.article`
  display: flex;
  justify-content: space-around;
  width: 275px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBorder = styled.article`
  position: relative;
  margin-top: 20px;
  height: 250px;
  width: 325px;
  border-radius: 15px;
  overflow: hidden;
  margin: auto;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${css`
    p {
      width: 100%;
    }

    button {
      margin: 10px;
    }
  `}
`;

const StyledEditButton = styled.button`
  border-style: none;
  border-radius: 50px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 40px;
  top: 70px;
  background-color: white;
`;

const StyledBookmarkImg = styled.div`
  position: absolute;
  width: calc( var(--width-btn) - 15px);
  height: calc( var(--height-btn) - 15px);
`;

const StyledH3 = styled.h3`
  margin: 0;
`;


const StyledDescription = styled.p`
  width: 300px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;


export default function PlantDetails({ plants, onDeletePlant, onCreatePlant, onEditPlant }) {
  const [isDeleteOption, setIsDeleteOption] = useState(false);
  const [toggleButtonName, setToggleButtonName] = useState("Delete");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return <div>Loading...</div>;

  const plantData = plants ? plants.find((plant) => plant.id === id) : null;

  if (!plantData) return <div>No data available</div>;

  let waterIconSrc = "";

  const waterNeed = plantData.waterNeed;
  if (waterNeed === "High") {
    waterIconSrc = "/icons/water-high.svg";
  } else if (waterNeed === "Medium") {
    waterIconSrc = "/icons/water-med.svg";
  } else if (waterNeed === "Low") {
    waterIconSrc = "/icons/water-low.svg";
  }

  let lightIconSrc = "";

  const lightNeed = plantData.lightNeed;

  if (lightNeed === "Full Sun") {
    lightIconSrc = "/icons/sun-full.svg";
  } else if (lightNeed === "Partial Shade") {
    lightIconSrc = "/icons/shade-partial.svg";
  } else if (lightNeed === "Full Shade") {
    lightIconSrc = "/icons/shade-full.svg";
  }

  function toggleFormVisibility() {
    setIsFormVisible((prevState) => !prevState);
  }

  function toggleDeleteOption() {
    setIsDeleteOption((prevState) => !prevState);

    if (toggleButtonName === "Delete") {
      setToggleButtonName("Cancel");
    } else {
      setToggleButtonName("Delete");
    }
  }
  
  function handleEdit(updatedPlant) {
    onEditPlant(plantData.id, updatedPlant);
  }

  function handleCancel() {
    setIsFormVisible(false);
  }

  return (
    <>
      <BtnBackLink />

      
      <StyledEditButton onClick={toggleFormVisibility}>
        <StyledBookmarkImg>

        <Image
              src={"/icons/pencil-solid.svg"}
              alt="Icon of a dead plant"
              fill
              unoptimized
              />
        </StyledBookmarkImg>
      </StyledEditButton>
      {isFormVisible && <>
      <PlantForm 
        onCreatePlant={onCreatePlant} 
        onEditPlant={handleEdit} 
        onCancel={handleCancel}
        isFormVisible={isFormVisible}
        isEditMode={true} 
        initialData={plantData}
      />
      </>
      }
      
      <h2>{plantData.name}</h2>
      <StyledH3>{plantData.botanicalName}</StyledH3>
      <ImageBorder>
        <StyledImage
          src={plantData.imageUrl ||
            "https://images.unsplash.com/photo-1678897482043-31388fbe7dac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNlZWRsaW5nfGVufDB8fDB8fHww"
          }
          alt={`Image of ${plantData.name}`}
          fill
        />
      </ImageBorder>
      <StyledDescription>{plantData.description}</StyledDescription>

      <IconsContainer>
        <IconContainer>
          <Image
            unoptimized
            alt={"Icon of a drop"}
            src={waterIconSrc}
            width={30}
            height={30}
          />
          <p>{plantData.waterNeed}</p>
        </IconContainer>

        <IconContainer>
          <Image
            unoptimized
            alt={"Icon of a sun"}
            src={lightIconSrc}
            width={30}
            height={30}
          />
          <p>{plantData.lightNeed}</p>
        </IconContainer>

        <IconContainer>
          <Image
            unoptimized
            alt={"Icon of a fertiliser"}
            src={"/icons/fertilizer.svg"}
            width={30}
            height={30}
          />
          <StyledSeasonList>
            {plantData.fertilizerSeason.map((season) => {
              return <li key={season}>{season}</li>;
            })}
          </StyledSeasonList>
        </IconContainer>
      </IconsContainer>
      {/* Styling folgt nach Merge*/}
      <StyledButtonContainer>
        {isDeleteOption && (
          <>
            <p>Do you really want to delete the plant?</p>
            <StyledButton $variant="delete" onClick={() => onDeletePlant(id)}>
              Delete
            </StyledButton>
          </>
        )}
        <StyledButton onClick={toggleDeleteOption}>
          {toggleButtonName} 
        </StyledButton>
      </StyledButtonContainer>
    </>
  );
}
