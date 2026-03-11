import { useState } from "react";
import HeroCard from "./components/HeroCard";
import type { Hero } from "./types/hero";

function App() {
  const myMainCharacter: Hero = {
    name: "noName",
    level: 1,
    profession: "humanFighter",
    healthPoints: 100,
    healthPointsMax: 120,
    manaPoints: 44,
    manaPointsMax: 100,
    inventory: [
      {
        id: 1,
        name: "Short Sword",
        icon: "🗡️",
        category: "weapon",
        pAtk: 10,
        mAtak: 10,
      },
      {
        id: 2,
        name: "Lesser Healing Potion",
        icon: "🧪",
        category: "potion",
        healAmount: 10,
        healTime: 10,
      },
      {
        id: 3,
        name: "Animal Bone",
        icon: "🦴",
        category: "resource",
        type: "common",
      },
    ],
  };

  const [heroData, setHeroData] = useState<Hero>(myMainCharacter);

  return (
    <div className="min-h-dvh w-full bg-slate-950 flex justify-center overflow-x-hidden">
      <div className="w-full max-w-105 min-h-dvh bg-slate-900 border-x border-slate-800 flex flex-col p-4 shadow-2xl">
        <HeroCard characterData={heroData} />
        <button
          onClick={() => {
            setHeroData({
              ...heroData,
              healthPoints: heroData.healthPoints - 5,
            });
          }}
          className=" p-4 border-2 border-slate-800 bg-slate-900 text-white rounded-lg hover:bg-slate-700 cursor-pointer"
        >
          Attack
        </button>
      </div>
    </div>
  );
}

export default App;
