import { Entity, Column, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "credentials" })
export class Credential {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @JoinColumn({ name: "userId" })
  user!: User;
}
