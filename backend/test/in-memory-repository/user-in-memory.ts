import { UserRepository } from "@application/repositories/user-repository";
import { Prisma, User } from "@prisma/client";
import { randomUUID } from "node:crypto";

export class UserInMemoryRepository implements UserRepository {
  public users: User[] = []

  async create(data: Prisma.UserCreateInput) {
    const user: User = {
      id: randomUUID(),
      fullname: data.fullname,
      avatar: data.avatar || null,
      bio: data.bio || null,
      email: data.email,
      matter: null,
      password: data.password,
      valueByhours: data.valueByhours ? new Prisma.Decimal(data.valueByhours as number) : null,
      whatsapp: data.whatsapp || null,
      created: new Date(),
      modified: new Date()
    }

    this.users.push(user)
  }
}