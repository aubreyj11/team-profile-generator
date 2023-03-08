const Engineer = require("../lib/engineer");

describe('Engineer', () => {
    describe ('Initialize', () => {
        it('should set Github username for Engineer', () => {
            const value = "aubreyj11";
            const v = new Engineer('hello', 11, 'aubrey@test.com', value);
            
            expect(v.github).toBe(value);
        });

        it('should return Github username from getGithub()', () => {
            const value = 'aubreyj11';
            const v = new Engineer('hello', 11, 'aubrey@test.com', value);
            expect(v.getGithub()).toBe(value);
        });

        it('should set role from getRole()', () => {
            const value = 'Engineer';
            const v = new Engineer('hello', 11, 'aubrey@test.com', 'UCI');
            expect(v.getRole()).toBe(value);
        });
    });
});