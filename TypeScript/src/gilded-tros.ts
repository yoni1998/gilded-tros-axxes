import { Item } from "./item";
import { decreaseQuality, increaseQuality } from "./utils/quality";

export class GildedTros {
  constructor(public items: Array<Item>) {}

  public updateQuality(): void {
    for (const item of this.items) {
      switch (item.name) {
        case "Good Wine":
          this.updateWineItem(item);
          break;

        case "Backstage passes for Re:Factor":
        case "Backstage passes for HAXX":
          this.updateBackstageItem(item);
          break;

        case "Duplicate Code":
        case "Long Methods":
        case "Ugly Variable Names":
          this.updateSmellyItem(item);
          break;

        case "B-DAWG Keychain":
          this.updateLegendaryItem(item);
          break;

        default:
          this.updateNormalItem(item);
      }
    }
  }

  private updateWineItem(item: Item): void {
    increaseQuality(item, 1);
    item.sellIn--;

    if (item.sellIn < 0) {
      increaseQuality(item, 1);
    }
  }

  private updateBackstageItem(item: Item): void {
    increaseQuality(item, 1);

    if (item.sellIn < 11) increaseQuality(item, 1);
    if (item.sellIn < 6) increaseQuality(item, 1);

    item.sellIn--;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  private updateSmellyItem(item: Item): void {
    decreaseQuality(item, 2);
    item.sellIn--;

    if (item.sellIn < 0) {
      decreaseQuality(item, 2);
    }
  }

  private updateLegendaryItem(_item: Item): void {
    return;
  }

  private updateNormalItem(item: Item): void {
    decreaseQuality(item, 1);
    item.sellIn--;

    if (item.sellIn < 0) {
      decreaseQuality(item, 1);
    }
  }
}
