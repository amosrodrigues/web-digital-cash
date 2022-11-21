import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAutheticated'
import { CreateTransactioController } from '../modules/transactions/useCases/createTransaction/CreateTransactionsController'

const transactionsRoutes = Router()

const createSpecificationController = new CreateTransactioController()

transactionsRoutes.post(
  '/',
  ensureAuthenticated,
  createSpecificationController.handle,
)

export { transactionsRoutes }
