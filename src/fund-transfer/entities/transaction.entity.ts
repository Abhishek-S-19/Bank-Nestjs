import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class Transaction {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  senderAccount: string;

  @Column()
  receiverAccount: string;

  @Column('float')
  amount: number;

  @Column()
  type: 'NEFT' | 'RTGS' | 'IMPS';

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
