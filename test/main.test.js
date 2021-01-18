import IMP from '../build/main';

const imp = new IMP();
imp.init('imp64636919');

test("Just testing", async () => {
  expect(await imp.requestPay())
    .toBe('Success'); 
});

test("Request payment", async () => {

});