import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js";
import { errorHandler, notFound} from './middleware/errorMiddleware.js'

dotenv.config();

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running....");
});



app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(
    `Server is running ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  );
});
