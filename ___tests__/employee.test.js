const Employee = require("../lib/employee")


test("does the Employee have a name?", () => {
    // test value initialization
    const testValue = "John Doe";

    // process
    const newEmployee = new Employee(testValue, "", "");

    // conclusion
    expect(newEmployee.name).toBe(testValue)
})



describe("test for id", () => {
    const testValue = 15;
    const newEmployee = new Employee("", testValue, "");

    test("does the Employee have a id?", () => {
        expect(newEmployee.id).toBe(testValue)
    })
    test("is the Employee's id a number?", () => {
        expect(typeof newEmployee.id).toBe("number")
    })
    
    test("can we get the Employee id using getId method??", () => {
        expect(newEmployee.getId()).toBe(testValue)
    })
})