//1.import mongoose
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://smittykjohnson:happy@cluster0.fofn4nk.mongodb.net/Openbatchdb1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db");
})
.catch((error)=>{
    console.log(error);
});