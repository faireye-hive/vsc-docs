
APi
https://api.vsc.eco/api/v1/graphql
Explorer APi
https://studio.apollographql.com/sandbox/explorer


# vsc-docs


## electionByBlockHeight

### Paramenter

```json

{
  "blockHeight": "100893860"
}
```


Query
```js

query ElectionByBlockHeight($blockHeight: Uint64) {
  electionByBlockHeight(blockHeight: $blockHeight) {
    block_height
    data
    epoch
    net_id
    proposer
    protocol_version
    total_weight
    tx_id
    type
    weights
    members {
      account
      key
    }
  }
}
```
```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "ElectionByBlockHeight",
    "query": "query ElectionByBlockHeight($blockHeight: Uint64) { electionByBlockHeight(blockHeight: $blockHeight) { block_height data epoch net_id proposer protocol_version total_weight tx_id type weights members { account key } } }",
    "variables": {
      "blockHeight": "100893860"  
    }
  }'
```

Result
```json
{
  "data": {
    "electionByBlockHeight": {
      "block_height": 100869844,
      "data": "bafyreicyhaho76o5la2e5rl5caqadhtko5vnwukjmhaic527rwtskk4gzq",
      "epoch": 801,
      "net_id": "vsc-mainnet",
      "proposer": "botlord",
      "protocol_version": 0,
      "total_weight": 97930322,
      "tx_id": "9498e638e102160d8db10a0d5e6a5394766cec2b",
      "type": "staked",
      "weights": [
        2000000,
        2000000,
        4000001,
        2000000,
        2000100,
        2000000,
        2103000,
        2950000,
        2000000,
        2001000,
        2000000,
        8691000,
        2000400,
        8100000,
        2001000,
        7700000,
        2000000,
        2002000,
        3894316,
        2426663,
        2000000,
        2900001,
        5642841,
        14018000,
        9500000
      ],
      "members": [
        {
          "account": "actifit.vsc",
          "key": "did:key:z3tEEoZ5VYi83X1bmogNMy8cMr64NLcBCMLfcYaW8w6T9ATdBRTLuphZPTM3cJ7gcjdcLj"
        },
        {
          "account": "arcange.vsc",
          "key": "did:key:z3tEGMpV1PXnAUqaQLwJBo2f3TJwYjHjEWNF8mGWsDFf38ruNJztnV8yRAL3nWdCYgEaSo"
        },
        {
          "account": "atexoras.vsc",
          "key": "did:key:z3tEFqqF3nRPJAktFz5ekkMzirARE8NcupNZDMh1ZoYBkX6ndN1qmiv2BeToMxRCoSgkPy"
        },
        {
          "account": "ausbit.vsc",
          "key": "did:key:z3tEFLPyzsQWoEh6qKsbqmHyzWiPSHo7HXdnvSJiXzoGqstJrx7EqYtEwMN66avyiWSFax"
        },
        {
          "account": "bala.vsc",
          "key": "did:key:z3tEF8fiC1SJjttiSTf5SEqkUs3Vehaye3MDgWKebhjjqHLqMjoXjrdFsB8sBqB5usgPkq"
        },
        {
          "account": "blocktrades.vsc",
          "key": "did:key:z3tEFTY93U4w8NLJVusf5SBpMC9vQFwTCWvMzhejNzR7dAM82C7XmZRMZ8i1RTXkKzG1ty"
        },
        {
          "account": "botlord",
          "key": "did:key:z3tEEc6okdyS56BFv1xKwTYizzn9Y6arvJHxWqXqf8jbkHG28x5D19a3xdrYxqGXcH57Gw"
        },
        {
          "account": "bradleyarrow.vsc",
          "key": "did:key:z3tEGeDRKdeJ5yxhicDAXNHwquA8F5zdPexFLa6StMJyhw3bjM4dBXXYS5jQAHc7USZyCw"
        },
        {
          "account": "comptroller.vsc",
          "key": "did:key:z3tEGRXJg9R49Me2HSNoiRQPec1AXbzsafeRjdQ9W5TavUmKmt8KgjZY5PYjxwfsywTxyQ"
        },
        {
          "account": "dalz.vsc",
          "key": "did:key:z3tEF7pXrcvm9sUcWhCAE8oV5CJr4og5JwMDUD4Gu3tUQJjdC2HscT3DYdnYzSpJuncnLt"
        },
        {
          "account": "delta-p",
          "key": "did:key:z3tEGCR3mnZ9R2NNV3FvLDWnX3VH41YfTiRVr8joXZBwH5diPL6cfHZDGNTdEx47McaVYo"
        },
        {
          "account": "emrebeyler.vsc",
          "key": "did:key:z3tEFFDdd81G3KMe9JGkYFeb6gNMGGZ9Gqy6K33dFj4eeh9AF2cDdESWoZuFbXWMZNQveK"
        },
        {
          "account": "lobes",
          "key": "did:key:z3tEGJ41BPEsRaJjtXTxWPtbXWQhHyZmUYxAN3ms5bu4y2U2ivinSk1iGbaR81V92yJAnU"
        },
        {
          "account": "louis.vsc",
          "key": "did:key:z3tEGJbqmgJLq9n8ivGJAK9h1G7gxv9MRkNBDLfKAxJL76HLPKNampWHw7BcLudcbzgMru"
        },
        {
          "account": "mahdiyari.vsc",
          "key": "did:key:z3tEExSy7tQeWXwib3PKN3JzryJxHgKEFoDtXaWd9YfRk9iJ9cRbYEHfY7UXMEtbFC612T"
        },
        {
          "account": "mengao.vsc",
          "key": "did:key:z3tEFtXxkT1RzQgDe6x1uRjrRq2PiYZoUCKCXPmsCj7bCNdMKG5k6digtop4615g5zDWkr"
        },
        {
          "account": "possibly.vsc",
          "key": "did:key:z3tEFtFVyRXp7bbpDaRfngAtCiVSSqMrnyP5B8CrpWK1z4tbed8ZB5RASckFNC1oufjoDw"
        },
        {
          "account": "prime.vsc",
          "key": "did:key:z3tEGSKy3KQF3gwoP8yhWGtEjvtw9FyL7gbcGQKopEXbPu5bZJ1QgSYCno54LjfgkRbVLD"
        },
        {
          "account": "sagarkothari.vsc",
          "key": "did:key:z3tEGJjyp1Em9PzRfWAoQrJS9Kj8bdWoXyUg6uCEtyLgha21JMjvcf4cpiWvWgaih67LgA"
        },
        {
          "account": "shmoogleosukami",
          "key": "did:key:z3tEFrRnmfebGM6ovhugvKJd1ednPWoAgfbS5rvasHTjCvb4mhZftgSCGkR4ABQxe3wi7U"
        },
        {
          "account": "spker",
          "key": "did:key:z3tEGhUVRxcuhJ2P7VzVQRt3EKyDyhqbZePfvGVaGbfEBnQETWEmRRfGMXq1GKWjDNEFAS"
        },
        {
          "account": "techcoderx.vsc",
          "key": "did:key:z3tEGfEA3wcykznHKL7n4cv6zKqECDAR2kDJqgm9YRTQtYMGxayDHGGFrEERnjcfcgRhfh"
        },
        {
          "account": "tibfox.vsc",
          "key": "did:key:z3tEG5eYqX8KfkNsVagRRqZFdhdtMT3XneMonFe2bjiob19yXWfA4Pd5sn1RvTppz2roHT"
        },
        {
          "account": "v4vapp.vsc",
          "key": "did:key:z3tEFXmLPEXEzMzwPD9cnFBv45XCqfgPWjxe8TUmygjrNyg5VQhfDqukMu492MdAPeU9h4"
        },
        {
          "account": "vaultec.vsc",
          "key": "did:key:z3tEFH6FZWdZ4rxe9jCBhGPZJKhJb935s4avCvq1k2Kqzcuv1EmXiw8qBUEgsJX4KzW9PB"
        }
      ]
    }
  }
}
```

## findContract

### Paramenter

```json
{
  "filterOptions": {
    "byCode": null,
    "byId": "vsc1BcS12fD42kKqL2SMLeBzaEKtd9QbBWC1dt",
    "limit": 1,
    "offset": null
  }
}
```


