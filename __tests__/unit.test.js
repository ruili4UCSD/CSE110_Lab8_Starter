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


// password test
test('Strong password # 1', () => {
    expect(isStrongPassword('Waaa111___')).toBe(true);
});
test('Strong password # 2', () => {
    expect(isStrongPassword('waaa111111')).toBe(true);
});
test('Weak password # 3', () => {
    expect(isStrongPassword('w')).toBe(false);
});
test('SWeak password # 4', () => {
    expect(isStrongPassword('?????')).toBe(false);
});


// Date test
test('correct date # 1', () => {
    expect(isDate('11/11/1111')).toBe(true);
});
test('correct date # 2', () => {
    expect(isDate('1/1/1111')).toBe(true);
});
test('incorrect date # 3', () => {
    expect(isDate('1/1/1')).toBe(false);
});
test('incorrect date # 4', () => {
    expect(isDate('?????')).toBe(false);
});


// Color test
test('correct color # 1', () => {
    expect(isHexColor('#F00')).toBe(true);
    expect(isHexColor('#fff')).toBe(true);
    expect(isHexColor('#FFFFFF')).toBe(true);
});
test('correct color # 2', () => {
    expect(isHexColor('#000000')).toBe(true);
});
test('incorrect color # 3', () => {
    expect(isHexColor('F000')).toBe(false);
});
test('incorrect color # 4', () => {
    expect(isHexColor('#0000000')).toBe(false);
});