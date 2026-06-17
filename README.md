# revo-sandbox

## greet()

Returns a greeting string from a validated input object.

```js
import { greet } from "./src/greet.js";

greet({ name: "World" });              // "Hello, World!"
greet({ name: "Alice", greeting: "Hi" }); // "Hi, Alice!"
greet({});                             // throws — name is required
greet({ name: "" });                   // throws — name must be non-empty
greet({ name: "X", extra: 1 });        // throws — no extra properties allowed
```

Input schema (`schema/greet.schema.json`): `{ name: string (required, minLength 1), greeting?: string }`.

## Development

```
npm install
npm test
```