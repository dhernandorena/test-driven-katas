const {expect} = require('chai');
const wrap = require('./wrap')

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns a string', () => {
    const wrapped = wrap('', 15)
    expect(wrapped).to.be.a('string')
  });

  it('Returns a string of length equal to or greater than the initial string', () => {
    expect(wrap('this is a test', 10)).to.have.length.above(
    13)
  });
  it('No single line has length longer than max length', () => {
    const originalString = 'Hello this is a test. It is really a test.';
    const endString = wrap(originalString, 8);
    const endArray = endString.split('\n');
    for (let i = 0; i<endArray.length; i++) {
      expect(endArray[i].length - 1).to.be.below(8);
    }
  })
});

