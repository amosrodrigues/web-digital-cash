import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../repositories/IUsersRepository'

import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { AppError } from '../../../../errors/AppError'

interface IRequest {
  username: string
  password: string
}

interface IResponse {
  user: {
    username: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUserName(username)

    if (!user) {
      throw new AppError('E-mail ou senha incorretos!')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('E-mail ou senha incorretos!')
    }

    const token = sign({}, '8f3aed998ead02d890cc4c5cd15fad95', {
      subject: user.id,
      expiresIn: '1d',
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        username: user.username,
      },
    }

    return tokenReturn
  }
}

export { AuthenticateUserUseCase }
