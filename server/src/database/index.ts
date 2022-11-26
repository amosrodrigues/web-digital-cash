import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { User } from '../modules/accounts/entities/User'
import { Account } from '../modules/accounts/entities/Account'
import { Transaction } from '../modules/transactions/entities/Transactions'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'docker',
  password: 'ngcash',
  database: 'ngcash',
  synchronize: true,
  logging: true,
  entities: [User, Account, Transaction],
  migrations: ['./src/database/migrations/*.ts'],
  subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
