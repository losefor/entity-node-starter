export class UnauthorizedException {
  error = 'Unauthorized';

  constructor(error: string) {
    this.error = error;
  }
}
