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
```

## Tests

```sh
node --test
```

## Revo MCP smoke testing

When running MCP smoke tests against this sandbox, use `observe_run` for bounded progress observation. This ensures the smoke test terminates cleanly rather than polling indefinitely — pass a reasonable timeout and handle the returned status to detect stalls early.