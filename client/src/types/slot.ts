import { User } from "./user";
export type Slot = {
    _id?:  string;
    name :  string;
    description :  string;
    date : Date | string;
    startTime:  string;
    duration: number;
    executive : User;
    bookedUsers: User[];
}