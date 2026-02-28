import mongoose, { SchemaTimestampsConfig } from "mongoose";

export interface Item {
  _id: string;
  name: string;
  price: number;
  qtn: number;
  description?: string;
  image?: string;
}

const ItemSchema = new mongoose.Schema<Item & SchemaTimestampsConfig>(
  {
    name: { type: String, required: true },
    price: Number,
    description: String,
    qtn: { type: Number, required: true, default: 0 },
    image: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Item || mongoose.model<Item>("Item", ItemSchema);
