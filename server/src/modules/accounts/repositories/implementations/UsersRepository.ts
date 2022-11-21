import { Repository } from 'typeorm'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

import { AppDataSource } from '../../../../database'
import { Account } from '../../entities/Account'

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }

  async insertBalance(balance: number): Promise<string> {
    const { identifiers } = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Account)
      .values([{ balance }])
      .execute()

    return identifiers[0].id
  }

  async create({ username, password, id }: ICreateUserDTO): Promise<void> {
    const accountId = await this.insertBalance(100)

    const user = this.repository.create({
      username,
      password,
      id,
      accountId,
    })

    await this.repository.save(user)
  }

  async findByUserName(username: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { username },
      relations: ['account'],
    })
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { id },
      relations: ['account'],
      select: {
        id: true,
        account: { balance: true, id: true },
        username: true,
        accountId: true,
      },
    })
    return user
  }
}

export { UsersRepository }