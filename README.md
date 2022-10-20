# lls-cli

A tool of list nodejs project node scripts and execute it.

[![npm](https://flat.badgen.net/npm/v/lls-cli)](https://www.npmjs.com/package/lls-cli)
[![node version](https://flat.badgen.net/npm/node/lls-cli)](https://github.com/kingzez/lls-cli)
[![download](https://flat.badgen.net/npm/dt/lls-cli)](https://github.com/kingzez/lls-cli)
[![npm](https://flat.badgen.net/npm/license/lls-cli)](https://github.com/kingzez/lls-cli)

<p align="center">
	<br>
	<img src="lls-cli.gif" >
	<br>
</p>

## Install

```bash
npm i -g lls-cli
```

**Requirement**: Node version >= 16.0.0

## Usage

Execute `lls` in the project root directory, you will see node scripts list.

Auto use your project packageManager (`pnpm`,`yarn`,`npm`) run it.

```bash
$ lls

? select node script › - Use arrow-keys. Return to submit.
❯   fmt - prettier --write .
    dev
    build

pnpm run fmt
# or
yarn run fmt
# or
npm run fmt
```

## License

MIT
