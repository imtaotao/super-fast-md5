<div align="center">
<h2>super-fast-md5</h2>

[![NPM version](https://img.shields.io/npm/v/super-fast-md5.svg?style=flat-square)](https://www.npmjs.com/package/super-fast-md5)

</div>

Super fast and super small wasm version of `md5` algorithm, able to use in `browser` and `nodejs`. The implementation comes from [hash-wasm](https://github.com/Daninet/hash-wasm), we talk about asynchronous syntax simplified to synchronous syntax.

### CDN

```html
<!DOCTYPE html>
<html lang="en">
<body>
  <script src="https://unpkg.com/super-fast-md5/dist/md5.umd.js"></script>
  <script>
    const hash = FastMD5.md5('code');
    console.log(hash);
  </script>
</body>
</html>
```

### NPM

```js
import { md5 } from 'super-fast-md5';

// code -> `string | ArrayBuffer`
const hash = md5('code');
console.log(hash);
```

### Performance

```
./a.js (1024 KiB)
> 10ms
```