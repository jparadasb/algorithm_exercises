# Algorithm Exercises

This repo is for studying purposes. I developed this small system to practice and resolve algorithm exercises and efficiently test several use cases for each problem.

# Getting started

`git clone git@github.com:jparadasb/algorithm_exercises.git`

`npm install`

# How it works

## config.js
[tests/config.js](tests/config.js)

This is composed by a config file witch have an structure to define the use cases for each problem

```js
{
  "name": "BinaryGap" //[name of exercise, this will be shown when the unit test be running],
  "func": require("../exercises/BinaryGap.js") //[require sentence to import the solution function],
  "cases": [
    {
      "input": 1041 //[input for the solution function],
      "expected": 5 //[return expected, this could be a single result or an array]
    }
  ],
}
```

## global.test.js
[tests/global.test.js](tests/global.test.js)

The config is loaded for the global.test file using this function.

```js
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
```

# Utils

## performace.logger.js
[utils/performace.logger.js](utils/performace.logger.js)

This logger allows for tracking how much time the execution took.

Use example: 
```js

const PerformaceLogger = require('utils/performace.logger.js');

const logger = new PerformaceLogger('Exercise 1');

...

// end of execution

...

logger.stop()

// Exercise 1
// Took 1000ms
// Took 1s

```

# Unit Test

`npm run test`

![Screen Shot 2021-12-24 at 02 49 54](https://user-images.githubusercontent.com/5114020/147321873-54ad7a4a-7041-49e5-94d5-a7dc86af07f4.png)
