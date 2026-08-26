# Unicorn Stampede

**Unicorn Stampede** is a single-file desktop arcade-strategy game for js13kGames 2026 and the theme **Unicorns and Rainbows**.

Six semi-autonomous unicorns escape into increasingly hostile towns. Your job is not to micromanage all six. Make short, decisive interventions, leave useful routes running, crack a delayed Rainbow Whip beside moving unicorns, trust the Smart Attention Director to surface the next problem, and turn each town into a rainbow catastrophe before its cleanup response contains the herd.

## The objective

Each large world contains five landmark objectives:

1. Bakery
2. Market
3. Greenhouse
4. Clock Tower
5. Town Hall

Destroy the first four to drop Town Hall's shield, then shatter Town Hall to conquer the world. Paint coverage, speed and successful Prism chains determine the quality of the victory and mastery crowns.

## Controls

### Left hand: route planning

- Hold `WASD` to directly steer the current left-side captain.
- Release the final movement key while moving to commit a short run order.
- The Smart Attention Director automatically selects the next left-side unicorn that most needs intervention.

### Mouse: Rainbow Whip / Prism Chase

- Aim slightly **beside** the highlighted right-side captain, inside the visible whip orbit.
- Click to crack a rainbow lash toward the moving unicorn.
- A successful hit splashes paint and launches the unicorn away from the whip origin.
- Reacquire it before the chain expires for 2X and 3X Prism rewards.

The whip has real travel time, so advanced play is about leading the moving target rather than clicking its current position.

### Shared

- `Space`: dual dash both captains
- `P` / `Esc`: pause
- `M`: mute
- `T` from the title: replay Little Cross

Modifier keys are not gameplay controls. Ctrl/Meta/Alt combinations are filtered during play, focus loss clears held state, accidental close/reload is guarded where browsers permit it, and uncaught runtime errors recover to the title loop.

## Campaign mastery ladder

### Little Cross

Objective-gated tutorial for the permanent verbs: WASD orders, Rainbow Whip spacing/timing, Prism chaining, powerups, distractions, rescue and landmark destruction.

### Prismborough

**Skill: orchestration**

The baseline large town. The herd escalates 2 → 4 → 6 while cleanup vans, traffic, distractions and landmark objectives compete for attention.

Time: **100 s**

Mastery goals: conquer Town Hall, 60% final paint, 2 successful 3X chains.

### Washwater Bay

**Skill: defend and rotate success**

Powerwashers and a helicopter attack the player's strongest-painted area while normal cleanup continues erasing the authoritative paint raster.

Time: **94 s**

Mastery goals: conquer Town Hall, 48% final paint, 2 successful 3X chains.

### Cloudtop Heights

**Skill: prediction**

Periodic crosswinds bias every unicorn's motion, Rainbow Whips launch farther, and the follow-up chain window becomes tighter.

Time: **90 s**

Mastery goals: conquer Town Hall, 54% final paint, 3 successful 3X chains.

## Replay variation

Every main-world attempt advances a persisted deterministic remix seed. Generic buildings, civilians and local geometry vary while road hierarchy, landmark roles and world rules stay familiar.

Design target: **same exam, different questions**.

## Three-crown mastery

A one-crown Town Hall victory is enough to progress. Additional crowns reward territory quality and Prism execution. Best crowns persist per world so a player can return and turn ★☆☆ into ★★★ through actual mastery rather than stat grinding.

## Smart Attention Director

The director reduces roster bookkeeping without playing the game for you. It prioritizes distracted, stalled or strategically useful unicorns and displays the dominant reason in-world:

- `DISTRACTED`
- `WEAK AREA`
- `POWERUP`
- `STALLED`
- `NEXT`

The player still chooses routes, landmark order, whether to chase another Prism hit, when to reclaim cleaned territory and when to use the shared dash.

## Running locally

The repository root is the readable development build:

```bash
npm install
npm run build:fast
```

You can also serve the repository root with any static server and open `index.html`. The root page loads **all current gameplay modules**, not a historical subset.

## Build outputs

`npm run build` produces three intentionally different artifacts:

- `dist/preview.html` — self-contained browser-safe preview, minified but **not Roadroller/eval packed**.
- `dist/index.html` — exact smallest competition HTML selected by the compression tournament.
- `dist/unicorn-stampede.zip` — js13k submission archive containing exactly one root `index.html`.

Do not use the aggressively packed competition HTML as a general-purpose hosted preview. The browser-safe preview exists specifically so CSP/sandboxed viewers can render the game without dynamic evaluation.

## Compression laboratory

Readable source stays modular. Release code is aggressively transformed only during the production build.

The tournament currently compares combinations of:

- release pruning of superseded compatibility layers;
- multi-pass Terser;
- selective internal-property mangling;
- Roadroller, including a deeper final search;
- standard DEFLATE;
- AdvZIP;
- Zopfli raw DEFLATE.

The smallest valid artifact wins. The exact competition artifact is then executed again in a browser-like runtime smoke before the size gate is accepted.

## Qualification

```bash
npm test
```

The test contract includes source syntax, gameplay regressions, campaign progression, Rainbow Whip timing, Smart Director behavior, cleanup erasure, mastery accounting, release-pruning checks, **browser-safe preview boot**, exact packed competition boot, ZIP integrity and the hard **13,312-byte** limit.

GitHub Actions uploads the exact submission ZIP, browser-safe preview and compression report for every qualified head.

## Design documentation

See `docs/CAMPAIGN_WORLDS.md`, `docs/CREATIVE_RESERVE.md`, `docs/COMPRESSION.md`, `docs/PRISM_CHASE.md`, `docs/SMART_DIRECTOR.md`, and `docs/TOP10_CAMPAIGN.md` for the deeper design contracts and tuning philosophy.
