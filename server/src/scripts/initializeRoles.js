import { Role } from '../models/index.js';
import { logger } from '../config/logger.js';
import connectDB from '../db.js';

const initializeRoles = async () => {
  logger.info('Initializing default roles...');
  const rolesCount = await Role.countDocuments().exec();
  if (rolesCount > 0) {
    logger.info('Roles already initialized, skipping');
    return;
  }
  const basicRoles = [
    {
      role: 'Client',
      description: 'Regular user with basic access',
      permissions: ['view-own-profile', 'edit-own-profile'],
    },
    {
      role: 'Support',
      description: 'Support staff',
      permissions: [
        'view-own-profile',
        'edit-own-profile',
        'view-tickets',
        'respond-to-tickets',
      ],
    },
    {
      role: 'Executive',
      description: 'Executive with expanded permissions',
      permissions: [
        'view-own-profile',
        'edit-own-profile',
        'view-reports',
        'view-analytics',
      ],
    },
    {
      role: 'Admin',
      description: 'Administrator with full access',
      permissions: [
        'view-own-profile',
        'edit-own-profile',
        'manage-users',
        'manage-roles',
        'view-all-data',
      ],
    },
  ];

  await Role.insertMany(basicRoles);
  logger.info('Default roles initialized successfully');
};

connectDB()
  .then(() => {
    initializeRoles()
      .then(() => {
        logger.info('Roles initialization script completed successfully');
        process.exit(0);
      })
      .catch((error) => {
        logger.error(`Error while initializing roles: ${error}`);
        process.exit(1);
      });
  })
  .catch((error) => {
    logger.error(`Error while populating default roles: ${error}`);
    process.exit(1);
  });
