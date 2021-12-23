const config = require("./config.js");

config.forEach((problem) => {
    problem.cases.forEach((useCase, index) => {
        test(`${problem.name} : ${index}`, () => {
            if (Array.isArray(useCase.expected)) {
                return expect(useCase.expected).toContain(problem.func(useCase.input));
            }

            return expect(problem.func(useCase.input)).toBe(useCase.expected);
        })
    })
})