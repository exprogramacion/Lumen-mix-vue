# Lumen PHP Framework

[![Build Status](https://travis-ci.org/laravel/lumen-framework.svg)](https://travis-ci.org/laravel/lumen-framework)
[![Total Downloads](https://poser.pugx.org/laravel/lumen-framework/d/total.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/lumen-framework/v/stable.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/lumen-framework/v/unstable.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![License](https://poser.pugx.org/laravel/lumen-framework/license.svg)](https://packagist.org/packages/laravel/lumen-framework)

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

## Official Documentation

Documentation for the framework can be found on the [Lumen website](http://lumen.laravel.com/docs).

## Security Vulnerabilities

If you discover a security vulnerability within Lumen, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Lumen framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)


## Tutorial:
**1.** First, install Lumen 5.5.*:

    composer create-project --prefer-dist laravel/lumen example "5.5.*"
_**Note** Read the official install https://lumen.laravel.com/docs/5.5._


**2.** Install laravel-mix with NPM and configure:

    npm init -y
    npm install laravel-mix --save-dev
    cp -r node_modules/laravel-mix/setup/webpack.mix.js ./

* Edit webpack.mix.js:
    ```
      let mix = require('laravel-mix');

      mix.js('src/app.js', 'dist')
         .sass('src/app.scss', 'dist')
         .setPublicPath('dist');
    ```

* You'll have then this snippet configuration:
    ```
      let mix = require('laravel-mix');

      mix.js('resources/assets/js/app.js', 'public/js')
          .sass('resources/assets/sass/app.scss', 'public/css');
    ```
_**Note** Read the official install https://github.com/JeffreyWay/laravel-mix/blob/master/docs/installation.md._

**3.** Install vue with NPM:

    npm install vue --save-dev

**4.** Configure resource directory:

* Create views directory.

* Create in views directory "home.blade.php" with the next snippet:
```
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel - Components VUEjs</title>

        <link rel="stylesheet" type="text/css" href="{{ url('css/app.css') }}">
    </head>
    <body>
        <div id="app">
            <example-component></example-component>
        </div>
        <script type="text/javascript" src="{{ url('js/app.js') }}"></script>
    </body>
</html>
```
* Create assets directory

* Create in assets, 2 directories: js and sass

* In js, you will have the code for vueJS (You will need to create them):
 -app.js file
 -components directory

* The app.js file will contain:
```
window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});

```
* In components directory will contain:
 -ExampleComponent.vue

* The Component will contain:
```
<template>
    <div>
        Componente de ejemplo
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
```
**6.** Edit package.json:
* You'll have then this snippet configuration:
```
...
"scripts": {
    "dev": "NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "hot": "NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "production": "NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
  }
...
    ```

**7.** Run development:
    npm run dev
_**Note** If you have problems, add "cross-env" before "NODE_ENV..."._

**8.** Test:
    php -S localhost:8000 -t public
_**Note** I followed these steps to make an example work with laravel-mix and Vue Components. READ the official documentation._