import mongoose, { mongo } from "mongoose";

const slotPreferenceSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        weeklySlots: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Slot',
                required: true,
            }
        ],
    },
    {
        timestamps: true,
    }
);

const SlotPreference = mongoose.model('SlotPreference', slotPreferenceSchema);
export default SlotPreference;

