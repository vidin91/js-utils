import {assert} from 'chai';
import autobind from '../../src/decorators/autobind';

describe('autobind', function () {
  it('should bind class methods correctly', function () {
    @autobind
    class User {
      constructor(name) {
        this.name = name;
      }

      getName() {
        return this.name;
      }
    }

    let user = new User('Milos');
    let ref = user.getName;
    assert.equal(user.getName(), 'Milos');
    assert.equal(ref(), 'Milos');
  });
});
