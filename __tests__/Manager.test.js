const Manager = require('../lib/Manager');

describe('Manager Info', () => {
  describe('Initialization', () => {
    it('Create an object using id and name', () => {
      const employee = new Manager(404, 'Igor');

      expect(employee.id).toEqual(404);
      expect(employee.name).toEqual('Igor');
    });
  });
});
