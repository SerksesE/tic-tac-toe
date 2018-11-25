import 'reflect-metadata'
import { createKoaServer } from "routing-controllers"
import GamesController from "./controller"
import setupDb from './db'

const port = process.env.PORT || 4001

const app = createKoaServer({
  controllers: [GamesController]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))
