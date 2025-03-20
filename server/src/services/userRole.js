import Role from '../models/Role.js';
import { RoleSchema } from '../schemas/role.js';

export const createRole = async (roleData) => {
  const parsedRole = RoleSchema.parse(roleData);
  const newRole = new Role({
    role: parsedRole.role,
    permissions: parsedRole.permissions,
    description: parsedRole.description,
  });
  await newRole.save();
  return newRole;
};

export const getAllRoles = async () => {
  return await Role.find();
};

export const getRoleById = async (id) => {
  return await Role.findById(id);
};

export const updateRoleById = async (id, roleData) => {
  const parsedRole = RoleSchema.parse(roleData);
  return await Role.findByIdAndUpdate(
    id,
    {
      role: parsedRole.role,
      description: parsedRole.description,
      permissions: parsedRole.permissions,
    },
    { new: true }
  );
};

export const deleteRoleById = async (id) => {
  return await Role.findByIdAndDelete(id);
};
