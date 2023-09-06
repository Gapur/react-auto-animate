import { faker } from "@faker-js/faker";

export const USERS = Array(24)
  .fill(null)
  .map(() => ({
    id: faker.database.mongodbObjectId(),
    avatar: faker.image.avatar(),
    fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
  }));

export const MENU_ITEMS = [
  { key: "randomizedUsersList", label: "Randomized Users List", target: "/" },
  { key: "catsList", label: "Cats List", target: "/cats-list" },
];

export const CATS = Array(7)
  .fill(null)
  .map(() => ({
    id: faker.database.mongodbObjectId(),
    avatar: faker.image.urlLoremFlickr({ category: "cats" }),
    name: `${faker.animal.cat()}`,
  }));

export const generateNewCat = () => ({
  id: faker.database.mongodbObjectId(),
  avatar: faker.image.urlLoremFlickr({ category: "cats" }),
  name: `${faker.animal.cat()}`,
});
