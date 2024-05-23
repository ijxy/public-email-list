[npm]: https://www.npmjs.com/package/public-email-list

[![npm verison](https://img.shields.io/npm/v/public-email-list)][npm]
[![npm bundle size](https://img.shields.io/bundlephobia/min/public-email-list)][npm]
[![npm downloads](https://img.shields.io/npm/dm/public-email-list)][npm]

# public-email-list

Check whether an email address is registered with a known public email service (eg `gmail.com`). The list of public email domains is exported too.


## Installation

```
npm install -D public-email-list
```

## Usage

```ts
import { isPrivateEmail, isPublicEmail } from "public-email-list";

isPublicEmail("hello@gmail.com"); // true
isPrivateEmail("hello@gmail.com"); // false

isPublicEmail("hello@myprivatedomain.com"); // false
isPrivateEmail("hello@myprivatedomain.com"); // true
```