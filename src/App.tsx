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
  };
  console.log(myMainCharacter);

  return (
    <div className="min-h-dvh w-full bg-slate-950 flex justify-center overflow-x-hidden">
      <div className="w-full max-w-[420px] min-h-dvh bg-slate-900 border-x border-slate-800 flex flex-col p-4 shadow-2xl">
        <HeroCard characterData={myMainCharacter} />
      </div>
    </div>
  );
}

export default App;
