import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Account } from '../../accounts/entities/Account'

@Entity('transactions')
class Transaction {
  @PrimaryColumn()
  id: string

  @Column()
  value: number

  @Column('debitedAccount_id')
  'debitedAccountId': string

  @Column('creditedAccount_id')
  'creditedAccountId': string

  @ManyToOne(() => Account)
  @JoinColumn([{ name: 'creditedAccount_id' }, { name: 'creditedAccount_id' }])
  account: Account

  @CreateDateColumn('created_at')
  createdAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Transaction }
