## findLedgerTXs

### Paramenter

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


Query
```
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

Result
```
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

