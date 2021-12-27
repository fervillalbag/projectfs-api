import userController from "../controllers/user";

const resolvers = {
  Query: {
    getUsers: () => userController.getUsers(),
    getUser: (_: any, { id }: { id: string }) =>
      userController.getUser(id),
  },

  Mutation: {
    createUser: (_: any, { input }: any) =>
      userController.createUser(input),
  },
};

export default resolvers;
