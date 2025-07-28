# lbp.poolData.v176.is() demo on Hydration

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
At height 3359634 header.specVersion is 170 and storage.lbp.poolData.v176.is() is false
At height 3359635 header.specVersion is 170 and storage.lbp.poolData.v176.is() is false
At height 3359636 header.specVersion is 170 and storage.lbp.poolData.v176.is() is false
At height 3359637 header.specVersion is 176 and storage.lbp.poolData.v176.is() is false
At height 3359638 header.specVersion is 176 and storage.lbp.poolData.v176.is() is true
Got 0 key-value pairs from storage
At height 3359639 header.specVersion is 176 and storage.lbp.poolData.v176.is() is true
Got 0 key-value pairs from storage
At height 3359640 header.specVersion is 176 and storage.lbp.poolData.v176.is() is true
Got 0 key-value pairs from storage
```
