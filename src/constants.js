import { faker } from '@faker-js/faker';

export const USERS = Array(30)
  .fill(null)
  .map((_, idx) => ({
    id: idx,
    avatar: faker.image.avatar(),
    fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
  }));
