import { param } from "express-validator";

export const cityParamsValidator = param('city')
    .isString()
    .trim()
    .withMessage('this is not string')
    .isLength({max: 20})
    .withMessage('more then 20');