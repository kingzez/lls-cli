#!/usr/bin/env node

import fs from 'fs-extra'
import { $ } from 'zx/core'
import prompts from 'prompts'

try {
  const { scripts } = await fs.readJson('./package.json')
  const choices = Object.keys(scripts).map((script) => ({
    title: script,
    value: script,
    description: scripts[script],
  }))

  const options = [
    {
      type: 'select',
      name: 'command',
      message: 'select node script',
      choices,
      initial: 0,
    },
  ]
  // @ts-ignore
  const { command } = await prompts(options)
  if (command) {
    // todo optimized
    await $`npm run ${command}`
  }
} catch (err) {
  console.error(err)
}
