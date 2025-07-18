import {MockDatabase} from '@belopash/mock-store'

import {processor, ProcessorContext} from './processor'
import {storage} from './types'

processor.run(new MockDatabase(), async (ctx) => {
  for (let block of ctx.blocks) {
    console.log(
      `At height ${block.header.height} ` +
      `header.specVersion is ${block.header.specVersion} ` +
      `and storage.lbp.poolData.v176.is() is ${storage.lbp.poolData.v176.is(block.header)}`
    )
    if (storage.lbp.poolData.v176.is(block.header) || block.header.specVersion >= 176) {
      let pairs: any[] = []
      for await (const page of storage.lbp.poolData.v176.getPairsPaged(500, block.header)) {
        page.forEach(p => pairs.push(p))
      }
      console.log(`Got ${pairs.length} key-value pairs from storage`)
    }
  }
})
