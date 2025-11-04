## findContract

### Paramenter

{
  "filterOptions": {
    "limit": 10,
    "offset": null,
    "byId": "null",
    "byInput": null,
    "byContract": null
  }
}


Query
```
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

Result
```
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

