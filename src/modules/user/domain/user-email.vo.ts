import StringValueObject from '@shared/domain/string.vo';

const REGEX_EMAIL_VALIDATION = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default class UserEmail extends StringValueObject {
  constructor(email: string) {
    super(email);
    this.ensureIsValidEmail(email);
  }

  private ensureIsValidEmail(email: string): void {
    if (!REGEX_EMAIL_VALIDATION.test(email)) throw new Error('Invalid Email');
  }
}
