import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../../config";

export type Superhero = {
  name: string;
  superpower: string;
  humilityScore: number;
};

export const useSuperhero = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  const fetchSuperheroes = async () => {
    try {
      const response = await fetch(`${BASE_URL}/superheroes`);
      const data = await response.json();
      setSuperheroes(data.superheroes);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
  };

  const addSuperhero = useCallback(async (superhero: Superhero) => {
    setSuperheroes((prev) => [...prev, superhero]);

    try {
      await fetch(`${BASE_URL}/superheroes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(superhero),
      });
    } catch (error) {
      // Revert the optimistic update on error, hacky way (comparison by name)
      setSuperheroes((prev) =>
        prev.filter((hero) => hero.name !== superhero.name)
      );
      alert("Failed to add superhero. Please try again.");
    }
  }, []);

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  return { superheroes, addSuperhero };
};