Query
```js
query FindContract($filterOptions: FindContractFilter) {
  findContract(filterOptions: $filterOptions) {
    creator
    description
    id
    creation_ts
    code
    creation_height
    name
    owner
    runtime
    tx_id
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "FindContract",
    "query": "query FindContract($filterOptions: FindContractFilter) { findContract(filterOptions: $filterOptions) { creator description id creation_ts code creation_height name owner runtime tx_id } }",
    "variables": {
      "filterOptions": {
        "byCode": null,
        "byId": "vsc1BcS12fD42kKqL2SMLeBzaEKtd9QbBWC1dt",
        "limit": 1,
        "offset": null
      }
    }
  }'
```


Result
```json
{
  "data": {
    "findContract": [
      {
        "creator": "hive:milo-hpr",
        "description": "",
        "id": "vsc1BcS12fD42kKqL2SMLeBzaEKtd9QbBWC1dt",
        "creation_ts": "2025-10-15T06:25:24",
        "code": "bafkreidbhlxedejizmenuusqivgazqs4wo4bquyfgr3hhqym6vpmgwi3vi",
        "creation_height": 100305222,
        "name": "btc-testnet3-mapping",
        "owner": "hive:milo-hpr",
        "runtime": "go",
        "tx_id": "2b6548982c018b7df6b1485a4757d2e169b2ebe8"
      }
    ]
  }
}
```

## findContract

### Paramenter

```json
{
  "filterOptions": {
    "limit": 10,
    "offset": null,
    "byId": "null",
    "byInput": null,
    "byContract": null
  }
}
```



Query
```js
query FindContractOutput($filterOptions: ContractOutputFilter) {
  findContractOutput(filterOptions: $filterOptions) {
    block_height
    contract_id
    id
    state_merkle
    timestamp
    inputs
    results {
      ok
      ret
    }
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "FindContractOutput",
    "query": "query FindContractOutput($filterOptions: ContractOutputFilter) { findContractOutput(filterOptions: $filterOptions) { block_height contract_id id state_merkle timestamp inputs results { ok ret } } }",
    "variables": {
      "filterOptions": {
        "limit": 10,
        "offset": null,
        "byId": null,
        "byInput": null,
        "byContract": null
      }
    }
  }'
```

Result
```json
{
  "data": {
    "findContractOutput": [
      {
        "block_height": 100771837,
        "contract_id": "vsc1Bpi2HEM4cM1WrpGNsCUfuLBKeULRWYfTcz",
        "id": "bafyreibunsphhjbsbhopxa56g5geod54palz5qs253kt7xphqxt7nahir4",
        "state_merkle": "QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn",
        "timestamp": "2025-10-31T11:47:54",
        "inputs": [
          "da495d214e1145e5d5dead152f80036c6c707e55"
        ],
        "results": [
          {
            "ok": true,
            "ret": "testlog"
          }
        ]
      }
    ]
  }
}
```

## findLedgerActions

### Paramenter

```json
{
  "filterOptions": {
    "byAccount": null,
    "byActionId": null,
    "byAsset": "hbd",
    "byStatus": null,
    "byTxId": null,
    "byTypes": "withdraw",
    "fromBlock": null,
    "limit": 1,
    "offset": null,
    "toBlock": null
  }
}
```

Query
``` shell
query FindLedgerActions($filterOptions: LedgerActionsFilter) {
  findLedgerActions(filterOptions: $filterOptions) {
    action_id
    amount
    asset
    block_height
    id
    memo
    params
    status
    timestamp
    to
    type
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "FindLedgerActions",
    "query": "query FindLedgerActions($filterOptions: LedgerActionsFilter) { findLedgerActions(filterOptions: $filterOptions) { action_id amount asset block_height id memo params status timestamp to type } }",
    "variables": {
      "filterOptions": {
        "byAccount": null,
        "byActionId": null,
        "byAsset": "hbd",
        "byStatus": null,
        "byTxId": null,
        "byTypes": "withdraw",
        "fromBlock": null,
        "limit": 1,
        "offset": null,
        "toBlock": null
      }
    }
  }'
```

Result
``` json
{
  "data": {
    "findLedgerActions": [
      {
        "action_id": "f32d9bb5af878b09cf2f553a5596ebb3fee59677",
        "amount": 25000000,
        "asset": "hbd",
        "block_height": 100818860,
        "id": "1e4f4e7f18d0a5c8a9572460905c2a156832c212",
        "memo": "",
        "params": null,
        "status": "complete",
        "timestamp": "2025-11-02T03:00:57",
        "to": "hive:codecastor",
        "type": "withdraw"
      }
    ]
  }
}

```

## findLedgerTXs

### Paramenter

```json

{
  "filterOptions": {
    "byAsset": null,
    "byToFrom": null,
    "byTxId": null,
    "byTypes": null,
    "fromBlock": null,
    "limit": 1,
    "offset": null,
    "toBlock": null
  }
}
```



Query
```shell

query FindLedgerTXs($filterOptions: LedgerTxFilter) {
  findLedgerTXs(filterOptions: $filterOptions) {
    amount
    asset
    block_height
    from
    id
    owner
    timestamp
    tx_id
    type
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "FindLedgerTXs",
    "query": "query FindLedgerTXs($filterOptions: LedgerTxFilter) { findLedgerTXs(filterOptions: $filterOptions) { amount asset block_height from id owner timestamp tx_id type } }",
    "variables": {
      "filterOptions": {
        "byAsset": null,
        "byToFrom": null,
        "byTxId": null,
        "byTypes": null,
        "fromBlock": null,
        "limit": 1,
        "offset": null,
        "toBlock": null
      }
    }
  }'

```

Result
```json
{
  "data": {
    "findLedgerTXs": [
      {
        "amount": 5,
        "asset": "hive",
        "block_height": 100873179,
        "from": "hive:d-silva",
        "id": "d59cbb29abdddc3a81247417b6bf7c15c136e4c3",
        "owner": "hive:d-silva",
        "timestamp": "2025-11-04T00:19:42",
        "tx_id": "d59cbb29abdddc3a81247417b6bf7c15c136e4c3",
        "type": "deposit"
      }
    ]
  }
}
```


## findTransaction

### Paramenter
```json

{
  "filterOptions": {
    "byAccount": null,
    "byContract": null,
    "byId": null,
    "byIds": null,
    "byLedgerToFrom": null,
    "byLedgerTypes": null,
    "byStatus": null,
    "byType": null,
    "limit": 1,
    "offset": 2
  }
}
```


Query
```shell

query FindTransaction($filterOptions: TransactionFilter) {
  findTransaction(filterOptions: $filterOptions) {
    anchr_height
    anchr_id
    anchr_index
    anchr_ts
    first_seen
    id
    ledger {
      amount
      asset
      from
      memo
      params
      to
      type
    }
    ledger_actions {
      amount
      asset
      data
      id
      memo
      status
      type
      to
    }
    nonce
    op_types
    ops {
      data
      index
      required_auths
      type
    }
    output {
      id
      index
    }
    rc_limit
    required_auths
    required_posting_auths
    status
    type
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "FindTransaction",
    "query": "query FindTransaction($filterOptions: TransactionFilter) { findTransaction(filterOptions: $filterOptions) { anchr_height anchr_id anchr_index anchr_ts first_seen id ledger { amount asset from memo params to type } ledger_actions { amount asset data id memo status type to } nonce op_types ops { data index required_auths type } output { id index } rc_limit required_auths required_posting_auths status type } }",
    "variables": {
      "filterOptions": {
        "byAccount": null,
        "byContract": null,
        "byId": null,
        "byIds": null,
        "byLedgerToFrom": null,
        "byLedgerTypes": null,
        "byStatus": null,
        "byType": null,
        "limit": 1,
        "offset": 2
      }
    }
  }'
```

Result
```json

{
  "data": {
    "findTransaction": [
      {
        "anchr_height": 100872705,
        "anchr_id": null,
        "anchr_index": 2,
        "anchr_ts": "2025-11-03T23:56:00",
        "first_seen": "2025-11-03T23:56:04Z",
        "id": "6f6baecc531f94cdd215779e8ab9c8ed0018ed93",
        "ledger": [
          {
            "amount": 1,
            "asset": "hive",
            "from": "hive:d-silva",
            "memo": "",
            "params": null,
            "to": "did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207",
            "type": "transfer"
          }
        ],
        "ledger_actions": [],
        "nonce": 0,
        "op_types": [
          "transfer"
        ],
        "ops": [
          {
            "data": {
              "amount": "0.001",
              "asset": "hive",
              "from": "hive:d-silva",
              "memo": "",
              "to": "did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207"
            },
            "index": 0,
            "required_auths": [
              "hive:d-silva"
            ],
            "type": "transfer"
          }
        ],
        "output": null,
        "rc_limit": 0,
        "required_auths": [
          "hive:d-silva"
        ],
        "required_posting_auths": [],
        "status": "CONFIRMED",
        "type": "hive"
      }
    ]
  }
}

```


