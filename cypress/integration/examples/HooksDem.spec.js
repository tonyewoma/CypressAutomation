/// <reference types="cypress" />

describe('My Test Suite', () => {


  before(() => {
    // runs once before all tests in the block
  })

  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
  })

  it('Searching', () => {
    expect(true).to.equal(false)
  })
})