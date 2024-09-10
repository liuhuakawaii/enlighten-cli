#!/usr/bin/env node

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const arg = hideBin(process.argv)
const cli =

  yargs(arg)
    .usage('Usage: liuhuakawaii-cli <command> [options]')
    .demandCommand(1, 'A command is required. Pass --help to see all available commands and options.')
    .strict()
    .recommendCommands()
    .fail((msg, err, yargs) => {
      console.log(msg)
    })
    .alias('h', 'help')
    .alias('v', 'version')
    .wrap(yargs.terminalWidth())
    .epilogue('For more information, visit https://github.com/liuhuakawaii/liuhuakawaii-cli')
    .options({
      debug: {
        type: 'boolean',
        describe: 'Enable debug mode',
        default: false,
        alias: 'd',
      },
    })
    .option('registry', {
      type: "string",
      describe: "Specify npm registry",
      default: "https://registry.npmjs.org",
      alias: "r"
    })
    .group(['debug', 'registry'], 'Dev Options:')
    .command('init [name]', 'Initialize a new project', (yargs) => {
      yargs.option('name', {
        type: 'string',
        describe: 'Project name',
        default: 'my-project',
        alias: 'n'
      })
    }, (argv) => {
      console.log(argv);

    })
    .command({
      command: 'list',
      describe: 'List all packages',
      alias: ['ls', 'l'],
      handler: () => {
        console.log('List all packages');
      }
    })
    .argv