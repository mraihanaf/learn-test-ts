import { sayHello } from "../index"

describe("first test case!", () => {
	it("should say Hello World!", () => {
		expect(sayHello()).toBe("Hello World!")
	})

	it.todo("make some stuff!")
})
