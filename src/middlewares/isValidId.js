import createHttpError from "http-errors";

export const isValidId = (paramName) => async (req. res. next) => {
const id = req.params[paramName];
if (!isValidId(id)) {
   return next(createHttpError(400, `Invalid ${paramName}`)); 
}
next();
};