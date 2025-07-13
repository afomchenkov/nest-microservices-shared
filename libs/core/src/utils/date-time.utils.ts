import {
  format,
  addMonths,
  isAfter,
  isEqual,
  eachDayOfInterval,
  differenceInWeeks,
} from 'date-fns';

export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:MM:SS';
export const DATE_FORMAT = 'YYYY-MM-DD';

export const toDateFormat = (
  date: Date | string,
  dateFormat = DATE_TIME_FORMAT,
): Date => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return new Date(format(date, dateFormat));
};

export const getMonthDateRangeFromToday = () => {
  const today = new Date();
  return {
    dateFrom: today,
    dateTo: addMonths(today, 1),
  };
};

export const getDateWithoutTime = (date: Date | string): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return format(date, DATE_FORMAT);
};

export const isSameOrGreaterDate = (
  transactionDate: Date,
  effectiveDate: Date,
) =>
  isEqual(transactionDate, effectiveDate) ||
  isAfter(effectiveDate, transactionDate);

export const generateDateArray = (startDate: Date, endDate: Date): string[] => {
  const datesArray = eachDayOfInterval({ start: startDate, end: endDate });
  const formattedDatesArray = datesArray.map((date) =>
    format(date, DATE_TIME_FORMAT),
  );
  return formattedDatesArray;
};

export const howManyWeeksTillDate = (futureDate: Date) => {
  const now = new Date();
  const weeksUntil = differenceInWeeks(futureDate, now);
  return weeksUntil;
};
