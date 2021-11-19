export class NotFoundException {
  error = 'Not found';

  constructor(error: string) {
    this.error = error;
  }
}
