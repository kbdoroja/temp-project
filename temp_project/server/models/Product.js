import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  productType: { type: Number, enum: [1, 2], required: true }, // 1 = Crop, 2 = Poultry
  productQuantity: { type: Number, required: true, min: 0 },
  productPrice: { type: Number, required: true, min: 0 },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
