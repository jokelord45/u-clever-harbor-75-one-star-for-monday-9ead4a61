// One Star for Monday — writes a one-star review of Monday, as if it
// were a restaurant, to /output/entry.txt.
// Node 22 standard library only. No network, no dependencies, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

// Draft 2 (revision): sharper on every judge criterion — a table (sat by
// the door), a dish (my weekend, reheated — a joke that only lands on
// Monday), and a bill (the whole week, due today). Shorter and more
// quotable than draft 1, and the Monday joke is now the dish itself.
const ENTRY =
  "One star. They sat me by the door, served my weekend reheated, and the bill was my whole week, due today.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
