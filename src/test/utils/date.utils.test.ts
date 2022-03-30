import { timeAgo } from "../../utils/date.utils";

describe("Date utils, timeAgo function", () => {
  const dateRef = new Date(2022, 1, 1, 12, 0, 0);
  const date1 = new Date(2022, 1, 1, 11, 59, 40);
  const date2 = new Date(2022, 1, 1, 11, 40);
  const date3 = new Date(2022, 1, 1, 8, 0, 0);
  const date4 = new Date(2022, 0, 1, 8, 0, 0);
  const date5 = new Date(2020, 0, 1, 8, 0, 0);

  test("Date utils, time ago function", () => {
    expect(timeAgo(date1, dateRef)).toStrictEqual("20s");
    expect(timeAgo(date2, dateRef)).toStrictEqual("20min");
    expect(timeAgo(date3, dateRef)).toStrictEqual("4h");
    expect(timeAgo(date4, dateRef)).toStrictEqual("1 ene");
    expect(timeAgo(date5, dateRef)).toStrictEqual("1 ene 2020");
  });
});
