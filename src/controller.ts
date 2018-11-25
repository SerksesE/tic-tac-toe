import {Controller, Get} from 'routing-controllers'

@Controller()
export default class GamesController {

    @Get("/hello")
    main() {
       return {
         hello: 'World'
       }
    }

}