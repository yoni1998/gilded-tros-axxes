import { ItemUpdate } from "../interfaces/ItemUpdate";
import { Item } from "../item";
import { increaseQuality } from "../utils/quality";
import { isSellInExpired } from "../utils/sellIn";

export class BackstageItem implements ItemUpdate {
  updateItem(item: Item): void {
    increaseQuality(item, 1);

    if (item.sellIn < 11) increaseQuality(item, 1);
    if (item.sellIn < 6) increaseQuality(item, 1);

    item.sellIn--;

    if (isSellInExpired(item.sellIn)) {
      item.quality = 0;
    }
  }
}
