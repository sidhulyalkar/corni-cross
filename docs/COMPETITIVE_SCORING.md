# Competitive scoring

Unicorn Stampede v0.22 separates **conquest** from **excellence**.

A conquest proves that the player completed the town. A leaderboard score measures how well they orchestrated the stampede while doing it, then rewards carrying those same skills into harder worlds.

## Conquest gate

Town Hall is not unlocked by landmark sniping alone.

To attack Town Hall, a run must satisfy both conditions:

1. destroy Bakery, Market, Greenhouse, and Clock Tower;
2. build at least **28% combined town chaos**.

`chaos = 0.76 × paint coverage + 0.24 × structural destruction`

This keeps the objective legible while ensuring the player actually interacts with the town before ending the run.

## Score model

The final competitive score is deterministic from observable run metrics. No random bonus is added at the results screen.

Base components:

| Component | Maximum / rule | Why it exists |
| --- | ---: | --- |
| Conquest | 20,000 | Finishing matters, but cannot dominate the score |
| Time remaining | `600 × seconds` | Rewards decisive routing and fast landmark execution |
| Paint coverage | up to 90,000 | Rewards broad spatial control instead of building sniping |
| Structural destruction | up to 70,000 | Rewards actually wrecking the town |
| 3X Prism chains | 6,000 each, first 6 credits | Rewards accurate mouse execution without infinite farming |
| Average ACTIVE herd | up to 45,000 | Rewards orchestrating several unicorns rather than babysitting one |
| Cleanup stuns | 1,800 each, first 10 | Rewards counterplay against the town response |
| Prism Gates | 3,000 each | Rewards optional route optimization from World 4 onward |

After the base score, world difficulty applies one multiplier:

| World | Multiplier |
| --- | ---: |
| Prismborough | ×1.00 |
| Washwater Bay | ×1.12 |
| Cloudtop Heights | ×1.25 |
| Stampede+ Circuit | ×1.32 |
| Neon Junction | ×1.38 |
| Frostfall Village | ×1.44 |
| Gearworks Quarter | ×1.50 |
| Mirage Mesa | ×1.56 |
| Moonfair Metro | ×1.64 |
| Royal Rainbow Citadel | ×1.75 |

The same base skill is therefore worth more when performed under harder environmental pressure. There is no hidden second Stampede+ multiplier in v0.22; the ten world multipliers are the complete difficulty adjustment.

Moonfair changes the *rate* at which a successful 3X contributes Prism-chain credit. The global six-credit cap still applies, so it rewards executing the world-specific mechanic without creating an unbounded farm.

## Score classes

These bands are intentionally broad. They give new players readable goals while the top-50 leaderboard remains continuous.

| Tier | Score | Interpretation |
| --- | ---: | --- |
| **LOW** | under 120,000 | Conquest or partial competence; likely low town impact / weak orchestration |
| **MEDIUM** | 120,000–189,999 | Solid clear with some speed, territory, or combo quality |
| **HIGH** | 190,000–259,999 | Strong multi-system run |
| **HIGHER** | 260,000–339,999 | Expert routing and sustained herd productivity |
| **HIGHEST** | 340,000+ | Record-hunting territory, increasingly favored by later-world mastery |

These are design bands, not promises about population percentiles. Once enough real runs exist, they should be calibrated against the empirical score distribution while preserving monotonicity and the score formula.

## Why a landmark speedrun cannot dominate

Speed is valuable but capped by the town timer. A fast run that barely crosses the 28% chaos floor gives up most of the 90k paint, 70k destruction, 45k ACTIVE, Prism, Gate, and cleanup-stun pools.

Conversely, maximizing destruction while moving slowly sacrifices the time component and gives cleanup more opportunity to erase territory.

The intended frontier is a **Pareto problem**: go fast without abandoning damage, paint, chains, orchestration, and world-specific opportunities.

## World difficulty is not just faster numbers

The multiplier should correspond to a meaningful decision burden:

- Washwater attacks successful territory.
- Cloudtop makes trajectory prediction harder.
- Stampede+ adds immediate pressure and optional Gate routing.
- Neon creates temporary windows where cleanup is disabled.
- Frostfall amplifies momentum, making commitment costly.
- Gearworks alters trajectories by map band.
- Mirage introduces continuous vertical drift.
- Moonfair makes Prism execution more strategically valuable.
- Citadel combines multiple previously learned disturbances.

The goal is to reward **transfer of mastery**, not merely survival under inflated HP or arbitrary movement speed.

## Leaderboard contract

The hosted game submits these run metrics:

- player name
- final score
- world index / Stampede+ state
- time remaining
- paint coverage
- structural destruction
- Prism-chain credits
- average ACTIVE fraction
- cleanup stuns
- Prism Gates
- run duration
- game version

The server must treat submitted `score` as advisory only. A global leaderboard implementation should validate metric bounds and recompute the score server-side using the formula for the submitted game version before accepting a run.

The browser keeps a local top 50 as an offline fallback. The UI must label it **LOCAL TOP 50** unless the shared service actually responds; it must never present per-browser storage as a global leaderboard.

## Anti-cheat direction

Perfect client-side cheat prevention is impossible because the entire game runs in the browser. The objective is to make casual fabrication meaningfully harder and obvious abuse removable:

1. server-side score recomputation;
2. strict metric bounds by world and version;
3. plausible runtime / timer relationships;
4. rate limiting;
5. per-version score formulas;
6. retain complete metric tuples for anomaly review;
7. optionally require a short signed run nonce from the hosting layer later.

The leaderboard should optimize for trustworthy friendly competition, not pretend a 13 KB browser game can provide esports-grade attestation.
