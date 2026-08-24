# Corni Cross

**Corni Cross: The Great Rainbow Invasion** is a 13KB desktop arcade-strategy game for the js13kGames 2026 theme **Unicorns and Rainbows**.

A herd of magical unicorns has escaped into a quaint town. Rainbow splatter and destruction happen automatically. The player can steer only **one unicorn at a time**, so the game is about rapidly switching between them, routing them into productive chaos, and rescuing them from absurd distractions.

## Current v0.4 loop

The game now opens with a tiny two-unicorn tutorial town where the entire problem fits on screen. Clearing it releases the full six-unicorn herd into a much larger 3200 × 1800 town, also shown as one tactical view so every unicorn remains visible.

Controls are intentionally small:

- `WASD` / arrows — steer the selected unicorn
- `Shift` — cycle unicorns
- `1`–`6` — select directly
- `M` — mute
- `P` / `Esc` — pause

There is no manual paint gun. Moving unicorns splatter automatically. Angry or powered-up unicorns generate extra random rainbow bursts and automatically attack nearby destructible structures.

## Powerups and distractions

### Powerups

- **Rage Corn** — temporary rabid speed, automatic target seeking, large rapid splatter and strong building damage.
- **Prism Pop** — immediate radial paint explosion plus nearby structural damage.
- **Rainbow Soda** — sustained speed and wider automatic paint trail.

Powerups respawn in the large town, creating routing decisions instead of one-use collectibles.

### Distractions

Unicorns can lose productive time to things they find more interesting than urban destruction:

- fountains mesmerize them,
- flower gardens make them stop and investigate,
- moving butterflies pull them off course,
- cars can stun them while also increasing anger,
- townspeople flee, heckle, cheer and sometimes provoke nearby unicorns.

Distracted unicorns stop painting until they are pulled away. This makes unattended herd members a problem to revisit rather than passive score generators.

## Town = scoreboard

Ground coverage uses a persistent **4-pixel world-space raster mask**. Every circular splatter is rasterized into that mask and only previously unpainted pixels count as new area. Overlapping paint therefore does not double-score and coverage is far more spatially precise than the earlier 80px tile system.

The large-town takeover score is:

- **76% unique paint area**
- **24% weighted structural rainbow damage**

Winning currently requires:

- **66% total takeover**, and
- at least **32% ground paint in each of the four town quadrants**.

The quadrant requirement prevents one easy colorful crater from winning the entire run.

## Difficulty calibration

The v0.4 simulation gate intentionally separates passive and purposeful play:

- a passive/no-input herd reaches about **50% takeover** and loses,
- a simple switch-and-route bot reaches about **70% takeover** and wins.

That gives real-player tuning room between “the game plays itself” and “the target is impossible.”

## 13KB build

```bash
npm test
```

The dependency-free build creates `dist/index.html` and `dist/corni-cross.zip`. CI rejects archives larger than **13,312 bytes**.

Local v0.4 qualification: **10,889 bytes zipped**, leaving **2,423 bytes** for final feel and polish.
