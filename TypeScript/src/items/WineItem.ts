import { ItemUpdate } from "../interfaces/ItemUpdate";
import { Item } from "../item";
import { increaseQuality } from "../utils/quality";

export class WineItem implements ItemUpdate {
  updateItem(item: Item): void {
    increaseQuality(item, 1);
    item.sellIn--;
  }
}
