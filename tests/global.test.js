const config = require("./config.js");

config.forEach((problem) => {
    problem.cases.forEach((useCase, index) => {
        test(`${problem.name} : ${index}`, () => {
            expect(problem.func(useCase.input)).toBe(useCase.expected);
        })
    })
})