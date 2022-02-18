import { useEffect, useState } from "react";
import { Breeds } from "../interfaces/breedInterface";

export const useBreed = () => {
  const [breed, setBreed] = useState<Breeds[]>([]);
  const [cargando] = useState(true);
  const [retry, setRetry] = useState(false);

  const getBreeds = async () => {
    const res = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "6035ed45-8546-4fb8-850f-e2de5b3d0629",
      },
    });
    const data: Breeds[] = await res.json();
    console.log("ll", data);
    setBreed(data);
  };

  useEffect(() => {
    getBreeds();
  }, []);

  return { breed, setBreed, cargando, setRetry, retry };
};
