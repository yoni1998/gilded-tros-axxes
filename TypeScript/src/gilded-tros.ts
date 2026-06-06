import { Item } from "./item";
import {
  updateWineItem,
  updateBackstageItem,
  updateSmellyItem,
  updateLegendaryItem,
  updateNormalItem,
} from "./itemUpdaters";

type ItemUpdater = (item: Item) => void;

const registry: Record<string, ItemUpdater> = {
  "Good Wine": updateWineItem,
  "Backstage passes for Re:Factor": updateBackstageItem,
  "Backstage passes for HAXX": updateBackstageItem,
  "Duplicate Code": updateSmellyItem,
  "Long Methods": updateSmellyItem,
  "Ugly Variable Names": updateSmellyItem,
  "B-DAWG Keychain": updateLegendaryItem,
};

export class GildedTros {
  constructor(public items: Array<Item>) {}

  public updateQuality(): void {
    for (const item of this.items) {
      const updateItem = registry[item.name] ?? updateNormalItem;
      updateItem(item);
    }
  }
}
