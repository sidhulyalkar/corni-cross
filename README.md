# Corni Cross

**Corni Cross: The Great Rainbow Invasion** is a single-file desktop arcade-strategy game for js13kGames 2026, built around the theme **Unicorns and Rainbows**.

Six magical unicorns escape into increasingly hostile towns. The player does not micromanage all six. Instead, Corni Cross is about making short high-value interventions: route one captain with WASD, crack a delayed Rainbow Whip beside another with the mouse, trust the Smart Attention Director to surface the next problem, destroy landmark setpieces and keep the town from washing away too much of the rainbow invasion.

The campaign is designed around one principle: **each world changes what a good decision means without changing the basic controls.**

## Current v0.13 controls

### Left hand: route planning

- Hold `WASD` to steer the current left-side captain.
- Release the final movement key while moving to commit a short run order.
- The Smart Attention Director automatically selects the next left-side unicorn that most needs intervention.

### Mouse: Rainbow Whip / Prism Chase

The mouse is a predictive arcade skill rather than a drag controller.

- Aim slightly **beside** the highlighted right-side captain, inside the visible whip orbit.
- Click to materialize a three-stripe rainbow lash.
- The whip takes a brief moment to curl through the air and snap toward the unicorn, so moving targets must be led.
- A successful crack splashes paint and launches the unicorn away from the whip origin.
- Reacquire and crack again before the chain expires.

Chain rewards:

- Hit 1: paint burst + launch
- Hit 2: **2X PRISM**, score bonus and stronger temporary boost
- Hit 3: **3X PRISM**, large paint/structure burst and Smart Director reassignment

A miss visibly whiffs. A partial chain that expires automatically hands attention to another useful problem instead of trapping the player in a failed sequence.

### Shared controls

- `Space`: dual dash both captains in their current directions
- `P` / `Esc`: pause
- `M`: mute
- `T` from title: replay Little Cross tutorial

Modifier keys are not part of play. During active play Ctrl/Meta/Alt combinations are excluded from game input, focus loss clears held state, accidental close/reload is guarded where the browser permits it, and uncaught runtime errors recover to title.

## Campaign mastery ladder

### Little Cross — Learn the permanent verbs

The objective-gated tutorial uses two unicorns and teaches WASD steering, Rainbow Whip timing, Prism chaining, powerups, distractions, rescue and landmark destruction. The player cannot graduate by simply waiting.

### World 1: Prismborough — Learn orchestration

The baseline large town. Six unicorns arrive through the existing 2 → 4 → 6 act structure while cleanup vans enter later in the run.

The player learns to:

- keep useful route orders alive;
- understand Smart Director selection reasons;
- choose landmark order;
- build reliable Prism chains;
- balance direct objectives against persistent paint coverage.

Time budget: **100 seconds**.

### World 2: Washwater Bay — Learn to defend success

Territory becomes aggressively reversible.

In addition to the normal cleanup response:

- one cleanup van starts immediately;
- three ordinary civilians become roaming **powerwashers**;
- powerwashers drift toward the player's strongest-painted quadrant and erase paint around themselves;
- a patrol **helicopter** periodically identifies the strongest-painted quadrant and performs a large water drop there.

The town therefore attacks the place where the player is succeeding most. Strong play requires rotating attention instead of endlessly farming one district.

Time budget: **94 seconds**.

### World 3: Cloudtop Heights — Learn prediction

Periodic crosswinds reverse direction and push every live unicorn sideways. The Rainbow Whip launches targets farther while its effective follow-up window becomes tighter.

The same mouse mechanic is therefore transformed from simple reacquisition into target leading and traversal planning.

Time budget: **90 seconds**.

## Replay variety without strategy amnesia

Every main-world run perturbs the deterministic town seed. Generic buildings, civilians and micro-layout therefore change between attempts, while major roads, landmark roles and strategic relationships remain recognizable.

The intended result is **stable strategy with local novelty**: players get better at understanding systems rather than memorizing one exact coordinate route.

## Three-crown mastery

Every world awards up to three crowns:

