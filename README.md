# Corni Cross

**Corni Cross: The Great Rainbow Invasion** is a single-file desktop arcade-strategy game for js13kGames 2026, built around the theme **Unicorns and Rainbows**.

Six magical unicorns escape into a quaint town. Your job is not to micromanage all six. You make short, high-value interventions while the herd continues acting on its own: route the left captain with WASD, hunt the glowing right captain with the mouse, build Prism Chase chains, keep the town from cleaning up your rainbow trail, and destroy four major landmarks to drop the shield around Town Hall.

The town itself is the scoreboard. Every unique patch of rainbow paint, damaged structure, landmark and remaining second contributes to the run.

## Current v0.11 game loop

### Left hand: route planning

- Hold `WASD` to steer the current left-side captain.
- Release the final movement key while moving to commit a four-second **run order**.
- The Smart Attention Director automatically selects the next left-side unicorn that most needs intervention.

### Mouse: Prism Chase

The mouse is a moving-target arcade mechanic rather than a drag controller.

- Click the highlighted right-side unicorn.
- A successful hit immediately splashes paint and dashes that unicorn along a productive AI route.
- Reacquire the moving target within roughly 0.6 seconds for hit two.
- Reacquire again for hit three.

Chain rewards:

- Hit 1: paint burst + dash
- Hit 2: **2X PRISM**, score bonus and stronger temporary boost
- Hit 3: **3X PRISM**, large paint/structure burst and automatic reassignment

A partial chain that times out automatically hands attention to another useful problem rather than stalling the game.

### Shared controls

- `Space`: dual dash both captains in their current directions
- `P` / `Esc`: pause
- `M`: mute
- `T` from title: replay Little Cross tutorial

Modifier keys are not part of play. During active play Ctrl/Meta/Alt combinations are excluded from game input, focus loss clears held state, accidental close/reload is guarded where the browser permits it, and uncaught runtime errors recover to title.

## Campaign: learn two, command four, master six

### Little Cross

The compact tutorial uses only two unicorns and is objective-gated. It teaches:

1. WASD steering
2. clicking the glowing mouse captain
3. reacquiring the moving target for a Prism chain
4. powerups
5. environmental distractions
6. taking direct control to rescue a distracted unicorn
7. destroying the tutorial Bakery

You cannot graduate merely by waiting or accidentally painting enough ground.

### Act I — The Escape

The main town opens with Bolt and Mallow. The player learns the geography, route orders, Prism Chase and the first landmark objectives without a six-animal information avalanche.

### Act II — The Town Fights Back

Daisy and Comet join. Cleanup vans enter the roads and physically erase rainbow-painted raster cells. Dashing, boosted or frenzied unicorns can stun them. The player now has to maintain useful chaos, not merely create it once.

### Act III — Full Unicorn Emergency

Bumper and Pickles are released. Four cleanup vans can be active, the procedural soundtrack becomes denser as more unicorns stay productive, and the remaining landmarks become a full-map attention-management problem.

## Landmark campaign

The primary victory condition is deliberately concrete rather than an abstract percentage threshold.

Destroy:

1. **Bakery**
2. **Market**
3. **Greenhouse**
4. **Clock Tower**

Completing those four objectives drops the magical shield around **Town Hall**. Destroy Town Hall to win.

Each landmark has its own aftermath:

- Bakery creates a large rainbow burst and croissant-related civilian panic.
- Market drops useful rampage powerups.
- Greenhouse releases a cloud of distracting butterflies.
- Clock Tower raises herd anger across town.
- Town Hall triggers the final full-herd Prism frenzy and victory sequence.

Landmarks have screen-space beacons, objective health bars and distinct silhouettes so the player can read the campaign directly from the town.

Paint coverage no longer decides whether the run counts as a victory. Instead it determines how impressive the victory is. High coverage, efficient landmark destruction, Prism chains, structure damage and remaining time drive score/rank.

## Smart Attention Director

The director removes character-selection bookkeeping while leaving route choice and tactics to the player. Within each side of the herd it favors unicorns that are:

- distracted by fountains, flowers, ponds or butterflies
- stalled or moving slowly
- standing in weakly painted territory
- near immediately useful powerups

It deprioritizes unicorns that already have a useful run order or are productively rampaging.

New captain selection is explainable on-screen. The pulsing selection ring identifies reasons such as **DISTRACTED**, **WEAK AREA**, **POWERUP** or **STALLED** rather than making an unexplained camera/character jump.

## Town simulation

The town includes distinct shop/building grammars, Clock Tower, market stalls, Town Hall, fountains, duck pond, flower gardens, butterflies, hedges, traffic, crosswalks, powerups, cleanup crews and dozens of reactive townspeople.

Unique paint coverage uses a persistent **4px world-space raster mask**. Painting an existing cell does not count twice. Cleanup vehicles erase those same raster cells and the corresponding pixels from the offscreen paint canvas, so visible rainbow loss and score-space loss stay synchronized.

## Audio

Audio is procedural WebAudio rather than asset-based. The soundtrack layers according to the number of productive unicorns:

- basic pulse when the invasion is quiet
- added bass/percussion as multiple unicorns receive useful orders or boosts
- arpeggio layers as the herd becomes productive
- extra harmony when all six are contributing
- faster pulse near the end of the run

Landmarks add their own compact stingers and the Clock Tower/rampage events interact with the soundscape.

## Compression laboratory

Readable source is not manually golfed into production code. The build runs a measured tournament and chooses the smallest final competition ZIP from:

1. readable/raw source
2. Terser with top-level mangling and multiple compression passes
3. Terser → Roadroller

All candidates use the same HTML/CSS shell and deterministic single-entry ZIP writer. `dist/compression.json` records every candidate's HTML and ZIP sizes.

The current Roadroller pipeline reduced the expanded game dramatically versus raw DEFLATE while allowing significantly more gameplay and presentation to fit inside the limit.

See `docs/COMPRESSION.md`, `docs/PRISM_CHASE.md`, `docs/SMART_DIRECTOR.md`, and `docs/TOP10_CAMPAIGN.md` for the design contracts.

## Build and qualification

```bash
npm install
npm test
```

`npm test` performs source syntax checks, headless gameplay regressions, the compression tournament, the hard **13,312-byte** size gate and competition artifact generation.

GitHub Actions additionally verifies ZIP integrity, confirms that the competition archive contains exactly one root `index.html`, stores the compression report, and publishes the exact qualified artifact.
