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

export default {
  getReviewHome,
  createReviewHome,
};
