## findContract

### Paramenter

{
  "filterOptions": {
    "byCode": null,
    "byId": "vsc1BcS12fD42kKqL2SMLeBzaEKtd9QbBWC1dt",
    "limit": 1,
    "offset": null
  }
}

Query
```
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

Result
```
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

