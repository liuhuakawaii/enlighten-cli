#!/usr/bin/env node

const commander = require('commander')
const pkg = require('../package.json')

//获取commander的单例
// const { program } = commander

//手动实例化
const program = new commander.Command()

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .version(pkg.version)
  .option('-d, --debug', 'output extra debugging', false)
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  .option('-e, --env <env>', 'environment</env>')

//command 注册命令
const clone = program.command('clone <source> [destination]') //<source>是必填参数，[destination]是可选参数
clone
  .description('clone a repository')
  .option('-f, --force', '是否强制克隆')
  .action((source, destination) => {
    console.log('clone from %s to %s', source, destination || 'current directory')
  })

//addCommand 注册子命令
const service = new commander.Command('service')
service
  .command('start <service-name>')
  .description('start service')
  .action((serviceName) => {
    console.log('start %s service', serviceName)
  })

service
  .command('stop <service-name>')
  .description('stop service')
  .action((serviceName) => {
    console.log('stop %s service', serviceName)
  })
program.addCommand(service)

program
  .command('install [name]', 'install package', {
    executableFile: 'xxx-cli',   //多个脚手架可以串行调用
    isDefault: true,  //默认执行
  })
  .alias('i')

program
  .arguments('<cmd> [options]')
  .description('test command', {
    cmd: 'command to run',
    options: 'options for command'
  })
  .action((cmd, options) => {
    console.log('cmd: %s, options: %O', cmd, options)
  })
program.parse(process.argv)

