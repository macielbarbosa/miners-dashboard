import { get } from '../../utils/get'
import { GARIMPOOL_BALANCE, FLEXPOOL_BALANCE, SPARKPOOL_BALANCE, POOL2MINE_BALANCE } from '../../utils/constants'

export const getBalance = async (pool) => {
  switch (pool) {
    case 'Garimpool': {
      const {
        stats: { balance },
      } = await get(GARIMPOOL_BALANCE)
      return balance / Math.pow(10, 9)
    }
    case 'Flexpool': {
      const {
        result: { balance },
      } = await get(FLEXPOOL_BALANCE)

      return balance / Math.pow(10, 18)
    }
    case 'Sparkpool': {
      const {
        data: { balance },
      } = await get(SPARKPOOL_BALANCE)
      return balance
    }
    case 'Pool2mine': {
      const { pendingBalance } = await get(POOL2MINE_BALANCE)
      return pendingBalance
    }
    default:
      console.warn('Pool inválida.')
      return 0
  }
}
