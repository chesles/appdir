# appdir

## why?

You want to `require` application-specific code like a pro, but relative
paths are messy and messing with `$NODE_PATH` is not recommended

## how.

This module installs a symbolic link to your `app` subdirectory from `node_modules`:

```
app/
  views/
  models/
  whatever/
node_modules/
  app -> ../app
  ...
```

Now you can `require('app/views/some-view')` from anywhere in your app. No more
relative paths or `$NODE_PATH` trickery.

## what.

Before:

```js
// relative paths all over your app's require calls, yuk.
var SomeView = require('../../views/some-view')
```

After:

```js
// now you can use require('app/...') from anywhere in your app
var SomeView = require('app/views/some-view.js')
```

## install

```bash
npm install --save appdir
```
