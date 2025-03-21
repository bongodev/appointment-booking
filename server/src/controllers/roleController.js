import asyncHandler from 'express-async-handler';
import { roleService } from '../services/index.js';

export const createRole = asyncHandler(async (req, res) => {
  const newRole = await roleService.createRole(req.body);
  res.status(201).json(newRole);
});

export const getAllRoles = asyncHandler(async (req, res) => {
  const roles = await roleService.getAllRoles();
  res.json(roles);
});

export const updateRole = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  const updatedRole = await roleService.updateRole(id, req.body);
  if (!updatedRole) {
    return res.status(404).json({ error: 'Role not found' });
  }
  res.json(updatedRole);
});

export const deleteRoleById = asyncHandler(async (req, res) => {
  const deletedRole = await roleService.deleteRoleById(req.params.id);
  if (!deletedRole) {
    return res.status(404).json({ message: 'No role found with this ID' });
  }
  res.json({ message: 'Role deleted successfully' });
});
