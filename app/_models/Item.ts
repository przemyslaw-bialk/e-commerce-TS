import mongoose, { SchemaTimestampsConfig } from "mongoose";

export interface Item {
  name: string;
  price: number;
  qtn: number;
  description?: string;
}

const ItemSchema = new mongoose.Schema<Item & SchemaTimestampsConfig>(
  {
    name: { type: String, required: true },
    price: Number,
    description: String,
    qtn: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Item || mongoose.model<Item>("Item", ItemSchema);
