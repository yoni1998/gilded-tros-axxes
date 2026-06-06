import { Item } from "./item";
import { decreaseQuality, increaseQuality } from "./utils/quality";

const isSellInExpired = (sellIn: number) => sellIn < 0;

export function updateWineItem(item: Item): void {
  increaseQuality(item, 1);
  item.sellIn--;
}

export function updateBackstageItem(item: Item): void {
  increaseQuality(item, 1);

  if (item.sellIn < 11) increaseQuality(item, 1);
  if (item.sellIn < 6) increaseQuality(item, 1);

  item.sellIn--;

  if (isSellInExpired(item.sellIn)) {
    item.quality = 0;
  }
}

export function updateSmellyItem(item: Item): void {
  decreaseQuality(item, 2);
  item.sellIn--;

  if (isSellInExpired(item.sellIn)) {
    decreaseQuality(item, 2);
  }
}

export function updateLegendaryItem(_item: Item): void {
  return;
}

export function updateNormalItem(item: Item): void {
  decreaseQuality(item, 1);
  item.sellIn--;

  if (isSellInExpired(item.sellIn)) {
    decreaseQuality(item, 1);
  }
}
