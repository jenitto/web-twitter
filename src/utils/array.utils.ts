/**
 * Return a sorted array by datetime
 * @param array object collection to sort
 * @param key object key to use
 * @param asc boolean to set asc or desc sort
 * @return object collection sorted
 */
export const sortByDate = (array: any[], key: string, asc?: boolean): any[] => {
  const sortedArray = [...array];
  sortedArray.sort((a, b) => {
    if (asc) {
      return new Date(b[key]).getTime() - new Date(a[key]).getTime();
    } else {
      return new Date(a[key]).getTime() - new Date(b[key]).getTime();
    }
  });
  return sortedArray;
};

/**
 * Return a new array with the new item updated
 * @param array object collection
 * @param newItem item to modify
 * @return object collection updated
 */
export const updateItem = <T extends { id: string }>(
  array: T[],
  newItem: T
): T[] => {
  const collection = [...array];
  const index = collection.findIndex((item: T) => item.id === newItem.id);

  collection[index] = newItem;
  return collection;
};

/**
 * Return a new array with the new item
 * @param array object collection
 * @param newItem item to add
 * @param index position to be added
 * @return object collection updated
 */
export const addItem = <T extends { id: string }>(
  array: T[],
  newItem: T,
  index = 0
): T[] => {
  const collection = [...array];
  collection.splice(index, 0, newItem);
  return collection;
};
