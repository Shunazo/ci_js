const helloWorld = require("./hello_world");

test("Debe devolver 'Hello World!'", () => {
    expect(helloWorld()).toBe("Hello World!");
});
