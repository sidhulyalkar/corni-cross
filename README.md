# Corni Cross

**Corni Cross** is a tiny desktop arcade herding game built for the js13kGames 2026 theme **Unicorns and Rainbows**.

You play a Rainbow Wrangler trying to escort a rambunctious herd of semi-autonomous unicorns across a living town. The player does not directly control the herd: they whistle to attract, shoo to repel, dash to impart momentum, and build enough cohesion to trigger a Prism Burst.

## Design pillars

- **Herd, don't command.** The unicorns are a small flocking simulation with distinct personalities and recoverable chaos.
- **Readable traffic puzzle.** Cars, buses, lights, construction, pigeons, food carts and fountains combine into timing problems rather than arbitrary damage.
- **Failure should be funny.** Collisions scatter and daze unicorns instead of killing them.
- **Skill should become visible.** Cohesion creates rainbow chains, speed, music layers and scoring multipliers.
- **13KB-native spectacle.** Canvas primitives, procedural animation and WebAudio synths replace image and audio assets.

## Target controls

- `WASD` / arrows: move the Wrangler
- Mouse: aim
- Left mouse: whistle / attract
- Right mouse: shoo / repel
- `Space`: rainbow dash
- `R`: Prism Burst when charged
- `P` / `Esc`: pause

## Repository plan

Source code remains readable in `src/`. `npm run build` creates the competition-ready `dist/index.html` and `dist/corni-cross.zip`, while `npm run size` enforces the compressed 13KB budget.

Development is tracked through small, reviewable commits and pull requests so gameplay tuning can evolve without losing known-good states.
