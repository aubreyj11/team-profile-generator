const Manager = require('../lib/manager');

describe('Engineer', () => {
    describe ('Initialize', () => {
        it('should set office number for Manager', () => {
            const value = "100";
            const v = new Manager('hello', 11, 'aubrey@test.com', value);
            
            expect(v.officeNum).toBe(value);
        });


        it('should set role from getRole()', () => {
            const value = 'Manager';
            const v = new Manager('hello', 11, 'aubrey@test.com', 'UCI');
            expect(v.getRole()).toBe(value);
        });
    });
});