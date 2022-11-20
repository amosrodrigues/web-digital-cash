import { container } from 'tsyringe'

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'

import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'

import { accountsRepository } from '../../modules/cars/repositories/implementations/accountsRepository'
import { IaccountsRepository } from '../../modules/cars/repositories/IaccountsRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)

container.registerSingleton<IaccountsRepository>(
  'accountsRepository',
  accountsRepository,
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
