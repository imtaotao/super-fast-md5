<div align="center">
<h2>super-fast-md5</h2>

[![NPM version](https://img.shields.io/npm/v/super-fast-md5.svg?color=a1b858&label=)](https://www.npmjs.com/package/super-fast-md5)

</div>

Super fast and super small (`7kb`) `wasm` version of `md5` algorithm, able to use in `browser` and `nodejs`. The implementation comes from [hash-wasm](https://github.com/Daninet/hash-wasm), We simplify the asynchronous syntax to synchronous syntax.


[Online test platform](https://imtaotao.github.io/super-fast-md5/)


### CDN

```html
<script src="https://unpkg.com/super-fast-md5/dist/md5.umd.js"></script>
<script>
  const hash = FastMD5.md5('code');
  console.log(hash);
</script>
```

### NPM

```js
import { md5 } from 'super-fast-md5';

// code -> `string | ArrayBuffer`
const hash = md5('code');
console.log(hash);
```

### Performance

```js
const code = 'abcde'.repeat(200000);

console.time('string');
FastMD5.md5(code);
console.timeEnd('string'); // 10ms

const buffer = new TextEncoder().encode(code);
console.time('buffer');
FastMD5.md5(buffer);
console.timeEnd('buffer'); // 6ms
```

```
./a.js [string] (1024 KiB)
> 10ms

./a.js [buffer] (1024 KiB)
> 6ms
```
