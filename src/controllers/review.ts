import ReviewModel from "../models/review";

const getReviewHome = async () => {
  try {
    const review = await ReviewModel.findOne({});
    return review;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createReviewHome = async (input: any) => {
  try {
    const review = await new ReviewModel(input);
    await review.save();

    return {
      message: "Creado correctamente.",
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Hubo un problema al crear.",
      success: false,
    };
  }
};

const updateReviewHome = async (input: any) => {
  try {
    await ReviewModel.findOneAndUpdate(input);
    return {
      message: "Actualizado correctamente",
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Hubo un problema al actualizar.",
      success: false,
    };
  }
};

export default {
  updateReviewHome,
  getReviewHome,
  createReviewHome,
};
