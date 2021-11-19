export class BadRequestException {
  message = 'Bad Request';

  constructor(message: string) {
    this.message = message;
  }
}

export class ForbiddenException {
  message = 'Forbidden';

  constructor(message: string) {
    this.message = message;
  }
}

export class NotFoundException {
  message = 'Not found';

  constructor(message: string) {
    this.message = message;
  }
}

export class UnauthorizedException {
  message = 'Unauthorized';

  constructor(message: string) {
    this.message = message;
  }
}
