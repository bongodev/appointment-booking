import dayjs, { Dayjs } from 'dayjs';

export const getWeekDates = (weekOffset: number = 0): Dayjs[] => {
  const startOfTargetWeek = dayjs().startOf('week').add(weekOffset, 'week');
  return Array.from({ length: 7 }, (_, i) => startOfTargetWeek.add(i, 'day'));
};
export const getWeekLabel = (weekDates: dayjs.Dayjs[]) => {
  const isSameMonth = weekDates[0].month() === weekDates[6].month();
  return isSameMonth
    ? weekDates[0].format('MMMM YYYY')
    : `${weekDates[0].format('MMM D')} – ${weekDates[6].format('MMM D, YYYY')}`;
};

export const getMonthAndYear = (date?: Dayjs): string => {
  const targetDate = date || dayjs();
  return targetDate.format('MMMM YYYY');
};
