import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import router from "./routes/movieRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import path from "path"; // importa path

dotenv.config();
const app = express();

//middlewares
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

//routes
app.use("/api/movies", router);

app.use(errorHandler);

//start server
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    await connectDB();
    app.listen( PORT, ()=>{
        console.log(`Server running on port ${PORT}`);        
    } )
};

startServer();

export default app;