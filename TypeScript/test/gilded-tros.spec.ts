import { Item } from "../src/item";
import { GildedTros } from "../src/gilded-tros";

function updateItem(name: string, sellIn: number, quality: number) {
  const item = new Item(name, sellIn, quality);
  const app: GildedTros = new GildedTros([item]);
  app.updateQuality();
  return item;
}

describe("GildedTrosTest", () => {
  describe("Default circumstances", () => {
    it("Degrades normal", () => {
      const item = updateItem("test", 2, 8);
      expect(item.sellIn).toEqual(1);
      expect(item.quality).toEqual(7);
    });

    it("Degrades twice as fast, once the sall by date has passed", () => {
      const item = updateItem("test", 0, 8);
      expect(item.sellIn).toEqual(-1);
      expect(item.quality).toEqual(6);
    });

    it("Never sets the Quality of an item negative", () => {
      const item = updateItem("test", 1, 0);
      expect(item.sellIn).toEqual(0);
      expect(item.quality).toEqual(0);
    });
  });

  describe("Good Wine", () => {
    it("Increases quality and lowers sellIn before sell date", () => {
      const item = updateItem("Good Wine", 10, 20);

      expect(item.sellIn).toEqual(9);
      expect(item.quality).toEqual(21);
    });

    it("Never increases quality above 50", () => {
      const item = updateItem("Good Wine", 10, 50);

      expect(item.quality).toEqual(50);
    });
  });

  describe("B-DAWG Keychain", () => {
    it("Never has to be sold or decreases in Quality", () => {
      const item = updateItem("B-DAWG Keychain", 10, 20);

      expect(item.sellIn).toEqual(10);
      expect(item.quality).toEqual(20);
    });
  });

  describe("Backstage passes", () => {
    it("Increases quality by 2 when there are 10 days or less", () => {
      const item = updateItem("Backstage passes for Re:Factor", 10, 10);

      expect(item.sellIn).toEqual(9);
      expect(item.quality).toEqual(12);
    });

    it("Increases quality by 3 when there are 5 days or less", () => {
      const item = updateItem("Backstage passes for Re:Factor", 5, 10);

      expect(item.sellIn).toEqual(4);
      expect(item.quality).toEqual(13);
    });

    it("Drops quality to 0 after the conference", () => {
      const item = updateItem("Backstage passes for Re:Factor", 0, 5);

      expect(item.sellIn).toEqual(-1);
      expect(item.quality).toEqual(0);
    });
  });

  describe("Backstage passes", () => {
    it("Increases quality by 2 when there are 10 days or less", () => {
      const item = updateItem("Backstage passes for Re:Factor", 10, 10);

      expect(item.sellIn).toEqual(9);
      expect(item.quality).toEqual(12);
    });

    it("Increases quality by 3 when there are 5 days or less", () => {
      const item = updateItem("Backstage passes for Re:Factor", 5, 10);

      expect(item.sellIn).toEqual(4);
      expect(item.quality).toEqual(13);
    });

    it("Drops quality to 0 after the conference", () => {
      const item = updateItem("Backstage passes for Re:Factor", 0, 5);

      expect(item.sellIn).toEqual(-1);
      expect(item.quality).toEqual(0);
    });
  });

  describe.each(["Duplicate Code", "Long Methods", "Ugly Variable Names"])(
    "smelly items",
    (name) => {
      it("Degrades quality twice as fast as normal items", () => {
        const item = updateItem(name, 10, 20);

        expect(item.sellIn).toEqual(9);
        expect(item.quality).toEqual(18);
      });
    },
  );
});
