## findLedgerActions

### Paramenter

```js
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

