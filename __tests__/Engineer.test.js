const Engineer = require('../lib/Engineer');

describe('Engineer Info', () => {
  describe('Initialization', () => {
    it('Create an object using id and name', () => {
      const employee = new Engineer(202, 'Sue');

      expect(employee.id).toEqual(202);
      expect(employee.name).toEqual('Sue');
    });
  });
});
