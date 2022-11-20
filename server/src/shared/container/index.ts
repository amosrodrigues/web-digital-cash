import { container } from 'tsyringe'

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'

import { transactionsRepository } from '../../modules/transactions/repositories/implementations/transactionsRepository'
import { ItransactionsRepository } from '../../modules/transactions/repositories/ItransactionsRepository'

import { accountsRepository } from '../../modules/cars/repositories/implementations/accountsRepository'
import { IaccountsRepository } from '../../modules/cars/repositories/IaccountsRepository'

container.registerSingleton<ItransactionsRepository>(
  'transactionsRepository',
  transactionsRepository,
)

container.registerSingleton<IaccountsRepository>(
  'accountsRepository',
  accountsRepository,
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
