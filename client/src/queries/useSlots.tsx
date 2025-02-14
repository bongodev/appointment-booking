import { useEffect, useState } from "react"


import { mockSlots } from "../data"
import { Slot } from "../types"

export const useSlots = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
    const [slots, setSlots] =useState<Slot[]>([])
    useEffect(() => {
        setSlots(getSlotsByDate(selectedDate));
      }, [selectedDate]);
    const getSlotsByDate = (date: Date | null)=>{
        return date? mockSlots.filter((slot: Slot)=>
            new Date(slot.date).toDateString() === date.toDateString()) : []
    }
  return {slots,
  selectedDate,
  setSelectedDate
  }
}
