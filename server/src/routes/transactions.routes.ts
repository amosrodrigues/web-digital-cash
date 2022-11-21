import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAutheticated'
import { CreateTransactioController } from '../modules/transactions/useCases/createTransaction/CreateTransactionsController'

const transactionsRoutes = Router()

const createSpecificationController = new CreateTransactioController()

transactionsRoutes.use(ensureAuthenticated)
transactionsRoutes.post('/', createSpecificationController.handle)

export { transactionsRoutes }
