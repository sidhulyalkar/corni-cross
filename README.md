# Unicorn Stampede

**Unicorn Stampede** is a single-file desktop arcade-strategy game for js13kGames 2026 and the theme **Unicorns and Rainbows**.

Six semi-autonomous unicorns escape into increasingly hostile towns. Your job is not to micromanage all six. Make short, decisive interventions, leave useful routes running, crack an instant Rainbow Whip beside moving unicorns, trust the Smart Attention Director to surface the next problem, and turn each town into a rainbow catastrophe before its cleanup response contains the herd.

## The objective

Each large world contains five landmark objectives:

1. Bakery
2. Market
3. Greenhouse
4. Clock Tower
5. Town Hall

Destroy the first four to drop Town Hall's shield, then shatter Town Hall to conquer the world. Paint coverage, speed and successful Prism chains determine the quality of the victory and mastery crowns.

## ACTIVE 0/6: the mastery economy

`ACTIVE` is the player-facing count of unicorns currently doing useful work through orders, dashes, rage, boosts or active painting. Internally, this is the stampede intensity: more productive unicorns make the herd stronger while provoking a harder cleanup response.

As activity rises:

- the herd paints wider rainbow territory;
- the procedural soundtrack gains layers;
- cleaners and powerwashers respond faster;
- Washwater helicopter drops arrive more aggressively;
- Cloudtop crosswinds become stronger.

The design target is a readable arcade heat system: expert orchestration makes the herd more powerful **and** creates a harder municipal emergency. Difficulty should come from sustaining success under pressure, not from making the controls worse.

## Controls

### Six-unicorn control model

The herd contains six distinct unicorns, but only two direct-control slots are active at once:

- **Blue roster — Bolt, Daisy, Bumper.** Hold `WASD` to steer the current Blue unicorn. Releasing the final movement key commits the outgoing unicorn to a route, then Smart Next selects another live Blue-roster unicorn when one is available.
- **Yellow roster — Mallow, Comet, Pickles.** Crack the yellow-ring Rainbow Whip around the current Yellow unicorn. Completing a 3-hit Prism chain immediately hands Yellow control to the next live Yellow-roster unicorn; letting the chain timer expire also triggers Smart Next.
- **Everyone else keeps running.** Other live unicorns remain semi-autonomous, following a committed route or their local AI. The campaign introduces this gradually as the herd grows **2 → 4 → 6**.

So the player is orchestrating six characters without juggling six simultaneous input schemes: direct two, leave useful work behind, then rotate attention.

### Left hand: route planning

- Hold `WASD` to directly steer the current Blue captain.
- Release the final movement key while moving to commit a short run order.
- The Smart Attention Director selects the next live Blue-roster unicorn that most needs intervention when another is available.

### Mouse: Rainbow Whip / Prism Chase

- Aim slightly **beside** the highlighted Yellow captain, inside the visible whip orbit.
- Click to crack the Rainbow Whip instantly from that point toward the moving unicorn.
- A successful hit splashes paint and launches the unicorn away from the whip origin.
- Reacquire it before the shrinking chain arc expires for 2X and 3X Prism rewards.
- A completed 3X chain rotates Yellow immediately; an expired chain rotates Yellow when its timer closes.

The whip resolves on the click. Advanced play is therefore about placing the crack beside a moving target so the launch vector sends it somewhere useful, then deciding whether another Prism hit is worth chasing before the handoff.

### Shared

- `Space`: dual dash both captains
- `A` / `D` on the title after Little Cross: select an unlocked campaign world
- `P` / `Esc`: pause
- `M`: mute
- `T` from the title: replay Little Cross

Modifier keys are not gameplay controls. Ctrl/Meta/Alt combinations are filtered during play, focus loss clears held state, accidental close/reload is guarded where browsers permit it, and uncaught runtime errors recover to the title loop.

## Onboarding philosophy

The game now follows a **teach when actionable** rule. It does not explain Smart Next before another unicorn exists to switch to, and it does not force optional mechanics into the opening lesson merely because they exist.

### Little Cross

Little Cross is a short four-beat control lesson:

1. steer Blue with `WASD`, then release to leave a route running;
2. click Yellow's ring to crack the instant Rainbow Whip;
3. chase Yellow for a three-hit Prism chain;
4. smash the Bakery using the verbs you just learned.

Powerups, distractions and rescue remain part of the sandbox, but they are discovered contextually rather than required before the player can reach the main game.

### Main-town escalation

