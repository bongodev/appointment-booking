import { mockSlots } from '@/data';
import { Slot } from '@/types';
import { useEffect, useState } from 'react';

export const useSlots = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    setSlots(getSlotsByDate(selectedDate));
  }, [selectedDate]);

  const getSlotsByDate = (date: Date | null) => {
    return date
      ? mockSlots.filter(
          (slot) => new Date(slot.date).toDateString() === date.toDateString()
        )
      : [];
  };
  return { selectedDate, setSelectedDate, slots };
};
