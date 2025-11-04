## getAccountNonce

### Paramenter

```js
{
  "account": "did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207"
}

```


Query
```js
query GetAccountNonce($account: String!) {
  getAccountNonce(account: $account) {
    account
    nonce
  }
}

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

