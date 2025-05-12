import dayjs from 'dayjs';

export const getWeekDates = () => {
  const today = dayjs();
  const startOfWeek = today.startOf('week');
  return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, 'day'));
};

export const getWeekLabel = (weekDates: dayjs.Dayjs[]) => {
  const isSameMonth = weekDates[0].month() === weekDates[6].month();
  return isSameMonth
    ? weekDates[0].format('MMMM YYYY')
    : `${weekDates[0].format('MMM D')} – ${weekDates[6].format('MMM D, YYYY')}`;
};
