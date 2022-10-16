import { killTables } from "./database.unseed.js";
import { createTables } from "../migrations/main.migration.js";
import { DatabaseSeeder } from "./database.seeder.js";

const run = async () => {
    await killTables();
    await createTables();
    const dbSeeder = new DatabaseSeeder();
    await dbSeeder.run();
}

run();