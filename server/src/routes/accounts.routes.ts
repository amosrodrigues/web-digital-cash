import { Router } from 'express'

import { CreateAccountController } from '../modules/accounts/useCases/createAccount/CreateAccountController'

const accountsRoutes = Router()

const createCategoryController = new CreateAccountController()

accountsRoutes.post('/', createCategoryController.handle)
accountsRoutes.get('/', createCategoryController.handle)

export { accountsRoutes }
