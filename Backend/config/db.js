import mongoose  from "mongoose";

export const connectDB = async()=>
{
    await mongoose.connect('mongodb+srv://dibasshyamal:admin123@cluster0.i2qvz.mongodb.net/food_delevery').then(()=>console.log("db connected"));
}
