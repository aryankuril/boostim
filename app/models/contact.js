import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
