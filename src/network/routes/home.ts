import { Response, Request, Router } from 'express'

import { response } from '../response'

const Home = Router()

Home.route('').get((req: Request, res: Response) => {
  response({
    error: false,
    server: 'Backend 02',
    message: 'Welcome Backend 02',
    method: 'Home',
    res,
    status: 200
  })
})

export { Home }
