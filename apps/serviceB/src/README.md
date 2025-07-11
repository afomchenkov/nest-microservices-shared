# Service B

## Domain model

```text
- *Entity* - a domain model with ID and lifecycle, has its state, business-methods, 
be part of an aggregate or its root;
    - has and ID
    - can change its state
    - encapsulates invariants
    - can be a part of an aggregate or be an aggregate root

- *Value Object (VO)* - an object which does not have identity, and is defined by its values, immutable,
used for representing the concepts, not an entity, it encapsulates validation, does not have
its table/repository;
    - has no ID
    - immutable
    - encapsulates validation
    - does not have repository or dedicated DB table

- *Aggregate* - cluster of entities and VOs, which are logically connected and managed
as a single unit. It defines the boundaries of consistency and entry point to manage connected
objects;
    - contains domain model and any data access is done over it
    - guarantees invariant, any operation preserves internal consistency
    - transaction boundaries, all inside one aggregate changes within one transaction
    - encapsulates internal entities, all actions are executed via aggregate root

- *Domain Service* - domain layer component, encapsulates business-logic, which does not belong
to a certain entity or aggregate, but still is the part of domain area;
    - has business-logic
    - does not have its own state
    - not an Entity or VO
    - can work with multiple models
    - located in domain layer
    - not dependant on infrastructure
```

## Supplementary Elements

```text
- *View/Read Model* - projection of a domain model for read operations, often
aggregated for a specific use-case;
    - not part of the domain
    - no business-logic
    - used to represent or report, API-response
- *DTO* - temporary structure, used for transferring the data between the layers;
    - does not have its behavior or business-logic
    - used by the transport layer (gRPC, HTTP) mapped to/from Entity/VO via mapper
    - can be two-way RequestDTO <> ResponseDTO
```
