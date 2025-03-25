import { Slot } from '../models/index.js';

export const createSlot = async (slotPayload) => {
  const slot = new Slot(slotPayload);
  await slot.save();
  return slot;
};

export const getSlot = async ({ page, limit, skips, sort }) => {
  const slots = await Slot.find({ deleted: false })
    .sort(sort)
    .skip(skips)
    .limit(limit);
  const totalSlots = await Slot.countDocuments();
  const totalPages = Math.ceil(totalSlots / limit);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;
  return {
    data: slots,
    pagination: {
      currentPage: page,
      totalItems: totalSlots,
      totalPages,
      currentPage: page,
      hasNextPage,
      hasPrevPage,
    },
  };
};

export const updateSlot = async (id, payload) => {
  return await Slot.findOneAndUpdate({ _id: id, deleted: false }, payload);
};

export const deleteSlot = async (id) => {
  return await Slot.findOneAndUpdate(
    { _id: id },
    { deleted: true, deletedAt: new Date() }
  );
};