## getAccountBalance

### Paramenter

```json
{
  "account": "did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207",
  "height": null
}

```


Query
```shell
query GetAccountBalance($account: String!, $height: Uint64) {
  getAccountBalance(account: $account, height: $height) {
    account
    block_height
    consensus_unstaking
    hbd
    hbd_avg
    hbd_claim
    hbd_modify
    hbd_savings
    hive
    hive_consensus
    pending_hbd_unstaking
  }
}

```
or 

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "GetAccountBalance",
    "query": "query GetAccountBalance($account: String!,$height: Uint64) { getAccountBalance(account: $account,height: $height) { pending_hbd_unstaking consensus_unstaking hbd hbd_savings hive_consensus hive } }",
    "variables": {
      "account": "hive:d-silva",
      "$height": null
    }
  }'
```

Result
```json
{
  "data": {
    "getAccountBalance": {
      "account": "did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207",
      "block_height": 100872710,
      "consensus_unstaking": 0,
      "hbd": 0,
      "hbd_avg": 0,
      "hbd_claim": 0,
      "hbd_modify": 100871460,
      "hbd_savings": 0,
      "hive": 2,
      "hive_consensus": 0,
      "pending_hbd_unstaking": 0
    }
  }
}

```

## getAccountNonce

### Paramenter

```json

{
  "account": "did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207"
}

