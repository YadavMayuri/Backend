console.log("Hello World");
import express from "express";
import morgan from "morgan";


import { mayuri, abc, Anu, Krishnan, megha } from './controllers/All-Controllers.js';
import router from "./routes/UserRoutes.js";
import mongoose from "mongoose";


const app = express();

app.use(morgan('dev')); // use() - middleware
app.use(express.json()); // data to parse
app.use('/api/v1', router);

mongoose.connect('mongodb+srv://mayuriyadav54:HGU1ZbJCNcqlTu0z@cluster0.s9gcceb.mongodb.net/awdizDB')
.then(()=> console.log("DB Connected"))
.catch((err) => console.log("DB Error =>", err));

// app.get('/mayuri', mayuri);
// app.get('/anu', Anu);
// app.get('/megha', megha);
// app.get('/kirshna', Krishnan);
// app.get('/abc', abc); // pass two parameters, first is path, second is function
// app.post();
// app.patch();
// app.put();
// app.delete();



app.listen(8000, () => console.log("Working on port 8000")); // port