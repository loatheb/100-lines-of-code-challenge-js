const Promise = require('../index.js')

jest.useFakeTimers();

const TestCase = () => {
  return new Promise(resolve => {
    console.log('first promise')
    setTimeout(() => {
      resolve('second promise')
    }, 1000)
  }).then(info => {
  setTimeout(() => {
    console.log(info)
  }, 1000)
})
}

test('waits 1 second after every log in promise', () => {
  TestCase();

  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(1000);
});