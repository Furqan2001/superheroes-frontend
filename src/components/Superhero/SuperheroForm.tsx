import React, { useState } from "react";
import { Superhero } from "./useSuperhero";

export const SuperheroForm: React.FC<{
  addSuperhero: (superhero: Superhero) => void;
}> = ({ addSuperhero }) => {
  const [superhero, setSuperhero] = useState<Superhero>({
    name: "",
    superpower: "",
    humilityScore: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!superhero.name || !superhero.superpower) {
      alert("Please fill in all fields");
      return;
    }

    if (superhero.humilityScore < 1 || superhero.humilityScore > 10) {
      alert("Humility score must be between 1 and 10");
      return;
    }

    addSuperhero(superhero);
    setSuperhero({
      name: "",
      superpower: "",
      humilityScore: 0,
    });
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Add a Superhero
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="text-left block text-lg font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={superhero.name}
            onChange={(e) =>
              setSuperhero({ ...superhero, name: e.target.value })
            }
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="superpower"
            className="text-left block text-lg font-medium text-gray-700"
          >
            Superpower:
          </label>
          <input
            type="text"
            id="superpower"
            value={superhero.superpower}
            onChange={(e) =>
              setSuperhero({ ...superhero, superpower: e.target.value })
            }
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="humilityScore"
            className="text-left block text-lg font-medium text-gray-700"
          >
            Humility Score:
          </label>
          <input
            type="text"
            id="humilityScore"
            value={superhero.humilityScore}
            onChange={(e) =>
              setSuperhero({
                ...superhero,
                humilityScore: parseInt(e.target.value) || 0,
              })
            }
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-12 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200 cursor-pointer"
          >
            Add Superhero
          </button>
        </div>
      </form>
    </div>
  );
};
