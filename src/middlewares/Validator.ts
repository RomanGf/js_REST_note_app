import { Validators } from "../validators/index";
import { Request, Response, NextFunction } from "express";
import pkg from "http-errors";
import { errors } from "express-validation";

export const Validator = function (validator: string) {
  console.log(pkg[404]);
  if (!Validators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`);

  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const validated = await Validators[validator].validateAsync(req.body);

      req.body = validated;
      next();
    } catch (err: any) {
      if (err.isJoi) return next(new pkg[422](err.message));
      next(new pkg[500](err.message));
    }
  };
};
