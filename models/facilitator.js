import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FacilitatorSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    capacity: { type: Number, required: true },
});

export default mongoose.model('Facilitator', FacilitatorSchema);