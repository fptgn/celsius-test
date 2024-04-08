const MyBetListQuery = `query MyBetList {
    user {
      id
      houseBetList(offset: 0, limit: 10) {
        ...BetFragment
        __typename
      }
      __typename
    }
  }
  
  fragment BetFragment on Bet {
    id
    iid
    type
    scope
    game {
      name
      icon
      slug
      __typename
    }
    bet {
      ... on CasinoBet {
        ...CasinoBet
        user {
          id
          name
          __typename
        }
        __typename
      }
      ... on EvolutionBet {
        ...EvolutionBet
        user {
          id
          name
          __typename
        }
        __typename
      }
      ... on MultiplayerCrashBet {
        ...MultiplayerCrashBet
        user {
          id
          name
          __typename
        }
        __typename
      }
      ... on MultiplayerSlideBet {
        ...MultiplayerSlideBet
        user {
          id
          name
          __typename
        }
        __typename
      }
      ... on SoftswissBet {
        ...SoftswissBet
        user {
          id
          name
          __typename
        }
        __typename
      }
      ... on ThirdPartyBet {
        ...ThirdPartyBet
        __typename
      }
      __typename
    }
  }
  
  fragment CasinoBet on CasinoBet {
    id
    active
    payoutMultiplier
    amountMultiplier
    amount
    payout
    updatedAt
    currency
    game
    user {
      id
      name
      __typename
    }
  }
  
  fragment EvolutionBet on EvolutionBet {
    id
    amount
    currency
    createdAt
    payout
    payoutMultiplier
    user {
      id
      name
      __typename
    }
    softswissGame: game {
      id
      name
      edge
      __typename
    }
  }
  
  fragment MultiplayerCrashBet on MultiplayerCrashBet {
    id
    user {
      id
      name
      __typename
    }
    payoutMultiplier
    gameId
    amount
    payout
    currency
    result
    updatedAt
    cashoutAt
    btcAmount: amount(currency: btc)
  }
  
  fragment MultiplayerSlideBet on MultiplayerSlideBet {
    id
    user {
      id
      name
      __typename
    }
    payoutMultiplier
    gameId
    amount
    payout
    currency
    slideResult: result
    updatedAt
    cashoutAt
    btcAmount: amount(currency: btc)
    active
    createdAt
  }
  
  fragment SoftswissBet on SoftswissBet {
    id
    amount
    currency
    updatedAt
    payout
    payoutMultiplier
    user {
      id
      name
      __typename
    }
    softswissGame: game {
      id
      name
      edge
      extId
      provider {
        id
        name
        __typename
      }
      __typename
    }
  }
  
  fragment ThirdPartyBet on ThirdPartyBet {
    id
    amount
    currency
    updatedAt
    payout
    payoutMultiplier
    betReplay
    user {
      id
      name
      __typename
    }
    thirdPartyGame: game {
      id
      name
      edge
      extId
      provider {
        id
        name
        __typename
      }
      __typename
    }
  }`;

export default MyBetListQuery;
