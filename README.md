# revo-sandbox

## Usage

```sh
node greet.js Ada    # Hello, Ada!
node greet.js        # Hello, World!
```

```sh
node farewell.js Ada    # Goodbye, Ada!
node farewell.js        # Goodbye, World!
```

```sh
node capitalize.js hello    # Hello
node capitalize.js          # (empty)
node sum.js 1 2 3   # 6
node sum.js         # 0
node reverse.js hello   # olleh
node clamp.js 15 0 10   # 10
node factorial.js 5     # 120
node min.js 3 1 2       # 1
node max.js 3 1 2       # 3
```

## Tests

```sh
node --test
```

## Revo MCP smoke tests

Revo MCP smoke tests should use `wait_for_any_gate` to block until a run reaches
the next gate or bounded progress point, then use `watch_runs` to inspect run
progress and status.
