const Intern = require('../lib/Intern');

describe('Intern Info', () => {
  describe('Initialization', () => {
    it('Create an object using id and name', () => {
      const employee = new Intern(303, 'Daphne');

      expect(employee.id).toEqual(303);
      expect(employee.name).toEqual('Daphne');
    });
  });
});
