import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTransactionsUseCase } from './ListTransactionsUseCase'

class ListTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user
    const listtransactionsUseCase = container.resolve(ListTransactionsUseCase)

    const transactions = await listtransactionsUseCase.execute({ userId })

    return response.json(transactions)
  }
}

export { ListTransactionsController }
