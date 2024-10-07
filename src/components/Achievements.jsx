import React, { useEffect, useState } from "react";

const Achievements = () => {
  const achievementData = [
    {
      id: "item2",
      image: "/src/assets/Carousel/Ties.JPG",
      title: " Covai Ties-2024",
      description: "Winner of the Cricket Tournament."
    },
    {
      id: "item1",
      image: "/src/assets/Carousel/Alumni.JPG",
      title: "3rd SREC Alumni Cricket Trophy-2023",
      description: "Secured Fourth place in the cricket tournament."
    },
    {
      id: "item4",
      image: "/src/assets/Carousel/Photographyrunner.JPG",
      title: "DSLR Photography Event in BLITZ 2021",
      description: "Won Third place in the Photography Competition."
    },
    {
      id: "item3",
      image: "/src/assets/Carousel/Zone2022.JPEG",
      title: "Anna University -Zonal 2022-23",
      description: "Secured Third place in the cricket tournament."
    },
    {
     id: "item5",
     image: "/src/assets/Carousel/Zone2024.JPEG",  // Update this with your image path
     title: "Anna University -Zonal 2024-25",
     description: "Secured Third place in the Cricket Tournament."
   },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === achievementData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [achievementData.length]);

  return (
    <div className="w-full">
      <h2 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-m">
          ACHIEVEMENTS
        </span>
      </h2>
      <div className="carousel w-full h-[500px] overflow-hidden"> {/* Adjust height */}
        {achievementData.map((achievement, index) => (
          <div
            key={achievement.id}
            className={`carousel-item w-full relative group ${
              currentIndex === index ? "block" : "hidden"
            }`}
          >
            <img
              src={achievement.image}
              className="w-full h-full object-contain" // Adjusted to "object-contain"
              alt={achievement.title}
            />
            {/* Text Overlay on Hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 p-4 rounded-md text-center">
                <h3 className="text-lg font-bold">{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex w-full justify-center gap-2 py-2">
        {achievementData.map((achievement, index) => (
          <a
            href={`#${achievement.id}`}
            key={achievement.id}
            className="btn btn-xs"
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

 