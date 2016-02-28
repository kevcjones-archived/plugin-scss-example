# plugin-scss-example

This is just an example project i used to test [plugin-scss](https://github.com/KevCJones/plugin-scss-example.git). Its a Angular 2 + JSPM combo.

## Setup 

``` zsh
npm install
jspm install
gulp serve
```

## Bundle

The default behaviour is to load inline, it can seem a little slow i find, JSPM bundling really speeds this up

```zsh
jspm bundle lib/boot --inject
```
