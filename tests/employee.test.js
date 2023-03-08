const Employee = require('../lib/employee');

describe('Employee', () => {
    describe ('Initialize', () => {
        it('should set name for employee from questions prompted', () => {
            const name = "Aubrey";
            const n = new Employee(name);
            
            expect(n.name).toBe(name);
        });

        it('should set ID for employee', () => {
            const value = 50;
            const v = new Employee('hello', value);
            expect(v.id).toBe(value);
        });

        it('should set email for employee', () => {
            const value = 'aubrey@test.com';
            const v = new Employee('hello',11, value);
            expect(v.email).toBe(value);
        });
    });
});