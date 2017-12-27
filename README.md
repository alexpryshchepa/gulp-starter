![Logo](http://static.daviann.com/daviann.png) 
## Daviann gulp-starter

* __npm install__
* __gulp__ - run dev environment
* __gulp build__ - build, same as _gulp_ but without runing dev server
* __gulp deploy__ - deploy to ftp server
* __--prod__ - use flag to minify css / js / images and other differences from dev environment, ex. _gulp build --prod_
* __gulp sasslint__ - sasslint, rules: 
```
rules: 
  no-extends: 1
  no-trailing-whitespace: 0
  empty-line-between-blocks: 0
  class-name-format: 
    - 1
    -
      convention: 'strictbem'
  property-sort-order: 0
  nesting-depth:
    - 1
    -
      max-depth: 5
  mixins-before-declarations:
    - 1
    -
      exclude: ['tablet', 'mobile']
  no-color-literals:
    - 1
    -
      allow-rgba: true
```
* __gulp eslint__ - eslint, rules: 
```
{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "no-alert": 1,
    "no-console": 1,
    "camelcase": 1,
    "curly": 1,
    "no-eq-null": 0,
    "no-empty": 1,
    "no-use-before-define": 1,
    "no-unused-vars": [
      "error", {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "no-extra-semi": 1,
    "no-debugger": 1,
    "semi": 1,
    "quotes": 0
  }
}
```

[Config file](gulpfile.babel.js/config/index.js) - you can define tasks that you need by true / false, ftp credentials and paths to files
* If you deactivate some tasks be shure change them in dev / build / deploy tasks
* Do not forget specify files in watch task