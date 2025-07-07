import {MockDatabase} from '@belopash/mock-store'

import {processor, ProcessorContext} from './processor'
import {storage} from './types'

processor.run(new MockDatabase(), async (ctx) => {
  for (let block of ctx.blocks) {
    console.log(
      `At height ${block.header.height} ` +
      `header.specVersion is ${block.header.specVersion} ` +
      `and storage.omnipool.assets.v115.is() is ${storage.omnipool.assets.v115.is(block.header)}`
    )
  }
})
