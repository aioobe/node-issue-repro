import {RRule} from 'rrule';
import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';

console.log(RRule.DAILY);

const app = express();



app.get('/hej', (req, res) => res.send("Hello World!"));

app.listen(9999, () => console.log("started..."));

