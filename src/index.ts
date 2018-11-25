import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import GamesController from "./controller"

const port = process.env.PORT || 4001

const app = createKoaServer({
   controllers: [GamesController]
})

app.listen(port, () => console.log(`Listening on port ${port}`))