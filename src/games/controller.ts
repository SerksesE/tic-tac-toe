import { JsonController, Get, Post, HttpCode, Body, Param, Put, NotFoundError, BadRequestError } from 'routing-controllers'
import Game from './board'
import { moves, colors } from './logic';

@JsonController()
export default class GamesController {

  @Get("/games")
  async allGames() {
    const games = await Game.find()
    return { games }
  }

  @Get("/games/:id")
  findGame(
    @Param("id") id: number
  ) {
    return Game.findOne(id)
  }

  @Post("/games")
  @HttpCode(201)
  createGame(
    @Body() game: Game
  ) {
    return game.save()
  }

  @Put("/games/:id")
  @HttpCode(201)
  async updateGame(
    @Param("id") id: number,
    @Body() update: Partial<Game>
  ) {
    const game = await Game.findOne(id)
    if (!game)
      throw new NotFoundError('Game not found')

    if (update.board) {
      if (moves(game.board, update.board) !== 1)
        throw new BadRequestError("Only one move allowed!")
    }
    if (update.color) {
      if (!colors.includes(update.color))
        throw new BadRequestError("Color unavailable!")
    }
    return Game.merge(game, update).save()
  }
}