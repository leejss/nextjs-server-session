export class Fail<L> {
  readonly error: L;
  readonly _tag: "Fail" = "Fail";
  constructor(value: L) {
    this.error = value;
  }
}

export class Success<R> {
  readonly value: R;
  readonly _tag: "Success" = "Success";
  constructor(value: R) {
    this.value = value;
  }
}

export type Result<R, L = never> = Fail<L> | Success<R>;

// Constructors
export const fail = <L>(left: L): Result<never, L> => {
  return new Fail(left);
};
export const success = <R>(right: R): Result<R> => {
  return new Success(right);
};

// Guards
export const isFail = <R, L>(either: Result<R, L>): either is Fail<L> => {
  return either._tag === "Fail";
};
export const isSuccess = <R, L>(either: Result<R, L>): either is Success<R> => {
  return either._tag === "Success";
};
