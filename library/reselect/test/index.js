const assert = require('assert')
const createSelector = require('..')

const shopItemsSelector = state => state.shop.items
const taxPercentSelector = state => state.shop.taxPercent

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0),
)

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100),
)

const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax }),
)

const exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ],
  },
}

const subtotal = subtotalSelector(exampleState)
const tax = taxSelector(exampleState)
const total = totalSelector(exampleState)

subtotalSelector(exampleState)
taxSelector(exampleState)
totalSelector(exampleState)

subtotalSelector(exampleState)
taxSelector(exampleState)
totalSelector(exampleState)

subtotalSelector(exampleState)
taxSelector(exampleState)
totalSelector(exampleState)

assert.equal(subtotal, 2.15)
assert.equal(tax, 0.172)
assert.deepEqual(total, { total: 2.322 })
assert.equal(subtotalSelector.recomputations, 1)
assert.equal(taxSelector.recomputations, 1)
assert.equal(totalSelector.recomputations, 1)

console.log('all test passed')
