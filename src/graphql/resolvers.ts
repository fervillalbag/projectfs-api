import headerHome from "../controllers/headerHome";
import userController from "../controllers/user";
import growthController from "../controllers/growth";
import reviewController from "../controllers/review";
import aboutController from "../controllers/about";
import productController from "../controllers/product";

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

    // Review
    getReviewHome: () => reviewController.getReviewHome(),

    // About
    getAboutPage: () => aboutController.getAboutPage(),

    // Product
    getProducts: () => productController.getProducts(),
    getProduct: (_: any, { id }: { id: string }) =>
      productController.getProduct(id),
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

    // Review
    createReviewHome: (_: any, { input }: { input: any }) =>
      reviewController.createReviewHome(input),
    updateReviewHome: (_: any, { input }: { input: any }) =>
      reviewController.updateReviewHome(input),

    createAboutPage: (_: any, { input }: { input: any }) =>
      aboutController.createAboutPage(input),
    updateAboutPage: (_: any, { input }: { input: any }) =>
      aboutController.updateAboutPage(input),

    createProduct: (_: any, { input }: { input: any }) =>
      productController.createProduct(input),
    updateProduct: (_: any, { input }: { input: any }) =>
      productController.updateProduct(input),
  },
};

export default resolvers;
