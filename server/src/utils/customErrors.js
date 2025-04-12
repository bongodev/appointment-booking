export class DuplicateResourceError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = 409;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = 404;
    Error.captureStackTrace(this, this.constructor);
  }
}
