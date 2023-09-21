import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A campaign must have a name"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "A campaign must have a description"],
    trim: true,
  },
  frequency: {
    type: String,
    required: [true, "A campaign must have a frequency"],
    enum: {
      values: ["WEEKLY", "MONTHLY", "YEAR"],
      message: "{VALUE} is not an accepted frequency type",
    },
  },
  amountRaised: {
    type: Number,
    default: 0,
  },
  amountGoal: {
    // type: Number,
    // max: [5_000_000, "A goal for a campaign should not exceed 5 Million"],
    // min: [30_000, "A campaign goal should be  or exceeds $30,000"]
  },
});
