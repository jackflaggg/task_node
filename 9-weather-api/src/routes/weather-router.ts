import {Router} from "express";
import {getWeatherController} from "../controllers/getWeather";
import {cityParamsValidator} from "../validators/city-validator";
import {inputCheckErrorsMiddleware} from "../validators/inputcheckerror-middleware";

export const weatherRouter: Router = Router();

weatherRouter.get("/:city", cityParamsValidator, inputCheckErrorsMiddleware, getWeatherController)