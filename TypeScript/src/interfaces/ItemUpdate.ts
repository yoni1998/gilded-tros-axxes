import { Item } from "../item";

export interface ItemUpdate {
  updateItem(item: Item): void;
}
