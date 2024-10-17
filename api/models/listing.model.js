import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    disease_description: {
      type: String,
      required: true,
    },
    past_treatment: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    insurance_no: {
      type: Number,
      required: true,
    },
    bloodpressure_mm_Hg: {
      type: Number,
      required: true,
    },
    heartrate_bpm: {
      type: Number,
      required: true,
    },
    labreport: {
      type: Boolean,
      required: true,
    },
    diagnosed: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;