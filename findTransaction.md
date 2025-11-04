## findTransaction

### Paramenter

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


Query
```
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

Result
```
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

