import ProductModel from "../models/product";

const getProducts = async () => {
  try {
    const products = await ProductModel.find({});
    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createProduct = async (input: any) => {
  try {
    const product = await new ProductModel(input);
    await product.save();

    return {
      message: "Producto creado correctamente",
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Hubo un problema al crear",
      success: false,
    };
  }
};

const updateProduct = async (input: any) => {
  await ProductModel.findOneAndUpdate(input);
};

export default {
  getProducts,
  createProduct,
  updateProduct,
};
