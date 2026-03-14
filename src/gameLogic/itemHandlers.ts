import type { Hero } from "../types/hero";
import type { Item, Consumable } from "../types/item";

type ItemHandler = (currentHero: Hero, clickedItem: Item) => Hero;

const ItemHandlers: Record<string, ItemHandler> = {
  potion: (hero, item) => {
    const potion = item as Consumable;
    return {
      ...hero,
      healthPoints: Math.min(
        hero.healthPoints + potion.healAmount,
        hero.healthPointsMax,
      ),
    };
  },
  weapon: (hero, item) => {
    // Тут буде логіка одягання зброї
    console.log(`Беремо в руки: ${item.name}`);
    return hero; // Поки що повертаємо героя без змін
  },

  resource: (hero, item) => {
    console.log(`Це матеріал, клік нічого не робить: ${item.name}`);
    return hero;
  },
};

export default ItemHandlers;
