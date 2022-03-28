/**
 * Return a sorted array by datetime
 * @param array object collection to sort
 * @param key object key to use
 * @param asc boolean to set asc or desc sort
 * @return object collection sorted
 */
export const sortByDate = (array: any[], key: string, asc?: boolean): any[] =>
  array.sort((a, b) => {
    if (asc) {
      return new Date(b[key]).getTime() - new Date(a[key]).getTime();
    } else {
      return new Date(a[key]).getTime() - new Date(b[key]).getTime();
    }
  });
