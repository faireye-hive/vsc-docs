## getAccountBalance

### Paramenter

```js
{
  "account": "did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207",
  "height": null
}

```


Query
```js
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

