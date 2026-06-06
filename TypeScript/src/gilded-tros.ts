import { Item } from "./item";

const MAX_QUALITY = 50;

export class GildedTros {
  constructor(public items: Array<Item>) {}

  public updateQuality(): void {
    function increaseQuality(item: Item, amount: number): void {
      item.quality = Math.min(MAX_QUALITY, item.quality + amount);
    }

    function decreaseQuality(item: Item, amount: number): void {
      item.quality = Math.max(0, item.quality - amount);
    }

    for (const item of this.items) {
      if (
        item.name != "Good Wine" &&
        item.name != "Backstage passes for Re:Factor" &&
        item.name != "Backstage passes for HAXX"
      ) {
        if (item.quality > 0) {
          if (item.name != "B-DAWG Keychain") {
            if (
              item.name != "Duplicate Code" &&
              item.name != "Long Methods" &&
              item.name != "Ugly Variable Names"
            ) {
              decreaseQuality(item, 1);
            } else {
              decreaseQuality(item, 2);
            }
          }
        }
      } else {
        if (item.quality < 50) {
          increaseQuality(item, 1);

          if (
            item.name == "Backstage passes for Re:Factor" ||
            item.name == "Backstage passes for HAXX"
          ) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                increaseQuality(item, 1);
              }
            }

            if (item.sellIn < 6) {
              if (item.quality < 50) {
                increaseQuality(item, 1);
              }
            }
          }
        }
      }

      if (item.name != "B-DAWG Keychain") {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn < 0) {
        if (item.name != "Good Wine") {
          if (
            item.name != "Backstage passes for Re:Factor" &&
            item.name != "Backstage passes for HAXX"
          ) {
            if (item.quality > 0) {
              if (item.name != "B-DAWG Keychain") {
                decreaseQuality(item, 1);
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            increaseQuality(item, 1);
          }
        }
      }
    }
  }
}
