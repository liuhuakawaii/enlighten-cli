import chalk from 'chalk'

// console.log(chalk.red('Hello') + ' World' + chalk.blue('!')) //单独调用
// console.log(chalk.red('Hello', 'World', '!'))  //拼接字符串
// console.log(chalk.red.bgYellow.bold('Hello world!')) //链式调用
// console.log(chalk.hex('#FF00FF').underline(' rainbow'))
// console.log(chalk.rgb(123, 45, 67).inverse('inverse'))
// console.log(chalk.keyword('orange')('Yay for orange colored text!')) //通过关键字获取颜色
// console.log(chalk.red('hello', chalk.underline('Underlined reddish color'))) //迭代调用

console.log('\x1b[31m%s\x1b[39m', 'dasbjhdbashbd')
console.log('\u001b[31m%s\u001b[39m', 'dasbjhdbashbd')