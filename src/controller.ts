import { JsonController, Get } from 'routing-controllers'
import Game from './games/board'

@JsonController()
export default class GamesController {

  @Get("/hello")
  main() {
    return {
      hello: 'World'
    }
  }

  @Get("/games")
  async allGames() {
    const games = await Game.find()
    return { games }
  }


}