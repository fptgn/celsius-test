const SlugKuratorGameIndexQuery = `query SlugKuratorGameIndex($slug: String!) {
    slugKuratorGame(slug: $slug) {
      ...GameKuratorGame
      multiplierLeaderboard {
        id
        payoutMultiplier
        updatedAt
        bet {
          ...BetFragment
        }
        position
      }
      profitLeaderboard {
        id
        profitValue
        updatedAt
        bet {
          ...BetFragment
        }
        position
      }
      groupGames {
        id
        group {
          ...GameKuratorGroup
        }
      }
      challengeList(limit: 5, offset: 0) {
        ...ChallengeTable
      }
    }
  }
  
  fragment GameKuratorGame on GameKuratorGame {
    id
    name
    slug
    thumbnailUrl
    edge
    description
    active
    icon
    isFavourite
    showMultiplierLeaderboard
    showProfitLeaderboard
    data {
      __typename
      ... on SoftswissGame {
        ...SoftswissGame
      }
      ... on EvolutionGame {
        ...EvolutionGame
      }
      ... on GameKuratorThirdPartyGame {
        ...GameKuratorThirdPartyGame
      }
    }
    groupGames {
      id
      group {
        id
        translation
        type
        slug
      }
    }
  }
  
  fragment SoftswissGame on SoftswissGame {
    id
    edge
    extId
    isDemoEnabled
    availableCurrencies
    provider {
      ...SoftswissProvider
    }
  }
  
  fragment SoftswissProvider on SoftswissProvider {
    id
    name
  }
  
  fragment EvolutionGame on EvolutionGame {
    id
    name
    category {
      id
      name
    }
    edge
    currencies: availableCurrencies
  }
  
  fragment GameKuratorThirdPartyGame on GameKuratorThirdPartyGame {
    id
    edge
    extId
    isDemoEnabled
    thirdPartyGameAvailableCurrencies: availableCurrencies
    provider {
      id
      name
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
    }
    bet {
      ... on CasinoBet {
        ...CasinoBet
        user {
          id
          name
        }
      }
      ... on EvolutionBet {
        ...EvolutionBet
        user {
          id
          name
        }
      }
      ... on MultiplayerCrashBet {
        ...MultiplayerCrashBet
        user {
          id
          name
        }
      }
      ... on MultiplayerSlideBet {
        ...MultiplayerSlideBet
        user {
          id
          name
        }
      }
      ... on SoftswissBet {
        ...SoftswissBet
        user {
          id
          name
        }
      }
      ... on ThirdPartyBet {
        ...ThirdPartyBet
      }
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
    }
    softswissGame: game {
      id
      name
      edge
    }
  }
  
  fragment MultiplayerCrashBet on MultiplayerCrashBet {
    id
    user {
      id
      name
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
    }
    softswissGame: game {
      id
      name
      edge
      extId
      provider {
        id
        name
      }
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
    }
    thirdPartyGame: game {
      id
      name
      edge
      extId
      provider {
        id
        name
      }
    }
  }
  
  
  fragment GameKuratorGroup on GameKuratorGroup {
    id
    slug
    translation
    icon
    type
  }
  
  fragment ChallengeTable on Challenge {
    id
    active
    award
    currency
    minBetUsd
    createdAt
    targetMultiplier
    creatorUser {
      id
      name
    }
    game {
      id
      name
      slug
    }
  }
  `;

export default SlugKuratorGameIndexQuery;
