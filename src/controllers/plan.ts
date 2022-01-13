import PlanModel from "../models/plan";

const createPlan = async (input: any) => {
  try {
    const plan = new PlanModel(input);
    plan.save();

    return {
      message: "Plan creado correctamente",
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      message: "Hubo un problema al crear el plan",
      success: false,
    };
  }
};

export default {
  createPlan,
};
