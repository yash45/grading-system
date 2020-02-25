const Mark = require('../index.js')

describe( 'the grade function',()=>{
    test('mark is a number', ()=>{
        expect(typeof(Mark.mark)).toBe('number')
    })
    test('input is validated',()=>{
        expect(Mark.isValid()).toBe(true)
    })
    test('get the grade', ()=>{
        expect(Mark.grade()).toBe('E')
    })
})