1. **Conquer** — destroy the four outer landmarks and shatter Town Hall.
2. **Territory** — finish above that world's paint-coverage mastery threshold.
3. **Prism mastery** — complete enough 3X Rainbow Whip chains.

Current thresholds:

| World | Paint crown | 3X chains crown |
| --- | ---: | ---: |
| Prismborough | 60% | 2 |
| Washwater Bay | 48% | 2 |
| Cloudtop Heights | 54% | 3 |

A one-crown victory advances the campaign. A three-crown clear demonstrates mastery. Crown progress persists between sessions.

## Landmark campaign

Each large world contains five campaign objectives:

1. **Bakery**
2. **Market**
3. **Greenhouse**
4. **Clock Tower**
5. **Town Hall**

The first four can be attacked in whatever order the current run suggests. Completing them drops the shield around Town Hall. Destroying Town Hall is the concrete victory condition.

Each landmark is also a setpiece:

- Bakery creates a large rainbow burst and croissant-related civilian panic.
- Market drops useful rampage powerups.
- Greenhouse releases a cloud of distracting butterflies.
- Clock Tower raises herd anger across town.
- Town Hall triggers the final full-herd Prism frenzy and victory sequence.

Paint coverage determines the quality of a victory rather than whether the rules consider it a win.

## Smart Attention Director

The director removes roster bookkeeping while preserving decision-making. It favors unicorns that are distracted, stalled, standing in weak territory or near an immediate powerup opportunity, while deprioritizing animals already following useful orders or rampaging productively.

Selection is explainable in the world through cues such as **DISTRACTED**, **WEAK AREA**, **POWERUP**, **STALLED** and **NEXT**.

## Difficulty philosophy

Corni Cross should not become harder by making direct controls less responsive.

The intended skill ladder is:

1. execute a movement or whip correctly;
2. identify which unicorn deserves attention;
3. leave useful autonomous orders behind;
4. maintain territory against active cleanup;
5. predict moving targets and environmental forces;
6. orchestrate all six while completing landmarks efficiently.

A strong player's run should look more deliberate and less random than a beginner's run.

## Town simulation

The town includes procedural shop/building grammars, Clock Tower, markets, Town Hall, fountains, duck pond, flower gardens, butterflies, hedges, traffic, crosswalks, powerups, cleanup crews and reactive townspeople.

Unique paint coverage uses a persistent **4px world-space raster mask**. Painting an existing cell does not count twice. Every cleaner, powerwasher and helicopter water attack removes cells from that exact same mask and offscreen paint canvas, so visible loss and scoring loss stay synchronized.

## Procedural audio

Audio is generated through WebAudio rather than stored assets. The soundtrack grows with the number of productive unicorns and accelerates late in a run. Landmarks, Prism chains, Rainbow Whip impacts and world-response events add compact procedural stingers.

## Compression laboratory

Readable source remains modular. Production code is selected through a measured competition-build tournament rather than hand-golfed source.

The current release pipeline can compete combinations of:

- multi-pass Terser;
- selective internal-property mangling;
- Roadroller, including a deeper final search;
- standard ZIP DEFLATE;
- AdvZIP recompression;
- Zopfli raw DEFLATE.

A release-pruning stage removes development-time compatibility layers that are provably superseded in the final composition. The exact packed HTML is executed again in a browser-like VM after compression, and the packed smoke now explicitly verifies that the campaign-world code survived the release transformation.

See `docs/CAMPAIGN_WORLDS.md`, `docs/CREATIVE_RESERVE.md`, `docs/COMPRESSION.md`, `docs/PRISM_CHASE.md`, `docs/SMART_DIRECTOR.md`, and `docs/TOP10_CAMPAIGN.md` for the design contracts.

## Build and qualification

```bash
npm install
npm test
```

`npm test` performs source syntax checks, gameplay regressions, campaign progression tests, release-pruning checks, the compression tournament, exact packed-runtime execution, the hard **13,312-byte** size gate and competition artifact generation.

GitHub Actions additionally verifies ZIP integrity, confirms the archive contains exactly one root `index.html`, stores the compression report and publishes the exact qualified submission artifact.
