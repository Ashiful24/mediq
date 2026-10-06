import { userTypes } from "../../db/schema";
export interface CreateUserData {
   
    email?: string;
    firstName?: string;
    lastName?: string;
    phone: string;
    gender?: string;
    dateOfBirth?: string;
    profilePicture?: string;
    userType: (typeof userTypes.enumValues)[number];
    password: string;
  }