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

      <div className="w-full h-8 bg-slate-900 rounded-full overflow-hidden border border-slate-400 relative">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{
            width: `${(characterData.healthPoints / characterData.healthPointsMax) * 100}%`,
          }}
        >
          Health:
          {characterData.healthPoints}
        </div>
      </div>

      <div className="w-full h-8 bg-slate-900 rounded-full overflow-hidden border border-slate-400 relative">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${(characterData.manaPoints / characterData.manaPointsMax) * 100}%`,
          }}
        >
          Mana:
          {characterData.manaPoints}
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
