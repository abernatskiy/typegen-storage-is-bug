import {
    BlockHeader,
    DataHandlerContext,
    SubstrateBatchProcessor,
    SubstrateBatchProcessorFields,
    Event as _Event,
    Call as _Call,
    Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'

export const processor = new SubstrateBatchProcessor()
  .setRpcEndpoint('wss://node.kril.hydration.cloud')
  .addCall({})
  .includeAllBlocks()
  .setBlockRange({
    from: 3359634,
    to: 3359640
  })
  .setGateway('https://v2.archive.subsquid.io/network/hydradx');

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
