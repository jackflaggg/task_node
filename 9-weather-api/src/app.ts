import express, {Express} from 'express'
import cors from 'cors'

import {weatherRouter} from "./routes/weather-router";

export const app: Express = express();

app.use(cors());

app.use('/weather', weatherRouter);