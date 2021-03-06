const getDays = (ms: number) => Math.round(ms / (1000 * 60 * 60 * 24));
const getHours = (ms: number) => Math.round(ms / (1000 * 60 * 60));
const getMinutes = (ms: number) => Math.round(ms / (1000 * 60));
const getSeconds = (ms: number) => Math.round(ms / 1000);

/**
 * Return a date like Twitter format time since the item was created
 * @param timeBefore Previous date to compare
 * @param timeAfter After date to compare (current local time if was empty)
 * @return time since
 */
export const timeAgo = (timeBefore: Date, timeAfter = new Date()): string => {
  let timeAgo: string;

  const compareTime = new Date(timeBefore);
  const nowTime = new Date(timeAfter);
  const msCompareTime = compareTime.getTime();
  const msNowTime = nowTime.getTime();
  const msDifference = msNowTime - msCompareTime;

  const days = getDays(msDifference);
  const hours = getHours(msDifference);
  const minutes = getMinutes(msDifference);
  const seconds = getSeconds(msDifference);

  if (days > 365) {
    timeAgo = compareTime.toLocaleDateString("es", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } else if (days > 0) {
    timeAgo = compareTime.toLocaleDateString("es", {
      month: "short",
      day: "numeric",
    });
  } else if (hours > 0) {
    timeAgo = `${hours}h`;
  } else if (minutes > 0) {
    timeAgo = `${minutes}min`;
  } else {
    timeAgo = `${seconds}s`;
  }

  return timeAgo;
};
