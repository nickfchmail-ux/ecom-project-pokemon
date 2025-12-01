function ImageShaper({ url, slogan }) {
  const clipPattern = [
    "[clip-path:polygon(45.43%_9.35%,_56.23%_34.67%,_93.59%_11.31%,_91.51%_87.53%,_27.78%_98.5%,_1.29%_69.03%)]",
    "[clip-path:polygon(38.76%_48.89%,_32.39%_10.48%,_58.82%_0%,_97.01%_17.6%,_83.59%_41.58%,_97.01%_59.65%,_91.51%_87.53%,_27.78%_98.5%,_1.29%_69.03%)]",
    "[clip-path:polygon(10.81%_6.25%,_59.75%_6.25%,_91.05%_26.81%,_100%_77.5%,_3.9%_94.47%,_10.81%_48.37%,_30.79%_33.95%)]",
  ];

  const randomNumber = Math.floor(Math.random() * clipPattern.length);

  return (
    <div className="relative">
      <img
        src={url}
        alt="Pikachu"
        className={`h-[30vh] w-96 object-cover transition-transform duration-700 md:h-[40vh] ${clipPattern.at(randomNumber)}`}
      />
      <div className="absolute top-[3rem] right-[-5rem]">
        <h1 className="font-liberty drop-shadow-neon flex items-baseline gap-2 text-[1.5rem] font-thin text-yellow-300 drop-shadow-lg md:text-[3.2rem]">
          P<span className="animate-flicker translate-y-3 rotate-12">i</span>k a
          <span className="rotate-6">c</span>h u
          <span className="text-black-600 animate-pulse text-2xl drop-shadow-lg md:text-5xl">
            !
          </span>
        </h1>
      </div>
    </div>
  );
}

export default ImageShaper;
