import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Movie title is required"],
    maxLength: [100, "Movie title must be less than 100 characters"],
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  releaseYear: {
    type: Number,
    required: [true, "Release year is required"],
    min: [1900, "Release year must be after 1900"],
    max: [new Date().getFullYear(), "Release year must be before current year"],
  },
  description: {
    type: String,
    required: [true, "Description of Movie is required"],
    maxLength: [1000, "Description must be less than 1000 characters"],
  },
  poster: {
    type: String,
    default: "",
    validate: {
      validator: function (v) {
        if (v === "") {
          return true;
        }
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(v);
      },
      message: props => `${props.value} is not a valid URL`,
    },
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const Movie = mongoose.model("Movie", movieSchema);
