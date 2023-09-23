import mongoose, { InferSchemaType } from "mongoose";
import slugify from "slugify";

const courseMap = {
  BSC: "BACHELORS OF SCIENCE",
  ASC: "ASSOCIATE DEGREE",
  MSC: "MASTERS DEGREE",
} as const;
const courseFields = [
  "computing",
  "family law",
  "applied mathematics",
] as const;
const courseSchema = new mongoose.Schema({
  level: {
    type: String,
    required: [true, "A course must have a level"],
    enum: {
      values: Object.values(courseMap),
      message: "{VALUE} is not a valid level",
    },
  },
  field: {
    type: String,
    required: [true, "A course must have a field"],
    enum: {
      values: courseFields,
      message: "{VALUE} is not a valid course field",
    },
  },
});

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A campaign must have a name"],
    unique: true,
    minlength: [
      7,
      "The campaign name must be greater than or equal to 7 characters",
    ],
    maxlength: [
      32,
      "The campaign name must be less than or equal to 32 characters",
    ],
    trim: true,
  },
  description: {
    type: String,
    required: [
      true,
      `A campaign must have a description. 
      Include the reason for starting the campaign
      and what the donations will allow you to accomplish`,
    ],
    minlength: [50, "A description must be at least 50 characters in length"],
    maxlength: [500, "A description must have no more than 500 characters"],
  },
  duration: {
    type: Number,
    required: [true, "A campaign must have a duration"],
    min: [1, "A campaign must last at least 1 day"],
  },
  // beneficiary: {}, Handle when gets more advanced
  // coverPhoto
  // Media
  // References - {link, photo, title}
  course: {
    type: courseSchema,
    required: [true, "A campaign must contain the course details"],
  },
  slug: {
    type: String,
    unique: true,
  },
});
type Campaign = InferSchemaType<typeof campaignSchema>;

// Middleware
campaignSchema.pre("save", function (next) {
  this.slug = slugify(this.name);
  next();
});

export default mongoose.model("Campaign", campaignSchema);
