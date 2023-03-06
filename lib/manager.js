const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNum){
        super(name, id, email);
        this.role = "Manager";
        this.officeNum = officeNum;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;