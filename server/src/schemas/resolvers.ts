import { User } from "../models/index.js";

interface UserArgs {
    userId: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

const resolvers = {
    Query: {
        user: async (): Promise<UserArgs[]> => {
            return await User.find();
        },
    },
};
export default resolvers;
