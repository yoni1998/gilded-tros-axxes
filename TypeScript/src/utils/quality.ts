import { Item } from "../item";

export const MAX_QUALITY = 50;

export function increaseQuality(item: Item, amount: number): void {
  item.quality = Math.min(MAX_QUALITY, item.quality + amount);
}

export function decreaseQuality(item: Item, amount: number): void {
  item.quality = Math.max(0, item.quality - amount);
}
