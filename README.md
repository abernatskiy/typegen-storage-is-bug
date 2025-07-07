# MRE of a possible substrate typegen / underlying packages bug 

At HydraDX the `specVersion` at block 1475996 is 115, but the `storage.*.v115.is()` returns false.

Steps to reproduce:
```bash
git clone https://github.com/abernatskiy/typegen-storage-is-bug
cd typegen-storage-is-bug
npm ci
sqd process
```
The output:
```
At height 1475995 header.specVersion is 109 and storage.omnipool.assets.v115.is() is false
At height 1475996 header.specVersion is 115 and storage.omnipool.assets.v115.is() is false
At height 1475997 header.specVersion is 115 and storage.omnipool.assets.v115.is() is true
At height 1475998 header.specVersion is 115 and storage.omnipool.assets.v115.is() is true
```
Note: the `false` at the second line is returned from [here](https://github.com/subsquid/squid-sdk/blob/ece6df2a889151d5d20b1569acc236bb9ee6f9af/substrate/substrate-runtime/src/runtime/runtime.ts#L435).
