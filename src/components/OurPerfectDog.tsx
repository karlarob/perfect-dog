import React, { ChangeEvent, useState } from "react";
import { useBreed } from "../hooks/useBreed";
import {
  GlobeIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
} from "@heroicons/react/outline";

const OurPerfectDog = () => {
  const { breed, setBreed } = useBreed();
  const [selectedTemp, setSelectedTemp] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<number[]>([]);
  const [handleAction, setHandleAction] = useState(0);
  const temperament: string[] = [
    "Active",
    "Fearless",
    "Adaptable",
    "Adventurous",
    "Affectionate",
    "Agile",
    "Alert",
    "Aloof",
    "Assertive",
    "Attentive",
    "Bold",
    "Brave",
    "Bright",
    "Calm",
    "Cautious",
    "Cheerful",
    "Clownish",
    "Companionable",
    "Composed",
    "Confident",
    "Courageous",
    "Curious",
    "Determined",
    "Devoted",
    "Dignified",
    "Docile",
    "Dominant",
    "Dutiful",
    "Eager",
    "Easygoing",
    "Energetic",
    "Even Tempered",
    "Excitable",
    "Faithful",
    "Familial",
    "Fearless",
    "Feisty",
    "Fierce",
    "Friendly",
    "Fun-loving",
    "Gentle",
    "Amiable",
    "Good-natured",
    "Good-tempered",
    "Happy",
    "Hardworking",
    "Hardy",
    "Independent",
    "Inquisitive",
    "Intelligent",
    "Joyful",
    "Keen",
    "Lively",
    "Lovable",
    "Loving",
    "Loyal",
    "Obedient",
    "Outgoing",
    "Playful",
    "Powerful",
    "Protective",
    "Kind",
    "Proud",
    "Quick",
    "Rational",
    "Receptive",
    "Refined",
    "Reliable",
    "Reserved",
    "Responsible",
    "Responsive",
    "Rugged",
    "Self-assured",
    "Self-confidence",
    "Sensitive",
    "Spirited",
    "Steady",
    "Strong Willed",
    "Stubborn",
    "Sweet-Tempered",
    "Tenacious",
    "Trainable",
    "Trusting",
    "Watchful",
    "Wild",
    "evoted",
  ];

  const size = [
    { name: "toy", maxSize: 5, minSize: 0 },
    { name: "small", maxSize: 14, minSize: 5 },
    { name: "medium", maxSize: 25, minSize: 14 },
    { name: "large", maxSize: 50, minSize: 25 },
    { name: "gigant", maxSize: 100000, minSize: 50 },
  ];

  const filerByTemperament = () => {
    setBreed(
      breed.filter((item) => {
        let cleanTemperament: string[] = item.temperament
          ? item.temperament.split(", ")
          : [];
        return selectedTemp.some((temperamentItem) =>
          cleanTemperament.includes(temperamentItem)
        );
      })
    );
    setHandleAction(1);
  };

  const filterBySize = () => {
    setBreed(
      breed.filter((item) => {
        let weightPounds = item.weight.metric.split(" - ");
        return (
          parseInt(weightPounds[1]) >= selectedSize[0] &&
          parseInt(weightPounds[1]) <= selectedSize[1]
        );
      })
    );
    setHandleAction(2);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedTemp([...selectedTemp, event.target.value]);
    } else {
      setSelectedTemp(
        selectedTemp.filter((temp) => {
          return temp !== event.target.value;
        })
      );
    }
  };

  const customBkg = {
    backgroundColor: " #ffffff",
    opacity: "1",
    backgroundImage:
      "radial-gradient(#f67600 0.75px, transparent 0.75px), radial-gradient(#f67600 0.75px, #ffffff 0.75px)",
    backgroundPosition: "0 0,15px 15px",
    backgroundSize: " 30px 30px",
  };

  return (
    <div className="text-center font-poppins p-9 h-screen" style={customBkg}>
      <h1 className="font-lobster text-6xl mb-9">Our Perfect Dog</h1>
      <div className="w-5/6 shadow-2xl shadow-black bg-white p-6 m-auto">
        <div
          className={
            (handleAction <= 0 ? "opacity-1" : "opacity-0 hidden ") +
            "transition-all"
          }
        >
          <h2 className="font-bold text-2xl pb-3">
            Which temperament you prefer?
          </h2>
          <div className="grid grid-cols-5 text-justify">
            {temperament.map((item, index) => (
              <label key={index} className="text-xl capitalize">
                <input
                  onChange={onChange}
                  value={item}
                  type="checkbox"
                  className="accent-sky-400 mr-2"
                />
                {item}
              </label>
            ))}
          </div>
          <button
            onClick={filerByTemperament}
            className="bg-violet-600 py-4 px-20 text-white"
          >
            Next
          </button>
        </div>
        <div
          className={
            (handleAction === 1 ? "opacity-1" : "opacity-0 hidden ") +
            "transition-all"
          }
        >
          <h2 className="font-bold text-2xl pb-3">Which size you prefer?</h2>
          <div className="grid grid-cols-5 text-justify">
            {size.map((item, index) => (
              <label
                key={index}
                className="relative text-xl p-9 text-center capitalize"
              >
                <input
                  onChange={() => {
                    setSelectedSize([item.minSize, item.maxSize]);
                  }}
                  value={item.name}
                  type="radio"
                  name="breed-size"
                  className="accent-sky-400 mr-2 absolute top-0 left-0 w-full h-full opacity-0 peer"
                />
                <img
                  src={require(`../assets/svg/${item.name}-breed.svg`)}
                  alt={item.name}
                  className="p-9 border transition-colors peer-checked:border-sky-400"
                />
                {item.name}
              </label>
            ))}
          </div>
          <button
            onClick={filterBySize}
            className="bg-violet-600 py-4 px-20 text-white"
          >
            Next
          </button>
        </div>
        <div
          className={
            (handleAction === 2 ? "opacity-1" : "opacity-0 hidden ") +
            "transition-all"
          }
        >
          <h2 className="font-bold text-2xl pb-3">
            This are the perfect Dogs for you!
          </h2>

          {breed.length > 0 ? (
            <div className="grid grid-cols-5 text-justify">
              {breed.map((item, index) => (
                <div
                  key={index}
                  className="m-4 p-2 border border-sky-400 hover:border-4 transition-all"
                >
                  <h2 className="font-lobster text-xl w-full">{item.name}</h2>
                  <small>Perfect for: {item.bred_for}</small>
                  <img src={item.image.url} alt={item.name} />
                  <div className="flex flex-col">
                    {item.country_code && (
                      <div className="flex flex-row">
                        <GlobeIcon className="fill-violet-600 w-9" />
                        <p className="pl-2">{item.country_code}</p>
                      </div>
                    )}
                    {item.temperament && (
                      <div className="flex flex-row">
                        <EmojiHappyIcon className="fill-violet-600 w-10" />
                        <p className="pl-2 text-left">{item.temperament}</p>
                      </div>
                    )}
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <EmojiSadIcon className="fill-violet-600 w-60 m-auto" />
              <h3>Sorry!!!!!! :( We couldn't find the perfect puppy for you</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurPerfectDog;
