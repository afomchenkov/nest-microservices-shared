# nest-microservices-shared



## NX Monorepo

```text
- Scalability: NestJS is organized around modules and services, making it a breeze to scale.
- Consistency: With Nx, both frontend and backend share the same tooling and configuration approach.
- Efficiency: Nx’s caching and dependency graph make your build and test processes much faster.
- Single Repo Magic: One repository for the entire stack — no more jumping between separate repos.
```

```text
- Build and deploy from one code base
- Publish shared core library with version support
- Use NX to handle Monorepo projects and libs
- Use TS/ESLint hierarchical configs to organize the build/lint/tests


- All services use TypeORM entity models for both runtime logic and type definitions
- Avoid duplicating entity definitions and business logic across these services while
    maintaining type safety, and scalability

- Structure shared code (e.g., entity models, DTOs, validation logic)
- Ensure entities stay in sync between services
- Handle migrations and database schema evolution across services
```

For separate DBs:
Each service is responsible for running its own migrations, even if entities are imported from a shared lib

For single DB:
Dedicated app/script (migration-runner) that uses all shared entities and manages migration centrally
- one shared DB across services
- modular monolith architecture
