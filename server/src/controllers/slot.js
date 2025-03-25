import asyncHandler from 'express-async-handler';

import { slotServices } from '../services/index.js';

export const createSlot = asyncHandler(async (req, res) => {
  const slotData = await slotServices.createSlot(req.body);
  res.status(201).send(slotData);
});

export const getSlot = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, sort } = req.query;
  const skips = (Number(page) - 1) * Number(limit);
  const sortOptions = {
    latest: { createdAt: -1 },
    old: { createdAt: 1 },
  };

  const slots = await slotServices.getSlot({
    page: Number(page),
    skips: Number(skips),
    limit: Number(limit),
    sort: !sort ? sortOptions['old'] : sortOptions[sort],
  });

  res.json(slots);
});

export const updateSlot = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedSlot = await slotServices.updateSlot(id, req.body);
  res.status(201).json(updatedSlot);
});

export const deleteSlot = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await slotServices.deleteSlot(id);
  res
    .status(200)
    .json({ message: `Slot with id ${id} is deleted successfully` });
});
