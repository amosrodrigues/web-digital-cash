import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ListtransactionsController } from '../modules/cars/useCases/listtransactions/ListCategoryController'
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'

const transactionsRoutes = Router()

const upload = multer({
  dest: './tmp',
})

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listtransactionsController = new ListtransactionsController()

transactionsRoutes.post('/', createCategoryController.handle)

transactionsRoutes.get('/', listtransactionsController.handle)

transactionsRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
)

export { transactionsRoutes }
