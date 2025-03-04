import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { initialData } from './data/seed-data';
import { User } from '../auth/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {}

  async runSeed() {
    await this.deleteTables();
    await this.insertUsers();
    return `SEED EXECUTED!!`;
  }

  private async deleteTables() {
    const builder = this.userRepository.createQueryBuilder();
    await builder.delete().execute();
  }

  private async insertUsers() {
    const seedUsers = initialData.users;
    const users: User[] = [];

    seedUsers.forEach((user) => {
      user.password = bcrypt.hashSync(user.password, 10);
      users.push(this.userRepository.create(user));
    });

    await this.userRepository.save(seedUsers);
  }
}
