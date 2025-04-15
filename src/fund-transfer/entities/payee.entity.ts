// src/fund-transfer/entities/payee.entity.ts
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity() // <-- Make sure this is present
export class Payee {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  userId: string;

  @Column()
  beneficiaryName: string;

  @Column()
  beneficiaryAccountNumber: string;

  @Column({ nullable: true })
  nickname?: string;
}
