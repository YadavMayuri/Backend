console.log("Hello World");
import express from "express";
import { mayuri, Swaraj, Anu, Krishnan, megha } from './controllers/All-Controllers.js';

const app = express();

app.get('/mayuri', mayuri);
app.get('/anu', Anu);
app.get('/megha', megha);
app.get('/kirshna', Krishnan);
app.get('/swaraj', Swaraj); // pass two parameters, first is path, second is function
// app.post();
// app.patch();
// app.put();
// app.delete();



app.listen(8000); // port