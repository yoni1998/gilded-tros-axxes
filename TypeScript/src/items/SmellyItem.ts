import { ItemUpdate } from "../interfaces/ItemUpdate";
import { Item } from "../item";
import { decreaseQuality, increaseQuality } from "../utils/quality";
import { isSellInExpired } from "../utils/sellIn";

export class SmellyItem implements ItemUpdate {
  updateItem(item: Item): void {
    decreaseQuality(item, 2);
    item.sellIn--;

    if (isSellInExpired(item.sellIn)) {
      decreaseQuality(item, 2);
    }
  }
}
