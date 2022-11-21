import { Repository } from 'typeorm'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

import dataSource from '../../../../database/data-source'

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User)
  }

  async create({ username, password, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      username,
      password,
      id,
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
    const user = await this.repository.findOne({ where: { id } })
    return user
  }
}

export { UsersRepository }
