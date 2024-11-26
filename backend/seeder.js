import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users";
import products from "./data/products";
import User from "./models/userModel";
import Product from "./models/productModel";
import Order from "./models/orderModel";
import connectDB from "./config/db";
dotenv.config();
connectDB();


async function importData() {
    try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
  
      const createdUser = await User.insertMany(users);
  
      const adminUser = createdUser[0]._id;
  
      const sampleProducts = products.map(product => {
          return { ...product, user: adminUser}
      });
  
      await Product.insertMany(sampleProducts);
  
      console.log('Data Import Success!'.green.inverse);
      process.exit();
    } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
  
    }
  }
  async function destroyData() {
    try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
  
      console.log('Data Destroyed Success!'.red.inverse);
      process.exit();
    } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
  
    }
  }
if(process.argv[2] === '-d') {
    destroyData();
}else {
    importData();
}