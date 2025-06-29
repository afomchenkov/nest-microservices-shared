# core

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build core` or `npm run build:core` to build the library.

## Running unit tests

Run `nx test core` to execute the unit tests via [Jest](https://jestjs.io).

## Entities
```text
- Provides a way to abstract database tables into TypeScript classes,
    making it easier to work with databases using an object-oriented approach.
- Ensures data integrity and consistency through different decorators.
- Allows you to define relationships between different tables (e.g., one-to-many, many-to-many).
- Simplifies database queries and operations.
```


## Code separation
```text
- Entities (for persistence) - ORM-mapped classes for DB (decorated with @Entity, @Column, etc.)
- Domain models / interfaces (business logic) - Core logic representation, no framework dependency
- DTOs (transport/validation) - Shape of data coming from or going to the client (with validation)

- Conversion flow:
DTO <--> Domain Model <--> Entity
```

```bash
# stop all containers
docker stop $(docker ps -q)
# stop/remove all containers
docker rm -f $(docker ps -aq)
```