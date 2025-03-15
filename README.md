## Description

velzia-bff

## Requeriments
Node version specified in .nvmrc file, currently is v22.7.0

## Installation

```bash
$ npm install
```

Enable husky pre-commit
```bash
$ npm run prepare
```

## Running the app

```bash
# development 
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Run the database using docker
```bash
docker-compose up
```

## Prima commands
```bash
//create database
npx prisma migrate dev --name "init"

//run seeds
npx prisma db seed

// Drop the database
// Create a new database
// Apply all migrations
// Generate the Prisma client
npx prisma migrate reset
```
