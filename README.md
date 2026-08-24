# Corni Cross

**Corni Cross: The Great Rainbow Invasion** is a 13KB desktop arcade-strategy game for the js13kGames 2026 theme **Unicorns and Rainbows**.

Six magical unicorns have escaped into a quaint town. Paint and destruction are automatic. The player operates **two giant captains at once** while the other four continue roaming, getting distracted, finding powerups and improvising rainbow chaos.

## v0.5 dual-captain controls

The town is split into two attention lanes:

- `WASD` — steer the current **left captain**
- Arrow keys — steer the current **right captain**
- `Left Shift` — rotate Bolt / Daisy / Bumper
- `Right Shift` — rotate Mallow / Comet / Pickles
- `1`–`6` — direct captain selection for expert play
- `Space` — dash **both captains simultaneously** in their current facing directions
- `M` — mute
- `P` / `Esc` — pause

Controlled captains render about 1.5× larger, paint a wider trail, have a larger interaction radius and deal more structural damage. A synchronized `Space` dash is deliberately risky: if both captains connect with useful targets in the same dash window, the player earns **DOUBLE PRISM +2500**.

## Two-stage learning structure

### Little Cross

A tiny one-screen tutorial with only Bolt and Daisy. `WASD` and arrows immediately teach simultaneous control, then the game introduces the shared dash, powerups and distractions.

### The Great Invasion

A 3200 × 1800 full-town tactical view keeps all six unicorns visible. The left trio tends to operate on the western half and the right trio on the eastern half, so the player's eyes and hands can naturally split the screen.

The current win target is **70% total takeover** plus **38% paint in every town quadrant** during an 88-second run.

## Automatic chaos

Normal movement paints automatically. Anger and powerups produce increasingly wild splatter and structural attacks, so the player's job is route planning rather than manual firing.

Powerups:

- **Rage Corn** — rabid speed, aggressive target seeking, rapid random splatter and heavy damage
- **Prism Pop** — immediate radial paint explosion and structural blast
- **Rainbow Soda** — sustained speed and wider automatic trail

Distractions:

- fountains mesmerize nearby unicorns
- flower gardens stop productive painting
- butterflies pull unattended unicorns off course
- the duck pond is a particularly compelling waste of everyone’s time
- traffic can stun unicorns while also increasing anger

## A more legible town

v0.5 adds a named clock tower, destructible market stalls, duck pond, shop signs, crosswalks, larger buses and clearer powerup silhouettes. Buildings now read as recognizable bakery/bank/books/cafe/florist storefronts rather than anonymous rectangles.

Town residents continue to flee, heckle and comment while remaining non-targets.

## Precise paint coverage

Coverage uses a persistent **4px world-space raster mask**. Every circular splatter is rasterized into that mask and only previously untouched mask pixels increase area, so overlapping rainbows never double-count.

Takeover is currently:

- **76% unique ground paint**
- **24% weighted structural damage**

## Difficulty calibration

The current v0.5 simulation gate gives a useful separation:

- passive/no-input run: about **41% takeover**, loss
- simple two-captain route/powerup policy: about **81% takeover**, win

This leaves a wide human skill band between surviving the controls and mastering synchronized routing.

## 13KB build

```bash
npm test
```

The dependency-free build creates `dist/index.html` and `dist/corni-cross.zip`. CI rejects anything over **13,312 bytes**.

Local v0.5 qualification: **12,859 bytes zipped**, leaving **453 bytes** before CI normalization.
