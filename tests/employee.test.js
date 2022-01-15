const Employee = require('../lib/employee');

describe('Employee Info', () => {
  describe('Initialization', () => {
    it('Create an object using id and name', () => {
      const employee = new Employee(101, 'John');

      expect(employee.id).toEqual(101);
      expect(employee.name).toEqual('John');
    });
  });
});
