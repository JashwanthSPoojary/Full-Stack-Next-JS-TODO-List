import mongoose from "mongoose"

export const ConnectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://jashu:uTTUXbXHmq2CQX3J@cluster0.dgujh09.mongodb.net/todoApp');
    } catch (error) {
        console.log("error",error);
    }

} 