// unit.test.js

// const functions = require('../code-to-unit-test/unit-test-me.js');
const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } = require('../code-to-unit-test/unit-test-me.js');


// TODO - Part 2

// Phone test
test('correct phone # 1', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('correct phone # 2', () => {
    expect(isPhoneNumber('(123)456-7890')).toBe(true);
});
test('incorrect phone # 3', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});
test('incorrect phone # 4', () => {
    expect(isPhoneNumber('1')).toBe(false);
});


// Email test
test('correct email # 1', () => {
    expect(isEmail('rul043@ucsd.edu')).toBe(true);
});
test('correct email # 2', () => {
    expect(isEmail('a@a.aa')).toBe(true);
});
test('incorrect email # 3', () => {
    expect(isEmail('a@a.a')).toBe(false);
});
test('incorrect email # 4', () => {
    expect(isEmail('a')).toBe(false);
});