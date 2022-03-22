import { program } from 'commander';

import { generateCommand } from './generate';

const main = async () => {
  await program
    .helpOption()
    .addCommand(generateCommand)
    .parseAsync(process.argv);
};

main()
  .then()
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
