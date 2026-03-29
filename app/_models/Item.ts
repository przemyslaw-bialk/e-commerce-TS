import mongoose, { SchemaTimestampsConfig } from "mongoose";

export interface Item {
  _id: string;
  name: string;
  price: number;
  stock: number;
  description?: string;
  image?: string;
}

const ItemSchema = new mongoose.Schema<Item & SchemaTimestampsConfig>(
  {
    name: { type: String, required: true },
    price: Number,
    description: String,
    stock: { type: Number, required: true, default: 0 },
    image: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Item || mongoose.model<Item>("Item", ItemSchema);
