const express = require("express");
const routerApi = require("./routes")
const { logErrors,errorHandler } = require("./middlewares/errorHandle")
const app = express();
const port = 3000;

app.use(express.json());


routerApi(app);
// app.get("/", (req,res)=>{
//   res.send("Working")
// })

app.use(logErrors);
app.use(errorHandler)




app.listen(port, ()=>{
  console.log("Puerto " + port)
})
