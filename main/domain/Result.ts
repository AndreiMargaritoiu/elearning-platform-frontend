interface OkResult<X> {
  isOk: true;
  value?: X;
}

interface ErrorResult<Y> {
  isOk: false;
  error: Y;
}

export type Result<X, Y> = OkResult<X> | ErrorResult<Y>;

export const resultFormatter = {
  ok<X, Y>(value?: X): Result<X, Y> {
    return { isOk: true, value };
  },
  error<X, Y>(error: Y): Result<X, Y> {
    return {
      isOk: false,
      error,
    };
  },
};
