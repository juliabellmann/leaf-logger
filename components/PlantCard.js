import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import BtnBookmark from "./BtnBookmark";

const Card = styled.article`
  position: relative;
  margin-top: 20px;
  height: 55vw;
  width: 90vw;
  border-radius: 15px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  img {
    object-fit: cover;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;

  background: rgb(0, 0, 0);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.603988603988604) 0%,
    rgba(0, 0, 0, 0) 50%
  );
  width: 100%;
  height: 100%;
`;

const CardPlantName = styled.h3`
  padding-left: 20px;
  margin-bottom: 0;
  color: white;
  text-align: left;
`;

const CardBotanicalPlantName = styled.h4`
  padding-left: 20px;
  margin-top: 5px;
  font-size: 14px;
  color: white;
  font-weight: 300;
  text-align: left;
`;

const DetailsLink = styled(Link)`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 0;
  text-decoration: none;
  color: white;
`;

export default function PlantCard({ plant, onToggleBookmark }) {
  return (
    <Card>
      <ImageWrapper>
        <Image
          alt={`Image of ${plant.name}`}
          fill
          src={
            plant.imageUrl ||
            "https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </ImageWrapper>

      <CardText>
        <BtnBookmark
          onToggleBookmark={onToggleBookmark}
          plantId={plant.id}
          isBookmarked={plant.isBookmarked}
        />
        <div>
          <CardPlantName>{plant.name}</CardPlantName>
          <CardBotanicalPlantName>{plant.botanicalName}</CardBotanicalPlantName>
        </div>
        <DetailsLink href={`plant/${plant.id}`}>Details</DetailsLink>
      </CardText>
    </Card>
  );
}