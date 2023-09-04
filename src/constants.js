import { faker } from "@faker-js/faker";

export const USERS = Array(32)
  .fill(null)
  .map((_, idx) => ({
    id: idx,
    avatar: faker.image.avatar(),
    fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
  }));

export const MENU_ITEMS = [
  { key: "randomizedUsersList", label: "Randomized Users List", target: "/" },
  { key: "usersList", label: "Users List", target: "/users-list" },
];

export const CATS = Array(8)
  .fill(null)
  .map((_, idx) => ({
    id: idx,
    avatar: faker.image.urlLoremFlickr({ category: "cats" }),
    name: `${faker.animal.cat()}`,
  }));

export const NEW_CAT = {
  avatar: faker.image.urlLoremFlickr({ category: "cats" }),
  name: `${faker.animal.cat()}`,
};
