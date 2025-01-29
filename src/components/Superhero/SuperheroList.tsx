import { SuperheroForm } from "./SuperheroForm";
import { useSuperhero } from "./useSuperhero";

export const SuperheroList = () => {
  const { superheroes, addSuperhero } = useSuperhero();

  return (
    <div className="space-y-4  container mx-auto px-4 py-8">
      <SuperheroForm addSuperhero={addSuperhero} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {superheroes.map((hero, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{hero.name}</h3>
            <p className="text-gray-600 mb-1">Superpower: {hero.superpower}</p>
            <p className="text-gray-600">
              Humility Score: {hero.humilityScore}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
