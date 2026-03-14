type BaseItem = {
  id: number;
  name: string;
  icon: string;
  category: string;
};

export type Weapon = BaseItem & {
  pAtk: number;
  mAtak: number;
};

export type Consumable = BaseItem & {
  healAmount: number;
};

export type Resource = BaseItem & {
  type: string;
};

export type Item = Weapon | Consumable | Resource;
