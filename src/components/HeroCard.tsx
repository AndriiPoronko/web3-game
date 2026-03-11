import type { Hero } from "../types/hero";

type HeroCardProps = {
  characterData: Hero;
};

function HeroCard({ characterData }: HeroCardProps) {
  return (
    <div>
      <h2>name: {characterData.name}</h2>
      <p>level: {characterData.level}</p>
      <p>profession: {characterData.profession}</p>

      <div className="relative w-full h-8 bg-slate-900 rounded-full overflow-hidden border border-slate-400">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{
            width: `${(characterData.healthPoints / characterData.healthPointsMax) * 100}%`,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center px-2.5">
          <span className="text-white text-sm font-bold drop-shadow-md">
            Health: {characterData.healthPoints} /{" "}
            {characterData.healthPointsMax}
          </span>
        </div>
      </div>

      <div className="relative w-full h-8 bg-slate-900 rounded-full overflow-hidden border border-slate-400">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${(characterData.manaPoints / characterData.manaPointsMax) * 100}%`,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center px-2.5">
          <span className="text-white text-sm font-bold drop-shadow-md">
            Mana: {characterData.manaPoints} / {characterData.manaPointsMax}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
