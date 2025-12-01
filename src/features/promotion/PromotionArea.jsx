import ImageShaper from "@/ui/ImageShaper";

function PromotionArea({ image, text }) {
  return (
    <div className="mx-auto flex w-[85vw] items-center justify-between bg-amber-400">
      <ImageShaper url={image} />
      <h1 className="animate-neon-pulse drop-shadow-neon-pink text-[2rem] font-black tracking-widest text-white uppercase md:text-5xl">
        NEON GLOW
      </h1>
    </div>
  );
}

export default PromotionArea;
