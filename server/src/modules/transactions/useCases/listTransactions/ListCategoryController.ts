import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListtransactionsUseCase } from './ListtransactionsUseCase'

class ListtransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listtransactionsUseCase = container.resolve(ListtransactionsUseCase)

    const transactions = await listtransactionsUseCase.execute()

    return response.json(transactions)
  }
}

export { ListtransactionsController }
