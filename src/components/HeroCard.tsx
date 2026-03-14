import type { Hero } from "../types/hero";
import type { Item } from "../types/item";

type HeroCardProps = {
  characterData: Hero;
  onItemClick: (item: Item) => void;
};

function HeroCard({ characterData, onItemClick }: HeroCardProps) {
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

      <div className="mt-6">
        <h3 className="text-white font-bold mb-2">Inventory</h3>

        {/* Контейнер-сітка: 5 колонок, відступи */}
        <div className="grid grid-cols-6 gap-2 bg-slate-900 p-3 rounded-lg border border-slate-700">
          {/* Створюємо штучний цикл на 20 слотів (5x4) */}
          {Array.from({ length: 24 }).map((_, index) => {
            // Перевіряємо, чи є в нас реальний предмет для цього слоту
            const item = characterData.inventory[index];

            return (
              // Сам слот (ячейка)
              <div
                key={index}
                onClick={() => {
                  if (item) {
                    onItemClick(item);
                  }
                }}
                className="w-12 h-12 bg-slate-800 border border-slate-600 rounded flex items-center justify-center hover:bg-slate-700 cursor-pointer"
              >
                {/* Якщо предмет існує - показуємо його іконку, якщо ні - нічого (null) */}
                {item ? (
                  <span className="text-2xl" title={item.name}>
                    {item.icon}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
