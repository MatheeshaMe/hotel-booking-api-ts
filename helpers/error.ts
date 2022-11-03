export const createError = (args:{status: number, message: any}): Error => {
  const err: Error = new Error();
  err.message = args.message;
  return err;
};
