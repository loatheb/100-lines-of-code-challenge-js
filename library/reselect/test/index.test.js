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

describe('[Reselect]: test case for selector and recomputations', () => {
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
  test('reselect works as expect', () => {
    subtotalSelector(exampleState)
    taxSelector(exampleState)
    totalSelector(exampleState)

    subtotalSelector(exampleState)
    taxSelector(exampleState)
    totalSelector(exampleState)

    subtotalSelector(exampleState)
    taxSelector(exampleState)
    totalSelector(exampleState)

    expect(subtotal).toBe(2.15)
    expect(tax).toBe(0.172)
    expect(total).toEqual({ total: 2.322 })
    expect(subtotalSelector.recomputations).toBe(1)
    expect(taxSelector.recomputations).toBe(1)
    expect(totalSelector.recomputations).toBe(1)
  })
})
