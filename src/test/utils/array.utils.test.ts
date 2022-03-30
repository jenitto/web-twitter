import { addItem, sortByDate, updateItem } from "../../utils/array.utils";

type Item = {
  id: string;
  name: string;
  date?: Date;
};

const obj1 = { id: "1", name: "one", date: new Date(2021, 4, 1) };
const obj2 = { id: "2", name: "two", date: new Date(2021, 5, 1) };
const obj3 = { id: "3", name: "three", date: new Date(2021, 1, 1) };
const array = [obj1, obj2, obj3];

describe("Array utils, sortByDate function", () => {
  test("Sort asc correctly", () => {
    const expected = [obj3, obj1, obj2];
    const result = sortByDate(array, "date", false);

    expect(result).toStrictEqual(expected);
  });

  test("Sort desc correctly", () => {
    const expected = [obj2, obj1, obj3];
    const result = sortByDate(array, "date", true);

    expect(result).toStrictEqual(expected);
  });
});

describe("Array utils, updateItem function", () => {
  let newItem: Item;

  beforeAll(() => {
    newItem = { ...obj2, name: "New" };
  });

  test("Update correctly one item", () => {
    const expected = [obj1, newItem, obj3];
    const result = updateItem(array, newItem);

    expect(result).toStrictEqual(expected);
  });
});

describe("Array utils, addItem function", () => {
  let newItem: Item;

  beforeAll(() => {
    newItem = { id: "new", name: "new" };
  });

  test("Add correctly a item in first position", () => {
    const expected = [newItem, ...array];
    const result = addItem(array, newItem);

    expect(result).toStrictEqual(expected);
  });

  test("Add correctly a item in index 1 position", () => {
    const expected = [obj1, newItem, obj2, obj3];
    const result = addItem(array, newItem, 1);

    expect(result).toStrictEqual(expected);
  });
});
