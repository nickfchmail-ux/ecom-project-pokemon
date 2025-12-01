import styles from "./CarouselPromoter.module.scss";

function CarouselPromoter() {
  const urls = [
    "https://ntcfaqkdafuaxfxoweab.supabase.co/storage/v1/object/public/cabin-images/pikachu-removebg-preview.png",
    "https://ntcfaqkdafuaxfxoweab.supabase.co/storage/v1/object/public/cabin-images/goas-removebg-preview.png",
    "https://ntcfaqkdafuaxfxoweab.supabase.co/storage/v1/object/public/cabin-images/duck-removebg-preview.png",
    "https://ntcfaqkdafuaxfxoweab.supabase.co/storage/v1/object/public/cabin-images/dragon-removebg-preview.png",
    "https://ntcfaqkdafuaxfxoweab.supabase.co/storage/v1/object/public/cabin-images/cat-removebg-preview.png",
  ];

  return (
    <div className={styles.carousel}>
      <div className={styles.group}>
        <div className={styles.card}>
          <img src={urls.at(0)} />
        </div>

        <div className={styles.card}>
          <img src={urls.at(1)} />
        </div>
        <div className={styles.card}>
          <img src={urls.at(2)} />
        </div>
        <div className={styles.card}>
          <img src={urls.at(3)} />
        </div>
        <div className={styles.card}>
          <img src={urls.at(4)} />
        </div>
      </div>
      <div aria-hidden className={styles.group}>
        <div className={styles.card}>
          <img src={urls.at(0)} />
        </div>

        <div className={styles.card}>
          <img src={urls.at(1)} />
        </div>
        <div className={styles.card}>
          <img src={urls.at(2)} />
        </div>
        <div className={styles.card}>
          <img src={urls.at(3)} />
        </div>
        <div className={styles.card}>
          <img src={urls.at(4)} />
        </div>
      </div>
    </div>
  );
}

export default CarouselPromoter;
