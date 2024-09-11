const inquirer = require('inquirer').default;

//findLastIndex 是 ECMAScript 2022 中引入的一个新方法，如果你的 Node.js 版本不支持这个方法，就会出现这个错误。
Array.prototype.findLastIndex = function (predicate) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (predicate(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      default: 'none',
      validate: function (value) {
        var pass = value.match(
          /^[a-zA-Z0-9_]+$/
        );
        if (pass) {
          return true;
        }
        return 'Please enter a valid name';
      }
    },
    {
      type: 'password',
      name: 'password',
      message: 'Enter your password',
      validate: function (value) {
        if (value.length < 8) {
          return 'Password should be at least 8 characters';
        }
        return true;
      }
    },
    {
      type: 'checkbox',
      name: 'provider',
      message: 'Select a provider',
      choices: [
        { name: 'Google', value: 'google' },
        { name: 'Facebook', value: 'facebook' },
        { name: 'Github', value: 'github' },
        { name: 'Twitter', value: 'twitter' },
        { name: 'WeChat', value: 'wechat' },
        { name: 'QQ', value: 'qq' },
        { name: 'Weibo', value: 'weibo' },
      ]
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Do you want to create a new account?',
      default: true
    },
  ]).then(answers => {
    console.log(answers);
  })