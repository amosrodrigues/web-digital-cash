import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAutheticated'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'

const transactionsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

transactionsRoutes.use(ensureAuthenticated)
transactionsRoutes.post('/', createSpecificationController.handle)

export { transactionsRoutes }
