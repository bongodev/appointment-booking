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
export class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = 400;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = this.constructor.name;
    this.status = 401;
    Error.captureStackTrace(this, this.constructor);
  }
}
export class ForbiddenError extends Error {
  constructor(message = 'Forbidden') {
    super(message);
    this.name = this.constructor.name;
    this.status = 403;
    Error.captureStackTrace(this, this.constructor);
  }
}
