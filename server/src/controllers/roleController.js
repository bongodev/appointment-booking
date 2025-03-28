import asyncHandler from 'express-async-handler';
import { roleServices } from '../services/index.js';

export const createRole = asyncHandler(async (req, res) => {
  const newRole = await roleServices.createRole(req.body);
  res.status(201).json(newRole);
});

export const getAllRoles = asyncHandler(async (req, res) => {
  const roles = await roleServices.getAllRoles();
  res.json(roles);
});

export const updateRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedRole = await roleServices.updateRole(id, req.body);
  if (!updatedRole) {
    return res
      .status(404)
      .json({ error: `Role not found  with this ${id} id` });
  }
  res.json(updatedRole);
});

export const deleteRoleById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedRole = await roleServices.deleteRoleById(id);
  if (!deletedRole) {
    return res
      .status(404)
      .json({ message: `No role found with this  ${id} ID` });
  }
  res.json({ message: 'Role deleted successfully' });
});
