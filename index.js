import express from 'express';
import dotenv from "dotenv"
import Mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from "./route/book.route.js"
import UserRoute from "./route/user.route.js"
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT=process.env.PORT || 4000;
const URI = process.env.MongoDBURI

// connect to mongodb
try {
    Mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    });
    console.log('Connected to MongoDB');
} catch (error) {
    console.error("Error: ", error); 
}

// defining routes
app.use("/book", bookRoute )
app.use("/user", UserRoute )

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});