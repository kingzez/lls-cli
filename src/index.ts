#!/usr/bin/env node
import process from 'node:process'
import path from 'node:path'
import fs from 'fs-extra'
import { $ } from 'zx/core'
import prompts from 'prompts'
;(async () => {
  try {
    const cwd = process.cwd()
    const hasYarn = fs.existsSync(path.resolve(cwd, 'yarn.lock'))
    const hasPnpm = fs.existsSync(path.resolve(cwd, 'pnpm-lock.yaml'))
    const hasPkg = fs.existsSync(path.resolve(cwd, 'package.json'))

    if (!hasPkg)
      return console.error(
        'package.json does not exist in the current directory'
      )
    const { scripts } = await fs.readJson(path.resolve(cwd, 'package.json'))
    const packageManager = hasPnpm ? 'pnpm' : hasYarn ? 'yarn' : 'npm'
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
    if (!command) return
    await $`${packageManager} run ${command}`
  } catch (err) {
    console.error(err)
  }
})()
