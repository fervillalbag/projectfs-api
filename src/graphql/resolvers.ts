import headerHome from "../controllers/headerHome";
import userController from "../controllers/user";
import growthController from "../controllers/growth";

const resolvers = {
  Query: {
    // Users
    getUsers: () => userController.getUsers(),
    getUser: (_: any, { id }: { id: string }) =>
      userController.getUser(id),

    // Header Home
    getHeaderHome: () => headerHome.getHeaderHome(),

    // Growth
    getGrowthHome: () => growthController.getGrowthHome(),
  },

  Mutation: {
    // Users
    createUser: (_: any, { input }: any) =>
      userController.createUser(input),

    // Header Home
    createHeaderHome: (_: any, { input }: { input: any }) =>
      headerHome.createHeaderHome(input),
    updateHeaderHome: (_: any, { input }: { input: any }) =>
      headerHome.updateHeaderHome(input),

    // Growth
    createGrowthHome: (_: any, { input }: { input: any }) =>
      growthController.createGrowthHome(input),
    updateGrowthHome: (_: any, { input }: { input: any }) =>
      growthController.updateGrowthHome(input),
  },
};

export default resolvers;
