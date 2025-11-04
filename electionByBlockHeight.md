# vsc-docs


## electionByBlockHeight

### Paramenter
{
  "blockHeight": "459239"
}

Query
`
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
`
Result
```
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
