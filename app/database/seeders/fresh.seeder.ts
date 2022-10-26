import { createTables, dropTables } from "../migration/main.migration";

export const dbFresh = async ():Promise<void> => {
    await dropTables();
    await createTables();
};
