const stringConcat = './stringConcat';

test('concats "Hello " with "world!" into a single string', () => {
    expect(stringConcat("Hello ", "world!")).toBe("Hello world!");
});