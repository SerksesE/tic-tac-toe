import {GamesController, Get} from 'routing-controllers'

@GamesController()
export default class MainController {

    @Get("/hello")
    main() {
       return {
         hello: 'World'
       }
    }

}