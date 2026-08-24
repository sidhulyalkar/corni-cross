# Corni Cross

**Corni Cross: The Great Rainbow Invasion** is a 13KB desktop arcade-strategy game for the js13kGames 2026 theme **Unicorns and Rainbows**.

Six magical unicorns invade a quaint town. They paint and wreck things automatically, but the player gradually learns to turn their chaos into deliberate routes.

## v0.7 control model

The game no longer uses modifier keys for gameplay.

| Input | Action |
| --- | --- |
| `WASD` | Steer the left captain |
| Arrow keys | Steer the right captain |
| `Q` | Hand off / rotate the left team |
| `Enter` | Hand off / rotate the right team |
| `Space` | Dash both current captains |
| `P` / `Esc` | Pause |
| `M` | Mute |
| `T` on title | Replay Little Cross |

During active play Ctrl/Meta/Alt combinations are intercepted so accidental modifier presses do not trigger ordinary browser shortcuts such as save/bookmark while the game has keyboard control.

## Learning curve

### Little Cross

The opening two-unicorn town is objective-gated rather than time-gated. It does not release the player until they have demonstrated:

1. WASD steering,
2. Arrow-key steering,
3. simultaneous control,
4. the dual Space dash,
5. powerup collection,
6. entering a distraction,
7. actively steering away to rescue the unicorn.

### Big town: 2 → 4 → 6

The large town no longer drops all six unicorns on the player immediately.

- **Wave 1:** Bolt + Mallow. Learn routes and powerups with one unicorn per hand.
- **Wave 2:** Daisy + Comet join. `Q` and `Enter` introduce four-second directional handoff orders.
- **Wave 3:** Bumper + Pickles arrive. The full six-unicorn invasion begins only after the player has had time to practice handoffs.

Fast learners release later waves early. Safety timers prevent a new player from getting permanently stuck.

## Agency vocabulary

- **RUN ORDER** — hand off a moving captain; it keeps the chosen heading for four seconds.
- **RESCUE** — directly steer a distracted unicorn away. Player input beats distraction.
- **RABID HANDOFF** — aim a Rage Corn frenzy, then hand it off while productive.
- **DOUBLE PRISM** — hit useful targets with both captains during one shared dash.
- **DISTRICT SECURED** — meet a quadrant paint quota.

Nearby teammates also inherit a soft portion of their captain's deliberate movement, giving skilled players indirect control over more than two unicorns at once.

## Town systems

The town includes distinct Bakery, Bank, Books, Cafe and Florist facades with different durability/value, plus the Clock Tower, market stalls, fountains, a duck pond, flower gardens, butterflies, hedges, traffic, crosswalks, powerups and reactive townspeople.

Unique paint coverage is measured with a persistent **4px world-space raster mask**. Repainting the same area never double-counts.

The current main-town target is **68% takeover** plus **35% unique paint in every quadrant** during the 105-second run.

## Build and qualification

```bash
npm test
```

`npm test` now runs source syntax checks, a headless input/progression regression suite, the dependency-free single-file build, and the hard 13,312-byte size gate.

The build creates `dist/index.html` and `dist/corni-cross.zip`, with exactly one root `index.html` in the competition archive.
