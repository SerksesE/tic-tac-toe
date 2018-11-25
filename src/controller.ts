import { JsonController, Get, Post, HttpCode, Body, Param } from 'routing-controllers'
import Game from './games/board'

@JsonController()
export default class GamesController {

  @Get("/games")
  allGames = async () => {
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

}