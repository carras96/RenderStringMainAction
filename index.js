import BigNumber from 'bignumber.js'

BigNumber.config({
  EXPONENTIAL_AT: [-300, 300],
  DECIMAL_PLACES: 300,
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
})

export function toTokenUnits(amount, decimals = 9) {
    if (!amount) return "0";
  
    return BigNumber(amount)
      .div(10 ** decimals)
      .toString();
  }
  
  export const intlNumberFormat = ({
    number,
    notation,
    maximumFractionDigits,
    style,
    currency,
  }) => {
    if (Number(number) === 0) {
      return "0";
    }
  
    if (!number) {
      return "";
    }
  
    if (typeof number === "string") {
      number = Number(number);
    }
  
    if (!maximumFractionDigits) {
      maximumFractionDigits = getMaximumFractionDigits(number);
    }
  
    return Intl.NumberFormat("en", {
      ...(notation && { notation: notation }),
      ...(maximumFractionDigits && {
        maximumFractionDigits: maximumFractionDigits,
      }),
      ...(style && { style: style }),
      ...(currency && { currency: currency }),
    }).format(number);
  };


const responseTxDetail = {
  success: true,
  data: {
    trans_id:
      "2qCGAsJ2vGVGpYCFd5H8FSEV2Pjwne2B2ubEnTYzEoqKLHeBLQBHvqZDY8ABeDut3TT69CJ7bfG8Bb7xwaTCSyJq",
    block_id: 379539027,
    trans_time: 1762929018,
    fee: 5000,
    reward: [],
    sol_bal_change: [
      {
        address: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        pre_balance: 1541077982,
        post_balance: 1541071978,
        change_amount: -6004,
      },
      {
        address: "6sJaJeaMZdW4YS7St9BSsYGdiY5Ra4D5V365V8884sUa",
        pre_balance: 72161280,
        post_balance: 72161280,
        change_amount: 0,
      },
      {
        address: "6xjkYNktFv9xW99bb87Dd4FT1hWBRJ9VLm94vi5wZK9z",
        pre_balance: 72161280,
        post_balance: 72161280,
        change_amount: 0,
      },
      {
        address: "CupeLh6ERAwYPG6dYfFaYXgRSVBeDzLCV8QaWmorbvYr",
        pre_balance: 72161280,
        post_balance: 72161280,
        change_amount: 0,
      },
      {
        address: "DLS1WdrwC8qaEPdZvJKJTteP6kq8GTNqoidexdzp3Bnp",
        pre_balance: 72161280,
        post_balance: 72161280,
        change_amount: 0,
      },
      {
        address: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
        pre_balance: 1264483,
        post_balance: 1265487,
        change_amount: 1004,
      },
      {
        address: "Dqa3QgLDFfYqHF9g9YLv55HsE2EhTh5hro39K7jbAn7U",
        pre_balance: 72161280,
        post_balance: 72161280,
        change_amount: 0,
      },
      {
        address: "HWF7HpfvckiaazDfm87jfec1Xppjo3ye5ePK5ZiLhGpx",
        pre_balance: 72161280,
        post_balance: 72161280,
        change_amount: 0,
      },
      {
        address: "11111111111111111111111111111111",
        pre_balance: 1,
        post_balance: 1,
        change_amount: 0,
      },
      {
        address: "ComputeBudget111111111111111111111111111111",
        pre_balance: 1,
        post_balance: 1,
        change_amount: 0,
      },
      {
        address: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
        pre_balance: 2729681029,
        post_balance: 2729681029,
        change_amount: 0,
      },
      {
        address: "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
        pre_balance: 521498901,
        post_balance: 521498901,
        change_amount: 0,
      },
      {
        address: "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
        pre_balance: 897840,
        post_balance: 897840,
        change_amount: 0,
      },
      {
        address: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
        pre_balance: 60252544710,
        post_balance: 60252544710,
        change_amount: 0,
      },
      {
        address: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
        pre_balance: 2039280,
        post_balance: 2039280,
        change_amount: 0,
      },
      {
        address: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
        pre_balance: 2039280,
        post_balance: 2039280,
        change_amount: 0,
      },
      {
        address: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
        pre_balance: 2039280,
        post_balance: 2039280,
        change_amount: 0,
      },
      {
        address: "2nRvNRn6YLSccAmGRpcA5kuVRa9aPcws1aTaFtWq2oAK",
        pre_balance: 13641600,
        post_balance: 13641600,
        change_amount: 0,
      },
      {
        address: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
        pre_balance: 11637130,
        post_balance: 11637130,
        change_amount: 0,
      },
      {
        address: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
        pre_balance: 134950397601,
        post_balance: 135003678848,
        change_amount: 53281247,
      },
      {
        address: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
        pre_balance: 2039280,
        post_balance: 2039280,
        change_amount: 0,
      },
      {
        address: "FWtVhpbEYe77fpBgVMeTPj3vy9v83zfHJgJypLJtgw3N",
        pre_balance: 32092560,
        post_balance: 32092560,
        change_amount: 0,
      },
      {
        address: "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
        pre_balance: 3895363,
        post_balance: 3895363,
        change_amount: 0,
      },
      {
        address: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
        pre_balance: 2039283,
        post_balance: 2039283,
        change_amount: 0,
      },
      {
        address: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
        pre_balance: 2039283,
        post_balance: 2039283,
        change_amount: 0,
      },
      {
        address: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
        pre_balance: 2039283,
        post_balance: 2039283,
        change_amount: 0,
      },
      {
        address: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
        pre_balance: 6906657,
        post_balance: 6906657,
        change_amount: 0,
      },
      {
        address: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
        pre_balance: 2691799704812,
        post_balance: 2691693135453,
        change_amount: -106569359,
      },
      {
        address: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
        pre_balance: 2039280,
        post_balance: 2039280,
        change_amount: 0,
      },
      {
        address: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
        pre_balance: 2043683,
        post_balance: 2043683,
        change_amount: 0,
      },
      {
        address: "3AsJZQY3jtZwqBfbTUQ4xKDVwmdz2ufdKMsnxN9K5L3S",
        pre_balance: 32096963,
        post_balance: 32096963,
        change_amount: 0,
      },
      {
        address: "3xVTGrrbWLtPC2qRiHyiVbKEDY2UUYN9kwJWmPH2n8wW",
        pre_balance: 13646003,
        post_balance: 13646003,
        change_amount: 0,
      },
      {
        address: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
        pre_balance: 374661599734,
        post_balance: 374714887846,
        change_amount: 53288112,
      },
      {
        address: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
        pre_balance: 14249880,
        post_balance: 14249880,
        change_amount: 0,
      },
      {
        address: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
        pre_balance: 2039280,
        post_balance: 2039280,
        change_amount: 0,
      },
      {
        address: "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
        pre_balance: 3939360,
        post_balance: 3939360,
        change_amount: 0,
      },
      {
        address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        pre_balance: 5301613130,
        post_balance: 5301613130,
        change_amount: 0,
      },
      {
        address: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
        pre_balance: 3596051,
        post_balance: 3596051,
        change_amount: 0,
      },
      {
        address: "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu",
        pre_balance: 1705201,
        post_balance: 1705201,
        change_amount: 0,
      },
      {
        address: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
        pre_balance: 1844545689,
        post_balance: 1844545689,
        change_amount: 0,
      },
      {
        address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        pre_balance: 419639998857,
        post_balance: 419639998857,
        change_amount: 0,
      },
      {
        address: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
        pre_balance: 1141443,
        post_balance: 1141443,
        change_amount: 0,
      },
      {
        address: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
        pre_balance: 1920960,
        post_balance: 1920960,
        change_amount: 0,
      },
      {
        address: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
        pre_balance: 1141440,
        post_balance: 1141440,
        change_amount: 0,
      },
      {
        address: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
        pre_balance: 1141440,
        post_balance: 1141440,
        change_amount: 0,
      },
      {
        address: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
        pre_balance: 77684282,
        post_balance: 77684282,
        change_amount: 0,
      },
      {
        address: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
        pre_balance: 0,
        post_balance: 0,
        change_amount: 0,
      },
      {
        address: "Sysvar1nstructions1111111111111111111111111",
        pre_balance: 0,
        post_balance: 0,
        change_amount: 0,
      },
      {
        address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
        pre_balance: 18921516,
        post_balance: 18921516,
        change_amount: 0,
      },
      {
        address: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
        pre_balance: 1142441,
        post_balance: 1142441,
        change_amount: 0,
      },
      {
        address: "EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR",
        pre_balance: 1709503,
        post_balance: 1709503,
        change_amount: 0,
      },
      {
        address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
        pre_balance: 98390925,
        post_balance: 98390925,
        change_amount: 0,
      },
      {
        address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        pre_balance: 149870061927,
        post_balance: 149870061927,
        change_amount: 0,
      },
    ],
    token_bal_change: [
      {
        address: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
        change_type: "dec",
        change_amount: 0,
        decimals: 9,
        post_balance: "60250505430",
        pre_balance: "60250505430",
        token_address: "So11111111111111111111111111111111111111112",
        owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        post_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        pre_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
      },
      {
        address: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
        change_type: "inc",
        change_amount: 1623,
        decimals: 6,
        post_balance: "367546710",
        pre_balance: "367545087",
        token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        post_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        pre_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
      },
      {
        address: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
        change_type: "dec",
        change_amount: 0,
        decimals: 6,
        post_balance: "247726780",
        pre_balance: "247726780",
        token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
        owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        post_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        pre_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
      },
      {
        address: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
        change_type: "dec",
        change_amount: 0,
        decimals: 6,
        post_balance: "6004968279",
        pre_balance: "6004968279",
        token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        post_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        pre_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
      },
      {
        address: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
        change_type: "inc",
        change_amount: 53281247,
        decimals: 9,
        post_balance: "135001639568",
        pre_balance: "134948358321",
        token_address: "So11111111111111111111111111111111111111112",
        owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
        post_owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
        pre_owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
      },
      {
        address: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
        change_type: "dec",
        change_amount: -8327607,
        decimals: 6,
        post_balance: "1095624847",
        pre_balance: "1103952454",
        token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
        owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
        post_owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
        pre_owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
      },
      {
        address: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
        change_type: "inc",
        change_amount: 8321072,
        decimals: 6,
        post_balance: "904575889786",
        pre_balance: "904567568714",
        token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
        post_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
        pre_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
      },
      {
        address: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
        change_type: "dec",
        change_amount: -16641387,
        decimals: 6,
        post_balance: "581018612783",
        pre_balance: "581035254170",
        token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
        post_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
        pre_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
      },
      {
        address: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
        change_type: "inc",
        change_amount: 85,
        decimals: 6,
        post_balance: "564558410",
        pre_balance: "564558325",
        token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        owner: "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
        post_owner: "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
        pre_owner: "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
      },
      {
        address: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
        change_type: "dec",
        change_amount: -106569359,
        decimals: 9,
        post_balance: "2691691094170",
        pre_balance: "2691797663529",
        token_address: "So11111111111111111111111111111111111111112",
        owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
        post_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
        pre_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
      },
      {
        address: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
        change_type: "inc",
        change_amount: 16641302,
        decimals: 6,
        post_balance: "333096384497",
        pre_balance: "333079743195",
        token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
        post_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
        pre_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
      },
      {
        address: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
        change_type: "dec",
        change_amount: -8322695,
        decimals: 6,
        post_balance: "28183309507",
        pre_balance: "28191632202",
        token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
        post_owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
        pre_owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
      },
      {
        address: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
        change_type: "inc",
        change_amount: 53288112,
        decimals: 9,
        post_balance: "374712844161",
        pre_balance: "374659556049",
        token_address: "So11111111111111111111111111111111111111112",
        owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
        post_owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
        pre_owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
      },
      {
        address: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
        change_type: "inc",
        change_amount: 8327607,
        decimals: 6,
        post_balance: "92778501238",
        pre_balance: "92770173631",
        token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
        owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
        post_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
        pre_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
      },
    ],
    tokens_involved: [
      "So11111111111111111111111111111111111111112",
      "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    ],
    parsed_instructions: [
      {
        ins_index: 0,
        parsed_type: "SetComputeUnitLimit",
        type: "setComputeUnitLimit",
        program_id: "ComputeBudget111111111111111111111111111111",
        program: "ComputeBudget",
        outer_program_id: null,
        outer_ins_index: -1,
        real_outer_program_id: null,
        real_outer_ins_index: -1,
        data_raw: "L8ZMSw",
        accounts: [],
        activities: [
          {
            name: "ComputeBudget",
            activity_type: "compute_unit_limit",
            program_id: "ComputeBudget111111111111111111111111111111",
            data: {
              compute_unit_limit: "551660",
            },
            ins_index: 0,
            outer_ins_index: -1,
            outer_program_id: null,
            real_outer_ins_index: -1,
            real_outer_program_id: null,
            program_invoke_level: 1,
            inst_type: "SetComputeUnitLimit",
          },
        ],
        transfers: [],
        program_invoke_level: 1,
        display: {
          accounts: [],
          input_args:
            '{"discriminator":{"type":"u8","data":2},"units":{"type":"u32","data":551660}}',
          data: null,
          events: null,
        },
        idl_data: {
          idl_source: "inner_parser",
        },
        render_actions: [
          [
            [
              {
                text: "Set",
              },
              {
                "number-format": {
                  value: "551660",
                  style: "decimal",
                },
              },
              {
                text: "compute units",
              },
            ],
          ],
        ],
      },
      {
        ins_index: 1,
        parsed_type: "setLoadedAccountsDataSizeLimit",
        type: "setLoadedAccountsDataSizeLimit",
        program_id: "ComputeBudget111111111111111111111111111111",
        program: "ComputeBudget",
        outer_program_id: null,
        outer_ins_index: -1,
        real_outer_program_id: null,
        real_outer_ins_index: -1,
        data_raw: "UdHq8B",
        accounts: [],
        activities: [],
        transfers: [],
        program_invoke_level: 1,
        display: {
          accounts: [],
          input_args:
            '{"discriminator":{"type":"u8","data":4},"accountDataSizeLimit":{"type":"u32","data":1688888}}',
          data: null,
          events: null,
        },
        idl_data: {
          idl_source: "inner_parser",
        },
        render_actions: [],
      },
      {
        ins_index: 2,
        parsed_type: "route",
        type: "route",
        program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
        program: "jupiter",
        outer_program_id: null,
        outer_ins_index: -1,
        real_outer_program_id: null,
        real_outer_ins_index: -1,
        data_raw:
          "ACUr3momggvd4sWwHqbcYR47RK5J25sraLyaPbKquS7ci6uByc6RqYQWCu5fgC2DHY5M2xWCK76Lxo7nw",
        accounts: [
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
          "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
          "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
          "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
          "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
          "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
          "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
          "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
          "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
          "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
          "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
          "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
          "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
          "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
          "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
          "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
          "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
          "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
          "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
          "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
          "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
          "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
          "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
          "Sysvar1nstructions1111111111111111111111111",
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
          "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu",
          "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
          "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
          "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
          "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
          "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
          "FWtVhpbEYe77fpBgVMeTPj3vy9v83zfHJgJypLJtgw3N",
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "HWF7HpfvckiaazDfm87jfec1Xppjo3ye5ePK5ZiLhGpx",
          "2nRvNRn6YLSccAmGRpcA5kuVRa9aPcws1aTaFtWq2oAK",
          "CupeLh6ERAwYPG6dYfFaYXgRSVBeDzLCV8QaWmorbvYr",
          "Dqa3QgLDFfYqHF9g9YLv55HsE2EhTh5hro39K7jbAn7U",
          "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
          "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
          "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
          "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
          "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
          "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
          "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
          "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
          "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
          "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
          "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
          "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
          "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
          "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
          "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
          "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
          "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
          "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
          "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
          "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
          "Sysvar1nstructions1111111111111111111111111",
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
          "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          "EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR",
          "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
          "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
          "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
          "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
          "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
          "3AsJZQY3jtZwqBfbTUQ4xKDVwmdz2ufdKMsnxN9K5L3S",
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "6xjkYNktFv9xW99bb87Dd4FT1hWBRJ9VLm94vi5wZK9z",
          "3xVTGrrbWLtPC2qRiHyiVbKEDY2UUYN9kwJWmPH2n8wW",
          "6sJaJeaMZdW4YS7St9BSsYGdiY5Ra4D5V365V8884sUa",
          "DLS1WdrwC8qaEPdZvJKJTteP6kq8GTNqoidexdzp3Bnp",
          "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
        ],
        activities: [
          {
            name: "JupiterV6AggTokenSwap",
            activity_type: "defi_token_agg_swap",
            program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            data: {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              token_1: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              token_2: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              amount_1: "8321072",
              amount_1_str: "8321072",
              amount_2: "8322695",
              amount_2_str: "8322695",
              token_decimal_1: 6,
              token_decimal_2: 6,
              token_account_1_1: null,
              token_account_1_2: null,
              token_account_2_1: null,
              token_account_2_2: null,
              owner_1: null,
              owner_2: null,
              routers: [
                {
                  amm_program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                  token_1: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  token_decimal_1: 6,
                  amount_1: "8321072",
                  amount_1_str: "8321072",
                  token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  token_decimal_2: 6,
                  amount_2: "8320115",
                  amount_2_str: "8320115",
                },
                {
                  amm_program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                  token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  token_decimal_1: 6,
                  amount_1: "8320115",
                  amount_1_str: "8320115",
                  token_2: "So11111111111111111111111111111111111111112",
                  token_decimal_2: 9,
                  amount_2: "53281247",
                  amount_2_str: "53281247",
                },
                {
                  amm_program_id:
                    "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
                  token_1: "So11111111111111111111111111111111111111112",
                  token_decimal_1: 9,
                  amount_1: "53281247",
                  amount_1_str: "53281247",
                  token_2: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  token_decimal_2: 6,
                  amount_2: "8327607",
                  amount_2_str: "8327607",
                },
                {
                  amm_program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                  token_1: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  token_decimal_1: 6,
                  amount_1: "8327607",
                  amount_1_str: "8327607",
                  token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  token_decimal_2: 6,
                  amount_2: "8321187",
                  amount_2_str: "8321187",
                },
                {
                  amm_program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                  token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  token_decimal_1: 6,
                  amount_1: "8321187",
                  amount_1_str: "8321187",
                  token_2: "So11111111111111111111111111111111111111112",
                  token_decimal_2: 9,
                  amount_2: "53288112",
                  amount_2_str: "53288112",
                },
                {
                  amm_program_id:
                    "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
                  token_1: "So11111111111111111111111111111111111111112",
                  token_decimal_1: 9,
                  amount_1: "53288112",
                  amount_1_str: "53288112",
                  token_2: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  token_decimal_2: 6,
                  amount_2: "8322695",
                  amount_2_str: "8322695",
                },
              ],
              exact_amount_2: "8322392",
              exact_amount_2_str: "8322392",
              platform_fee: 0,
              slippage: 0,
            },
            ins_index: 2,
            outer_ins_index: -1,
            outer_program_id: null,
            real_outer_ins_index: -1,
            real_outer_program_id: null,
            program_invoke_level: 1,
            inst_type: "route",
          },
        ],
        transfers: [
          {
            source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            source: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
            destination: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
            destination_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
            transfer_type: "spl_transfer",
            token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            decimals: 6,
            amount_str: "8321072",
            amount: 8321072,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 1,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              decimals: 6,
              amount: 8320115,
              amount_str: "8320115",
            },
          },
          {
            source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
            source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
            destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
            destination_owner: "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
            transfer_type: "spl_transfer",
            token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            decimals: 6,
            amount_str: "49",
            amount: 49,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 3,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
          },
          {
            source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
            source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
            destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
            destination_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            transfer_type: "spl_transfer",
            token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            decimals: 6,
            amount_str: "8320115",
            amount: 8320115,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 4,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              decimals: 6,
              amount: 8321072,
              amount_str: "8321072",
            },
          },
          {
            source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
            destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
            destination_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
            transfer_type: "spl_transfer",
            token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            decimals: 6,
            amount_str: "8320115",
            amount: 8320115,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 7,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "So11111111111111111111111111111111111111112",
              decimals: 9,
              amount: 53281247,
              amount_str: "53281247",
            },
          },
          {
            source_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
            source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
            destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
            destination_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            transfer_type: "spl_transfer",
            token_address: "So11111111111111111111111111111111111111112",
            decimals: 9,
            amount_str: "53281247",
            amount: 53281247,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 8,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              decimals: 6,
              amount: 8320115,
              amount_str: "8320115",
            },
          },
          {
            source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
            destination: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
            destination_owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
            transfer_type: "spl_transfer",
            token_address: "So11111111111111111111111111111111111111112",
            decimals: 9,
            amount_str: "53281247",
            amount: 53281247,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 11,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
              decimals: 6,
              amount: 8327607,
              amount_str: "8327607",
            },
          },
          {
            source_owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
            source: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
            destination: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
            destination_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            transfer_type: "spl_transfer",
            token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
            decimals: 6,
            amount_str: "8327607",
            amount: 8327607,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 12,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "So11111111111111111111111111111111111111112",
              decimals: 9,
              amount: 53281247,
              amount_str: "53281247",
            },
          },
          {
            source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            source: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
            destination: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
            destination_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
            transfer_type: "spl_transfer",
            token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
            decimals: 6,
            amount_str: "8327607",
            amount: 8327607,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 15,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              decimals: 6,
              amount: 8321187,
              amount_str: "8321187",
            },
          },
          {
            source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
            source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
            destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
            destination_owner: "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
            transfer_type: "spl_transfer",
            token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            decimals: 6,
            amount_str: "36",
            amount: 36,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 17,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
          },
          {
            source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
            source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
            destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
            destination_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            transfer_type: "spl_transfer",
            token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            decimals: 6,
            amount_str: "8321187",
            amount: 8321187,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 18,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
              decimals: 6,
              amount: 8327607,
              amount_str: "8327607",
            },
          },
          {
            source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
            destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
            destination_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
            transfer_type: "spl_transfer",
            token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            decimals: 6,
            amount_str: "8321187",
            amount: 8321187,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 21,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "So11111111111111111111111111111111111111112",
              decimals: 9,
              amount: 53288112,
              amount_str: "53288112",
            },
          },
          {
            source_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
            source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
            destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
            destination_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            transfer_type: "spl_transfer",
            token_address: "So11111111111111111111111111111111111111112",
            decimals: 9,
            amount_str: "53288112",
            amount: 53288112,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 22,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              decimals: 6,
              amount: 8321187,
              amount_str: "8321187",
            },
          },
          {
            source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
            destination: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
            destination_owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
            transfer_type: "spl_transfer",
            token_address: "So11111111111111111111111111111111111111112",
            decimals: 9,
            amount_str: "53288112",
            amount: 53288112,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 25,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              decimals: 6,
              amount: 8322695,
              amount_str: "8322695",
            },
          },
          {
            source_owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
            source: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
            destination: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
            destination_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            transfer_type: "spl_transfer",
            token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            decimals: 6,
            amount_str: "8322695",
            amount: 8322695,
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            ins_index: 26,
            outer_ins_index: 2,
            event: "",
            fee: {},
            extra_data: {},
            base_value: {
              token_address: "So11111111111111111111111111111111111111112",
              decimals: 9,
              amount: 53288112,
              amount_str: "53288112",
            },
          },
        ],
        inner_instructions: [
          {
            ins_index: 0,
            parsed_type: "swap",
            type: "swap",
            program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
            program: "stable_swap",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw: "2j6vnwYDURn8zaAEAXNWfJXjEEBGpwbwMRq",
            accounts: [
              "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
              "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
              "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
              "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
              "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
              "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
              "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
              "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
              "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            ],
            activities: [
              {
                name: "StabbleSwapSwap",
                activity_type: "defi_token_swap",
                program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                data: {
                  amm_id: "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  amount_1: 8321072,
                  amount_1_str: "8321072",
                  amount_2: 8320115,
                  amount_2_str: "8320115",
                  token_decimal_1: 6,
                  token_decimal_2: 6,
                  token_account_1_1:
                    "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                  token_account_1_2:
                    "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
                  token_account_2_1:
                    "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  token_account_2_2:
                    "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                  fee_account_1: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  fee_account_2: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                  fee_ammount: 49,
                  fee_token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  fee_token_decimal: 6,
                },
                ins_index: 0,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "swap",
              },
            ],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  signer: true,
                  writable: true,
                  label: "user",
                },
                {
                  account: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                  signer: false,
                  writable: true,
                  label: "user_token_in",
                },
                {
                  account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  signer: false,
                  writable: true,
                  label: "user_token_out",
                },
                {
                  account: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
                  signer: false,
                  writable: true,
                  label: "vault_token_in",
                },
                {
                  account: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  signer: false,
                  writable: true,
                  label: "vault_token_out",
                },
                {
                  account: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                  signer: false,
                  writable: true,
                  label: "beneficiary_token_out",
                },
                {
                  account: "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
                  signer: false,
                  writable: true,
                  label: "pool",
                },
                {
                  account: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
                  signer: false,
                  writable: false,
                  label: "withdraw_authority",
                },
                {
                  account: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
                  signer: false,
                  writable: false,
                  label: "vault",
                },
                {
                  account: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                  signer: false,
                  writable: false,
                  label: "vault_authority",
                },
                {
                  account: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
                  signer: false,
                  writable: false,
                  label: "vault_program",
                },
                {
                  account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  signer: false,
                  writable: false,
                  label: "token_program",
                },
              ],
              input_args:
                '{"amount_in":{"type":{"option":"u64"},"data":"8321072"},"minimum_amount_out":{"type":"u64","data":"0"}}',
              data: null,
              events: null,
            },
            idl_data: {
              docs: ["swap"],
              idl_source: "onchain",
            },
            render_actions: [
              [
                [
                  {
                    icon: "swap",
                  },
                  {
                    text: "Swap",
                  },
                  {
                    token_amount: {
                      number: 8321072,
                      decimals: 6,
                      token_address:
                        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                    },
                  },
                  {
                    text: "for",
                  },
                  {
                    token_amount: {
                      number: 8320115,
                      decimals: 6,
                      token_address:
                        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    },
                  },
                  {
                    text: "on",
                  },
                  {
                    account: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                  },
                ],
              ],
            ],
          },
          {
            ins_index: 1,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
            real_outer_ins_index: 0,
            data_raw: {
              info: {
                amount: "8321072",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                destination: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
                source: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                destination: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
                destination_owner:
                  "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                transfer_type: "spl_transfer",
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                decimals: 6,
                amount_str: "8321072",
                amount: 8321072,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 1,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  decimals: 6,
                  amount: 8320115,
                  amount_str: "8320115",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                destination: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                amount: {
                  token_amount: {
                    number: 8321072,
                    decimals: 6,
                    token_address:
                      "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 2,
            parsed_type: "withdraw",
            type: "withdraw",
            program_id: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
            program: "vault",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
            real_outer_ins_index: 0,
            data_raw: "HgzYw38kQ5nBB4t22XeRSN7GnsBu8eME7",
            accounts: [
              "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
              "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
              "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
              "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
            ],
            activities: [],
            transfers: [],
            program_invoke_level: 3,
            display: {
              accounts: [
                {
                  account: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
                  signer: false,
                  writable: false,
                  label: "withdraw_authority",
                },
                {
                  account: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
                  signer: false,
                  writable: false,
                  label: "vault",
                },
                {
                  account: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                  signer: false,
                  writable: false,
                  label: "vault_authority",
                },
                {
                  account: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  signer: false,
                  writable: true,
                  label: "vault_token",
                },
                {
                  account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  signer: false,
                  writable: true,
                  label: "dest_token",
                },
                {
                  account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  signer: false,
                  writable: false,
                  label: "token_program",
                },
                {
                  account: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                  signer: false,
                  writable: true,
                },
              ],
              input_args:
                '{"amount":{"type":"u64","data":"8320115"},"beneficiary_amount":{"type":"u64","data":"49"}}',
              data: null,
              events: null,
            },
            idl_data: {
              idl_source: "onchain",
            },
            render_actions: [],
          },
          {
            ins_index: 3,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
            real_outer_ins_index: 2,
            data_raw: {
              info: {
                amount: "49",
                authority: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                destination_owner:
                  "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "49",
                amount: 49,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 3,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
              },
            ],
            program_invoke_level: 4,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                authority: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                amount: {
                  token_amount: {
                    number: 49,
                    decimals: 6,
                    token_address:
                      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 4,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
            real_outer_ins_index: 2,
            data_raw: {
              info: {
                amount: "8320115",
                authority: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "8320115",
                amount: 8320115,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 4,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  decimals: 6,
                  amount: 8321072,
                  amount_str: "8321072",
                },
              },
            ],
            program_invoke_level: 4,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                authority: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                amount: {
                  token_amount: {
                    number: 8320115,
                    decimals: 6,
                    token_address:
                      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 5,
            parsed_type: "anchor Self CPI Log",
            type: "anchor Self CPI Log",
            program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw:
              "QMqFu4fYGGeUEysFnenhAvDLCKNcZ6RVNL1ETZ4Md2NKwNjTVbTMrb5rrjFMYcRVpJtjXS26mHiK1M2qDsub1uHjg8Hrrn5WLTJhZQAdDL54r1y1taNnJNnMRhEKLWEvb1gaMspJ9crQmajDUr5g2ND9U476iLpCRQn9nHeq7CfUhsM",
            accounts: ["D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf"],
            activities: [],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
                  signer: false,
                  writable: false,
                },
              ],
              input_args: null,
              data: null,
              events:
                '{"amm":"swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ","inputMint":"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB","inputAmount":"8321072","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outputAmount":"8320115"}',
            },
            render_actions: [],
          },
          {
            ins_index: 6,
            parsed_type: "Swap",
            type: "swap",
            program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
            program: "goonFi",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw: "2d6h1JVda47mc41HJFzpuMM9Hrf",
            accounts: [
              "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
              "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
              "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
              "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
              "Sysvar1nstructions1111111111111111111111111",
              "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            ],
            activities: [
              {
                name: "GoonFiSwap",
                activity_type: "defi_token_swap",
                program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                data: {
                  amm_id: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  token_2: "So11111111111111111111111111111111111111112",
                  amount_1: 8320115,
                  amount_1_str: "8320115",
                  amount_2: 53281247,
                  amount_2_str: "53281247",
                  token_decimal_1: 6,
                  token_decimal_2: 9,
                  token_account_1_1:
                    "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  token_account_1_2:
                    "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                  token_account_2_1:
                    "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                  token_account_2_2:
                    "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  fee_account_1: null,
                  fee_account_2: null,
                  fee_ammount: null,
                  fee_token: null,
                  fee_token_decimal: null,
                  side: 1,
                },
                ins_index: 6,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "Swap",
              },
            ],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  signer: true,
                  writable: true,
                  label: "user",
                },
                {
                  account: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  signer: false,
                  writable: true,
                  label: "market",
                },
                {
                  account: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  signer: false,
                  writable: true,
                  label: "userTokenAccountA",
                },
                {
                  account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  signer: false,
                  writable: true,
                  label: "userTokenAccountB",
                },
                {
                  account: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                  signer: false,
                  writable: true,
                  label: "poolTokenAccountA",
                },
                {
                  account: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                  signer: false,
                  writable: true,
                  label: "poolTokenAccountB",
                },
                {
                  account: "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
                  signer: false,
                  writable: false,
                },
                {
                  account: "Sysvar1nstructions1111111111111111111111111",
                  signer: false,
                  writable: false,
                },
                {
                  account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  signer: false,
                  writable: false,
                },
              ],
              input_args:
                '{"discriminator":{"type":"u8","data":2},"isBid":{"type":"bool","data":true}}',
              data: null,
              events: null,
            },
            idl_data: {
              idl_source: "inner_parser",
            },
            render_actions: [
              [
                [
                  {
                    icon: "swap",
                  },
                  {
                    text: "Swap",
                  },
                  {
                    token_amount: {
                      number: 8320115,
                      decimals: 6,
                      token_address:
                        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    },
                  },
                  {
                    text: "for",
                  },
                  {
                    token_amount: {
                      number: 53281247,
                      decimals: 9,
                      token_address:
                        "So11111111111111111111111111111111111111112",
                    },
                  },
                  {
                    text: "on",
                  },
                  {
                    account: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                  },
                ],
              ],
            ],
          },
          {
            ins_index: 7,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
            real_outer_ins_index: 6,
            data_raw: {
              info: {
                amount: "8320115",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                destination_owner:
                  "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "8320115",
                amount: 8320115,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 7,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "So11111111111111111111111111111111111111112",
                  decimals: 9,
                  amount: 53281247,
                  amount_str: "53281247",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                amount: {
                  token_amount: {
                    number: 8320115,
                    decimals: 6,
                    token_address:
                      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 8,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
            real_outer_ins_index: 6,
            data_raw: {
              info: {
                amount: "53281247",
                authority: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111112",
                decimals: 9,
                amount_str: "53281247",
                amount: 53281247,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 8,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  decimals: 6,
                  amount: 8320115,
                  amount_str: "8320115",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                authority: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                amount: {
                  token_amount: {
                    number: 53281247,
                    decimals: 9,
                    token_address:
                      "So11111111111111111111111111111111111111112",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 9,
            parsed_type: "anchor Self CPI Log",
            type: "anchor Self CPI Log",
            program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw:
              "QMqFu4fYGGeUEysFnenhAvCo8qqmiiJhEyGkb3ADa24NhCD4uGbXznGASVmKYDTuVauFnogM76CUu4tkXgFgW8yzGnrp1j5QgHjNjPPe2xr4vBp1Gf7iNA6TKD7oX1Cx2fE6b4jsV6u13WiQyWcWofzV2kkBgXADXFYEhNmceXwibks",
            accounts: ["D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf"],
            activities: [],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
                  signer: false,
                  writable: false,
                },
              ],
              input_args: null,
              data: null,
              events:
                '{"amm":"goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j","inputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","inputAmount":"8320115","outputMint":"So11111111111111111111111111111111111111112","outputAmount":"53281247"}',
            },
            render_actions: [],
          },
          {
            ins_index: 10,
            parsed_type: "swap",
            type: "swap",
            program_id: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
            program: "amm_v3",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw:
              "wZRp7wZ3cztd86tUouBipgtsiTVgRfKp137xZF7U2fcHi3Er4gNsyZhr",
            accounts: [
              "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu",
              "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
              "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
              "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
              "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
              "FWtVhpbEYe77fpBgVMeTPj3vy9v83zfHJgJypLJtgw3N",
              "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              "HWF7HpfvckiaazDfm87jfec1Xppjo3ye5ePK5ZiLhGpx",
              "2nRvNRn6YLSccAmGRpcA5kuVRa9aPcws1aTaFtWq2oAK",
              "CupeLh6ERAwYPG6dYfFaYXgRSVBeDzLCV8QaWmorbvYr",
              "Dqa3QgLDFfYqHF9g9YLv55HsE2EhTh5hro39K7jbAn7U",
            ],
            activities: [
              {
                name: "PancakePoolSwap",
                activity_type: "defi_token_swap",
                program_id: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
                data: {
                  amm_id: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "So11111111111111111111111111111111111111112",
                  token_2: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  amount_1: 53281247,
                  amount_1_str: "53281247",
                  amount_2: 8327607,
                  amount_2_str: "8327607",
                  token_decimal_1: 9,
                  token_decimal_2: 6,
                  token_account_1_1:
                    "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  token_account_1_2:
                    "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
                  token_account_2_1:
                    "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
                  token_account_2_2:
                    "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                },
                ins_index: 10,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "swap",
              },
            ],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  signer: true,
                  writable: true,
                  label: "payer",
                },
                {
                  account: "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu",
                  signer: false,
                  writable: false,
                  label: "amm_config",
                },
                {
                  account: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                  signer: false,
                  writable: true,
                  label: "pool_state",
                },
                {
                  account: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  signer: false,
                  writable: true,
                  label: "input_token_account",
                },
                {
                  account: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                  signer: false,
                  writable: true,
                  label: "output_token_account",
                },
                {
                  account: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
                  signer: false,
                  writable: true,
                  label: "input_vault",
                },
                {
                  account: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
                  signer: false,
                  writable: true,
                  label: "output_vault",
                },
                {
                  account: "FWtVhpbEYe77fpBgVMeTPj3vy9v83zfHJgJypLJtgw3N",
                  signer: false,
                  writable: true,
                  label: "observation_state",
                },
                {
                  account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  signer: false,
                  writable: false,
                  label: "token_program",
                },
                {
                  account: "HWF7HpfvckiaazDfm87jfec1Xppjo3ye5ePK5ZiLhGpx",
                  signer: false,
                  writable: true,
                  label: "tick_array",
                },
                {
                  account: "2nRvNRn6YLSccAmGRpcA5kuVRa9aPcws1aTaFtWq2oAK",
                  signer: false,
                  writable: true,
                },
                {
                  account: "CupeLh6ERAwYPG6dYfFaYXgRSVBeDzLCV8QaWmorbvYr",
                  signer: false,
                  writable: true,
                },
                {
                  account: "Dqa3QgLDFfYqHF9g9YLv55HsE2EhTh5hro39K7jbAn7U",
                  signer: false,
                  writable: true,
                },
              ],
              input_args:
                '{"amount":{"type":"u64","data":"53281247"},"other_amount_threshold":{"type":"u64","data":"0"},"sqrt_price_limit_x64":{"type":"u128","data":"0"},"is_base_input":{"type":"bool","data":true}}',
              data: null,
              events: null,
            },
            idl_data: {
              docs: [
                '#[deprecated(note = "Use `swap_v2` instead.")]',
                "Swaps one token for as much as possible of another token across a single pool",
                "",
                "# Arguments",
                "",
                "* `ctx` - The context of accounts",
                "* `amount` - Arranged in pairs with other_amount_threshold. (amount_in, amount_out_minimum) or (amount_out, amount_in_maximum)",
                "* `other_amount_threshold` - For slippage check",
                "* `sqrt_price_limit` - The Q64.64 sqrt price √P limit. If zero for one, the price cannot",
                "* `is_base_input` - swap base input or swap base output",
                "",
              ],
              idl_source: "onchain",
            },
            render_actions: [
              [
                [
                  {
                    icon: "swap",
                  },
                  {
                    text: "Swap",
                  },
                  {
                    token_amount: {
                      number: 53281247,
                      decimals: 9,
                      token_address:
                        "So11111111111111111111111111111111111111112",
                    },
                  },
                  {
                    text: "for",
                  },
                  {
                    token_amount: {
                      number: 8327607,
                      decimals: 6,
                      token_address:
                        "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                    },
                  },
                  {
                    text: "on",
                  },
                  {
                    account: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
                  },
                ],
              ],
            ],
          },
          {
            ins_index: 11,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
            real_outer_ins_index: 10,
            data_raw: {
              info: {
                amount: "53281247",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                destination: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
                source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
                destination_owner:
                  "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111112",
                decimals: 9,
                amount_str: "53281247",
                amount: 53281247,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 11,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  decimals: 6,
                  amount: 8327607,
                  amount_str: "8327607",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                amount: {
                  token_amount: {
                    number: 53281247,
                    decimals: 9,
                    token_address:
                      "So11111111111111111111111111111111111111112",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 12,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
            real_outer_ins_index: 10,
            data_raw: {
              info: {
                amount: "8327607",
                authority: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                destination: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                source: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                source: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
                destination: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                decimals: 6,
                amount_str: "8327607",
                amount: 8327607,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 12,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "So11111111111111111111111111111111111111112",
                  decimals: 9,
                  amount: 53281247,
                  amount_str: "53281247",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
                destination: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                authority: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                amount: {
                  token_amount: {
                    number: 8327607,
                    decimals: 6,
                    token_address:
                      "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 13,
            parsed_type: "anchor Self CPI Log",
            type: "anchor Self CPI Log",
            program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw:
              "QMqFu4fYGGeUEysFnenhAvyo1vY3dSwsEqWWaTp9RRHPz8fLUnfovwRxYFY7kaBebZgEBErKPgTzyvnddbzUG8Yb4T12cKk6pj473foBoh9WEQn79crUkqx9nyFHtMF8igGioFv8DkxZ9QPVM695gHzPNhENEZkp7ZgT4segfuvTEdd",
            accounts: ["D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf"],
            activities: [],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
                  signer: false,
                  writable: false,
                },
              ],
              input_args: null,
              data: null,
              events:
                '{"amm":"HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq","inputMint":"So11111111111111111111111111111111111111112","inputAmount":"53281247","outputMint":"USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB","outputAmount":"8327607"}',
            },
            render_actions: [],
          },
          {
            ins_index: 14,
            parsed_type: "swap_v2",
            type: "swap_v2",
            program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
            program: "stable_swap",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw: "JJyz1VxGNKxq9frBybh1vp6cQTBsPBoKwm",
            accounts: [
              "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
              "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
              "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
              "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
              "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
              "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
              "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
              "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
              "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
              "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
            ],
            activities: [
              {
                name: "StabbleSwapSwap",
                activity_type: "defi_token_swap",
                program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                data: {
                  amm_id: "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  amount_1: 8327607,
                  amount_1_str: "8327607",
                  amount_2: 8321187,
                  amount_2_str: "8321187",
                  token_decimal_1: 6,
                  token_decimal_2: 6,
                  token_account_1_1:
                    "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                  token_account_1_2:
                    "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
                  token_account_2_1:
                    "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  token_account_2_2:
                    "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                  fee_account_1: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  fee_account_2: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                  fee_ammount: 36,
                  fee_token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  fee_token_decimal: 6,
                },
                ins_index: 14,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "swap_v2",
              },
            ],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  signer: true,
                  writable: true,
                  label: "user",
                },
                {
                  account: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  signer: false,
                  writable: false,
                  label: "mint_in",
                },
                {
                  account: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  signer: false,
                  writable: false,
                  label: "mint_out",
                },
                {
                  account: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                  signer: false,
                  writable: true,
                  label: "user_token_in",
                },
                {
                  account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  signer: false,
                  writable: true,
                  label: "user_token_out",
                },
                {
                  account: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
                  signer: false,
                  writable: true,
                  label: "vault_token_in",
                },
                {
                  account: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  signer: false,
                  writable: true,
                  label: "vault_token_out",
                },
                {
                  account: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                  signer: false,
                  writable: true,
                  label: "beneficiary_token_out",
                },
                {
                  account: "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
                  signer: false,
                  writable: true,
                  label: "pool",
                },
                {
                  account: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
                  signer: false,
                  writable: false,
                  label: "withdraw_authority",
                },
                {
                  account: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
                  signer: false,
                  writable: false,
                  label: "vault",
                },
                {
                  account: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                  signer: false,
                  writable: false,
                  label: "vault_authority",
                },
                {
                  account: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
                  signer: false,
                  writable: false,
                  label: "vault_program",
                },
                {
                  account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  signer: false,
                  writable: false,
                  label: "token_program",
                },
                {
                  account: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
                  signer: false,
                  writable: false,
                  label: "token_2022_program",
                },
              ],
              input_args:
                '{"amount_in":{"type":{"option":"u64"},"data":"8327607"},"minimum_amount_out":{"type":"u64","data":"0"}}',
              data: null,
              events: null,
            },
            idl_data: {
              idl_source: "onchain",
            },
            render_actions: [
              [
                [
                  {
                    icon: "swap",
                  },
                  {
                    text: "Swap",
                  },
                  {
                    token_amount: {
                      number: 8327607,
                      decimals: 6,
                      token_address:
                        "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                    },
                  },
                  {
                    text: "for",
                  },
                  {
                    token_amount: {
                      number: 8321187,
                      decimals: 6,
                      token_address:
                        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    },
                  },
                  {
                    text: "on",
                  },
                  {
                    account: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                  },
                ],
              ],
            ],
          },
          {
            ins_index: 15,
            parsed_type: "transferChecked",
            type: "transferChecked",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
            real_outer_ins_index: 14,
            data_raw: {
              info: {
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                destination: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
                mint: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                source: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                tokenAmount: {
                  amount: "8327607",
                  decimals: 6,
                  uiAmount: 8.327607,
                  uiAmountString: "8.327607",
                },
              },
              type: "transferChecked",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                destination: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
                destination_owner:
                  "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                transfer_type: "spl_transfer",
                token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                decimals: 6,
                amount_str: "8327607",
                amount: 8327607,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 15,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  decimals: 6,
                  amount: 8321187,
                  amount_str: "8321187",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                destination: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                amount: {
                  token_amount: {
                    number: 8327607,
                    decimals: 6,
                    token_address:
                      "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 16,
            parsed_type: "withdraw_v2",
            type: "withdraw_v2",
            program_id: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
            program: "vault",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
            real_outer_ins_index: 14,
            data_raw: "P6F8AMLbzxVZXTmYJGzhj1pj1hftXv9LB",
            accounts: [
              "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
              "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
              "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
              "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
              "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            ],
            activities: [],
            transfers: [],
            program_invoke_level: 3,
            display: {
              accounts: [
                {
                  account: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
                  signer: false,
                  writable: false,
                  label: "withdraw_authority",
                },
                {
                  account: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
                  signer: false,
                  writable: false,
                  label: "vault",
                },
                {
                  account: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                  signer: false,
                  writable: false,
                  label: "vault_authority",
                },
                {
                  account: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  signer: false,
                  writable: true,
                  label: "vault_token",
                },
                {
                  account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  signer: false,
                  writable: true,
                  label: "dest_token",
                },
                {
                  account: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                  signer: false,
                  writable: true,
                  label: "beneficiary_token",
                },
                {
                  account: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  signer: false,
                  writable: false,
                  label: "mint",
                },
                {
                  account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  signer: false,
                  writable: false,
                  label: "token_program",
                },
              ],
              input_args:
                '{"amount":{"type":"u64","data":"8321187"},"beneficiary_amount":{"type":"u64","data":"36"}}',
              data: null,
              events: null,
            },
            idl_data: {
              idl_source: "onchain",
            },
            render_actions: [],
          },
          {
            ins_index: 17,
            parsed_type: "transferChecked",
            type: "transferChecked",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
            real_outer_ins_index: 16,
            data_raw: {
              info: {
                authority: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                tokenAmount: {
                  amount: "36",
                  decimals: 6,
                  uiAmount: 0.000036,
                  uiAmountString: "0.000036",
                },
              },
              type: "transferChecked",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                destination_owner:
                  "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "36",
                amount: 36,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 17,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
              },
            ],
            program_invoke_level: 4,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                authority: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                amount: {
                  token_amount: {
                    number: 36,
                    decimals: 6,
                    token_address:
                      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 18,
            parsed_type: "transferChecked",
            type: "transferChecked",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
            real_outer_ins_index: 16,
            data_raw: {
              info: {
                authority: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                tokenAmount: {
                  amount: "8321187",
                  decimals: 6,
                  uiAmount: 8.321187,
                  uiAmountString: "8.321187",
                },
              },
              type: "transferChecked",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "8321187",
                amount: 8321187,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 18,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  decimals: 6,
                  amount: 8327607,
                  amount_str: "8327607",
                },
              },
            ],
            program_invoke_level: 4,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                authority: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                amount: {
                  token_amount: {
                    number: 8321187,
                    decimals: 6,
                    token_address:
                      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 19,
            parsed_type: "anchor Self CPI Log",
            type: "anchor Self CPI Log",
            program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw:
              "QMqFu4fYGGeUEysFnenhAvDLCKNcZ6RVNL1ETZ4Md2NKwNjTVbTMrb5rrjFMYcRVpGiyaL3X4HSoi1wyHvThtXQ9hQtyEtXBzoUnvJBRc8iD3TE9u1V2jKs6MtS9TQSDEnGRFKXiZboyb1NriosF6UWZUiZCoRWmmUpCXAFhNQhHJEB",
            accounts: ["D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf"],
            activities: [],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
                  signer: false,
                  writable: false,
                },
              ],
              input_args: null,
              data: null,
              events:
                '{"amm":"swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ","inputMint":"USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB","inputAmount":"8327607","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outputAmount":"8321187"}',
            },
            render_actions: [],
          },
          {
            ins_index: 20,
            parsed_type: "Swap",
            type: "swap",
            program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
            program: "goonFi",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw: "2d6hTUN1REiwLstXGwSjrhiouy1",
            accounts: [
              "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
              "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
              "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
              "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
              "Sysvar1nstructions1111111111111111111111111",
              "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            ],
            activities: [
              {
                name: "GoonFiSwap",
                activity_type: "defi_token_swap",
                program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                data: {
                  amm_id: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  token_2: "So11111111111111111111111111111111111111112",
                  amount_1: 8321187,
                  amount_1_str: "8321187",
                  amount_2: 53288112,
                  amount_2_str: "53288112",
                  token_decimal_1: 6,
                  token_decimal_2: 9,
                  token_account_1_1:
                    "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  token_account_1_2:
                    "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                  token_account_2_1:
                    "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                  token_account_2_2:
                    "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  fee_account_1: null,
                  fee_account_2: null,
                  fee_ammount: null,
                  fee_token: null,
                  fee_token_decimal: null,
                  side: 1,
                },
                ins_index: 20,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "Swap",
              },
            ],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  signer: true,
                  writable: true,
                  label: "user",
                },
                {
                  account: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  signer: false,
                  writable: true,
                  label: "market",
                },
                {
                  account: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  signer: false,
                  writable: true,
                  label: "userTokenAccountA",
                },
                {
                  account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  signer: false,
                  writable: true,
                  label: "userTokenAccountB",
                },
                {
                  account: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                  signer: false,
                  writable: true,
                  label: "poolTokenAccountA",
                },
                {
                  account: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                  signer: false,
                  writable: true,
                  label: "poolTokenAccountB",
                },
                {
                  account: "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
                  signer: false,
                  writable: false,
                },
                {
                  account: "Sysvar1nstructions1111111111111111111111111",
                  signer: false,
                  writable: false,
                },
                {
                  account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  signer: false,
                  writable: false,
                },
              ],
              input_args:
                '{"discriminator":{"type":"u8","data":2},"isBid":{"type":"bool","data":true}}',
              data: null,
              events: null,
            },
            idl_data: {
              idl_source: "inner_parser",
            },
            render_actions: [
              [
                [
                  {
                    icon: "swap",
                  },
                  {
                    text: "Swap",
                  },
                  {
                    token_amount: {
                      number: 8321187,
                      decimals: 6,
                      token_address:
                        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    },
                  },
                  {
                    text: "for",
                  },
                  {
                    token_amount: {
                      number: 53288112,
                      decimals: 9,
                      token_address:
                        "So11111111111111111111111111111111111111112",
                    },
                  },
                  {
                    text: "on",
                  },
                  {
                    account: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                  },
                ],
              ],
            ],
          },
          {
            ins_index: 21,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
            real_outer_ins_index: 20,
            data_raw: {
              info: {
                amount: "8321187",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                destination_owner:
                  "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "8321187",
                amount: 8321187,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 21,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "So11111111111111111111111111111111111111112",
                  decimals: 9,
                  amount: 53288112,
                  amount_str: "53288112",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                amount: {
                  token_amount: {
                    number: 8321187,
                    decimals: 6,
                    token_address:
                      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 22,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
            real_outer_ins_index: 20,
            data_raw: {
              info: {
                amount: "53288112",
                authority: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111112",
                decimals: 9,
                amount_str: "53288112",
                amount: 53288112,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 22,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  decimals: 6,
                  amount: 8321187,
                  amount_str: "8321187",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                authority: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                amount: {
                  token_amount: {
                    number: 53288112,
                    decimals: 9,
                    token_address:
                      "So11111111111111111111111111111111111111112",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 23,
            parsed_type: "anchor Self CPI Log",
            type: "anchor Self CPI Log",
            program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw:
              "QMqFu4fYGGeUEysFnenhAvCo8qqmiiJhEyGkb3ADa24NhCD4uGbXznGASVmKYDTuVauFnogM76CUu4tkXgFgW8yzGnrp1j5QgHjNjPPe2xr4vDaAPnUuosMHVPoWTkGzGKQCYKU34YEkNLzYLZzx7wS5Kf5bXDZr25v9aRz62ZxzEcf",
            accounts: ["D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf"],
            activities: [],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
                  signer: false,
                  writable: false,
                },
              ],
              input_args: null,
              data: null,
              events:
                '{"amm":"goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j","inputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","inputAmount":"8321187","outputMint":"So11111111111111111111111111111111111111112","outputAmount":"53288112"}',
            },
            render_actions: [],
          },
          {
            ins_index: 24,
            parsed_type: "swap",
            type: "swap",
            program_id: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
            program: "amm_v3",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw:
              "wZRp7wZ3cztPC8Q4wCSoe3c2wFwMV3Aw5gYcoJ865Y3Kk4jYCeggAWzC",
            accounts: [
              "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              "EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR",
              "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
              "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
              "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
              "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
              "3AsJZQY3jtZwqBfbTUQ4xKDVwmdz2ufdKMsnxN9K5L3S",
              "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              "6xjkYNktFv9xW99bb87Dd4FT1hWBRJ9VLm94vi5wZK9z",
              "3xVTGrrbWLtPC2qRiHyiVbKEDY2UUYN9kwJWmPH2n8wW",
              "6sJaJeaMZdW4YS7St9BSsYGdiY5Ra4D5V365V8884sUa",
              "DLS1WdrwC8qaEPdZvJKJTteP6kq8GTNqoidexdzp3Bnp",
            ],
            activities: [
              {
                name: "RaydiumClmmPoolSwap",
                activity_type: "defi_token_swap",
                program_id: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
                data: {
                  amm_id: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "So11111111111111111111111111111111111111112",
                  token_2: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  amount_1: 53288112,
                  amount_1_str: "53288112",
                  amount_2: 8322695,
                  amount_2_str: "8322695",
                  token_decimal_1: 9,
                  token_decimal_2: 6,
                  token_account_1_1:
                    "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  token_account_1_2:
                    "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
                  token_account_2_1:
                    "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
                  token_account_2_2:
                    "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                },
                ins_index: 24,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "swap",
              },
            ],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  signer: true,
                  writable: true,
                  label: "payer",
                },
                {
                  account: "EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR",
                  signer: false,
                  writable: false,
                  label: "amm_config",
                },
                {
                  account: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                  signer: false,
                  writable: true,
                  label: "pool_state",
                },
                {
                  account: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  signer: false,
                  writable: true,
                  label: "input_token_account",
                },
                {
                  account: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                  signer: false,
                  writable: true,
                  label: "output_token_account",
                },
                {
                  account: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
                  signer: false,
                  writable: true,
                  label: "input_vault",
                },
                {
                  account: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
                  signer: false,
                  writable: true,
                  label: "output_vault",
                },
                {
                  account: "3AsJZQY3jtZwqBfbTUQ4xKDVwmdz2ufdKMsnxN9K5L3S",
                  signer: false,
                  writable: true,
                  label: "observation_state",
                },
                {
                  account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  signer: false,
                  writable: false,
                  label: "token_program",
                },
                {
                  account: "6xjkYNktFv9xW99bb87Dd4FT1hWBRJ9VLm94vi5wZK9z",
                  signer: false,
                  writable: true,
                  label: "tick_array",
                },
                {
                  account: "3xVTGrrbWLtPC2qRiHyiVbKEDY2UUYN9kwJWmPH2n8wW",
                  signer: false,
                  writable: true,
                },
                {
                  account: "6sJaJeaMZdW4YS7St9BSsYGdiY5Ra4D5V365V8884sUa",
                  signer: false,
                  writable: true,
                },
                {
                  account: "DLS1WdrwC8qaEPdZvJKJTteP6kq8GTNqoidexdzp3Bnp",
                  signer: false,
                  writable: true,
                },
              ],
              input_args:
                '{"amount":{"type":"u64","data":"53288112"},"other_amount_threshold":{"type":"u64","data":"0"},"sqrt_price_limit_x64":{"type":"u128","data":"0"},"is_base_input":{"type":"bool","data":true}}',
              data: null,
              events: null,
            },
            idl_data: {
              docs: [
                '#[deprecated(note = "Use `swap_v2` instead.")]',
                "Swaps one token for as much as possible of another token across a single pool",
                "",
                "# Arguments",
                "",
                "* `ctx` - The context of accounts",
                "* `amount` - Arranged in pairs with other_amount_threshold. (amount_in, amount_out_minimum) or (amount_out, amount_in_maximum)",
                "* `other_amount_threshold` - For slippage check",
                "* `sqrt_price_limit` - The Q64.64 sqrt price √P limit. If zero for one, the price cannot",
                "* `is_base_input` - swap base input or swap base output",
                "",
              ],
              idl_source: "onchain",
            },
            render_actions: [
              [
                [
                  {
                    icon: "swap",
                  },
                  {
                    text: "Swap",
                  },
                  {
                    token_amount: {
                      number: 53288112,
                      decimals: 9,
                      token_address:
                        "So11111111111111111111111111111111111111112",
                    },
                  },
                  {
                    text: "for",
                  },
                  {
                    token_amount: {
                      number: 8322695,
                      decimals: 6,
                      token_address:
                        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                    },
                  },
                  {
                    text: "on",
                  },
                  {
                    account: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
                  },
                ],
              ],
            ],
          },
          {
            ins_index: 25,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
            real_outer_ins_index: 24,
            data_raw: {
              info: {
                amount: "53288112",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                destination: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
                source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
                destination_owner:
                  "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111112",
                decimals: 9,
                amount_str: "53288112",
                amount: 53288112,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 25,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  decimals: 6,
                  amount: 8322695,
                  amount_str: "8322695",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
                authority: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                amount: {
                  token_amount: {
                    number: 53288112,
                    decimals: 9,
                    token_address:
                      "So11111111111111111111111111111111111111112",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 26,
            parsed_type: "transfer",
            type: "transfer",
            program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
            real_outer_ins_index: 24,
            data_raw: {
              info: {
                amount: "8322695",
                authority: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                destination: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                source: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
              },
              type: "transfer",
            },
            accounts: [],
            activities: [],
            transfers: [
              {
                source_owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                source: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
                destination: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                decimals: 6,
                amount_str: "8322695",
                amount: 8322695,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 26,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "So11111111111111111111111111111111111111112",
                  decimals: 9,
                  amount: 53288112,
                  amount_str: "53288112",
                },
              },
            ],
            program_invoke_level: 3,
            display: {
              accounts: [],
              input_args: null,
              data: {
                source: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
                destination: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                authority: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                amount: {
                  token_amount: {
                    number: 8322695,
                    decimals: 6,
                    token_address:
                      "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  },
                },
              },
              events: null,
            },
            render_actions: [],
          },
          {
            ins_index: 27,
            parsed_type: "anchor Self CPI Log",
            type: "anchor Self CPI Log",
            program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            outer_ins_index: 2,
            real_outer_program_id:
              "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            real_outer_ins_index: 2,
            data_raw:
              "QMqFu4fYGGeUEysFnenhAvi1xPm726vLbPnsuyPY5Jr6BfJygEDcWLKrWxu3qzgfNRAXU7RAbzNafJ4bdNR8s1YUrGsTWq5ebGCaGW31qDjnqHK8HUdtQRnGgMnZjB1CzcLq5ubKq8rQDVS29u4XkrBVPhrXZx6bmJkYKSauuxWqk6b",
            accounts: ["D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf"],
            activities: [],
            transfers: [],
            program_invoke_level: 2,
            display: {
              accounts: [
                {
                  account: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
                  signer: false,
                  writable: false,
                },
              ],
              input_args: null,
              data: null,
              events:
                '{"amm":"CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK","inputMint":"So11111111111111111111111111111111111111112","inputAmount":"53288112","outputMint":"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB","outputAmount":"8322695"}',
            },
            render_actions: [],
          },
        ],
        program_invoke_level: 1,
        display: {
          accounts: [
            {
              account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              signer: false,
              writable: false,
              label: "token_program",
            },
            {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              signer: true,
              writable: true,
              label: "user_transfer_authority",
            },
            {
              account: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
              signer: false,
              writable: true,
              label: "user_source_token_account",
            },
            {
              account: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
              signer: false,
              writable: true,
              label: "user_destination_token_account",
            },
            {
              account: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
              signer: false,
              writable: false,
              label: "destination_token_account",
            },
            {
              account: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              signer: false,
              writable: false,
              label: "destination_mint",
            },
            {
              account: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
              signer: false,
              writable: false,
              label: "platform_fee_account",
            },
            {
              account: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
              signer: false,
              writable: false,
              label: "event_authority",
            },
            {
              account: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
              signer: false,
              writable: false,
              label: "program",
            },
            {
              account: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
              signer: false,
              writable: false,
            },
            {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              signer: true,
              writable: true,
            },
            {
              account: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
              signer: false,
              writable: true,
            },
            {
              account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              signer: false,
              writable: true,
            },
            {
              account: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
              signer: false,
              writable: true,
            },
            {
              account: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
              signer: false,
              writable: true,
            },
            {
              account: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
              signer: false,
              writable: true,
            },
            {
              account: "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
              signer: false,
              writable: true,
            },
            {
              account: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
              signer: false,
              writable: false,
            },
            {
              account: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
              signer: false,
              writable: false,
            },
            {
              account: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              signer: false,
              writable: false,
            },
            {
              account: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
              signer: false,
              writable: false,
            },
            {
              account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              signer: false,
              writable: false,
            },
            {
              account: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
              signer: false,
              writable: false,
            },
            {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              signer: true,
              writable: true,
            },
            {
              account: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
              signer: false,
              writable: true,
            },
            {
              account: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              signer: false,
              writable: true,
            },
            {
              account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              signer: false,
              writable: true,
            },
            {
              account: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
              signer: false,
              writable: true,
            },
            {
              account: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
              signer: false,
              writable: true,
            },
            {
              account: "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
              signer: false,
              writable: false,
            },
            {
              account: "Sysvar1nstructions1111111111111111111111111",
              signer: false,
              writable: false,
            },
            {
              account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              signer: false,
              writable: false,
            },
            {
              account: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
              signer: false,
              writable: false,
            },
            {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              signer: true,
              writable: true,
            },
            {
              account: "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu",
              signer: false,
              writable: false,
            },
            {
              account: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
              signer: false,
              writable: true,
            },
            {
              account: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              signer: false,
              writable: true,
            },
            {
              account: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
              signer: false,
              writable: true,
            },
            {
              account: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
              signer: false,
              writable: true,
            },
            {
              account: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
              signer: false,
              writable: true,
            },
            {
              account: "FWtVhpbEYe77fpBgVMeTPj3vy9v83zfHJgJypLJtgw3N",
              signer: false,
              writable: true,
            },
            {
              account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              signer: false,
              writable: false,
            },
            {
              account: "HWF7HpfvckiaazDfm87jfec1Xppjo3ye5ePK5ZiLhGpx",
              signer: false,
              writable: true,
            },
            {
              account: "2nRvNRn6YLSccAmGRpcA5kuVRa9aPcws1aTaFtWq2oAK",
              signer: false,
              writable: true,
            },
            {
              account: "CupeLh6ERAwYPG6dYfFaYXgRSVBeDzLCV8QaWmorbvYr",
              signer: false,
              writable: true,
            },
            {
              account: "Dqa3QgLDFfYqHF9g9YLv55HsE2EhTh5hro39K7jbAn7U",
              signer: false,
              writable: true,
            },
            {
              account: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
              signer: false,
              writable: false,
            },
            {
              account: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
              signer: false,
              writable: false,
            },
            {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              signer: true,
              writable: true,
            },
            {
              account: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
              signer: false,
              writable: false,
            },
            {
              account: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              signer: false,
              writable: false,
            },
            {
              account: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
              signer: false,
              writable: true,
            },
            {
              account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              signer: false,
              writable: true,
            },
            {
              account: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
              signer: false,
              writable: true,
            },
            {
              account: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
              signer: false,
              writable: true,
            },
            {
              account: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
              signer: false,
              writable: true,
            },
            {
              account: "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
              signer: false,
              writable: true,
            },
            {
              account: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
              signer: false,
              writable: false,
            },
            {
              account: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
              signer: false,
              writable: false,
            },
            {
              account: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              signer: false,
              writable: false,
            },
            {
              account: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
              signer: false,
              writable: false,
            },
            {
              account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              signer: false,
              writable: false,
            },
            {
              account: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
              signer: false,
              writable: false,
            },
            {
              account: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
              signer: false,
              writable: false,
            },
            {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              signer: true,
              writable: true,
            },
            {
              account: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
              signer: false,
              writable: true,
            },
            {
              account: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              signer: false,
              writable: true,
            },
            {
              account: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
              signer: false,
              writable: true,
            },
            {
              account: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
              signer: false,
              writable: true,
            },
            {
              account: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
              signer: false,
              writable: true,
            },
            {
              account: "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
              signer: false,
              writable: false,
            },
            {
              account: "Sysvar1nstructions1111111111111111111111111",
              signer: false,
              writable: false,
            },
            {
              account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              signer: false,
              writable: false,
            },
            {
              account: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
              signer: false,
              writable: false,
            },
            {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              signer: true,
              writable: true,
            },
            {
              account: "EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR",
              signer: false,
              writable: false,
            },
            {
              account: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
              signer: false,
              writable: true,
            },
            {
              account: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
              signer: false,
              writable: true,
            },
            {
              account: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
              signer: false,
              writable: true,
            },
            {
              account: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
              signer: false,
              writable: true,
            },
            {
              account: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
              signer: false,
              writable: true,
            },
            {
              account: "3AsJZQY3jtZwqBfbTUQ4xKDVwmdz2ufdKMsnxN9K5L3S",
              signer: false,
              writable: true,
            },
            {
              account: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              signer: false,
              writable: false,
            },
            {
              account: "6xjkYNktFv9xW99bb87Dd4FT1hWBRJ9VLm94vi5wZK9z",
              signer: false,
              writable: true,
            },
            {
              account: "3xVTGrrbWLtPC2qRiHyiVbKEDY2UUYN9kwJWmPH2n8wW",
              signer: false,
              writable: true,
            },
            {
              account: "6sJaJeaMZdW4YS7St9BSsYGdiY5Ra4D5V365V8884sUa",
              signer: false,
              writable: true,
            },
            {
              account: "DLS1WdrwC8qaEPdZvJKJTteP6kq8GTNqoidexdzp3Bnp",
              signer: false,
              writable: true,
            },
            {
              account: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
              signer: false,
              writable: false,
            },
          ],
          input_args:
            '{"route_plan":{"type":{"vec":{"defined":{"name":"RoutePlanStep"}}},"data":[{"swap":{"StabbleStableSwap":{}},"percent":100,"input_index":0,"output_index":1},{"swap":{"GoonFi":{"is_bid":true,"blacklist_bump":255}},"percent":100,"input_index":1,"output_index":2},{"swap":{"RaydiumClmm":{}},"percent":100,"input_index":2,"output_index":3},{"swap":{"StabbleStableSwapV2":{}},"percent":100,"input_index":3,"output_index":1},{"swap":{"GoonFi":{"is_bid":true,"blacklist_bump":255}},"percent":100,"input_index":1,"output_index":2},{"swap":{"RaydiumClmm":{}},"percent":100,"input_index":2,"output_index":0}]},"in_amount":{"type":"u64","data":"8321072"},"quoted_out_amount":{"type":"u64","data":"8322392"},"slippage_bps":{"type":"u16","data":"0"},"platform_fee_bps":{"type":"u8","data":0}}',
          data: null,
          events:
            '[{"data":{"amm":"swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ","inputMint":"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB","inputAmount":"8321072","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outputAmount":"8320115"},"name":"swapEvent"},{"data":{"amm":"goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j","inputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","inputAmount":"8320115","outputMint":"So11111111111111111111111111111111111111112","outputAmount":"53281247"},"name":"swapEvent"},{"data":{"amm":"HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq","inputMint":"So11111111111111111111111111111111111111112","inputAmount":"53281247","outputMint":"USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB","outputAmount":"8327607"},"name":"swapEvent"},{"data":{"amm":"swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ","inputMint":"USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB","inputAmount":"8327607","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outputAmount":"8321187"},"name":"swapEvent"},{"data":{"amm":"goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j","inputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","inputAmount":"8321187","outputMint":"So11111111111111111111111111111111111111112","outputAmount":"53288112"},"name":"swapEvent"},{"data":{"amm":"CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK","inputMint":"So11111111111111111111111111111111111111112","inputAmount":"53288112","outputMint":"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB","outputAmount":"8322695"},"name":"swapEvent"}]',
        },
        idl_data: {
          idl_source: "onchain",
        },
        render_actions: [
          [
            [
              {
                icon: "swap",
              },
              {
                text: "Swap",
              },
              {
                token_amount: {
                  number: "8321072",
                  decimals: 6,
                  token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                },
              },
              {
                text: "for",
              },
              {
                token_amount: {
                  number: "8322695",
                  decimals: 6,
                  token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                },
              },
              {
                text: "on",
              },
              {
                account: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
              },
              {
                text: "(",
              },
              {
                "icon-tooltip": {
                  icon: "slippage",
                  tooltip: "Slippage Tolerance",
                },
              },
              {
                text: "0%",
              },
              {
                "icon-tooltip": {
                  icon: "fee",
                  tooltip: "Partner Referral Fee",
                },
              },
              {
                text: "0%",
              },
              {
                text: ")",
              },
            ],
          ],
        ],
      },
      {
        ins_index: 3,
        type: "memo",
        program_id: "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
        program: "spl-memo",
        outer_program_id: null,
        outer_ins_index: -1,
        real_outer_program_id: null,
        real_outer_ins_index: -1,
        data_raw: "AJ1|27|2521|am|fr|ny",
        accounts: [],
        activities: [],
        transfers: [],
        program_invoke_level: 1,
        display: {
          accounts: [],
          input_args: null,
          data: null,
          events: null,
        },
        render_actions: [],
      },
      {
        ins_index: 4,
        parsed_type: "transfer",
        type: "transfer",
        program_id: "11111111111111111111111111111111",
        program: "system",
        outer_program_id: null,
        outer_ins_index: -1,
        real_outer_program_id: null,
        real_outer_ins_index: -1,
        data_raw: {
          info: {
            destination: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
            lamports: 1004,
            source: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          },
          type: "transfer",
        },
        accounts: [],
        activities: [],
        transfers: [
          {
            source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            source: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            destination: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
            destination_owner: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
            transfer_type: "spl_transfer",
            token_address: "So11111111111111111111111111111111111111111",
            decimals: 9,
            amount_str: "1004",
            amount: 1004,
            program_id: "11111111111111111111111111111111",
            outer_program_id: null,
            ins_index: 4,
            outer_ins_index: -1,
            event: "",
            fee: {},
          },
        ],
        program_invoke_level: 1,
        display: {
          accounts: [],
          input_args: null,
          data: {
            source: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            destination: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
            amount: {
              token_amount: {
                number: 1004,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111111",
              },
            },
          },
          events: null,
        },
        tags: ["mev_tip"],
        render_actions: [],
      },
    ],
    accounts_involved: [
      "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
      "6sJaJeaMZdW4YS7St9BSsYGdiY5Ra4D5V365V8884sUa",
      "6xjkYNktFv9xW99bb87Dd4FT1hWBRJ9VLm94vi5wZK9z",
      "CupeLh6ERAwYPG6dYfFaYXgRSVBeDzLCV8QaWmorbvYr",
      "DLS1WdrwC8qaEPdZvJKJTteP6kq8GTNqoidexdzp3Bnp",
      "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
      "Dqa3QgLDFfYqHF9g9YLv55HsE2EhTh5hro39K7jbAn7U",
      "HWF7HpfvckiaazDfm87jfec1Xppjo3ye5ePK5ZiLhGpx",
      "11111111111111111111111111111111",
      "ComputeBudget111111111111111111111111111111",
      "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
      "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
      "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
      "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
      "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
      "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
      "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
      "2nRvNRn6YLSccAmGRpcA5kuVRa9aPcws1aTaFtWq2oAK",
      "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
      "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
      "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
      "FWtVhpbEYe77fpBgVMeTPj3vy9v83zfHJgJypLJtgw3N",
      "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
      "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
      "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
      "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
      "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
      "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
      "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
      "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
      "3AsJZQY3jtZwqBfbTUQ4xKDVwmdz2ufdKMsnxN9K5L3S",
      "3xVTGrrbWLtPC2qRiHyiVbKEDY2UUYN9kwJWmPH2n8wW",
      "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
      "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
      "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
      "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
      "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu",
      "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
      "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
      "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
      "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
      "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
      "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
      "Sysvar1nstructions1111111111111111111111111",
      "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
      "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
      "EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR",
      "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
      "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    ],
    programs_involved: [
      "ComputeBudget111111111111111111111111111111",
      "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
      "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
      "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
      "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
      "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
      "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
      "11111111111111111111111111111111",
    ],
    index_block: -1,
    signer: ["6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7"],
    list_signer: ["6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7"],
    status: 1,
    metadata: {
      token_metadata: {
        So11111111111111111111111111111111111111112: {
          token_address: "So11111111111111111111111111111111111111112",
          decimals: 9,
        },
        Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
          token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          decimals: 6,
        },
        USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB: {
          token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
          decimals: 6,
        },
        EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: {
          token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          decimals: 6,
        },
      },
      account_metadata: {
        "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH": {
          account_address: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
          owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          signer: false,
          writable: true,
        },
        "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx": {
          account_address: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
          owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          signer: false,
          writable: true,
        },
        "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs": {
          account_address: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
          owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          signer: false,
          writable: true,
        },
        Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR: {
          account_address: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
          owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          signer: false,
          writable: true,
        },
        B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ: {
          account_address: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
          owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
          signer: false,
          writable: true,
        },
        BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ: {
          account_address: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
          owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
          signer: false,
          writable: true,
        },
        "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7": {
          account_address: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
          owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
          signer: false,
          writable: true,
        },
        AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA: {
          account_address: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
          owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
          signer: false,
          writable: true,
        },
        ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa: {
          account_address: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
          owner: "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
          signer: false,
          writable: true,
        },
        AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U: {
          account_address: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
          owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
          signer: false,
          writable: true,
        },
        CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ: {
          account_address: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
          owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
          signer: false,
          writable: true,
        },
        "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K": {
          account_address: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
          owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
          signer: false,
          writable: true,
        },
        "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7": {
          account_address: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
          owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
          signer: false,
          writable: true,
        },
        "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY": {
          account_address: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
          owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
          signer: false,
          writable: true,
        },
        "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7": {
          account_address: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
          signer: true,
          writable: true,
        },
        "6sJaJeaMZdW4YS7St9BSsYGdiY5Ra4D5V365V8884sUa": {
          account_address: "6sJaJeaMZdW4YS7St9BSsYGdiY5Ra4D5V365V8884sUa",
          signer: false,
          writable: true,
        },
        "6xjkYNktFv9xW99bb87Dd4FT1hWBRJ9VLm94vi5wZK9z": {
          account_address: "6xjkYNktFv9xW99bb87Dd4FT1hWBRJ9VLm94vi5wZK9z",
          signer: false,
          writable: true,
        },
        CupeLh6ERAwYPG6dYfFaYXgRSVBeDzLCV8QaWmorbvYr: {
          account_address: "CupeLh6ERAwYPG6dYfFaYXgRSVBeDzLCV8QaWmorbvYr",
          signer: false,
          writable: true,
        },
        DLS1WdrwC8qaEPdZvJKJTteP6kq8GTNqoidexdzp3Bnp: {
          account_address: "DLS1WdrwC8qaEPdZvJKJTteP6kq8GTNqoidexdzp3Bnp",
          signer: false,
          writable: true,
        },
        DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh: {
          account_address: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
          signer: false,
          writable: true,
        },
        Dqa3QgLDFfYqHF9g9YLv55HsE2EhTh5hro39K7jbAn7U: {
          account_address: "Dqa3QgLDFfYqHF9g9YLv55HsE2EhTh5hro39K7jbAn7U",
          signer: false,
          writable: true,
        },
        HWF7HpfvckiaazDfm87jfec1Xppjo3ye5ePK5ZiLhGpx: {
          account_address: "HWF7HpfvckiaazDfm87jfec1Xppjo3ye5ePK5ZiLhGpx",
          signer: false,
          writable: true,
        },
        "11111111111111111111111111111111": {
          account_address: "11111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        ComputeBudget111111111111111111111111111111: {
          account_address: "ComputeBudget111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4: {
          account_address: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
          signer: false,
          writable: false,
        },
        MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr: {
          account_address: "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
          signer: false,
          writable: false,
        },
        AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG: {
          account_address: "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
          signer: false,
          writable: false,
        },
        "2nRvNRn6YLSccAmGRpcA5kuVRa9aPcws1aTaFtWq2oAK": {
          account_address: "2nRvNRn6YLSccAmGRpcA5kuVRa9aPcws1aTaFtWq2oAK",
          signer: false,
          writable: true,
        },
        "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q": {
          account_address: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
          signer: false,
          writable: true,
        },
        FWtVhpbEYe77fpBgVMeTPj3vy9v83zfHJgJypLJtgw3N: {
          account_address: "FWtVhpbEYe77fpBgVMeTPj3vy9v83zfHJgJypLJtgw3N",
          signer: false,
          writable: true,
        },
        "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer": {
          account_address: "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
          signer: false,
          writable: true,
        },
        "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46": {
          account_address: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
          signer: false,
          writable: true,
        },
        "3AsJZQY3jtZwqBfbTUQ4xKDVwmdz2ufdKMsnxN9K5L3S": {
          account_address: "3AsJZQY3jtZwqBfbTUQ4xKDVwmdz2ufdKMsnxN9K5L3S",
          signer: false,
          writable: true,
        },
        "3xVTGrrbWLtPC2qRiHyiVbKEDY2UUYN9kwJWmPH2n8wW": {
          account_address: "3xVTGrrbWLtPC2qRiHyiVbKEDY2UUYN9kwJWmPH2n8wW",
          signer: false,
          writable: true,
        },
        ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6: {
          account_address: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
          signer: false,
          writable: true,
        },
        BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC: {
          account_address: "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
          signer: false,
          writable: true,
        },
        TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: {
          account_address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          signer: false,
          writable: false,
        },
        D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf: {
          account_address: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
          signer: false,
          writable: false,
        },
        "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu": {
          account_address: "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu",
          signer: false,
          writable: false,
        },
        CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK: {
          account_address: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
          signer: false,
          writable: false,
        },
        EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: {
          account_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          signer: false,
          writable: false,
        },
        HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq: {
          account_address: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
          signer: false,
          writable: false,
        },
        stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC: {
          account_address: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
          signer: false,
          writable: false,
        },
        swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ: {
          account_address: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
          signer: false,
          writable: false,
        },
        vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV: {
          account_address: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
          signer: false,
          writable: false,
        },
        "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME": {
          account_address: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
          signer: false,
          writable: false,
        },
        "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm": {
          account_address: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
          signer: false,
          writable: false,
        },
        Sysvar1nstructions1111111111111111111111111: {
          account_address: "Sysvar1nstructions1111111111111111111111111",
          signer: false,
          writable: false,
        },
        TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb: {
          account_address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
          signer: false,
          writable: false,
        },
        goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j: {
          account_address: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
          signer: false,
          writable: false,
        },
        EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR: {
          account_address: "EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR",
          signer: false,
          writable: false,
        },
        USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB: {
          account_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
          signer: false,
          writable: false,
        },
        Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
          account_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          signer: false,
          writable: false,
        },
      },
      init_token_account_metadata: {},
    },
    tags: ["jupiter_swap", "mev_tip"],
    source_store_tx: "db",
    account_keys: [
      {
        pubkey: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
        writable: true,
        signer: true,
        source: "transaction",
      },
      {
        pubkey: "6sJaJeaMZdW4YS7St9BSsYGdiY5Ra4D5V365V8884sUa",
        writable: true,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "6xjkYNktFv9xW99bb87Dd4FT1hWBRJ9VLm94vi5wZK9z",
        writable: true,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "CupeLh6ERAwYPG6dYfFaYXgRSVBeDzLCV8QaWmorbvYr",
        writable: true,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "DLS1WdrwC8qaEPdZvJKJTteP6kq8GTNqoidexdzp3Bnp",
        writable: true,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
        writable: true,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "Dqa3QgLDFfYqHF9g9YLv55HsE2EhTh5hro39K7jbAn7U",
        writable: true,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "HWF7HpfvckiaazDfm87jfec1Xppjo3ye5ePK5ZiLhGpx",
        writable: true,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "11111111111111111111111111111111",
        writable: false,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "ComputeBudget111111111111111111111111111111",
        writable: false,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
        writable: false,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
        writable: false,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "AH2bFsvSwpZoo9n7uPj1Urdq21zuXcTkLSvtcEsGW2cG",
        writable: false,
        signer: false,
        source: "transaction",
      },
      {
        pubkey: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "2nRvNRn6YLSccAmGRpcA5kuVRa9aPcws1aTaFtWq2oAK",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "FWtVhpbEYe77fpBgVMeTPj3vy9v83zfHJgJypLJtgw3N",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "3AsJZQY3jtZwqBfbTUQ4xKDVwmdz2ufdKMsnxN9K5L3S",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "3xVTGrrbWLtPC2qRiHyiVbKEDY2UUYN9kwJWmPH2n8wW",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
        writable: true,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "Sysvar1nstructions1111111111111111111111111",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
      {
        pubkey: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        writable: false,
        signer: false,
        source: "lookupTable",
      },
    ],
    compute_units_consumed: 450148,
    render_legacy_main_actions: [
      {
        title: [
          [
            {
              text: "Interact with instruction",
            },
            {
              instruction: "route",
            },
            {
              text: "on",
            },
            {
              account: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            },
            {
              origin_data: {
                program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                parsed_type: "route",
                activity_type: "interaction",
              },
            },
            {
              index: {
                ins_index: 2,
                outer_ins_index: -1,
              },
            },
          ],
        ],
        body: [
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
                owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8321072,
                decimals: 6,
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              },
            },
            {
              origin_data: {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                destination: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
                destination_owner:
                  "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                transfer_type: "spl_transfer",
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                decimals: 6,
                amount_str: "8321072",
                amount: 8321072,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 1,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  decimals: 6,
                  amount: 8320115,
                  amount_str: "8320115",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 1,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                owner: "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 49,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              origin_data: {
                source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                destination_owner:
                  "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "49",
                amount: 49,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 3,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 3,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8320115,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              origin_data: {
                source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "8320115",
                amount: 8320115,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 4,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  decimals: 6,
                  amount: 8321072,
                  amount_str: "8321072",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 4,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8320115,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              origin_data: {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                destination_owner:
                  "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "8320115",
                amount: 8320115,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 7,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "So11111111111111111111111111111111111111112",
                  decimals: 9,
                  amount: 53281247,
                  amount_str: "53281247",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 7,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 53281247,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111112",
              },
            },
            {
              origin_data: {
                source_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111112",
                decimals: 9,
                amount_str: "53281247",
                amount: 53281247,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 8,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  decimals: 6,
                  amount: 8320115,
                  amount_str: "8320115",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 8,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
                owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 53281247,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111112",
              },
            },
            {
              origin_data: {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
                destination_owner:
                  "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111112",
                decimals: 9,
                amount_str: "53281247",
                amount: 53281247,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 11,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  decimals: 6,
                  amount: 8327607,
                  amount_str: "8327607",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 11,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
                owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8327607,
                decimals: 6,
                token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
              },
            },
            {
              origin_data: {
                source_owner: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                source: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
                destination: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                decimals: 6,
                amount_str: "8327607",
                amount: 8327607,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 12,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "So11111111111111111111111111111111111111112",
                  decimals: 9,
                  amount: 53281247,
                  amount_str: "53281247",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 12,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
                owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8327607,
                decimals: 6,
                token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
              },
            },
            {
              origin_data: {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                destination: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
                destination_owner:
                  "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                transfer_type: "spl_transfer",
                token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                decimals: 6,
                amount_str: "8327607",
                amount: 8327607,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 15,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  decimals: 6,
                  amount: 8321187,
                  amount_str: "8321187",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 15,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                owner: "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 36,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              origin_data: {
                source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                destination_owner:
                  "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "36",
                amount: 36,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 17,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 17,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8321187,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              origin_data: {
                source_owner: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                source: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                destination: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "8321187",
                amount: 8321187,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 18,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  decimals: 6,
                  amount: 8327607,
                  amount_str: "8327607",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 18,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8321187,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              origin_data: {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                destination: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                destination_owner:
                  "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                transfer_type: "spl_transfer",
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                decimals: 6,
                amount_str: "8321187",
                amount: 8321187,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 21,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "So11111111111111111111111111111111111111112",
                  decimals: 9,
                  amount: 53288112,
                  amount_str: "53288112",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 21,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 53288112,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111112",
              },
            },
            {
              origin_data: {
                source_owner: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                source: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                destination: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111112",
                decimals: 9,
                amount_str: "53288112",
                amount: 53288112,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 22,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  decimals: 6,
                  amount: 8321187,
                  amount_str: "8321187",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 22,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
                owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 53288112,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111112",
              },
            },
            {
              origin_data: {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                destination: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
                destination_owner:
                  "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111112",
                decimals: 9,
                amount_str: "53288112",
                amount: 53288112,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 25,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  decimals: 6,
                  amount: 8322695,
                  amount_str: "8322695",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 25,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              token_account: {
                address: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
                owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
              },
            },
            {
              text: "to",
            },
            {
              token_account: {
                address: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8322695,
                decimals: 6,
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              },
            },
            {
              origin_data: {
                source_owner: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                source: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
                destination: "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                destination_owner:
                  "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                transfer_type: "spl_transfer",
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                decimals: 6,
                amount_str: "8322695",
                amount: 8322695,
                program_id: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                ins_index: 26,
                outer_ins_index: 2,
                event: "",
                fee: {},
                extra_data: {},
                base_value: {
                  token_address: "So11111111111111111111111111111111111111112",
                  decimals: 9,
                  amount: 53288112,
                  amount_str: "53288112",
                },
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 26,
                outer_ins_index: 2,
              },
            },
          ],
        ],
      },
      {
        title: [
          [
            {
              text: "Interact with instruction",
            },
            {
              instruction: "transfer",
            },
            {
              text: "on",
            },
            {
              account: "11111111111111111111111111111111",
            },
            {
              origin_data: {
                program_id: "11111111111111111111111111111111",
                parsed_type: "transfer",
                activity_type: "interaction",
              },
            },
            {
              index: {
                ins_index: 4,
                outer_ins_index: -1,
              },
            },
          ],
        ],
        body: [
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            },
            {
              text: "to",
            },
            {
              account: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 1004,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111111",
              },
            },
            {
              origin_data: {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                destination: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
                destination_owner:
                  "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111111",
                decimals: 9,
                amount_str: "1004",
                amount: 1004,
                program_id: "11111111111111111111111111111111",
                outer_program_id: null,
                ins_index: 4,
                outer_ins_index: -1,
                event: "",
                fee: {},
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 4,
                outer_ins_index: -1,
              },
            },
          ],
        ],
      },
    ],
    render_summary_main_actions: [
      {
        title: [
          [
            {
              icon: "swap",
            },
            {
              text: "Swap",
            },
            {
              token_amount: {
                number: "8321072",
                decimals: 6,
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: "8322695",
                decimals: 6,
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              },
            },
            {
              text: "on",
            },
            {
              account: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
            },
            {
              text: "(",
            },
            {
              "icon-tooltip": {
                icon: "slippage",
                tooltip: "Slippage Tolerance",
              },
            },
            {
              text: "0%",
            },
            {
              "icon-tooltip": {
                icon: "fee",
                tooltip: "Partner Referral Fee",
              },
            },
            {
              text: "0%",
            },
            {
              text: ")",
            },
            {
              origin_data: {
                name: "JupiterV6AggTokenSwap",
                activity_type: "defi_token_agg_swap",
                program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                data: {
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  token_2: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  amount_1: "8321072",
                  amount_1_str: "8321072",
                  amount_2: "8322695",
                  amount_2_str: "8322695",
                  token_decimal_1: 6,
                  token_decimal_2: 6,
                  token_account_1_1: null,
                  token_account_1_2: null,
                  token_account_2_1: null,
                  token_account_2_2: null,
                  owner_1: null,
                  owner_2: null,
                  routers: [
                    {
                      amm_program_id:
                        "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                      token_1: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                      token_decimal_1: 6,
                      amount_1: "8321072",
                      amount_1_str: "8321072",
                      token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                      token_decimal_2: 6,
                      amount_2: "8320115",
                      amount_2_str: "8320115",
                    },
                    {
                      amm_program_id:
                        "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                      token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                      token_decimal_1: 6,
                      amount_1: "8320115",
                      amount_1_str: "8320115",
                      token_2: "So11111111111111111111111111111111111111112",
                      token_decimal_2: 9,
                      amount_2: "53281247",
                      amount_2_str: "53281247",
                    },
                    {
                      amm_program_id:
                        "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
                      token_1: "So11111111111111111111111111111111111111112",
                      token_decimal_1: 9,
                      amount_1: "53281247",
                      amount_1_str: "53281247",
                      token_2: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                      token_decimal_2: 6,
                      amount_2: "8327607",
                      amount_2_str: "8327607",
                    },
                    {
                      amm_program_id:
                        "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                      token_1: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                      token_decimal_1: 6,
                      amount_1: "8327607",
                      amount_1_str: "8327607",
                      token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                      token_decimal_2: 6,
                      amount_2: "8321187",
                      amount_2_str: "8321187",
                    },
                    {
                      amm_program_id:
                        "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                      token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                      token_decimal_1: 6,
                      amount_1: "8321187",
                      amount_1_str: "8321187",
                      token_2: "So11111111111111111111111111111111111111112",
                      token_decimal_2: 9,
                      amount_2: "53288112",
                      amount_2_str: "53288112",
                    },
                    {
                      amm_program_id:
                        "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
                      token_1: "So11111111111111111111111111111111111111112",
                      token_decimal_1: 9,
                      amount_1: "53288112",
                      amount_1_str: "53288112",
                      token_2: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                      token_decimal_2: 6,
                      amount_2: "8322695",
                      amount_2_str: "8322695",
                    },
                  ],
                  exact_amount_2: "8322392",
                  exact_amount_2_str: "8322392",
                  platform_fee: 0,
                  slippage: 0,
                },
                ins_index: 2,
                outer_ins_index: -1,
                outer_program_id: null,
                real_outer_ins_index: -1,
                real_outer_program_id: null,
                program_invoke_level: 1,
                inst_type: "route",
              },
            },
            {
              index: {
                ins_index: 2,
                outer_ins_index: -1,
              },
            },
          ],
        ],
        body: [
          [
            {
              icon: "swap",
            },
            {
              text: "Swap",
            },
            {
              token_amount: {
                number: 8321072,
                decimals: 6,
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8320115,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              text: "on",
            },
            {
              account: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
            },
            {
              origin_data: {
                name: "StabbleSwapSwap",
                activity_type: "defi_token_swap",
                program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                data: {
                  amm_id: "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  amount_1: 8321072,
                  amount_1_str: "8321072",
                  amount_2: 8320115,
                  amount_2_str: "8320115",
                  token_decimal_1: 6,
                  token_decimal_2: 6,
                  token_account_1_1:
                    "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                  token_account_1_2:
                    "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
                  token_account_2_1:
                    "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  token_account_2_2:
                    "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                  fee_account_1: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  fee_account_2: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                  fee_ammount: 49,
                  fee_token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  fee_token_decimal: 6,
                },
                ins_index: 0,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "swap",
              },
            },
            {
              index: {
                ins_index: 0,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "swap",
            },
            {
              text: "Swap",
            },
            {
              token_amount: {
                number: 8320115,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 53281247,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111112",
              },
            },
            {
              text: "on",
            },
            {
              account: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
            },
            {
              origin_data: {
                name: "GoonFiSwap",
                activity_type: "defi_token_swap",
                program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                data: {
                  amm_id: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  token_2: "So11111111111111111111111111111111111111112",
                  amount_1: 8320115,
                  amount_1_str: "8320115",
                  amount_2: 53281247,
                  amount_2_str: "53281247",
                  token_decimal_1: 6,
                  token_decimal_2: 9,
                  token_account_1_1:
                    "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  token_account_1_2:
                    "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                  token_account_2_1:
                    "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                  token_account_2_2:
                    "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  fee_account_1: null,
                  fee_account_2: null,
                  fee_ammount: null,
                  fee_token: null,
                  fee_token_decimal: null,
                  side: 1,
                },
                ins_index: 6,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "Swap",
              },
            },
            {
              index: {
                ins_index: 6,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "swap",
            },
            {
              text: "Swap",
            },
            {
              token_amount: {
                number: 53281247,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111112",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8327607,
                decimals: 6,
                token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
              },
            },
            {
              text: "on",
            },
            {
              account: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
            },
            {
              origin_data: {
                name: "PancakePoolSwap",
                activity_type: "defi_token_swap",
                program_id: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
                data: {
                  amm_id: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "So11111111111111111111111111111111111111112",
                  token_2: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  amount_1: 53281247,
                  amount_1_str: "53281247",
                  amount_2: 8327607,
                  amount_2_str: "8327607",
                  token_decimal_1: 9,
                  token_decimal_2: 6,
                  token_account_1_1:
                    "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  token_account_1_2:
                    "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
                  token_account_2_1:
                    "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
                  token_account_2_2:
                    "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
                },
                ins_index: 10,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "swap",
              },
            },
            {
              index: {
                ins_index: 10,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "swap",
            },
            {
              text: "Swap",
            },
            {
              token_amount: {
                number: 8327607,
                decimals: 6,
                token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8321187,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              text: "on",
            },
            {
              account: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
            },
            {
              origin_data: {
                name: "StabbleSwapSwap",
                activity_type: "defi_token_swap",
                program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                data: {
                  amm_id: "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                  token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  amount_1: 8327607,
                  amount_1_str: "8327607",
                  amount_2: 8321187,
                  amount_2_str: "8321187",
                  token_decimal_1: 6,
                  token_decimal_2: 6,
                  token_account_1_1:
                    "9XH8yUKX8uPfutDyAktdjRVdZMN8qfhqTuB21G6tNyqs",
                  token_account_1_2:
                    "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
                  token_account_2_1:
                    "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  token_account_2_2:
                    "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
                  fee_account_1: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
                  fee_account_2: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
                  fee_ammount: 36,
                  fee_token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  fee_token_decimal: 6,
                },
                ins_index: 14,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "swap_v2",
              },
            },
            {
              index: {
                ins_index: 14,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "swap",
            },
            {
              text: "Swap",
            },
            {
              token_amount: {
                number: 8321187,
                decimals: 6,
                token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 53288112,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111112",
              },
            },
            {
              text: "on",
            },
            {
              account: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
            },
            {
              origin_data: {
                name: "GoonFiSwap",
                activity_type: "defi_token_swap",
                program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                data: {
                  amm_id: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                  token_2: "So11111111111111111111111111111111111111112",
                  amount_1: 8321187,
                  amount_1_str: "8321187",
                  amount_2: 53288112,
                  amount_2_str: "53288112",
                  token_decimal_1: 6,
                  token_decimal_2: 9,
                  token_account_1_1:
                    "Gb9mMavFNgUQ3PMF6BPiZwjV9x7mmoWHphYvs4uHPwMR",
                  token_account_1_2:
                    "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
                  token_account_2_1:
                    "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
                  token_account_2_2:
                    "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
                  fee_account_1: null,
                  fee_account_2: null,
                  fee_ammount: null,
                  fee_token: null,
                  fee_token_decimal: null,
                  side: 1,
                },
                ins_index: 20,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "Swap",
              },
            },
            {
              index: {
                ins_index: 20,
                outer_ins_index: 2,
              },
            },
          ],
          [
            {
              icon: "swap",
            },
            {
              text: "Swap",
            },
            {
              token_amount: {
                number: 53288112,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111112",
              },
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 8322695,
                decimals: 6,
                token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
              },
            },
            {
              text: "on",
            },
            {
              account: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
            },
            {
              origin_data: {
                name: "RaydiumClmmPoolSwap",
                activity_type: "defi_token_swap",
                program_id: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
                data: {
                  amm_id: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                  amm_authoriy: null,
                  account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  token_1: "So11111111111111111111111111111111111111112",
                  token_2: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                  amount_1: 53288112,
                  amount_1_str: "53288112",
                  amount_2: 8322695,
                  amount_2_str: "8322695",
                  token_decimal_1: 9,
                  token_decimal_2: 6,
                  token_account_1_1:
                    "6BLGkrUXNaGMJtnHYffc3EFF7bo5hpaKbSo58epKmfjH",
                  token_account_1_2:
                    "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
                  token_account_2_1:
                    "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
                  token_account_2_2:
                    "8j2v3YHb4Jo2MbS1sYRPNbRqAqZGzDMaaVDJ9C2G6xpx",
                  owner_1: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                  owner_2: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
                },
                ins_index: 24,
                outer_ins_index: 2,
                outer_program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                real_outer_ins_index: 2,
                real_outer_program_id:
                  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
                program_invoke_level: 2,
                inst_type: "swap",
              },
            },
            {
              index: {
                ins_index: 24,
                outer_ins_index: 2,
              },
            },
          ],
        ],
      },
      {
        title: [
          [
            {
              text: "Interact with instruction",
            },
            {
              instruction: "transfer",
            },
            {
              text: "on",
            },
            {
              account: "11111111111111111111111111111111",
            },
            {
              origin_data: {
                program_id: "11111111111111111111111111111111",
                parsed_type: "transfer",
                activity_type: "interaction",
              },
            },
            {
              index: {
                ins_index: 4,
                outer_ins_index: -1,
              },
            },
          ],
        ],
        body: [
          [
            {
              icon: "transfer",
            },
            {
              text: "Transfer from",
            },
            {
              account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            },
            {
              text: "to",
            },
            {
              account: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
            },
            {
              text: "for",
            },
            {
              token_amount: {
                number: 1004,
                decimals: 9,
                token_address: "So11111111111111111111111111111111111111111",
              },
            },
            {
              origin_data: {
                source_owner: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                source: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
                destination: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
                destination_owner:
                  "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
                transfer_type: "spl_transfer",
                token_address: "So11111111111111111111111111111111111111111",
                decimals: 9,
                amount_str: "1004",
                amount: 1004,
                program_id: "11111111111111111111111111111111",
                outer_program_id: null,
                ins_index: 4,
                outer_ins_index: -1,
                event: "",
                fee: {},
                activity_type: "transfer",
              },
            },
            {
              index: {
                ins_index: 4,
                outer_ins_index: -1,
              },
            },
          ],
        ],
      },
    ],
    render_one_line_action: [
      {
        icon: "swap",
      },
      {
        text: "Swap",
      },
      {
        token_amount: {
          number: "8321072",
          decimals: 6,
          token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        },
      },
      {
        text: "for",
      },
      {
        token_amount: {
          number: "8322695",
          decimals: 6,
          token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        },
      },
      {
        text: "on",
      },
      {
        account: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
      },
      {
        text: "(",
      },
      {
        "icon-tooltip": {
          icon: "slippage",
          tooltip: "Slippage Tolerance",
        },
      },
      {
        text: "0%",
      },
      {
        "icon-tooltip": {
          icon: "fee",
          tooltip: "Partner Referral Fee",
        },
      },
      {
        text: "0%",
      },
      {
        text: ")",
      },
      {
        origin_data: {
          name: "JupiterV6AggTokenSwap",
          activity_type: "defi_token_agg_swap",
          program_id: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
          data: {
            account: "6CHiqVEeuQRrrh5YnmXHfEEXQamsYYmeLS6RekRaBbC7",
            token_1: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            token_2: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            amount_1: "8321072",
            amount_1_str: "8321072",
            amount_2: "8322695",
            amount_2_str: "8322695",
            token_decimal_1: 6,
            token_decimal_2: 6,
            token_account_1_1: null,
            token_account_1_2: null,
            token_account_2_1: null,
            token_account_2_2: null,
            owner_1: null,
            owner_2: null,
            routers: [
              {
                amm_program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                token_1: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                token_decimal_1: 6,
                amount_1: "8321072",
                amount_1_str: "8321072",
                token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                token_decimal_2: 6,
                amount_2: "8320115",
                amount_2_str: "8320115",
              },
              {
                amm_program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                token_decimal_1: 6,
                amount_1: "8320115",
                amount_1_str: "8320115",
                token_2: "So11111111111111111111111111111111111111112",
                token_decimal_2: 9,
                amount_2: "53281247",
                amount_2_str: "53281247",
              },
              {
                amm_program_id: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
                token_1: "So11111111111111111111111111111111111111112",
                token_decimal_1: 9,
                amount_1: "53281247",
                amount_1_str: "53281247",
                token_2: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                token_decimal_2: 6,
                amount_2: "8327607",
                amount_2_str: "8327607",
              },
              {
                amm_program_id: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
                token_1: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
                token_decimal_1: 6,
                amount_1: "8327607",
                amount_1_str: "8327607",
                token_2: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                token_decimal_2: 6,
                amount_2: "8321187",
                amount_2_str: "8321187",
              },
              {
                amm_program_id: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
                token_1: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                token_decimal_1: 6,
                amount_1: "8321187",
                amount_1_str: "8321187",
                token_2: "So11111111111111111111111111111111111111112",
                token_decimal_2: 9,
                amount_2: "53288112",
                amount_2_str: "53288112",
              },
              {
                amm_program_id: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
                token_1: "So11111111111111111111111111111111111111112",
                token_decimal_1: 9,
                amount_1: "53288112",
                amount_1_str: "53288112",
                token_2: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                token_decimal_2: 6,
                amount_2: "8322695",
                amount_2_str: "8322695",
              },
            ],
            exact_amount_2: "8322392",
            exact_amount_2_str: "8322392",
            platform_fee: 0,
            slippage: 0,
          },
          ins_index: 2,
          outer_ins_index: -1,
          outer_program_id: null,
          real_outer_ins_index: -1,
          real_outer_program_id: null,
          program_invoke_level: 1,
          inst_type: "route",
        },
      },
      {
        index: {
          ins_index: 2,
          outer_ins_index: -1,
        },
      },
    ],
    txStatus: "finalized",
    confirmations: null,
    version: 0,
    addressTableLookups: [
      {
        accountKey: "DKsGVEP8v2AupT2DJq8vJ8EdQDZT3jK9xXhVuTFTcpWu",
        writableIndexes: [18, 130, 79, 17],
        readonlyIndexes: [15, 20],
      },
      {
        accountKey: "EAZGD8sgUf3Nmkpc7edc4JU5PC4cLqS5AKcW1zFJPypL",
        writableIndexes: [214, 207, 204, 210, 206],
        readonlyIndexes: [209, 129, 105, 205],
      },
      {
        accountKey: "72L2vpvB2EntpASsx4rG5UhrvC1k4eJX1amRPuVpNX53",
        writableIndexes: [161, 166, 78, 82],
        readonlyIndexes: [12, 17, 7, 13, 20],
      },
      {
        accountKey: "B6QgPTgp19wicoCN1VaHhnjCU98Zkg3r8ffEL6ta7gvi",
        writableIndexes: [136, 132, 138],
        readonlyIndexes: [134, 53, 137],
      },
      {
        accountKey: "BDqppwFYeMpUicN9xbfoM7FgRnHVW1uTUtrGA7uG2vQg",
        writableIndexes: [124, 118, 120, 121, 117],
        readonlyIndexes: [23],
      },
      {
        accountKey: "9nxKEJDAe1Nc6DeePf8jDx9nPMruYvJfn33Ltfii7X8D",
        writableIndexes: [118, 87],
        readonlyIndexes: [112, 111],
      },
    ],
    logMessage: [
      "Program ComputeBudget111111111111111111111111111111 invoke [1]",
      "Program ComputeBudget111111111111111111111111111111 success",
      "Program ComputeBudget111111111111111111111111111111 invoke [1]",
      "Program ComputeBudget111111111111111111111111111111 success",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 invoke [1]",
      "Program log: Instruction: Route",
      "Program swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ invoke [2]",
      "Program log: Instruction: Swap",
      "Program data: rFJyzxtn0wRAEjTbWK9B1MXNlCTejfrik20RZSodu9YpRmiOUpSgNwIAAAB47LvcK/0BACAg8TETVgEA",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4645 of 486428 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV invoke [3]",
      "Program log: Instruction: Withdraw",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [4]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4645 of 469948 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [4]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4690 of 463062 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV consumed 18459 of 476487 compute units",
      "Program vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV success",
      "Program swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ consumed 87965 of 543956 compute units",
      "Program swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ success",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 invoke [2]",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 consumed 199 of 454371 compute units",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 success",
      "Program goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j invoke [2]",
      "Program log: 1:60",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4737 of 443109 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4736 of 437185 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j consumed 19034 of 451454 compute units",
      "Program goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j success",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 invoke [2]",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 consumed 199 of 430801 compute units",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 success",
      "Program HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq invoke [2]",
      "Program log: Instruction: Swap",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4736 of 368524 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4645 of 361270 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program data: QMbN6CYIceJcXHVhtbvvlyrUW0Zt0jxhKzwo6FcfIiie2Lc2vBljTU0uuvn96RY3xFl1y3LuqYDsdmqKTteJC6XY4mqmcnQsTPAIg1hfoHy5hqx3TOhv2bTTZorxBId5zi7QgfhRdAx+nyqYRPRI3H+iEg2dCPvUQYVCFYHxGu7o/RRcHSl5St8BLQMAAAAAAAAAAAAAAAC3EX8AAAAAAAAAAAAAAAAAAXZ4c85R+DZlAAAAAAAAAABRJ4oCHwAAAAAAAAAAAAAAgLf//w==",
      "Program HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq consumed 74488 of 427014 compute units",
      "Program HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq success",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 invoke [2]",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 consumed 199 of 350906 compute units",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 success",
      "Program swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ invoke [2]",
      "Program log: Instruction: SwapV2",
      "Program data: rFJyzxtn0wSg9pP0A7VNB7EFxIM2ZdMtPUWsm7LbUTlWNlr20Zy3qQUAAADQD28N8QwAAIDjVXwAEAAAoNmitbRQAABYYjNczg8AAODM8lWZEQAA",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: TransferChecked",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 6200 of 256311 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV invoke [3]",
      "Program log: Instruction: WithdrawV2",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [4]",
      "Program log: Instruction: TransferChecked",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 6200 of 236539 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [4]",
      "Program log: Instruction: TransferChecked",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 6245 of 227779 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV consumed 22969 of 244118 compute units",
      "Program vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV success",
      "Program swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ consumed 129410 of 347683 compute units",
      "Program swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ success",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 invoke [2]",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 consumed 199 of 216653 compute units",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 success",
      "Program goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j invoke [2]",
      "Program log: 1:60",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4737 of 205313 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4736 of 199389 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j consumed 19049 of 213673 compute units",
      "Program goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j success",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 invoke [2]",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 consumed 199 of 193005 compute units",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 success",
      "Program CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK invoke [2]",
      "Program log: Instruction: Swap",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4736 of 130684 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4645 of 123288 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program data: QMbN6CYIceLPZqd3cc+gFFF/2cRVEgwL+6XlbKisjoCilx8qb/dSm00uuvn96RY3xFl1y3LuqYDsdmqKTteJC6XY4mqmcnQsTPAIg1hfoHy5hqx3TOhv2bTTZorxBId5zi7QgfhRdAxyxl4EONnvgS/SOrpMFanmBvEQYppa29yKIewce5qjsbAcLQMAAAAAAAAAAAAAAACH/n4AAAAAAAAAAAAAAAAAAaOGkTl18y1lAAAAAAAAAAB3HVPwiQAAAAAAAAAAAAAAebf//w==",
      "Program CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK consumed 75789 of 189210 compute units",
      "Program CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK success",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 invoke [2]",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 consumed 199 of 111801 compute units",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 success",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 consumed 441045 of 551360 compute units",
      "Program return: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 h/5+AAAAAAA=",
      "Program JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4 success",
      "Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr invoke [1]",
      'Program log: Memo (len 20): "AJ1|27|2521|am|fr|ny"',
      "Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr consumed 8653 of 110315 compute units",
      "Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr success",
      "Program 11111111111111111111111111111111 invoke [1]",
      "Program 11111111111111111111111111111111 success",
    ],
    recentBlockhash: "2eMHz1GJFGkyD4mVtfgKgw9PLYJePSj4ehk8xVsbBgNc",
    priority_fee: 0,
  },
  metadata: {
    tokens: {
      So11111111111111111111111111111111111111112: {
        token_address: "So11111111111111111111111111111111111111112",
        token_name: "Wrapped SOL",
        token_symbol: "WSOL",
        token_icon:
          "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
        token_decimals: 9,
        token_type: "token",
        price_usdt: 156.13476223766207,
        reputation: "ok",
        is_show_value: true,
        is_calculate_on_portfolio: true,
        is_show_icon: true,
        d_source: "r",
        token_icon_alternative: null,
      },
      Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
        token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        token_name: "USDT",
        token_symbol: "USDT",
        token_icon:
          "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg",
        token_decimals: 6,
        token_type: "token",
        price_usdt: 0.9998429920213276,
        reputation: "ok",
        is_show_value: true,
        is_calculate_on_portfolio: true,
        is_show_icon: true,
        d_source: "r",
        token_icon_alternative: null,
        token_label: {
          token_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          token_name: "USDT",
          token_symbol: "USDT",
          token_icon: "",
        },
      },
      USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB: {
        token_address: "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB",
        token_name: "World Liberty Financial USD",
        token_symbol: "USD1",
        token_icon:
          "https://raw.githubusercontent.com/worldliberty/usd1-metadata/refs/heads/main/logo.png",
        token_decimals: 6,
        token_type: "token",
        price_usdt: 0.9991615161625812,
        reputation: "neutral",
        is_show_value: true,
        is_calculate_on_portfolio: true,
        is_show_icon: true,
        d_source: "r",
        token_icon_alternative: null,
      },
      EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: {
        token_address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        token_name: "USDC",
        token_symbol: "USDC",
        token_icon:
          "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
        token_decimals: 6,
        token_type: "token",
        price_usdt: 1,
        reputation: "ok",
        is_show_value: true,
        is_calculate_on_portfolio: true,
        is_show_icon: true,
        d_source: "r",
        token_icon_alternative: null,
      },
      So11111111111111111111111111111111111111111: {
        token_address: "So11111111111111111111111111111111111111111",
        token_decimals: 9,
        token_name: "SOL",
        token_symbol: "SOL",
        token_type: "token",
        token_icon: "https://statics.solscan.io/solscan-img/solana_icon.svg",
        price_usdt: 156.13476223766207,
        reputation: "ok",
        is_show_value: true,
        is_calculate_on_portfolio: true,
        is_show_icon: true,
      },
    },
    accounts: {
      B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ: {
        account_address: "B2mEmSEvEJUjpmFJXmAw1zmT7iVgqUWoUDRUbKTHskiQ",
        account_label: "PancakeSwap (WSOL-USD1) Pool 1",
        account_tags: ["pancakeswap", "pool"],
        account_type: "address",
      },
      BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ: {
        account_address: "BSTgtrJ7feyTpvwZVk9hbzrvxw77eUq7SkRCaCEvPfdZ",
        account_label: "PancakeSwap (WSOL-USD1) Pool 2",
        account_tags: ["pancakeswap", "pool"],
        account_type: "address",
      },
      "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7": {
        account_address: "95QUtvDkuoDZrNJiuh9MdahkpRNtSVhZRe83oepd8AM7",
        account_label: "Stabble (USDT) Vault",
        account_tags: ["stabble", "vault"],
        account_type: "address",
      },
      AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA: {
        account_address: "AioJRQXvcDLRhHMd6DAkTbbMpgVx63qSGQYmRBS2vHYA",
        account_label: "Stabble (USDC) Vault",
        account_tags: ["stabble", "vault"],
        account_type: "address",
      },
      ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa: {
        account_address: "ArLSJrSstZ3kjeZDyMAgjfjad1qdRZHHYaCQTQeAcTpa",
        account_label: "Stabble (USDC) Fee Account",
        account_tags: ["stabble", "fee_vault"],
        account_type: "address",
      },
      AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U: {
        account_address: "AABxS823DPBxDkxEcdFSduUH1p3XmKjL5AuVgbH5qB3U",
        account_label: "GoonFi (WSOL-USDC) Pool 1",
        account_tags: ["goon_fi", "pool"],
        account_type: "address",
      },
      CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ: {
        account_address: "CyCg79QpzH8MbnPDMEJEvbw3ugJXWisWYPHEE363eUuJ",
        account_label: "GoonFi (WSOL-USDC) Pool 2",
        account_tags: ["goon_fi", "pool"],
        account_type: "address",
      },
      "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K": {
        account_address: "2w6WUGXVeUPeGpJTUSNu4btbpMkFtmjrQgpKi149it7K",
        account_label: "Raydium (WSOL-USDT) Pool 2",
        account_tags: ["raydium", "pool"],
        account_type: "address",
      },
      "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7": {
        account_address: "7CoLodcm9h4EAFKpcPbT34yk3MkpeWjsBqXVidfbrfQ7",
        account_label: "Raydium (WSOL-USDT) Pool 1",
        account_tags: ["raydium", "pool"],
        account_type: "address",
      },
      "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY": {
        account_address: "4MAgGtM9WZWWC3qcp52MYT9De6RQN3QFZzEC9gRev7GY",
        account_label: "Stabble (USD1) Vault",
        account_tags: ["stabble", "vault"],
        account_type: "address",
      },
      DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh: {
        account_address: "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
        account_label: "Jitotip 5",
        account_tags: [],
        account_type: "address",
      },
      "11111111111111111111111111111111": {
        account_address: "11111111111111111111111111111111",
        account_label: "System Program",
        account_icon: "https://statics.solscan.io/solscan-img/solana_icon.svg",
        account_tags: [],
        account_type: "program",
      },
      ComputeBudget111111111111111111111111111111: {
        account_address: "ComputeBudget111111111111111111111111111111",
        account_label: "Compute Budget",
        account_icon: "https://statics.solscan.io/solscan-img/solana_icon.svg",
        account_tags: [],
        account_type: "program",
      },
      JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4: {
        account_address: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
        account_label: "Jupiter Aggregator v6",
        account_icon:
          "https://statics.solscan.io/ex-img/JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4.svg",
        account_tags: [],
        account_type: "program",
      },
      MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr: {
        account_address: "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
        account_label: "Memo Program v2",
        account_icon: "https://statics.solscan.io/solscan-img/solana_icon.svg",
        account_tags: [],
        account_type: "program",
      },
      "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q": {
        account_address: "7DYHBVJNBSu3pZZkSt6Sdq3rbGuCQH2MJAuHqVY6oG2Q",
        account_label: "PancakeSwap (WSOL-USD1) Market",
        account_tags: ["pancakeswap", "market"],
        account_type: "address",
      },
      "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer": {
        account_address: "5K7CHUbBYAh6wrantyJvDDqwT4VoKuZTi73CN1DTUUer",
        account_label: "Stabble (USDT-USDC) Market",
        account_tags: ["stabble", "market"],
        account_type: "address",
      },
      "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46": {
        account_address: "4ynTYgJK5ruYx3AZMRjCHrJk1qkm61fePF7dkbvRQD46",
        account_label: "GoonFi (WSOL-USDC) Market",
        account_tags: ["goon_fi", "market"],
        account_type: "address",
      },
      ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6: {
        account_address: "ExcBWu8fGPdJiaF1b1z3iEef38sjQJks8xvj6M85pPY6",
        account_label: "Raydium (WSOL-USDT) Market",
        account_tags: ["raydium", "market"],
        account_type: "address",
      },
      BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC: {
        account_address: "BqLJmoxkcetgwwybit9XksNTuPzeh7SpxkYExbZKmLEC",
        account_label: "Stabble (USDG-PYUSD-USD1-USDC) Market",
        account_tags: ["stabble", "market"],
        account_type: "address",
      },
      TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: {
        account_address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        account_label: "Token Program",
        account_icon: "https://statics.solscan.io/solscan-img/solana_icon.svg",
        account_tags: [],
        account_type: "program",
      },
      D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf: {
        account_address: "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
        account_label: "Jupiter Aggregator Event Authority",
        account_tags: ["jupiter"],
        account_type: "address",
      },
      CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK: {
        account_address: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
        account_label: "Raydium Concentrated Liquidity",
        account_icon:
          "https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png",
        account_tags: [],
        account_type: "program",
      },
      HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq: {
        account_address: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
        account_label: "PancakeSwap",
        account_icon:
          "https://statics.solscan.io/solscan-img/pancakeswap_icon.png",
        account_tags: [],
        account_type: "program",
      },
      stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC: {
        account_address: "stab1io8dHvK26KoHmTwwHyYmHRbUWbyEJx6CdrGabC",
        account_label: "Stabble Vault State Account",
        account_tags: ["stabble", "state_account"],
        account_type: "address",
      },
      swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ: {
        account_address: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
        account_label: "stabble Stable Swap",
        account_icon: "https://statics.solscan.io/solscan-img/stabble_icon.png",
        account_tags: [],
        account_type: "program",
      },
      vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV: {
        account_address: "vo1tWgqZMjG61Z2T9qUaMYKqZ75CYzMuaZ2LZP1n7HV",
        account_label: "stabble Vault Program",
        account_icon: "https://statics.solscan.io/solscan-img/stabble_icon.png",
        account_tags: [],
        account_type: "program",
      },
      "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME": {
        account_address: "7imnGYfCovXjMWKdbQvETFVMe72MQDX4S5zW4GFxMJME",
        account_label: "stabble Vault Authority 1",
        account_tags: ["stabble", "vault_owner"],
        account_type: "address",
      },
      "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm": {
        account_address: "8BSWYgAczR36C7ukr32v7uTepoRhYJYxAVnpBtYniZTm",
        account_label: "Stabble Vault Withdraw Authority 1",
        account_tags: ["stabble", "vault_owner"],
        account_type: "address",
      },
      Sysvar1nstructions1111111111111111111111111: {
        account_address: "Sysvar1nstructions1111111111111111111111111",
        account_label: "Sysvar: Instructions",
        account_icon: "https://statics.solscan.io/solscan-img/solana_icon.svg",
        account_tags: [],
        account_type: "program",
      },
      TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb: {
        account_address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
        account_label: "Token 2022 Program",
        account_icon: "https://statics.solscan.io/solscan-img/solana_icon.svg",
        account_tags: [],
        account_type: "program",
      },
      goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j: {
        account_address: "goonERTdGsjnkZqWuVjs73BZ3Pb9qoCUdBUL17BnS5j",
        account_label: "GoonFi",
        account_tags: [],
        account_type: "program",
      },
      Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
        account_address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        account_label: "USDT",
        account_type: "token",
      },
      "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y": {
        account_address: "8UgoPZAR8ZLoEmV6pJ8SZ6JKESP2X8nbnrZSdSgNtg1y",
        account_label: "Stabble Fee Vault",
        account_tags: ["stabble", "fee_vault"],
        account_type: "address",
      },
    },
    tags: {
      pancakeswap: {
        tag_id: "pancakeswap",
        tag_name: "PancakeSwap",
        tag_type: 1,
        tag_metadata: {
          icon: "https://statics.solscan.io/solscan-img/pancakeswap_icon.png",
          website: "https://solana.pancakeswap.finance/",
        },
      },
      pool: {
        tag_id: "pool",
        tag_name: "Pool",
        tag_type: 1,
      },
      stabble: {
        tag_id: "stabble",
        tag_name: "Stabble.org",
        tag_type: 1,
        tag_metadata: {
          icon: "https://statics.solscan.io/solscan-img/stabble_icon.png",
          website: "https://stabble.org/",
        },
      },
      vault: {
        tag_id: "vault",
        tag_name: "Vault",
        tag_type: 1,
      },
      fee_vault: {
        tag_id: "fee_vault",
        tag_name: "Fee Vault",
        tag_type: 1,
      },
      goon_fi: {
        tag_id: "goon_fi",
        tag_name: "GoonFi",
        tag_type: 1,
        tag_metadata: "",
      },
      raydium: {
        tag_id: "raydium",
        tag_name: "Raydium",
        tag_type: 1,
        tag_metadata: {
          icon: "https://statics.solscan.io/ex-img/5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h.png",
          website: "https://raydium.io/",
        },
      },
      market: {
        tag_id: "market",
        tag_name: "Market",
        tag_type: 1,
        tag_metadata: "",
      },
      jupiter: {
        tag_id: "jupiter",
        tag_name: "Jupiter",
        tag_type: 1,
        tag_metadata: {
          icon: "https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg",
          website:
            "https://jup.ag/?referrer=AiKjS6nVh8VTVUknJmT3DcFXpqoCfLv2cu4sAEWeVUGj&feeBps=50",
        },
      },
      state_account: {
        tag_id: "state_account",
        tag_name: "State Account",
        tag_type: 1,
      },
      vault_owner: {
        tag_id: "vault_owner",
        tag_name: "Vault Owner",
        tag_type: 1,
      },
      jupiter_swap: {
        tag_id: "jupiter_swap",
        tag_name: "Jupiter: Swap",
        tag_type: 3,
        tag_metadata: {
          icon: "https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg",
          website:
            "https://jup.ag/?referrer=AiKjS6nVh8VTVUknJmT3DcFXpqoCfLv2cu4sAEWeVUGj&feeBps=50",
        },
      },
      mev_tip: {
        tag_id: "mev_tip",
        tag_name: "MEV: Tip",
        tag_type: 3,
        tag_metadata: "",
      },
    },
    programs: {},
    nftCollections: {},
    nftMarketplaces: {},
  },
};

const NODE_TYPES = {
  ICON: "icon",
  ACCOUNT: "account",
  TOKEN_ACCOUNT: "token_account",
  TEXT: "text",
  TOKEN_AMOUNT: "token_amount",
  NFT_AMOUNT: "nft_amount",
  MARKETPLACE: "marketplace",
  INDEX: "index",
  NUMBER: "number",
  NUMBER_FORMAT: "number-format",
  ICON_TOOLTIP: "icon-tooltip",
  INSTRUCTION: "instruction",
  TOKEN: "token",
  LINK: "link",
};

const getActionKey = (actionNode) => {
  if (typeof actionNode === "object" && Object.keys(actionNode).length !== 0) {
    return Object.keys(actionNode)[0];
  }
  return "";
};

const genAccountNode = (account, metadata) => {
  const accountMetadata = metadata?.accounts?.[account];
  return accountMetadata?.account_label || account;
};

const genTokenAmount = (tokenDetail, metadata) => {
  const decimals = tokenDetail?.decimals || 0;
  const number = tokenDetail?.number || 0;
  const amount_multiplier = tokenDetail?.amount_multiplier || undefined;
  const token_address = tokenDetail?.token_address || "";

  const tokenMetadata = metadata?.tokens?.[token_address];

  return `${toTokenUnits(amount_multiplier || number, decimals).toString()} ${
    tokenMetadata?.token_symbol || "SPL Token"
  }`;
};

const genNFTAmount = (nftDetail, metadata) => {
  const amount = nftDetail?.amount || 0;
  const token_address = nftDetail?.token_address || "";
  const tokenMetadata = metadata?.tokens?.[token_address];

  if (amount >= 0) {
    return `${amount} ${tokenMetadata?.token_symbol || "SPL Token"}`;
  }

  return "";
};

const genMarketplace = (marketplaceDetail) => {
  const name = marketplaceDetail?.name;
  return name || "--";
};

const genTokenAccountNode = (tokenAccountDetail, metadata) => {
  const owner = tokenAccountDetail?.owner;

  const accountMetadata = metadata?.accounts?.[owner];
  return accountMetadata?.account_label || owner;
};

const getTokenNode = (token, metadata) => {
  const token_address = token?.token_address || "";
  const tokenMetadata = metadata?.tokens?.[token_address];

  return tokenMetadata?.token_symbol || "SPL Token";
};

const genNumberNode = (number) => {
  return Number(number);
};

const genNumberFormatNode = (numberFormat) => {
  return intlNumberFormat({
    number: Number(numberFormat.value) || 0,
    notation: numberFormat.notation,
    maximumFractionDigits:
      numberFormat.maximumFractionDigits ||
      numberFormat.value.toString().split(".")[1]?.length ||
      2,
    style: numberFormat.style,
    currency: numberFormat.currency,
  });
};

const genIconTooltip = (iconTooltip) => {
  return iconTooltip?.tooltip || "";
};

const genInstruction = (content) => {
  return content;
};

const genLinkNode = (data) => {
  return data?.label || "";
};

const trimDataText = (text) => {
  if (text.trim()) {
    return ` ${text.trim()}`;
  }

  return "";
};

const renderOneLineAction = (action = [], metadata = {}) => {
  let result = "";
  action.forEach((node) => {
    const actionKey = getActionKey(node);
    const actionData = node?.[actionKey] || null;

    if (actionData === null) {
      result += "";
    }

    if (actionKey === NODE_TYPES.ICON) {
      result += "";
    }

    if (actionKey === NODE_TYPES.ACCOUNT) {
      result += trimDataText(genAccountNode(actionData, metadata));
    }

    if (actionKey === NODE_TYPES.TEXT) {
      result += trimDataText(actionData);
    }

    if (actionKey === NODE_TYPES.TOKEN_AMOUNT) {
      result += trimDataText(genTokenAmount(actionData, metadata));
    }

    if (actionKey === NODE_TYPES.NFT_AMOUNT) {
      result += trimDataText(genNFTAmount(actionData, metadata));
    }

    if (actionKey === NODE_TYPES.MARKETPLACE) {
      result += trimDataText(genMarketplace(actionData));
    }

    if (actionKey === NODE_TYPES.TOKEN_ACCOUNT) {
      result += trimDataText(genTokenAccountNode(actionData, metadata));
    }

    if (actionKey === NODE_TYPES.TOKEN) {
      result += trimDataText(getTokenNode(actionData, metadata));
    }

    if (actionKey === NODE_TYPES.NUMBER) {
      result += trimDataText(genNumberNode(actionData));
    }

    if (actionKey === NODE_TYPES.NUMBER_FORMAT) {
      result += trimDataText(genNumberFormatNode(actionData));
    }

    if (actionKey === NODE_TYPES.ICON_TOOLTIP) {
      result += trimDataText(genIconTooltip(actionData));
    }

    if (actionKey === NODE_TYPES.INSTRUCTION) {
      result += trimDataText(genInstruction(actionData));
    }

    if (actionKey === NODE_TYPES.LINK) {
      result += trimDataText(genLinkNode(actionData));
    }
  });

  return result.trim();
};

const renderStringMainActions = (response) => {
  const actions = response?.data?.render_summary_main_actions || [];
  const metadata = response?.metadata;

  return actions.map((action) => {
    const actionTitle = action?.title?.[0] || [];
    const actionBody = action?.body || [];

    return {
      title: renderOneLineAction(actionTitle, metadata),
      body: actionBody.map((body) => renderOneLineAction(body, metadata)),
    };
  });
};

console.log(renderStringMainActions(responseTxDetail));
