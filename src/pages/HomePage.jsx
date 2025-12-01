import Carousel from "@/components/Carousel";
import CarouselPromoter from "@/features/promotion/CarouselPromoter";
import PromotionArea from "@/features/promotion/PromotionArea";
import { getPokemons } from "@/services/apiCabins";
import Loader from "@/ui/Loader";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import styles from "./HomePage.module.scss";
function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const [editingID, setEditingID] = useState(null);

  const {
    isLoading,
    data: cabins = [], // ← default to empty array
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getPokemons,
  });

  const queryClient = useQueryClient();

  const slides = [
    "akin-cakiner-9cIkK-hLD9k-unsplash.jpg",
    "connor-dickson-A1I8g8NccNg-unsplash.jpg",
    "halfcut-pokemon-WC_Qjaryv4Y-unsplash.jpg",
    "guillermo-diaz-fs6zYhHyzvI-unsplash.jpg",
  ];

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading cabins: {error.message}</div>;

  return (
    <div className={`${styles.container} my-6`}>
      {/* Slider */}
      <Carousel isLoading={isLoading} error={error} />
      <CarouselPromoter />
      <PromotionArea
        image={
          "https://ntcfaqkdafuaxfxoweab.supabase.co/storage/v1/object/public/cabin-images/romeo-a-d_SOU5LS-ZY-u.jpg"
        }
        text={"test test test"}
      />
    </div>
  );
}
export default HomePage;
