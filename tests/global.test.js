const config = require("./config.js");

config.forEach((problem) => {
    problem.cases.forEach((useCase, index) => {
        test(`${problem.name} : ${index}`, () => {
            if (Array.isArray(useCase.expected)) {
                return expect(useCase.expected).toContain(problem.func(useCase.input));
            }

            if (Array.isArray(useCase.inputs)) {
                return expect(problem.func(...useCase.inputs)).toBe(useCase.expected);
            }

            return expect(problem.func(useCase.input)).toBe(useCase.expected);
        })
    })
})