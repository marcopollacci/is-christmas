# is-christmas

A tiny library made mostly for fun and for playing with the Temporal API.

This package is intentionally small, intentionally silly, and intentionally centered around Temporal. The point is not to provide a serious date utility toolkit. The point is to have a minimal excuse to experiment with Temporal while answering one completely unnecessary question: is it Christmas?

If you are looking for a production-grade date library, this is probably not it. If you want a tiny module whose whole personality is "let's poke at Temporal", then this is exactly it.

## Why this exists

- To play with Temporal.
- To keep the API tiny.
- To check whether a date falls on December 25.
- To have a package that is more joke than framework.

## Install

```bash
npm install is-christmas
```

## Usage

```js
import { isChristmas } from "is-christmas";

isChristmas("2026-12-25");
// true

isChristmas("2026-12-25T00:00:00.000Z");
// true

isChristmas();
// checks today using Temporal.Now.plainDateISO()
```

## API

```js
isChristmas(today?: string): boolean
```

Accepted inputs:

- ISO date strings like `2026-12-25`
- ISO datetime strings like `2026-12-25T00:00:00.000Z`
- No argument, which defaults to today via `Temporal.Now.plainDateISO()`

Invalid input throws a `TypeError`.

## Important note

This library is built to play with Temporal APIs. That is the whole gimmick.

It expects a runtime where `Temporal` exists. If your environment does not provide Temporal yet, the module will throw when loaded.

## Development

```bash
npm test
```

## License

MIT. See [LICENSE.md](LICENSE.md).
