import { main } from './main'
import { RawInput } from './inputs/vanilla'

describe('main()', () => {
  it('handles a good input', async () => {
    const input: RawInput = {
      ID: '123',
      DESC: 'Something',
      QTY: 300,
      OPTIONS: ['A', 'B', 'C'],
      DATE: '2020-10-10',
    }

    const result = await main(JSON.stringify(input))

    expect(JSON.parse(result)).toMatchInlineSnapshot(`
      Object {
        "allowance": 1,
        "description": "Something",
        "id": "123",
        "options": Array [
          "a",
          "b",
          "c",
        ],
      }
    `)
  })

  it.skip('handles a partial input', async () => {
    const input = {
      ID: '123',
      DESC: 'Something',
      QTY: '300',
      DATE: '2020-10-10',
    }

    const result = await main(JSON.stringify(input))

    expect(JSON.parse(result)).toMatchInlineSnapshot(`
      Object {
        "allowance": 1,
        "description": "Something",
        "id": "123",
        "options": Array [],
      }
    `)
  })

  it.skip('rejects an invalid input', async () => {
    const input = {
      ID: '123',
      DESC: 'Something',
      DATE: '2020-10-10',
    }

    await expect(
      main(JSON.stringify(input))
    ).rejects.toThrowErrorMatchingInlineSnapshot(`"QTY is a required field"`)
  })

  // Add an output value?
  // Change date to epochMS?
})
