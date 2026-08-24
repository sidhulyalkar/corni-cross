# Corni Cross

**Corni Cross** is a tiny desktop arcade herding game for the js13kGames 2026 theme **Unicorns and Rainbows**.

You are a Rainbow Wrangler trying to escort six semi-autonomous unicorns through rush-hour streets. You never directly command the herd. You **whistle** to attract, **shoo** to repel, **dash** to impart momentum, and build enough cohesion to trigger a traffic-slowing **Prism Burst**.

## Current playable build

The competition-shaped playable build is developed on `agent/v0.1-playable-herd` and tracked through draft PR #1.

- Six unicorn personalities with flocking, separation, wandering, food attraction and distinct speed/cohesion traits
- Mouse-directed whistle and shoo fields
- Momentum dash that can punch a direction through the herd
- Cohesion-driven Rainbow Chain and Prism meter
- Prism Burst that tightens the herd, accelerates it and slows nearby traffic
- Increasing traffic pressure, including oversized buses and readable GO/WAIT crossing windows
- Crosswalks, fountains, food carts, construction cones and pigeons
- Recoverable vehicle collisions with knockback, daze, particles, sound and screen feedback
- Procedural Canvas 2D art, animation and rainbow trails
- Procedural WebAudio feedback whose musical density increases with herd cohesion
- First-run contextual tutorial, pause/mute controls, daily deterministic town seed, score and best-score persistence
- Route-progress dots and edge indicators keep stragglers readable without a minimap
- Final Rainbow Parade stretch adds spectators, confetti and a celebratory destination arch
- Fully offline, single-file competition output

## Controls

| Input | Action |
| --- | --- |
| `WASD` / arrows | Move the Wrangler |
| Mouse | Aim |
| Left mouse | Whistle / attract |
| Right mouse | Shoo / repel |
| `Space` | Rainbow dash |
| `R` | Prism Burst when charged |
| `M` | Mute / unmute |
| `P` / `Esc` | Pause |

## Run locally

```bash
npm run dev
```

Then open `http://localhost:4173`.

## Competition build

```bash
npm test
```

The dependency-free build pipeline creates:

- `dist/index.html` - the complete single-file game
- `dist/corni-cross.zip` - the js13kGames submission archive

`npm run size` hard-fails if the zip exceeds **13 * 1024 = 13,312 bytes**.

Current v0.2 baseline: **9,271 bytes zipped**, leaving **4,041 bytes** for final tuning and polish.

## Design principles

1. **Herd, don't command.** The player shapes a moving system rather than steering six puppets.
2. **Chaos must be recoverable.** A bad collision creates a rescue story, not a dead run.
3. **Skill should look beautiful.** Better play naturally creates longer rainbow trails, tighter formations, denser music and higher multipliers.
4. **The town is a kinetic puzzle.** Traffic, geometry and distractions are tools as well as hazards.
5. **Spend bytes on interaction.** Every visual and audio system is procedural; no image, font or audio assets are required.

See [`docs/DESIGN.md`](docs/DESIGN.md) for the full interaction model and [`docs/PLAYTEST.md`](docs/PLAYTEST.md) for the qualification checklist.
