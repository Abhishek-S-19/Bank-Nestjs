// accounts.entity.ts
import { Entity, ObjectIdColumn, ObjectId, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Account {
  @ObjectIdColumn()
  _id: ObjectId; // or just `id: ObjectID` if you prefer

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  dateOfBirth: string;

  @Column()
  status: string;

  @Column()
  accountNumber: string;

  @CreateDateColumn()
  createdAt: Date;
}
