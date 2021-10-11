import * as gameService from "./gameService"

// Shuffle est la seule fonction impure

describe("Game service", () => {
  test("should init a deck", () => {
    const deck = gameService.initDeck()
    //, goldCount=0,silverCount=0,clothCount=0,spiceCount=0,leatherCount=0,camelCount=0
    const diamonds = deck.filter((Cards) => Cards === "diamonds")
    const diamondsCount = diamonds.length

    expect(diamondsCount).toBe(6)
  })

  test("should draw cards", () => {
    const deck = gameService.initDeck()
    const Cards = gameService.drawCards(deck, 1)
    expect(Cards[0]).not.toBe(0)
  })

  test("should put camels from hand to herd", () => {
    const game = {
      _players: [
        { hand: ["camel", "gold"], camelsCount: 0 },
        { hand: ["gold", "gold"], camelsCount: 0 },
      ],
    }
    gameService.putCamelsFromHandToHerd(game)

    expect(game._players[0].hand.length).toBe(1)
    expect(game._players[0].hand).toStrictEqual(["gold"])
    expect(game._players[0].camelsCount).toBe(1)

    expect(game._players[1].hand.length).toBe(2)
    expect(game._players[1].hand).toStrictEqual(["gold", "gold"])
    expect(game._players[1].camelsCount).toBe(0)

    const game2 = {
      _players: [
        { hand: ["camel", "gold"], camelsCount: 0 },
        { hand: ["camel", "camel"], camelsCount: 0 },
      ],
    }
    gameService.putCamelsFromHandToHerd(game2)

    expect(game2._players[0].hand.length).toBe(1)
    expect(game2._players[0].hand).toStrictEqual(["gold"])
    expect(game2._players[0].camelsCount).toBe(1)

    expect(game2._players[1].hand.length).toBe(0)
    expect(game2._players[1].hand).toStrictEqual([])
    expect(game2._players[1].camelsCount).toBe(2)
  })
})
