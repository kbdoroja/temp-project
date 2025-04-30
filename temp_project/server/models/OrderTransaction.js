import mongoose from 'mongoose';

const orderTransactionSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  orderQuantity: { type: Number, required: true, min: 1 },
  orderStatus: { type: Number, enum: [0, 1, 2], default: 0 }, // 0 = Pending, 1 = Completed, 2 = Cancelled
  email: { type: String, required: true },
  dateOrdered: { type: Date, default: Date.now },
  time: { type: String, required: true },
});

const OrderTransaction = mongoose.model('OrderTransaction', orderTransactionSchema);

export default OrderTransaction;
