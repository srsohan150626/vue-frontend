let mix = require('laravel-mix');

mix.js('src/app.js', 'dist').setPublicPath('dist');
mix.js('src/app.scss', 'dist').setPublicPath('dist');