```


Query
```shell
query GetAccountNonce($account: String!) {
  getAccountNonce(account: $account) {
    account
    nonce
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "GetAccountNonce",
    "query": "query GetAccountNonce($account: String!) { getAccountNonce(account: $account) { account nonce } }",
    "variables": {
      "account": "did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207"
    }
  }'
```

Result
```json
{
  "data": {
    "getAccountNonce": {
      "account": "did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207",
      "nonce": 0
    }
  }
}
```



## getAccountRC

### Paramenter

```json

{
  "account": "hive:faireye",
  "height": null
}

```


Query
```shell
query GetAccountRC($account: String!, $height: Uint64) {
  getAccountRC(account: $account, height: $height) {
    account
    amount
    block_height
    max_rcs
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "GetAccountRC",
    "query": "query GetAccountRC($account: String!, $height: Uint64) { getAccountRC(account: $account, height: $height) { account amount block_height max_rcs } }",
    "variables": {
      "account": "hive:faireye",
      "height": null
    }
  }'
```

Result
```json
{
  "data": {
    "getAccountRC": {
      "account": "hive:faireye",
      "amount": 5000,
      "block_height": 9223372036854776000,
      "max_rcs": 5000
    }
  }
}
```

## getDagByCID

### Paramenter

```json
{
  "cidString": "bafyreibqg2pd56sa57k7iu3mjviusf4u6z5tmmxdcvjvmbijroqnkjrfpa"
}

```


Query
```shell
query Query($cidString: String!) {
  getDagByCID(cidString: $cidString)
}

```

```
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "Query",
    "query": "query Query($cidString: String!) { getDagByCID(cidString: $cidString) }",
    "variables": {
      "cidString": "bafyreibqg2pd56sa57k7iu3mjviusf4u6z5tmmxdcvjvmbijroqnkjrfpa"
    }
  }'
```

Result
```json
{
  "data": {
    "getDagByCID": "{\"headers\":{\"prevb\":\"bafyreig6c4vnhblyyq7unkwlr6rleisth2qypee65s24ozutmel47uywau\"},\"merkle_root\":\"VugfFxvMVab_g0XmksD4bltI4BuZbK3AAWIvteNjtCE\",\"sig_root\":null,\"txs\":[{\"id\":\"bafyreiepp2u2ywqixkzce4l2nx4dthpp7nnackmqqchysu77ocn2edxksy\",\"op\":null,\"type\":4}]}"
  }
}
```

## getElection

### Paramenter

```json
{
  "epoch": 755
}

```


Query
```shell
query GetElection($epoch: Uint64!) {
  getElection(epoch: $epoch) {
    epoch
    net_id
    type
    data
    members {
      account
      key
    }
    weights
    protocol_version
    total_weight
    block_height
    proposer
    tx_id
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "GetElection",
    "query": "query GetElection($epoch: Uint64!) { getElection(epoch: $epoch) { epoch net_id type data members { account key } weights protocol_version total_weight block_height proposer tx_id } }",
    "variables": {
      "epoch": 755
    }
  }'
```

Result
```json
{
  "data": {
    "getElection": {
      "epoch": 755,
      "net_id": "vsc-mainnet",
      "type": "staked",
      "data": "bafyreiamqd4ugifmt3crmo6nlc2jk4p64wghbbjyg4wp6qt5rtfi6otide",
      "members": [
        {
          "account": "actifit.vsc",
          "key": "did:key:z3tEEoZ5VYi83X1bmogNMy8cMr64NLcBCMLfcYaW8w6T9ATdBRTLuphZPTM3cJ7gcjdcLj"
        },
        {
          "account": "arcange.vsc",
          "key": "did:key:z3tEGMpV1PXnAUqaQLwJBo2f3TJwYjHjEWNF8mGWsDFf38ruNJztnV8yRAL3nWdCYgEaSo"
        },
        {
          "account": "ausbit.vsc",
          "key": "did:key:z3tEFLPyzsQWoEh6qKsbqmHyzWiPSHo7HXdnvSJiXzoGqstJrx7EqYtEwMN66avyiWSFax"
        },
        {
          "account": "bala.vsc",
          "key": "did:key:z3tEF8fiC1SJjttiSTf5SEqkUs3Vehaye3MDgWKebhjjqHLqMjoXjrdFsB8sBqB5usgPkq"
        },
        {
          "account": "blocktrades.vsc",
          "key": "did:key:z3tEFTY93U4w8NLJVusf5SBpMC9vQFwTCWvMzhejNzR7dAM82C7XmZRMZ8i1RTXkKzG1ty"
        },
        {
          "account": "botlord",
          "key": "did:key:z3tEEc6okdyS56BFv1xKwTYizzn9Y6arvJHxWqXqf8jbkHG28x5D19a3xdrYxqGXcH57Gw"
        },
        {
          "account": "bradleyarrow.vsc",
          "key": "did:key:z3tEGeDRKdeJ5yxhicDAXNHwquA8F5zdPexFLa6StMJyhw3bjM4dBXXYS5jQAHc7USZyCw"
        },
        {
          "account": "comptroller.vsc",
          "key": "did:key:z3tEGRXJg9R49Me2HSNoiRQPec1AXbzsafeRjdQ9W5TavUmKmt8KgjZY5PYjxwfsywTxyQ"
        },
        {
          "account": "dalz.vsc",
          "key": "did:key:z3tEF7pXrcvm9sUcWhCAE8oV5CJr4og5JwMDUD4Gu3tUQJjdC2HscT3DYdnYzSpJuncnLt"
        },
        {
          "account": "delta-p",
          "key": "did:key:z3tEGCR3mnZ9R2NNV3FvLDWnX3VH41YfTiRVr8joXZBwH5diPL6cfHZDGNTdEx47McaVYo"
        },
        {
          "account": "emrebeyler.vsc",
          "key": "did:key:z3tEFFDdd81G3KMe9JGkYFeb6gNMGGZ9Gqy6K33dFj4eeh9AF2cDdESWoZuFbXWMZNQveK"
        },
        {
          "account": "geo52rey.vsc",
          "key": "did:key:z3tEGXRUpbmhFHDqBAQNNnmVcpwnUvwtdpjqENQ11NCTWiwRB5PwXJM8rbZP2Qtd2BVXeH"
        },
        {
          "account": "lobes",
          "key": "did:key:z3tEGJ41BPEsRaJjtXTxWPtbXWQhHyZmUYxAN3ms5bu4y2U2ivinSk1iGbaR81V92yJAnU"
        },
        {
          "account": "louis.vsc",
          "key": "did:key:z3tEGJbqmgJLq9n8ivGJAK9h1G7gxv9MRkNBDLfKAxJL76HLPKNampWHw7BcLudcbzgMru"
        },
        {
          "account": "mahdiyari.vsc",
          "key": "did:key:z3tEExSy7tQeWXwib3PKN3JzryJxHgKEFoDtXaWd9YfRk9iJ9cRbYEHfY7UXMEtbFC612T"
        },
        {
          "account": "mengao.vsc",
          "key": "did:key:z3tEFtXxkT1RzQgDe6x1uRjrRq2PiYZoUCKCXPmsCj7bCNdMKG5k6digtop4615g5zDWkr"
        },
        {
          "account": "possibly.vsc",
          "key": "did:key:z3tEFtFVyRXp7bbpDaRfngAtCiVSSqMrnyP5B8CrpWK1z4tbed8ZB5RASckFNC1oufjoDw"
        },
        {
          "account": "prime.vsc",
          "key": "did:key:z3tEGSKy3KQF3gwoP8yhWGtEjvtw9FyL7gbcGQKopEXbPu5bZJ1QgSYCno54LjfgkRbVLD"
        },
        {
          "account": "sagarkothari.vsc",
          "key": "did:key:z3tEGJjyp1Em9PzRfWAoQrJS9Kj8bdWoXyUg6uCEtyLgha21JMjvcf4cpiWvWgaih67LgA"
        },
        {
          "account": "shmoogleosukami",
          "key": "did:key:z3tEFrRnmfebGM6ovhugvKJd1ednPWoAgfbS5rvasHTjCvb4mhZftgSCGkR4ABQxe3wi7U"
        },
        {
          "account": "spker",
          "key": "did:key:z3tEGhUVRxcuhJ2P7VzVQRt3EKyDyhqbZePfvGVaGbfEBnQETWEmRRfGMXq1GKWjDNEFAS"
        },
        {
          "account": "techcoderx.vsc",
          "key": "did:key:z3tEGfEA3wcykznHKL7n4cv6zKqECDAR2kDJqgm9YRTQtYMGxayDHGGFrEERnjcfcgRhfh"
        },
        {
          "account": "tibfox.vsc",
          "key": "did:key:z3tEG5eYqX8KfkNsVagRRqZFdhdtMT3XneMonFe2bjiob19yXWfA4Pd5sn1RvTppz2roHT"
        },
        {
          "account": "v4vapp.vsc",
          "key": "did:key:z3tEFXmLPEXEzMzwPD9cnFBv45XCqfgPWjxe8TUmygjrNyg5VQhfDqukMu492MdAPeU9h4"
        },
        {
          "account": "vaultec.vsc",
          "key": "did:key:z3tEFH6FZWdZ4rxe9jCBhGPZJKhJb935s4avCvq1k2Kqzcuv1EmXiw8qBUEgsJX4KzW9PB"
        }
      ],
      "weights": [
        2000000,
        2000000,
        2000000,
        2000100,
        2000000,
        2103000,
        2950000,
        2000000,
        2001000,
        2000000,
        8691000,
        2000000,
        2000400,
        8100000,
        2001000,
        7700000,
        2000000,
        2002000,
        3894316,
        2410663,
        2000000,
        2850001,
        5480067,
        14018000,
        9500000
      ],
      "protocol_version": 0,
      "total_weight": 95701547,
      "block_height": 100537704,
      "proposer": "blocktrades.vsc",
      "tx_id": "9770feec1e507162dde8ebd35591e1849d2a6824"
    }
  }
}
```


## getStateByKeys

### Paramenter

```json
{
  "contractId": "vsc1BcS12fD42kKqL2SMLeBzaEKtd9QbBWC1dt",
  "keys": "account_balances"
}

```


Query
```shell
query Query($contractId: String!, $keys: [String!]!) {
  getStateByKeys(contractId: $contractId, keys: $keys)
}

```

```
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "Query",
    "query": "query Query($contractId: String!, $keys: [String!]!) { getStateByKeys(contractId: $contractId, keys: $keys) }",
    "variables": {
      "contractId": "vsc1BcS12fD42kKqL2SMLeBzaEKtd9QbBWC1dt",
      "keys": ["account_balances"]
    }
  }'
```

Result
```json
{
  "data": {
    "getStateByKeys": {
      "account_balances": null
    }
  }
}
```

## GetTssKey


### Paramenter

keyId?
```json
{
  "keyId": "?"
}
```


Query
```shell
query GetTssKey($keyId: String!) {
  getTssKey(keyId: $keyId) {
    id
    status
    PublicKey
    Owner
    Algo
    CreatedHeight
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "GetTssKey",
    "query": "query GetTssKey($keyId: String!) { getTssKey(keyId: $keyId) { id status PublicKey Owner Algo CreatedHeight } }",
    "variables": {
      "keyId": "?"
    }
  }'
```

Result
```json
{
  "errors": [
    {
      "message": "mongo: no documents in result",
      "path": [
        "getTssKey"
      ]
    }
  ],
  "data": {
    "getTssKey": null
  }
}
```

## getTssRequests

### Paramenter

Unkown
```json
{
  "keyId": null,
  "msgHex": "?"
}

```


Query
```shell
query GetTssRequests($keyId: String!, $msgHex: [String!]) {
  getTssRequests(keyId: $keyId, msgHex: $msgHex) {
    id
    status
    keyId
    msg
    sig
  }
}

```

```shell
  curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "GetTssRequests",
    "query": "query GetTssRequests($keyId: String!, $msgHex: [String!]) { getTssRequests(keyId: $keyId, msgHex: $msgHex) { id status keyId msg sig } }",
    "variables": {
      "keyId": "did:key:z3tEEoZ5VYi83X1bmogNMy8cMr64NLcBCMLfcYaW8w6T9ATdBRTLuphZPTM3cJ7gcjdcLj", 
      "msgHex": []
    }
  }'
```

Result
```json
{
  "errors": [
    {
      "message": "cannot be null",
      "path": [
        "variable",
        "keyId"
      ],
      "extensions": {
        "code": "GRAPHQL_VALIDATION_FAILED"
      }
    }
  ],
  "data": null
}
```


## getWitness

### Paramenter

```json
{
  "account": "actifit.vsc",
  "height": null
}

```


Query
```shell
query GetWitness($account: String!, $height: Uint64) {
  getWitness(account: $account, height: $height) {
    account
    height
    did_keys {
      ct
      t
      key
    }
    enabled
    git_commit
    net_id
    peer_id
    protocol_version
    ts
    tx_id
    version_id
    gateway_key
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "GetWitness",
    "query": "query GetWitness($account: String!, $height: Uint64) { getWitness(account: $account, height: $height) { account height did_keys { ct t key } enabled git_commit net_id peer_id protocol_version ts tx_id version_id gateway_key } }",
    "variables": {
      "account": "actifit.vsc",
      "height": null
    }
  }'
```

Result
```json
{
  "data": {
    "getWitness": {
      "account": "actifit.vsc",
      "height": 100891291,
      "did_keys": [
        {
          "ct": "DID-BLS",
          "t": "consensus",
          "key": "did:key:z3tEEoZ5VYi83X1bmogNMy8cMr64NLcBCMLfcYaW8w6T9ATdBRTLuphZPTM3cJ7gcjdcLj"
        }
      ],
      "enabled": true,
      "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
      "net_id": "vsc-mainnet",
      "peer_id": "12D3KooWAKd9s11KkcmcCnZcofv2NDNVoj1JidLhbSdbUF7pgE3A",
      "protocol_version": 0,
      "ts": "2025-11-04T15:26:03Z",
      "tx_id": "84a228aa2c628accee2e7765bd5a2213ca1abb81",
      "version_id": "go-v0.1.0",
      "gateway_key": "STM5AJ7NhxGcFY8CYHa67h6YpCR5w7U18o7Df9YQ8gxVa5HniRivK"
    }
  }
}
```


## localNodeInfo

### Paramenter

```json


```


Query
```shell
query LocalNodeInfo {
  localNodeInfo {
    version_id
    git_commit
    last_processed_block
    epoch
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "LocalNodeInfo",
    "query": "query LocalNodeInfo { localNodeInfo { version_id git_commit last_processed_block epoch } }",
    "variables": {}
  }'
```

Result
```json
{
  "data": {
    "localNodeInfo": {
      "version_id": "go-v0.1.0",
      "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
      "last_processed_block": 100893172,
      "epoch": 804
    }
  }
}
```

## submitTransactionV1

Offchain, evm
### Paramenter

```json
{
  "tx": "null",
  "sig": "null"
}

```


Query
```shell
query SubmitTransactionV1($tx: String!, $sig: String!) {
  submitTransactionV1(tx: $tx, sig: $sig) {
    id
  }
}

```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "SubmitTransactionV1",
    "query": "query SubmitTransactionV1($tx: String!, $sig: String!) { submitTransactionV1(tx: $tx, sig: $sig) { id } }",
    "variables": {
      "tx": "TRANSACTION_HEX_AQUI",
      "sig": "SIGNATURE_HEX_AQUI"
    }
  }'
```

Result
```json
{
  "errors": [
    {
      "message": "decodeUint: Invalid descriptor: 158",
      "path": [
        "submitTransactionV1"
      ]
    }
  ],
  "data": {
    "submitTransactionV1": null
  }
}
```



## witnessNodes

### Paramenter

https://vsc.techcoderx.com/block/460959
Slot Height
```json
{
  "height": "100893280"
}

```


Query
```shell
query WitnessNodes($height: Uint64!) {
  witnessNodes(height: $height) {
    account
    height
    did_keys {
      ct
      t
      key
    }
    enabled
    git_commit
    net_id
    peer_id
    protocol_version
    ts
    tx_id
    version_id
    gateway_key
  }
}
```

```shell
curl -X POST \
  'https://api.vsc.eco/api/v1/graphql' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationName": "WitnessNodes",
    "query": "query WitnessNodes($height: Uint64!) { witnessNodes(height: $height) { account height did_keys { ct t key } enabled git_commit net_id peer_id protocol_version ts tx_id version_id gateway_key } }",
    "variables": {
      "height": 100893280 
    }
  }'
```

Result
```json
{
  "data": {
    "witnessNodes": [
      {
        "account": "actifit.vsc",
        "height": 100891291,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEEoZ5VYi83X1bmogNMy8cMr64NLcBCMLfcYaW8w6T9ATdBRTLuphZPTM3cJ7gcjdcLj"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWAKd9s11KkcmcCnZcofv2NDNVoj1JidLhbSdbUF7pgE3A",
        "protocol_version": 0,
        "ts": "2025-11-04T15:26:03Z",
        "tx_id": "84a228aa2c628accee2e7765bd5a2213ca1abb81",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM5AJ7NhxGcFY8CYHa67h6YpCR5w7U18o7Df9YQ8gxVa5HniRivK"
      },
      {
        "account": "arcange.vsc",
        "height": 100890888,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGMpV1PXnAUqaQLwJBo2f3TJwYjHjEWNF8mGWsDFf38ruNJztnV8yRAL3nWdCYgEaSo"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWQnA1VE8H4QKAkeaEaXd7n1GpLxQXq1MoURn4Lnqhqe3X",
        "protocol_version": 0,
        "ts": "2025-11-04T15:05:54Z",
        "tx_id": "1df46fa6e0f9108390d5ca2fb62a47ef7ef2696d",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM89H8y1C7J13Y2bzbGN9rUdVJ5dVznEbEyYaR367Rd3xF9PKzNz"
      },
      {
        "account": "asgarth.vsc",
        "height": 100891759,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFvWnqqiHG3GVP8YT363qfJs7bVDU8XfsuPtqCcQAviLXzK93VLeqRCZPgiSryMWspk"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooW9ttfL6RL3FKZU9jrhMvJohcAvToaZRHQPoHGqw9ZQv4p",
        "protocol_version": 0,
        "ts": "2025-11-04T15:49:30Z",
        "tx_id": "38b55578dbedeeec06ae37724fd352747bc41864",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM6RWgaqwCCjUcRE37hTXxvRrHJepjXoyMZzUJ4bDzDfQB7jFQZF"
      },
      {
        "account": "atexoras.vsc",
        "height": 100891845,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFqqF3nRPJAktFz5ekkMzirARE8NcupNZDMh1ZoYBkX6ndN1qmiv2BeToMxRCoSgkPy"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWGfpDPeVLsPvnpV13HHiYDJekw3ta7bXxqwFqdBXvUUEp",
        "protocol_version": 0,
        "ts": "2025-11-04T15:53:48Z",
        "tx_id": "751a056e3d06b3d37a8a5d34180e362c2dbfac74",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM8gaSb3uwe2i37titHjpF1mt31naQh3U3FZQMA7yQZJF66CCm7f"
      },
      {
        "account": "ausbit.vsc",
        "height": 100891722,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFLPyzsQWoEh6qKsbqmHyzWiPSHo7HXdnvSJiXzoGqstJrx7EqYtEwMN66avyiWSFax"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWRrGqkoJprHu8yZNF1gTDdpJCERRdbvdUTyJChde4XzHf",
        "protocol_version": 0,
        "ts": "2025-11-04T15:47:35Z",
        "tx_id": "c48cd5d253256468423fcdebee674f7fed259cd4",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM5JtXGyjuayYAgXWThqTuDJdSSzMUD9QiFyj7FP4yQ1e6L1PJBA"
      },
      {
        "account": "bala.vsc",
        "height": 100813753,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEF8fiC1SJjttiSTf5SEqkUs3Vehaye3MDgWKebhjjqHLqMjoXjrdFsB8sBqB5usgPkq"
          }
        ],
        "enabled": true,
        "git_commit": "0e449d605bb2fb2799f50a24d460e636666e1a10",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWF7fzr7dUmqKc1jvC7Zrc2sJ3kjRqg1gJJFkDnXcZ823K",
        "protocol_version": 0,
        "ts": "2025-11-01T22:45:15Z",
        "tx_id": "7aa2b38dc8fc9a5b172cd015de86419a192e074e",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM77Yt4NaLVUZPS8s65N23nVV3oLLYnwA8VizDMd8fD5Dxs78BZB"
      },
      {
        "account": "blocktrades.vsc",
        "height": 100891528,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFTY93U4w8NLJVusf5SBpMC9vQFwTCWvMzhejNzR7dAM82C7XmZRMZ8i1RTXkKzG1ty"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWA8s64sSSbRLGGXspuU2hkfEkB7tKrcNDBWWjL6V8dC6o",
        "protocol_version": 0,
        "ts": "2025-11-04T15:37:54Z",
        "tx_id": "21e427d71193724553124530175fd5f44da2067b",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM4zUkeHZpjpWjy41FftZJtQcyCPoyczEWoFqinTLcSbCtLm5q7Y"
      },
      {
        "account": "botlord",
        "height": 100891105,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEEc6okdyS56BFv1xKwTYizzn9Y6arvJHxWqXqf8jbkHG28x5D19a3xdrYxqGXcH57Gw"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWQyRybb7tz7fTygZdWhu5bSPiwqMmxDHDALJ972WiXsf1",
        "protocol_version": 0,
        "ts": "2025-11-04T15:16:45Z",
        "tx_id": "4460c42c6a8f76af7979481e031e2f36ba73ba2b",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7ZUyethubaMv22DZ3ZmymD5Z3XrpMnkvoihoPAWGCkftQSenK4"
      },
      {
        "account": "bradleyarrow.vsc",
        "height": 100890829,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGeDRKdeJ5yxhicDAXNHwquA8F5zdPexFLa6StMJyhw3bjM4dBXXYS5jQAHc7USZyCw"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWHw6E5vkEybeaMhJKMvbupyAGnCRPNQDdUjRo4gkf5F6e",
        "protocol_version": 0,
        "ts": "2025-11-04T15:02:59Z",
        "tx_id": "cc1e8f85c94bf02f1cfd52c83df73fedf9c3774c",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7oJWMVR4L659ZnLnunzc1Lz6BoEK3vQF4uSW6eb7CqvdpaUBZu"
      },
      {
        "account": "comptroller.vsc",
        "height": 100835117,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGRXJg9R49Me2HSNoiRQPec1AXbzsafeRjdQ9W5TavUmKmt8KgjZY5PYjxwfsywTxyQ"
          }
        ],
        "enabled": true,
        "git_commit": "0e449d605bb2fb2799f50a24d460e636666e1a10",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWQCkr5p5r2sPqxYWKKQmVTxrHpJYtK61eiMGJp9eBpm58",
        "protocol_version": 0,
        "ts": "2025-11-02T16:34:35Z",
        "tx_id": "a9963f6f9318318ce58649828c6dba32537ec3d6",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7fZJLRdcsHt74Aqf7toSftpj4MJrZt1pr9dHpUemfnFbjxRYwB"
      },
      {
        "account": "dalz.vsc",
        "height": 100891684,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEF7pXrcvm9sUcWhCAE8oV5CJr4og5JwMDUD4Gu3tUQJjdC2HscT3DYdnYzSpJuncnLt"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWKUmixKkURVEktxNkn6Keb8LUPk4FdGXM6uAPGsiURw9z",
        "protocol_version": 0,
        "ts": "2025-11-04T15:45:42Z",
        "tx_id": "59171ce9b2300feb834511292dd4ef6bed549aa5",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7EQHPKZxk9dxVWuJhQKFqaoBevr89cemvP8WntjmTNzbrVyJTF"
      },
      {
        "account": "delta-p",
        "height": 100890829,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGCR3mnZ9R2NNV3FvLDWnX3VH41YfTiRVr8joXZBwH5diPL6cfHZDGNTdEx47McaVYo"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWJxBEYRpD2TDwSTsg1Hjhd1rjFWNtFTcusYQvWqZ4RJGB",
        "protocol_version": 0,
        "ts": "2025-11-04T15:02:57Z",
        "tx_id": "aa8e9e93540899da22fdc78ae770283d7288c7fa",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7j2hPaX5kD7xhPDWJnCvU9RSNCw94TydmD9aQEU7bdQgtdEEyY"
      },
      {
        "account": "emrebeyler.vsc",
        "height": 100890890,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFFDdd81G3KMe9JGkYFeb6gNMGGZ9Gqy6K33dFj4eeh9AF2cDdESWoZuFbXWMZNQveK"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWRENwq8C2aYSk3sGaXZSnZQEd9wpju4dHPsXbnz2roTuR",
        "protocol_version": 0,
        "ts": "2025-11-04T15:05:59Z",
        "tx_id": "31ce92c4c3b7bf8bcfeb94b9577e9667683c3ebc",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM8Tpp4xsmV7HkVubTFfUDH68NmwSt3RAai3D5hMjCrcrDXJqy16"
      },
      {
        "account": "gtg.vsc",
        "height": 100891044,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEEyjMt78iH1hVMzYMVz7MHvvaSidmK2HknELdNohDEsqoEtTgc3AEa6iRGrAdmks51D"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWRnteMca3kEjGeSB7hDQNhD4RaVK8Ls5cJkzimmpo8VK6",
        "protocol_version": 0,
        "ts": "2025-11-04T15:13:43Z",
        "tx_id": "95bdcc510a0e0119d0e33ce9b81db74888b2c415",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7UZvF4Yy8mbH8991Pop8wFVgKvrPZHigxKvCoLr3AHx8MzHki7"
      },
      {
        "account": "herman.vsc",
        "height": 100890837,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEG1Lt84835Lgotx4LHYfkPJPdbsVvUGGMKLPEv2wM94Zdo6gUqb9yp8CDApCXMJCaiQ"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWSgwEYYJsf5BmDZFUCEgEiAr7Bv9M5TUfkqRYvkNwZ6sZ",
        "protocol_version": 0,
        "ts": "2025-11-04T15:03:22Z",
        "tx_id": "125b4206581f83cb47c8d92e54604a5e7722826c",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM88SU5ubfDqr3x6xLHdMHc6ezXjx4im1sDBVwuhbqEMi9Uo7cSX"
      },
      {
        "account": "lobes",
        "height": 100893224,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGJ41BPEsRaJjtXTxWPtbXWQhHyZmUYxAN3ms5bu4y2U2ivinSk1iGbaR81V92yJAnU"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWL8ZPUeHWurvTrdE2cLEkrCxg2K71fddnuvYBFSGX9rm8",
        "protocol_version": 0,
        "ts": "2025-11-04T17:02:53Z",
        "tx_id": "87c6147f74b0049a8775317c04c2e292498ca98b",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM86YiMRQLkr9Mh51dsXpJAgsBLgDD1vMmo4qiBNEwsat7hbva6e"
      },
      {
        "account": "louis.vsc",
        "height": 100890894,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGJbqmgJLq9n8ivGJAK9h1G7gxv9MRkNBDLfKAxJL76HLPKNampWHw7BcLudcbzgMru"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWKzGL7J7Ax9rg25FAeCRdsQLmvK5izBgHpoYPppCkaYe2",
        "protocol_version": 0,
        "ts": "2025-11-04T15:06:11Z",
        "tx_id": "f5be93e33865e93f67c095e5e863576b5f70332a",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM6Kxanwiw1ndoh3EAbAaP1GdDoTh3qh3KiXbGzv6YxM79Jze3Zb"
      },
      {
        "account": "mahdiyari.vsc",
        "height": 100870934,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEExSy7tQeWXwib3PKN3JzryJxHgKEFoDtXaWd9YfRk9iJ9cRbYEHfY7UXMEtbFC612T"
          }
        ],
        "enabled": true,
        "git_commit": "2cf7abbe67d56826e61ddcc79ac2c35c6e904281",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWJuqMaqqYQuhUgUCWPSQNFf98VPbrDiHNJ5KxUiT85tkk",
        "protocol_version": 0,
        "ts": "2025-11-03T22:27:26Z",
        "tx_id": "4939567720e40e2ee838d10a4b359ddd78368366",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM6VtiVwBunrcKzvdd1rgbKbuubSUoCQgrcqgmJxX15Eaug9o5vu"
      },
      {
        "account": "mengao.vsc",
        "height": 100891441,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFtXxkT1RzQgDe6x1uRjrRq2PiYZoUCKCXPmsCj7bCNdMKG5k6digtop4615g5zDWkr"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWCAE4XrkE4NJL3nqYkXXNhte94rdBDGGVQQJewrDXDVJZ",
        "protocol_version": 0,
        "ts": "2025-11-04T15:33:34Z",
        "tx_id": "663af21d6dc1adc901987abfca94fe97fd5746be",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7hU9CLhTVU7zUnx9EMRJtzZ1FwZZqE9tG2PzV5a59pv1veJFKe"
      },
      {
        "account": "possibly.vsc",
        "height": 100893219,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFtFVyRXp7bbpDaRfngAtCiVSSqMrnyP5B8CrpWK1z4tbed8ZB5RASckFNC1oufjoDw"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWGTfqe7ZTrLBtRA8KgvbmX6TW7UajHHytMrHHg5vu3nK9",
        "protocol_version": 0,
        "ts": "2025-11-04T17:02:39Z",
        "tx_id": "07ea39843608c3ff2f708f0f03b523238613f077",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM6nFENvLYUUN8sJpgRRQtz9NgBYHd8ELne4KD8Wk6yrZj5yePJY"
      },
      {
        "account": "prime.vsc",
        "height": 100891176,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGSKy3KQF3gwoP8yhWGtEjvtw9FyL7gbcGQKopEXbPu5bZJ1QgSYCno54LjfgkRbVLD"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWCM17oyQZyQc84gJSScZDih8pu5L7ETkhD6hMFZEtwgqk",
        "protocol_version": 0,
        "ts": "2025-11-04T15:20:18Z",
        "tx_id": "a343ae6d1e08c239af6bee2b70ae92d45cf98c39",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM6PRjw4nV4TfqTWZEWy3vTCbKnGD6MkhaN8cijHZi4wZw1UDJuu"
      },
      {
        "account": "raymonjohnstone",
        "height": 100891686,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFsZyEHsxrZBP6Aq8abQaSodykjR4QWaLPVaNNEUMCpNW3hJRWeYX5y1dhsbUrN4V9E"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWPoqdWyGdsCfXTwVA4wDGbMTY7z4KGTEEpxE7QiBc1Byc",
        "protocol_version": 0,
        "ts": "2025-11-04T15:45:47Z",
        "tx_id": "258a791b0b9ac5066ba75499930276664705d7cf",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7XAJBRsisg9a2xPdUZrVDsHvzopPfoRw96yMttcj9wFGLgKbqs"
      },
      {
        "account": "sagarkothari.vsc",
        "height": 100893023,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGJjyp1Em9PzRfWAoQrJS9Kj8bdWoXyUg6uCEtyLgha21JMjvcf4cpiWvWgaih67LgA"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWNASFRAxokQo5QjPf7QPa4BWWVeVcu2NCZu1Mnw8bfL52",
        "protocol_version": 0,
        "ts": "2025-11-04T16:52:52Z",
        "tx_id": "77f0bf030711089095c471939a926e3151be3142",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7Z2sa4UujSQLb6ok6U7Jbh9Gj79uXi66sVb4hktRHuyHefUPfF"
      },
      {
        "account": "shmoogleosukami",
        "height": 100891773,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFrRnmfebGM6ovhugvKJd1ednPWoAgfbS5rvasHTjCvb4mhZftgSCGkR4ABQxe3wi7U"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWDL6RBRwhAZa89VzyfELuqP2o5JAiBiZLCEqnrmC5dZaL",
        "protocol_version": 0,
        "ts": "2025-11-04T15:50:12Z",
        "tx_id": "ffa186db8275286ee15243bb0f8fdccff1e0bad6",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM67EjWFW8W9WBkJd1PsgL9i3tc2EFcy9yvghdsWibKbMkfQH8Kc"
      },
      {
        "account": "spker",
        "height": 100891485,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGhUVRxcuhJ2P7VzVQRt3EKyDyhqbZePfvGVaGbfEBnQETWEmRRfGMXq1GKWjDNEFAS"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWPzZ9RzsCP6BREUFbY1xyZiJ3PPoCW3DFGDhAwExiUazV",
        "protocol_version": 0,
        "ts": "2025-11-04T15:35:44Z",
        "tx_id": "df2127ac3e497e30776d14fab449efb708937def",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM6LhWUsvr1hc62PXrzoa4Uoxcr9c9kKZBf4sXJG8K1geFjEmw4k"
      },
      {
        "account": "sudokurious",
        "height": 100861859,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEG8NYbMACJo96i2RVjDrATPuBHwCUifrnLzw2JD1LLZeMoHupp4ZSK36WUDyszdTXoy"
          }
        ],
        "enabled": true,
        "git_commit": "0e449d605bb2fb2799f50a24d460e636666e1a10",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWAVxjTFmYoy8EUAq59A7rsy57BZoNEmnt8jfmoruncSVj",
        "protocol_version": 0,
        "ts": "2025-11-03T14:53:16Z",
        "tx_id": "66257efa33c2607737fd281190d3950bba33d9f5",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM6tuQrU4vDUMe1DWs1hvQoN7tWPkeJgYpFGWgYMSEFsVBgMy4G4"
      },
      {
        "account": "techcoderx.vsc",
        "height": 100891776,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEGfEA3wcykznHKL7n4cv6zKqECDAR2kDJqgm9YRTQtYMGxayDHGGFrEERnjcfcgRhfh"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWQbvudWahQWpWkdHdNd7yASZZm756oxRzYqkQxQzqvWg9",
        "protocol_version": 0,
        "ts": "2025-11-04T15:50:22Z",
        "tx_id": "59362a25c3211cdccc2407d63e421ca6dbb9056d",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM4y3Qj7hEbTBeVW5R39X7Mnnxm4k6uDNsWsARATHy22H86GeTRV"
      },
      {
        "account": "threespeak.vsc",
        "height": 100891732,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFnWLSsTdaXAZHq3T1PaVmME6iqVYewFPHoGca1pWLK6RCZD5U8PvUY3p6yLdk2A71v"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWFURZeoY2jEf5xWomVKzcbTY1c9HsTuuYqgHJztLf9Y3z",
        "protocol_version": 0,
        "ts": "2025-11-04T15:48:09Z",
        "tx_id": "3983fa40a0fdbf0327643ca0caadf93bf8e09da4",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM5Y4Kf9UwvpU6teiPSSqJDK4m3U3s9pMH4ZHfW6TQuB38tTpnPL"
      },
      {
        "account": "tibfox.vsc",
        "height": 100891033,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEG5eYqX8KfkNsVagRRqZFdhdtMT3XneMonFe2bjiob19yXWfA4Pd5sn1RvTppz2roHT"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWGp9iVguNNQADRXvL2upjAavTARHgrUfjVZbwzRtFqAU4",
        "protocol_version": 0,
        "ts": "2025-11-04T15:13:10Z",
        "tx_id": "831eb2415393d05cfeba4ebf101bc6c764f96bad",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM8Qx1X6seaEjA4MGn1b1iBAityznDNktEBQCt1BZ9R1J7KHAyGq"
      },
      {
        "account": "v4vapp.vsc",
        "height": 100893118,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFXmLPEXEzMzwPD9cnFBv45XCqfgPWjxe8TUmygjrNyg5VQhfDqukMu492MdAPeU9h4"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWG4N5gCzbrX2k87baWtcYu2GgRxHvXJ1jmecx5cdxzohH",
        "protocol_version": 0,
        "ts": "2025-11-04T16:57:36Z",
        "tx_id": "a7d83b9ac3cc8bff8d8421c11d785def8f612648",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7gwCpfLPDg6ywh3aivMvthmx6z4Ro6duP5pPRc9npy4qjr5PiC"
      },
      {
        "account": "vaultec-scc",
        "height": 100891609,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEF7S3JxkWXqkHc4dBHD3bbjWN6Gc7CpmmpF2zHb3rYxZwr2NU3FD7G3HkqmJBPKfLiN"
          }
        ],
        "enabled": true,
        "git_commit": "",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWLY2ogpUYBAvE43D7HbvBZHprf1QgypRqU6gVVmVuAYrW",
        "protocol_version": 0,
        "ts": "2025-11-04T07:41:56-08:00",
        "tx_id": "b85d28070b26cd13aa271baaea04d6cb059c8d2e",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM8g2ci2wMEcofjMgXfM7BRDQkphwNzf8M7vWK9Gt6KDH4q5xeUK"
      },
      {
        "account": "vaultec.vsc",
        "height": 100890722,
        "did_keys": [
          {
            "ct": "DID-BLS",
            "t": "consensus",
            "key": "did:key:z3tEFH6FZWdZ4rxe9jCBhGPZJKhJb935s4avCvq1k2Kqzcuv1EmXiw8qBUEgsJX4KzW9PB"
          }
        ],
        "enabled": true,
        "git_commit": "8bd8dac45656b4eaebd8fd55af3db7baeedad87d",
        "net_id": "vsc-mainnet",
        "peer_id": "12D3KooWGpWrBc5pFx5GHWibczTPrazDCfk8GCETB5Ynb4Dq5L5V",
        "protocol_version": 0,
        "ts": "2025-11-04T14:57:37Z",
        "tx_id": "cb093e3b59dee5ae8045612cbd8fc478597df2c2",
        "version_id": "go-v0.1.0",
        "gateway_key": "STM7w97XbHnKvKRUpj7aD9ULKcfdLgjb5Dk4riz5yrPtw9e53meEB"
      }
    ]
  }
}
```


## witnessSchedule

### Paramenter

```json
{
  "height": "100893280"
}

```


Query
```js
query WitnessSchedule($height: Uint64!) {
  witnessSchedule(height: $height) {
    account
    bn
  }
}

```

Result
```json
{
  "data": {
    "witnessSchedule": [
      {
        "account": "atexoras.vsc",
        "bn": 100892400
      },
      {
        "account": "ausbit.vsc",
        "bn": 100892410
      },
      {
        "account": "vaultec-scc",
        "bn": 100892420
      },
      {
        "account": "techcoderx.vsc",
        "bn": 100892430
      },
      {
        "account": "bala.vsc",
        "bn": 100892440
      },
      {
        "account": "mengao.vsc",
        "bn": 100892450
      },
      {
        "account": "possibly.vsc",
        "bn": 100892460
      },
      {
        "account": "blocktrades.vsc",
        "bn": 100892470
      },
      {
        "account": "louis.vsc",
        "bn": 100892480
      },
      {
        "account": "ausbit.vsc",
        "bn": 100892490
      },
      {
        "account": "blocktrades.vsc",
        "bn": 100892500
      },
      {
        "account": "mahdiyari.vsc",
        "bn": 100892510
      },
      {
        "account": "shmoogleosukami",
        "bn": 100892520
      },
      {
        "account": "comptroller.vsc",
        "bn": 100892530
      },
      {
        "account": "actifit.vsc",
        "bn": 100892540
      },
      {
        "account": "delta-p",
        "bn": 100892550
      },
      {
        "account": "sagarkothari.vsc",
        "bn": 100892560
      },
      {
        "account": "bradleyarrow.vsc",
        "bn": 100892570
      },
      {
        "account": "techcoderx.vsc",
        "bn": 100892580
      },
      {
        "account": "dalz.vsc",
        "bn": 100892590
      },
      {
        "account": "mengao.vsc",
        "bn": 100892600
      },
      {
        "account": "mahdiyari.vsc",
        "bn": 100892610
      },
      {
        "account": "arcange.vsc",
        "bn": 100892620
      },
      {
        "account": "dalz.vsc",
        "bn": 100892630
      },
      {
        "account": "atexoras.vsc",
        "bn": 100892640
      },
      {
        "account": "mengao.vsc",
        "bn": 100892650
      },
      {
        "account": "vaultec-scc",
        "bn": 100892660
      },
      {
        "account": "vaultec.vsc",
        "bn": 100892670
      },
      {
        "account": "spker",
        "bn": 100892680
      },
      {
        "account": "lobes",
        "bn": 100892690
      },
      {
        "account": "v4vapp.vsc",
        "bn": 100892700
      },
      {
        "account": "dalz.vsc",
        "bn": 100892710
      },
      {
        "account": "vaultec.vsc",
        "bn": 100892720
      },
      {
        "account": "possibly.vsc",
        "bn": 100892730
      },
      {
        "account": "delta-p",
        "bn": 100892740
      },
      {
        "account": "botlord",
        "bn": 100892750
      },
      {
        "account": "bala.vsc",
        "bn": 100892760
      },
      {
        "account": "lobes",
        "bn": 100892770
      },
      {
        "account": "prime.vsc",
        "bn": 100892780
      },
      {
        "account": "lobes",
        "bn": 100892790
      },
      {
        "account": "comptroller.vsc",
        "bn": 100892800
      },
      {
        "account": "emrebeyler.vsc",
        "bn": 100892810
      },
      {
        "account": "spker",
        "bn": 100892820
      },
      {
        "account": "dalz.vsc",
        "bn": 100892830
      },
      {
        "account": "emrebeyler.vsc",
        "bn": 100892840
      },
      {
        "account": "blocktrades.vsc",
        "bn": 100892850
      },
      {
        "account": "blocktrades.vsc",
        "bn": 100892860
      },
      {
        "account": "spker",
        "bn": 100892870
      },
      {
        "account": "arcange.vsc",
        "bn": 100892880
      },
      {
        "account": "delta-p",
        "bn": 100892890
      },
      {
        "account": "sagarkothari.vsc",
        "bn": 100892900
      },
      {
        "account": "arcange.vsc",
        "bn": 100892910
      },
      {
        "account": "louis.vsc",
        "bn": 100892920
      },
      {
        "account": "atexoras.vsc",
        "bn": 100892930
      },
      {
        "account": "emrebeyler.vsc",
        "bn": 100892940
      },
      {
        "account": "botlord",
        "bn": 100892950
      },
      {
        "account": "shmoogleosukami",
        "bn": 100892960
      },
      {
        "account": "actifit.vsc",
        "bn": 100892970
      },
      {
        "account": "sagarkothari.vsc",
        "bn": 100892980
      },
      {
        "account": "bala.vsc",
        "bn": 100892990
      },
      {
        "account": "ausbit.vsc",
        "bn": 100893000
      },
      {
        "account": "v4vapp.vsc",
        "bn": 100893010
      },
      {
        "account": "emrebeyler.vsc",
        "bn": 100893020
      },
      {
        "account": "emrebeyler.vsc",
        "bn": 100893030
      },
      {
        "account": "possibly.vsc",
        "bn": 100893040
      },
      {
        "account": "mengao.vsc",
        "bn": 100893050
      },
      {
        "account": "bala.vsc",
        "bn": 100893060
      },
      {
        "account": "mengao.vsc",
        "bn": 100893070
      },
      {
        "account": "atexoras.vsc",
        "bn": 100893080
      },
      {
        "account": "comptroller.vsc",
        "bn": 100893090
      },
      {
        "account": "bradleyarrow.vsc",
        "bn": 100893100
      },
      {
        "account": "ausbit.vsc",
        "bn": 100893110
      },
      {
        "account": "bradleyarrow.vsc",
        "bn": 100893120
      },
      {
        "account": "atexoras.vsc",
        "bn": 100893130
      },
      {
        "account": "vaultec-scc",
        "bn": 100893140
      },
      {
        "account": "comptroller.vsc",
        "bn": 100893150
      },
      {
        "account": "botlord",
        "bn": 100893160
      },
      {
        "account": "tibfox.vsc",
        "bn": 100893170
      },
      {
        "account": "ausbit.vsc",
        "bn": 100893180
      },
      {
        "account": "louis.vsc",
        "bn": 100893190
      },
      {
        "account": "shmoogleosukami",
        "bn": 100893200
      },
      {
        "account": "louis.vsc",
        "bn": 100893210
      },
      {
        "account": "mahdiyari.vsc",
        "bn": 100893220
      },
      {
        "account": "botlord",
        "bn": 100893230
      },
      {
        "account": "actifit.vsc",
        "bn": 100893240
      },
      {
        "account": "mahdiyari.vsc",
        "bn": 100893250
      },
      {
        "account": "possibly.vsc",
        "bn": 100893260
      },
      {
        "account": "delta-p",
        "bn": 100893270
      },
      {
        "account": "botlord",
        "bn": 100893280
      },
      {
        "account": "bala.vsc",
        "bn": 100893290
      },
      {
        "account": "spker",
        "bn": 100893300
      },
      {
        "account": "prime.vsc",
        "bn": 100893310
      },
      {
        "account": "blocktrades.vsc",
        "bn": 100893320
      },
      {
        "account": "sagarkothari.vsc",
        "bn": 100893330
      },
      {
        "account": "delta-p",
        "bn": 100893340
      },
      {
        "account": "lobes",
        "bn": 100893350
      },
      {
        "account": "prime.vsc",
        "bn": 100893360
      },
      {
        "account": "arcange.vsc",
        "bn": 100893370
      },
      {
        "account": "comptroller.vsc",
        "bn": 100893380
      },
      {
        "account": "bradleyarrow.vsc",
        "bn": 100893390
      },
      {
        "account": "v4vapp.vsc",
        "bn": 100893400
      },
      {
        "account": "techcoderx.vsc",
        "bn": 100893410
      },
      {
        "account": "actifit.vsc",
        "bn": 100893420
      },
      {
        "account": "tibfox.vsc",
        "bn": 100893430
      },
      {
        "account": "dalz.vsc",
        "bn": 100893440
      },
      {
        "account": "tibfox.vsc",
        "bn": 100893450
      },
      {
        "account": "bradleyarrow.vsc",
        "bn": 100893460
      },
      {
        "account": "vaultec-scc",
        "bn": 100893470
      },
      {
        "account": "actifit.vsc",
        "bn": 100893480
      },
      {
        "account": "shmoogleosukami",
        "bn": 100893490
      },
      {
        "account": "vaultec.vsc",
        "bn": 100893500
      },
      {
        "account": "v4vapp.vsc",
        "bn": 100893510
      },
      {
        "account": "lobes",
        "bn": 100893520
      },
      {
        "account": "louis.vsc",
        "bn": 100893530
      },
      {
        "account": "vaultec.vsc",
        "bn": 100893540
      },
      {
        "account": "techcoderx.vsc",
        "bn": 100893550
      },
      {
        "account": "tibfox.vsc",
        "bn": 100893560
      },
      {
        "account": "arcange.vsc",
        "bn": 100893570
      },
      {
        "account": "prime.vsc",
        "bn": 100893580
      },
      {
        "account": "mahdiyari.vsc",
        "bn": 100893590
      }
    ]
  }
}

```

## witnessStake

### Paramenter

```json
{
  "account": "hive:arcange.vsc"
}

```


Query
```shell
query Query($account: String!) {
  witnessStake(account: $account)
}

```

Result
```json
{
  "data": {
    "witnessStake": 2000000
  }
}
```

