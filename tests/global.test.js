const config = require("./config.js");

config.forEach((problem) => {
    problem.cases.forEach((useCase) => {
        test(problem.name, () => {
            expect(problem.func(useCase.input)).toBe(useCase.expected);
        })
    })
})