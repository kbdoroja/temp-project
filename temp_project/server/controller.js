import Product from './models/Product.js';
import User from './models/User.js';
import OrderTransaction from './models/OrderTransaction.js';

// create new product
export async function createProduct(productData) {
  const product = new Product(productData);
  try {
    const savedProduct = await product.save();
    return savedProduct;
  } catch (err) {
    throw new Error('Error saving product: ' + err.message);
  }
}

// new order transaction
export async function createOrderTransaction(orderData) {
  const order = new OrderTransaction(orderData);
  try {
    const savedOrder = await order.save();
    return savedOrder;
  } catch (err) {
    throw new Error('Error saving order transaction: ' + err.message);
  }
}

// create a new user
export async function createUser(userData) {
  const user = new User(userData);
  try {
    const savedUser = await user.save();
    return savedUser;
  } catch (err) {
    throw new Error('Error saving user: ' + err.message);
  }
}