Prismborough begins with one Blue and one Yellow unicorn. At **four unicorns**, switching becomes possible and the HUD explicitly teaches the handoff. At **all six**, the player is told to keep the other four running while continuing to break landmarks. Early switch callouts name both sides of the transfer, for example `BLUE → DAISY • BOLT RUNS`.

## Campaign mastery ladder

### Prismborough

**Skill: orchestration**

The baseline large town. The herd escalates 2 → 4 → 6 while cleanup vans, traffic, distractions and landmark objectives compete for attention.

Time: **100 s**

Mastery goals: conquer Town Hall, 60% final paint, 2 successful 3X chains.

### Washwater Bay

**Skill: defend and rotate success**

Powerwashers and a helicopter attack the player's strongest-painted area while normal cleanup continues erasing the authoritative paint raster. Helicopter drops are visibly telegraphed before impact, so strong players can anticipate the attack rather than suffer invisible punishment.

Time: **94 s**

Mastery goals: conquer Town Hall, 48% final paint, 2 successful 3X chains.

### Cloudtop Heights

**Skill: prediction**

Periodic crosswinds bias every unicorn's motion, Rainbow Whips launch farther, and the follow-up chain window becomes tighter. Higher activity strengthens the wind, turning successful orchestration into a harder target-leading problem.

Time: **90 s**

Mastery goals: conquer Town Hall, 54% final paint, 3 successful 3X chains.

## Replay variation

Every main-world attempt advances a persisted deterministic remix seed. Generic buildings, civilians and local geometry vary, and several building-based landmarks are selected from broader strategic regions instead of fixed coordinates. Road hierarchy, landmark roles and world rules remain familiar.

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

For the quickest playtest, build once and then double-click **`dist/local.html`**. It is a complete single-file browser-safe copy of the game and does not depend on the `src/` directory after it has been generated.

```bash
npm install
npm run build:fast
```

For the full js13k compression tournament and submission ZIP:

```bash
npm run build
```

The repository root `index.html` remains the readable development build if you prefer serving the source tree directly.

## Build outputs

Every build recreates one authoritative `dist/` folder:

- `dist/local.html` — the easiest file to download or double-click for quick human playtesting; self-contained and browser-safe.
- `dist/preview.html` — the same qualified browser-safe build retained under the CI/reference name. `local.html` and `preview.html` are verified byte-identical.
- `dist/index.html` — exact smallest competition HTML selected by the compression tournament.
- `dist/unicorn-stampede.zip` — js13k submission archive containing exactly one root `index.html`.
- `dist/compression.json` — measured compression tournament results and size provenance.

Do not use the aggressively packed competition HTML as the everyday test build. `local.html` deliberately uses **no Terser, Roadroller, `eval`, or `document.write`**, so it is the convenient human-facing artifact while the ZIP remains the competition artifact.

## Compression laboratory

Readable source stays modular. Release code is aggressively transformed only during the production build.

The tournament currently compares combinations of:

- release pruning of superseded interaction and UI layers;
- competition-only shell/CSS stripping that leaves the readable preview untouched;
- multi-pass Terser;
- narrow and wider safe internal-property mangling;
- release-only integer enums for internal object, powerup, landmark and game-state strings;
- Roadroller, including a substantially deeper final search;
- standard DEFLATE;
- AdvZIP;
- Zopfli raw DEFLATE.

The smallest valid artifact wins. The exact competition artifact is then executed again in a browser-like runtime smoke before the size gate is accepted. A separate module-safe preview smoke protects the real-browser script semantics that the packed release is intentionally free to transform.

## Qualification

```bash
npm test
```

The test contract includes source syntax, the four-step tutorial, contextual switch teaching, Blue/Yellow handoff explanations, campaign progression, Rainbow Whip timing, Smart Director behavior, cleanup erasure, activity risk/reward, mastery accounting, release-pruning checks, browser-safe local/preview boot, exact packed competition boot, ZIP integrity and the hard **13,312-byte** limit.

GitHub Actions publishes a single **`unicorn-stampede-dist`** artifact containing `local.html`, the exact submission ZIP, packed `index.html`, browser-safe `preview.html`, and `compression.json` for every qualified head.

## Design documentation

See `docs/CAMPAIGN_WORLDS.md`, `docs/CREATIVE_RESERVE.md`, `docs/COMPRESSION.md`, `docs/PRISM_CHASE.md`, `docs/SMART_DIRECTOR.md`, and `docs/TOP10_CAMPAIGN.md` for the deeper design contracts and tuning philosophy.
