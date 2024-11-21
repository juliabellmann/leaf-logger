import BtnBackLink from "@/components/BtnBackLink";
import PlantForm from "@/components/PlantForm";

export default function MyPlants({ onCreatePlant }) {

  return (
    <>
      <BtnBackLink />

      <h2>Create a new Plant</h2>

      <PlantForm
          onCreatePlant={onCreatePlant} 
          isEditMode={false} 
      />
    </>
  );
}
