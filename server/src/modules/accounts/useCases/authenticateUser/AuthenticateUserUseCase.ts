import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../repositories/IUsersRepository'

import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { AppError } from '../../../../errors/AppError'

interface IRequest {
  email: string
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

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password incorrect!')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!')
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
