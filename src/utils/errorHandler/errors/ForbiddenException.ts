export class ForbiddenException {
  error = 'Forbidden';

  constructor(error: string) {
    this.error = error;
  }
}
