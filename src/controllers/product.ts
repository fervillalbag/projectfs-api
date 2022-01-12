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

const getProduct = async (id: string) => {
  try {
    const product = await ProductModel.findById(id);
    return product;
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
  try {
    await ProductModel.findOneAndUpdate(input);

    return {
      message: "Actualizado correctamente",
      success: true,
    };
  } catch (error) {
    return {
      message: "Hubo un problema al actualizar",
      success: false,
    };
  }
};

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
};
