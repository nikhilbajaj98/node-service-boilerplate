Node.js Backend App - Boilerplate



Sequelize-CLI Commands:

Create new migration (empty file)
npx sequelize migration:generate --name update_sample_users_table 

Run migration
npx sequelize db:migrate --env development

Create new seeder script (empty file)
npx sequelize seed:generate --name add-organizations

Run specific seeder script
npx sequelize-cli db:seed --seed 2023071120453-add-organizations.js