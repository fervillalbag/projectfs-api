import AboutModel from "../models/about";

const getAboutPage = async () => {
  try {
    const aboutData = await AboutModel.findOne({});
    return aboutData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createAboutPage = async (input: any) => {
  try {
    const aboutData = await new AboutModel(input);
    await aboutData.save();

    return {
      message: "Creado correctamente",
      success: true,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default {
  getAboutPage,
  createAboutPage,
};
