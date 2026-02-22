import mongoose from "mongoose";

export interface Item {
  name: string;
  description?: string;
  qtn: number;
}

const ItemSchema = new mongoose.Schema<Item>({
  name: { type: String, required: true },
  description: String,
  qtn: { type: Number, required: true },
});

export default mongoose.models.Item || mongoose.model<Item>("Item", ItemSchema);
