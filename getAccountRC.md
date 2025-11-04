## getAccountRC

### Paramenter

```js
{
  "account": "hive:faireye",
  "height": null
}

```


Query
```js
query GetAccountRC($account: String!, $height: Uint64) {
  getAccountRC(account: $account, height: $height) {
    account
    amount
    block_height
    max_rcs
  }
}

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

