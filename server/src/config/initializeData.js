import asyncHandler from "express-async-handler";
import { Role } from "../models/index.js"
import { logger } from "./logger.js";

export const initializeRoles = asyncHandler(async() =>{
    const rolesCount = await Role.countDocuments();
    if(rolesCount>0){
        logger.info("Roles already initialized, skipping");
        return;
    }
    logger.info('Initializing default roles...');
    const basicRoles = [
        {
          role: 'Client',
          description: 'Regular user with basic access',
          permissions: ['view-own-profile', 'edit-own-profile']
        },
        {
          role: 'Support',
          description: 'Support staff',
          permissions: ['view-own-profile', 'edit-own-profile', 'view-tickets', 'respond-to-tickets']
        },
        {
          role: 'Executive',
          description: 'Executive with expanded permissions',
          permissions: ['view-own-profile', 'edit-own-profile', 'view-reports', 'view-analytics']
        },
        {
          role: 'Admin',
          description: 'Administrator with full access',
          permissions: ['view-own-profile', 'edit-own-profile', 'manage-users', 'manage-roles', 'view-all-data']
        }
      ];
    
      await Role.insertMany(basicRoles);
      logger.info('Default roles initialized successfully');

})