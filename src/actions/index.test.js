const index = require("./index")
// @ponicode
describe("index.setRecipes", () => {
    test("0", () => {
        let callFunction = () => {
            index.setRecipes(1000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.setRecipes(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.setRecipes(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.setRecipes(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
