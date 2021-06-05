export const WALLET = '0x6f10b1a2637720cf12153c129918e0a210e8fd74'

export const SECONDS_UPDATE_BALANCE = 60
export const SECONDS_UPDATE_PRICE = 5
export const SECONDS_UPDATE_RIG = 5

export const SPARKPOOL_HOST = 'https://www.sparkpool.com/v1'
export const FLEXPOOL_HOST = 'https://api.flexpool.io/v2'
export const GARIMPOOL_HOST = 'https://garimpool.com.br/api'
export const POOL2MINE_HOST = 'http://170.39.103.47/api'
export const BINANCE_HOST = 'https://api2.binance.com/api/v3'
export const NOCORS_HOST = 'https://cors.bridged.cc'

export const USDT_PRICE_URL = `${BINANCE_HOST}/ticker/price?symbol=ETHUSDT`
export const BRL_PRICE_URL = `${BINANCE_HOST}/ticker/price?symbol=ETHBRL`

export const SPARKPOOL_BALANCE = `${SPARKPOOL_HOST}/bill/stats?miner=${WALLET}&pool=SPARK_POOL_CN&currency=ETH`
export const FLEXPOOL_BALANCE = `${FLEXPOOL_HOST}/miner/balance?address=${WALLET}&coin=eth&countervalue=usd`
export const GARIMPOOL_BALANCE = `${GARIMPOOL_HOST}/accounts/${WALLET}`
export const POOL2MINE_BALANCE = `${POOL2MINE_HOST}/pools/eth/miners/${WALLET}`

export const SPARKPOOL_STATS = `${SPARKPOOL_HOST}/currency/stats?currency=ETH`

export const TREX_SUMMARY_URL = `http://localhost:4067/summary`
