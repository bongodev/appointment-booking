import Role from '../models/role.js';

export const createRole = async (userRole) => {
  const newRole = new Role(userRole);
  await newRole.save();
  return newRole;
};

export const getAllRoles = async () => {
  return await Role.find();
};

export const updateRole = async (id, payload) => {
  return await Role.findOneAndUpdate({ _id: id }, payload, { new: true });
};

export const deleteRoleById = async (id) => {
  return await Role.findOneAndUpdate(
    { _id: id },
    { deleted: true, deletedAt: new Date() },
    { new: true }
  );
};
