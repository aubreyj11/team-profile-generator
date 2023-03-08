const Intern = require("../lib/Intern");

describe('Intern', () => {
    describe ('Initialize', () => {
        it('should set school for Intern', () => {
            const value = "UCI";
            const v = new Intern('hello', 11, 'aubrey@test.com', value);
            
            expect(v.school).toBe(value);
        });

        it('should return Intern from getRole()', () => {
            const value = 'Intern';
            const v = new Intern('hello', 11, 'aubrey@test.com', 'UCI');
            expect(v.getRole()).toBe(value);
        });

        it('should set school from getSchool()', () => {
            const value = 'UCI';
            const v = new Intern('hello', 11, 'aubrey@test.com', value);
            expect(v.getSchool()).toBe(value);
        });
    });
});