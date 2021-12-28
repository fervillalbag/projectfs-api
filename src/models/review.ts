import { Schema, model } from "mongoose";

const ReviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  reviews: {
    type: Array,
    required: true,
  },
});

export default model("Review", ReviewSchema);
