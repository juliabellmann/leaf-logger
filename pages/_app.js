import RootLayout from "@/components/RootLayout";
import GlobalStyle from "../styles";
import initialPlants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });

  function handleCreatePlant(newPlant) {
    const plantWithId = { id: uid(), ...newPlant };
    setPlants([plantWithId, ...plants]);
  }

  function handleToggleBookmark(plantId) {
    setPlants(
      plants.map((plantData) =>
        plantData.id === plantId
          ? { ...plantData, isBookmarked: !plantData.isBookmarked }
          : plantData
      )
    );
  }

  function handleDeletePlant(plantId) {
    setPlants(plants.filter((plant) => plant.id !== plantId));
    router.push("/");
  }

  function handleEditPlant(plantId, updatedPlant) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId ? { ...plant, ...updatedPlant } : plant
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <RootLayout>
        <Component
          {...pageProps}
          plants={plants}
          onCreatePlant={handleCreatePlant}
          onToggleBookmark={handleToggleBookmark}
          onDeletePlant={handleDeletePlant}
          onEditPlant={handleEditPlant}
        />
      </RootLayout>
    </>
  );
}


