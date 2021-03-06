import { User } from "./User";

export class Item {
  key: string;
  name: string;
  desc: string;
  imagePath: string;
  sellValue: number;
  effects: { statName: string; amount: number }[];
  generationProbability: number;
  minimumLevelRequired: number;

  constructor(
    key: string,
    name: string,
    desc: string,
    imagePath: string,
    sellValue: number,
    effects: { statName: string; amount: number }[],
    generationProbability: number,
    minimumLevelRequired: number
  ) {
    this.key = key;
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
    this.sellValue = sellValue;
    this.effects = effects;
    this.generationProbability = generationProbability;
    this.minimumLevelRequired = minimumLevelRequired;
  }

  equip(store: any) {
    for (const effect of this.effects) {
      store.commit("addStatAmount", effect);
    }
  }

  unequip(store: any) {
    for (const effect of this.effects) {
      const undoEffect = { ...effect, amount: -effect.amount };
      store.commit("addStatAmount", undoEffect);
    }
  }
}

/* ====== Summoning Items ====== */

export const UNDEAD_STONE = new Item(
  "undead_stone",
  "Undead Stone",
  "You see the lives of all those lost, learn from them. +1 magicPrecision.",
  require("@/assets/images/items/undead_stone.png"),
  5,
  [{ statName: "magicPrecision", amount: 1 }],
  1.0,
  0
);

export const GOBLIN_STONE = new Item(
  "goblin_stone",
  "Goblin Stone",
  "Like diamonds but for goblins. They treasure and collect these. +1 luck.",
  require("@/assets/images/items/goblin_stone.png"),
  15,
  [{ statName: "luck", amount: 1 }],
  1.0,
  0
);

export const SOUL_STONE = new Item(
  "soul_stone",
  "Soul Stone",
  "It glows with life. You see memories inside. +1 magicIQ.",
  require("@/assets/images/items/soul_stone.png"),
  10,
  [{ statName: "magicIQ", amount: 1 }],
  1.0,
  0
);

export const MAGIC_STONE = new Item(
  "magic_stone",
  "Magic Stone",
  "You see thousands of Wizards casting spells in the stone. +1 magicStrength.",
  require("@/assets/images/items/magic_stone.png"),
  25,
  [{ statName: "magicStrength", amount: 1 }],
  1.0,
  0
);

/* ============================= */

export const BASIC_WIZARD_HAT = new Item(
  "basic_wizard_hat",
  "Basic Wizard's Hat",
  "Seems basic by wizard standards. +3 magicPrecision, +1 magicStrength.",
  require("@/assets/images/items/basic_wizard_hat.png"),
  40,
  [
    { statName: "magicPrecision", amount: 3 },
    { statName: "magicStrength", amount: 1 }
  ],
  0.25,
  1
);

export const BASIC_STAFF = new Item(
  "basic_staff",
  "Basic Staff",
  "Pretty basic, but hey, a staff is a staff. +5 total MP.",
  require("@/assets/images/items/basic_staff.png"),
  75,
  [{ statName: "MP", amount: 5 }],
  0.25,
  1
);

export const BASIC_WAND = new Item(
  "basic_wand",
  "Basic Wand",
  "Oh, a wand! Sure, it's a basic one, but still. +5 magicStrength.",
  require("@/assets/images/items/basic_wand.png"),
  125,
  [{ statName: "magicStrength", amount: 5 }],
  0.25,
  1
);

export const APPRENTICE_WAND = new Item(
  "apprentice_wand",
  "Apprentice Wand",
  "Used to train future Wizards. +10 MP, +10 magicPrecision.",
  require("@/assets/images/items/apprentice_wand.png"),
  200,
  [
    { statName: "MP", amount: 10 },
    { statName: "magicPrecision", amount: 10 }
  ],
  0.24,
  2
);

export const NATURE_WAND = new Item(
  "nature_wand",
  "Nature Wand",
  "Tree's root reach out to touch you. +25 HP, +25 magicPrecision.",
  require("@/assets/images/items/nature_wand.png"),
  200,
  [
    { statName: "HP", amount: 25 },
    { statName: "magicPrecision", amount: 25 }
  ],
  0.23,
  2
);

export const THE_OPAL_ROD = new Item(
  "the_opal_rod",
  "The Opal Rod",
  "A staff made for nature magic. +9 magicPrecision, +6 magicIQ, +3 magicStrength.",
  require("@/assets/images/items/the_opal_rod.png"),
  225,
  [
    { statName: "magicPrecision", amount: 9 },
    { statName: "magicIQ", amount: 6 },
    { statName: "magicStrength", amount: 3 }
  ],
  0.2,
  3
);

export const DARK_SPELL_BOOK = new Item(
  "dark_spell_book",
  "Dark Spell Book",
  "Spooky. +6 magicStrength, +6 MP, +6 magicIQ",
  require("@/assets/images/items/dark_spell_book.png"),
  270,
  [
    { statName: "magicStrength", amount: 6 },
    { statName: "MP", amount: 6 },
    { statName: "magicIQ", amount: 6 }
  ],
  0.2,
  3
);

export const FIRE_EYE_STAFF = new Item(
  "fire_eye_staff",
  "Fire Eye Staff",
  "When you touch it there seems to be fire in your eyes. +5 magicStrength, +5 MP, +25 HP.",
  require("@/assets/images/items/fire_eye_staff.png"),
  275,
  [
    { statName: "magicStrength", amount: 5 },
    { statName: "MP", amount: 5 },
    { statName: "HP", amount: 25 }
  ],
  0.2,
  3
);

