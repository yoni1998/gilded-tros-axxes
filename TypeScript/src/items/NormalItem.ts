import { ItemUpdate } from "../interfaces/ItemUpdate";
import { Item } from "../item";
import { decreaseQuality } from "../utils/quality";
import { isSellInExpired } from "../utils/sellIn";

export class NormalItem implements ItemUpdate {
  updateItem(item: Item): void {
    decreaseQuality(item, 1);
    item.sellIn--;

    if (isSellInExpired(item.sellIn)) {
      decreaseQuality(item, 1);
    }
  }
}
