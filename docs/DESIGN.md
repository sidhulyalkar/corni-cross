# Corni Cross Design Blueprint

## One-sentence pitch

Herd six opinionated rainbow unicorns across a busy procedural town by shaping their flocking behavior while traffic, distractions and momentum continuously threaten to split the group.

## Player fantasy

The Wrangler is intentionally weaker than direct control. The joy comes from reading the herd, getting ahead of problems, and creating a clean flowing line through chaos.

### Four verbs

- **Move**: reposition around the herd and traffic.
- **Whistle**: attraction toward the aimed point. Best for route-setting and recovering stragglers.
- **Shoo**: short-range directional repulsion. Best for peeling unicorns away from hazards or reshaping a cluster.
- **Dash**: a high-momentum burst. Nearby unicorns inherit part of its direction, making it both mobility and advanced herd steering.

### Prism Burst

Cohesion fills the Prism meter. At full charge, `R` temporarily:

- increases herd cohesion,
- pulls the herd toward the Wrangler,
- accelerates eastward momentum,
- slows nearby traffic,
- lengthens and brightens rainbow trails.

It is deliberately earned by controlled play instead of functioning as a panic button on a cooldown.

## Herd simulation

Each unicorn combines:

- goal attraction,
- local cohesion,
- velocity alignment,
- short-range separation,
- vertical road-centering,
- personality-scaled wandering,
- Wrangler influence,
- prop attraction/avoidance,
- collision impulses.

Six personalities are currently represented by continuous coefficients rather than branch-heavy bespoke AI:

| Unicorn | Character tendency |
| --- | --- |
| Bolt | Fast front-runner |
| Daisy | Strong food attraction |
| Bumper | Loose cohesion, more independent |
| Mallow | Strong herd anchor |
| Comet | Fast, high wander |
| Pickles | Maximum wander / shortcut energy |

The names appear briefly at the start so players can begin attributing behavior without a separate character-select screen.

## Town grammar

The run is one continuous eastbound route with six increasingly busy crossing zones. The exact crossing offsets, traffic starts, pigeon positions and prop placement are seeded by the local date.

### Interactions

- **Cars**: predictable vertical traffic streams; contact launches and dazes rather than kills.
- **Buses**: oversized moving walls that can split a herd.
- **Crosswalks**: highly readable conflict zones where the player anticipates gaps.
- **Fountains**: circular repulsion fields that bend herd trajectories.
- **Food carts**: attract unicorns in personality-dependent amounts; useful as accidental anchors as well as distractions.
- **Construction cones**: create elongated avoidance zones and force lane changes.
- **Pigeons**: scatter when approached, adding small reactive motion and noise without affecting failure state directly.

## Difficulty curve

Traffic speed and vehicle count rise at later crossings. The goal is to create a run with three emotional acts:

1. **Learn the organism**: wide road, low traffic, names visible.
2. **Manage splits**: mixed props and denser crossings punish tunnel vision.
3. **Conduct the stampede**: buses, construction and faster traffic reward Prism timing and controlled momentum.

## Scoring

The scoring model rewards:

- getting all six unicorns home,
- maximum Rainbow Chain,
- fast completion,
- near misses,
- low collision count.

A zero-bonk run earns the end-card label **PRISM PERFECT**.

## Visual language

The city is intentionally muted: dark asphalt, cream sidewalks, low-saturation shopfronts. The unicorns and interaction effects own the saturated palette. This makes successful play literally paint color across the city through procedural rainbow trails.

No sprites are required. Unicorns are drawn from ellipses, arcs, lines and triangles with gait animation derived from time and velocity.

## Audio language

WebAudio creates all sound at runtime. Event tones cover dash, collisions, Prism readiness and completion. During active play a very light pulse changes pitch with current Rainbow Chain, and high cohesion adds a second note. Better play therefore adds audible density without shipping music files.

## UX rules

- The first run teaches one verb at a time through a contextual bottom card.
- There is no lethal collision state.
- Pause and mute are always one key away.
- The title screen communicates the entire input vocabulary before play.
- The HUD prioritizes only home count, score, Prism, chain, dash cooldown, sound and pause.

## Byte strategy

The game is designed around Canvas 2D, WebAudio and compact state vectors. Source remains readable. The submission build simply inlines source and CSS and then DEFLATE-compresses a one-file ZIP using a dependency-free Node build script. This avoids coupling gameplay development to hand-minified source while retaining a large compressed-byte margin.

## Next qualification targets

The v0.1 vertical slice should now be tuned empirically rather than expanded indiscriminately. Highest-value remaining work:

1. instrument run pacing and identify dead stretches,
2. tune attraction/repulsion strength until recovery feels deliberate rather than mushy,
3. tune collision impulse and daze to maximize comedy without losing control for too long,
4. evaluate whether crossings need explicit traffic-light telegraphing,
5. add a compact progress cue if playtesters lose destination awareness,
6. use remaining byte budget only for interactions that repeatedly improve playtest enjoyment.
