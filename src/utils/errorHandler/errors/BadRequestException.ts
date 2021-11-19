export class BadRequestException {
  error = 'Bad Request';

  constructor(error: string) {
    this.error = error;
  }
}
