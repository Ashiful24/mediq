import { Inject, Injectable } from "@nestjs/common";
import { DATABASE } from "../db/database.module";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from '../db/schema';
import { CreateUserData } from "./interfaces/create-user.interface";

@Injectable()
export class UserRepository {
  constructor(
    @Inject(DATABASE)
    private readonly db:  NodePgDatabase<typeof schema>,
  ) {}



  async create(data: CreateUserData) {
    return this.db
      .insert(schema.users)
      .values(data)
      .returning();
  }
}