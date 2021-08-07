import StringValueObject from '@shared/domain/string.vo';

export default class UserPassword extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
