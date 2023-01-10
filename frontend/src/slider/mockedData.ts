import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";

export const mockedData = [
  {
    id: nanoid(),
    img: "natureBackground.png",
    title: "The Most Recent Project",
    summary:
      faker.lorem.paragraph(3),
  },
  {
    id: nanoid(),
    img: "natureBackground.png",
    title: faker.lorem.words(3),
    summary:
      faker.lorem.paragraph(3),
  },
  {
    id: nanoid(),
    img: "natureBackground.png",
    title: faker.lorem.words(3),
    summary:
      faker.lorem.paragraph(3),
  },
  {
    id: nanoid(),
    img: "natureBackground.png",
    title: faker.lorem.words(3),
    summary:
      faker.lorem.paragraph(3),
  },
  {
    id: nanoid(),
    img: "natureBackground.png",
    title: faker.lorem.words(3),
    summary:
      faker.lorem.paragraph(3),
  },
  {
    id: nanoid(),
    img: "natureBackground.png",
    title: faker.lorem.words(3),
    summary:
      faker.lorem.paragraph(3),
  },
  {
    id: nanoid(),
    img: "natureBackground.png",
    title: faker.lorem.words(3),
    summary:
      faker.lorem.paragraph(3),
  },
  {
    id: nanoid(),
    img: "natureBackground.png",
    title: 'The Oldest Project of All',
    summary:
      faker.lorem.paragraph(3),
  },
];
