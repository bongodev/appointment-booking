import mongoose from 'mongoose';
import User from './user.js';


const userProfileSchema = new mongoose.Schema({
     user: {
        type: User.schema,
        select: (-'password')
     },
     address : {
        street: String,
        city: String,
        zipCode: String,
        country: String,
     },
     dateOfBirth: {
        type: Date
     },
     preferredContactMethod: {
        type: String,
        enum: ['email', 'phone', 'sms'],
        required: true,
     },
     preferences: {
        appointmentReminders:{
            type: Boolean,
            default: true,
        },
        reminderTime: {
            type: Number,
            default: 24 //hours before appointment
        },
        preferredDays: String,
        preferredTimeofTheDay: {
            type: String,
            enum: ['morning', 'afternoon', 'night']
        }
     },
     
    },
    {
         timestamps: true,
    }

)

const userProfile = mongoose.model('userProfile', userProfileSchema);
export default userProfile;