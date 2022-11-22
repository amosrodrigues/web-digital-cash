import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateTransactionUseCase } from './CreateTransactionUseCase'

class CreateTransactioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { value, creditedAccountId, debitedAccountId } = request.body

    const createTrasactionUseCase = container.resolve(CreateTransactionUseCase)

    await createTrasactionUseCase.validate({
      value,
      creditedAccountId,
      debitedAccountId,
    })

    await createTrasactionUseCase.execute({
      value,
      creditedAccountId,
      debitedAccountId,
    })

    return response.status(201).send()
  }
}

export { CreateTransactioController }
