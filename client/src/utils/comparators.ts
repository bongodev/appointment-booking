import { Order } from '@/types';

function formatTime(time: string) {
  const trimedTime = time.replace(/\s+/g, '');
  const [timePart, amOrPm] = trimedTime.toLowerCase().split(/(am|pm)/);
  let [hour, minute] = timePart.split(':').map((item) => Number(item));
  
  if (amOrPm === 'pm' && hour < 12) {
    hour += 12;
  }
  if (amOrPm === 'am' && hour === 12) {
    hour = 0;
  }
  
  return (hour * 60) + minute
}
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (orderBy === 'time' && typeof a[orderBy] === 'string' && typeof b[orderBy] === 'string'){
    const aTime = formatTime(a[orderBy])
    const bTime = formatTime(b[orderBy])
    return bTime - aTime
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function ascendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (orderBy === 'time' && typeof a[orderBy] === 'string' && typeof b[orderBy] === 'string'){
    const aTime = formatTime(a[orderBy])
    const bTime = formatTime(b[orderBy])
    return aTime - bTime
  }
  if (a[orderBy] < b[orderBy]) {
    return -1;
  }
  if (a[orderBy] > b[orderBy]) {
    return 1;
  }
  return 0;
}


function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => ascendingComparator(a, b, orderBy);
}

export { descendingComparator, getComparator };
