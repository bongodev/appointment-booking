import { createContext, useContext, useState, ReactNode } from 'react';

interface SlotContextType {
  weekOffset: number;
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
  goToCurrentWeek: () => void;
  moveDirection: 'left' | 'right';
}

const SlotProviderContext = createContext<SlotContextType | undefined>(
  undefined
);

export const SlotProvider = ({ children }: { children: ReactNode }) => {
  const [weekOffset, setWeekOffset] = useState(0);
  const [moveDirection, setMoveDirection] = useState<'left' | 'right'>('right');

  function goToNextWeek() {
    setWeekOffset((prev) => prev + 1);
    setMoveDirection('right');
  }
  function goToPreviousWeek() {
    setWeekOffset((prev) => prev - 1);
    setMoveDirection('left');
  }
  function goToCurrentWeek() {
    setWeekOffset(0);
  }
  return (
    <SlotProviderContext.Provider
      value={{
        weekOffset,
        goToNextWeek,
        goToPreviousWeek,
        goToCurrentWeek,
        moveDirection,
      }}
    >
      {children}
    </SlotProviderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSlotsContext = () => {
  const context = useContext(SlotProviderContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
