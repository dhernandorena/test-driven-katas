const {expect} = require('chai')
const twoSum = require('./twoSum')

describe('twoSum', () => {
    it('returns an array', () => {
        output = Array.isArray(twoSum([1,2,3],5))
        expect(output).to.equal(true)
    })
    it('length of array should alwayd be 2', () => {
        output = twoSum([1,2,3],5)
        expect(output.length).to.equal(2)
    })
})