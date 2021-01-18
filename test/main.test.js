import Main from '../build/main';

test("initial test", () => {
  const main = new Main('test');

  expect(main.getA())
    .toBe('test'); 
});