export const SPARK_WAND = new Item(
  "spark_wand",
  "Spark Wand",
  "You can see sparks when you do your magic. Cool. +15 luck.",
  require("@/assets/images/items/spark_wand.png"),
  300,
  [{ statName: "luck", amount: 15 }],
  0.2,
  4
);

export const STAFF_OF_HEALTH = new Item(
  "staff_of_health",
  "Staff of Health",
  "You feel ... healthy. +100 HP.",
  require("@/assets/images/items/staff_of_health.png"),
  300,
  [{ statName: "HP", amount: 100 }],
  0.2,
  4
);

export const MANA_HAT = new Item(
  "mana_hat",
  "Mana Hat",
  "Put it on, get some mana. +25 MP",
  require("@/assets/images/items/mana_hat.png"),
  375,
  [{ statName: "MP", amount: 25 }],
  0.2,
  4
);

export const MAGIC_STAFF = new Item(
  "magic_staff",
  "Magic Staff",
  "Just simple, powerful magic. +15 magicStrength, +5 MP.",
  require("@/assets/images/items/magic_staff.png"),
  450,
  [
    { statName: "magicStrength", amount: 15 },
    { statName: "MP", amount: 5 }
  ],
  0.2,
  4
);

export const MINOTAURS_MIGHT = new Item(
  "minotaurs_might",
  "Minotaur's Might",
  "Bullish power rushes through your veins. +50 HP, +10 MP, +10 magicStrength.",
  require("@/assets/images/items/minotaurs_might_staff.png"),
  550,
  [
    { statName: "HP", amount: 50 },
    { statName: "MP", amount: 10 },
    { statName: "magicStrength", amount: 10 }
  ],
  0.25,
  5
);

export const MAGIC_SCROLL = new Item(
  "magic_scroll",
  "Magic Scroll",
  "An ancient Magic Scroll container lots of spells. +25 magicStrength, +25 magicIQ.",
  require("@/assets/images/items/magic_scroll.png"),
  750,
  [
    { statName: "magicStrength", amount: 25 },
    { statName: "magicIQ", amount: 25 }
  ],
  0.2,
  6
);

export const STAFF_OF_MANA = new Item(
  "staff_of_mana",
  "Staff of Mana",
  "Mana flows thats all it knows. +50 MP.",
  require("@/assets/images/items/staff_of_mana.png"),
  750,
  [{ statName: "MP", amount: 50 }],
  0.2,
  6
);

export const WAND_OF_WEALTH = new Item(
  "wand_of_wealth",
  "Wand of Wealth",
  "You're going to be rich! +50 luck.",
  require("@/assets/images/items/wand_of_wealth.png"),
  1000,
  [{ statName: "luck", amount: 50 }],
  0.18,
  7
);

export const STAFF_OF_WEALTH = new Item(
  "staff_of_wealth",
  "Staff of Wealth",
  "You're going to be super, super rich! +75 luck!",
  require("@/assets/images/items/staff_of_wealth.png"),
  1500,
  [{ statName: "luck", amount: 75 }],
  0.15,
  7
);

export const DARK_SPELL_BOOK_2 = new Item(
  "dark_spell_book_2",
  "Dark Spell Book II",
  "Extra Spooky. +66 magicIQ. +66 MP. +66 magicPrecision",
  require("@/assets/images/items/dark_spell_book_2.png"),
  1800,
  [
    { statName: "magicIQ", amount: 66 },
    { statName: "MP", amount: 66 },
    { statName: "magicPrecision", amount: 66 }
  ],
  0.15,
  8
);

export const WAND_OF_MAGIC = new Item(
  "wand_of_magic",
  "Wand of Magic",
  "It caries the magic. +666 MP, +666 magicPrecision, +666 magicStrength.",
  require("@/assets/images/items/wand_of_magic.png"),
  100000,
  [
    { statName: "MP", amount: 666 },
    { statName: "magicStrength", amount: 666 },
    { statName: "magicPrecision", amount: 666 }
  ],
  0.05,
  10
);

export const ITEMS = [
  UNDEAD_STONE,
  GOBLIN_STONE,
  SOUL_STONE,
  MAGIC_STONE,
  BASIC_WIZARD_HAT,
  BASIC_STAFF,
  BASIC_WAND,
  APPRENTICE_WAND,
  NATURE_WAND,
  THE_OPAL_ROD,
  DARK_SPELL_BOOK,
  FIRE_EYE_STAFF,
  SPARK_WAND,
  STAFF_OF_HEALTH,
  MANA_HAT,
  MAGIC_STAFF,
  MINOTAURS_MIGHT,
  MAGIC_SCROLL,
  STAFF_OF_MANA,
  WAND_OF_WEALTH,
  STAFF_OF_HEALTH,
  DARK_SPELL_BOOK_2,
  WAND_OF_MAGIC
];

export const getItems = (
  user: User,
  multiplier: number,
  minimumItemAmount = 0,
  maximumItemAmount = Infinity
): Item[] => {
  const items = [];

  do {
    for (const item of ITEMS) {
      if (items.length > maximumItemAmount) break;

      const roll = Math.random() * (1 / ((user.luck * multiplier) / 5) ** 0.1);
      if (
        roll <= item.generationProbability &&
        user.level >= item.minimumLevelRequired
      ) {
        items.push(item);
      }
    }
  } while (items.length > minimumItemAmount);

  return items;
};
