import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAutheticated'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'

const accountsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

accountsRoutes.use(ensureAuthenticated)
accountsRoutes.post('/', createSpecificationController.handle)

export { accountsRoutes }
