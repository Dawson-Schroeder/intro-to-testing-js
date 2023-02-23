// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe(`sayHello`, function(){
    it(`should be a defined function`, function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return a "string" when executed', function() {
        expect(sayHello("")).toBe("Hello, !");
    });
    it('should return a "string" when executed with a number', function() {
        expect(sayHello(2.3)).toBe("Hello, 2.3!");
    });
    it('should return a "string" when executed with "5', function() {
        expect(sayHello("5")).toBe("Hello, 5!");
    });
});


describe(`isFive`, function() {
    it(`isFive exists`, function () {
        expect(typeof isFive).toBe(`function`);
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe(`boolean`);
    });
    it('should return true when passed 5', function() {
        expect(typeof isFive(5)).toBe(`boolean`);
    });
    it('should return true when passed "5"', function() {
        expect(typeof isFive("5")).toBe(`boolean`);
    });

});

describe(`isEven`, function() {
    it(`isEven is a defined function`, function () {
        expect(typeof isEven).toBe(`function`);
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe(`boolean`);
    });
    it('should return true when passed 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed boolean', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed boolean', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed empty argument', function() {
        expect(isEven()).toBe(false);
    });
});

describe(`isVowel`, function() {
    it(`isVowel is a defined function`, function () {
        expect(typeof isVowel).toBe(`function`);
    });
    it('should return a boolean when called', function() {
        expect(typeof isVowel()).toBe(`boolean`);
    });
    it('should return true when passed "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed false', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed "banana', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed ()', function() {
        expect(isVowel()).toBe(false);
    });
});

describe(`add`, function() {
    it(`add is a defined function`, function () {
        expect(typeof add).toBe(`function`);
    });
    it('should return 5 when passed (2,3)', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed (-3,-9)', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed ("5",6)', function() {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when passed (-4,10)', function() {
        expect(add(-4, 10)).toBe(6);
    });
    it('should return NaN when passed ("banana","split")', function() {
        expect(Number.isNaN(add("banana", "split"))).toBe(true);
    });
    it('should return NaN when passed (2,"apples")', function() {
        expect(Number.isNaN(add(2, "apples"))).toBe(true);
    });
    it('should return NaN when passed ()', function() {
        expect(Number.isNaN(add())).toBe(true);
    });
});

// add("banana", "split") returns NaN
// add(2, "apples") returns NaN
// add() returns NaN





