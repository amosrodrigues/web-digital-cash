import { v4 as uuidv4 } from 'uuid'
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'
import { Transaction } from '../../transactions/entities/Transactions'

@Entity('accounts')
class Account {
  @PrimaryColumn()
  id: string

  @Column()
  balance: number

  // @OneToMany(() => Transaction)
  // @JoinColumn([{ name: 'debitedAccount_id' }, { name: 'creditedAccount_id' }])
  // transaction: Transaction

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Account }
