import { ItemUpdate } from "./interfaces/ItemUpdate";
import { Item } from "./item";
import { BackstageItem } from "./items/BackstageItem";
import { LegendaryItem } from "./items/LegendaryItem";
import { NormalItem } from "./items/NormalItem";
import { SmellyItem } from "./items/SmellyItem";
import { WineItem } from "./items/WineItem";

const registry: Record<string, ItemUpdate> = {
  "Good Wine": new WineItem(),
  "Backstage passes for Re:Factor": new BackstageItem(),
  "Backstage passes for HAXX": new BackstageItem(),
  "Duplicate Code": new SmellyItem(),
  "Long Methods": new SmellyItem(),
  "Ugly Variable Names": new SmellyItem(),
  "B-DAWG Keychain": new LegendaryItem(),
};

export class GildedTros {
  constructor(public items: Array<Item>) {}

  public updateQuality(): void {
    for (const item of this.items) {
      const { updateItem } = registry[item.name] ?? new NormalItem();
      updateItem(item);
    }
  }
}
