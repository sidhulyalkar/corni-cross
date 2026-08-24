# Corni Cross

**Corni Cross: The Great Rainbow Invasion** is a desktop arcade-strategy game built for the js13kGames 2026 theme **Unicorns and Rainbows**.

Six magical unicorns have escaped into a quaint town. They paint and wreck things automatically, but they are distractible, excitable and only loosely sensible. The player has two live control channels and learns to turn that chaos into deliberate routes.

## v0.6 control philosophy

The core skill is no longer raw character switching. It is **steer → hand off → rescue → synchronize**.

| Input | Action |
| --- | --- |
| `WASD` | Steer the current left-side captain |
| Arrow keys | Steer the current right-side captain |
| Left Shift | Hand off the left captain and rotate Bolt / Daisy / Bumper |
| Right Shift | Hand off the right captain and rotate Mallow / Comet / Pickles |
| `Space` | Dash both current captains in their facing directions |
| `P` / `Esc` | Pause |
| `M` | Mute |
| `T` on title | Replay the tutorial |

### Direct control should feel authoritative

A captain is visibly larger, paints wider and damages structures more strongly. Its facing direction follows player input directly, so the shared Space dash is predictable rather than being determined by collision drift.

Direct steering also breaks distraction. Fountains, flowerbeds, ponds and butterflies are attention traps for unattended unicorns, not input locks for the player.

### Handoff orders

When a moving captain is rotated out with Shift, it receives a **2.4 second run order** in the direction the player was steering. During that window it:

- keeps the chosen heading,
- resists distractions,
- continues painting productively,
- remains visually marked with a white order arrow.

This creates the intended plate-spinning rhythm: set a route, release it, immediately solve another problem.

### Captain wake

Unattended teammates near their side's current captain inherit part of the captain's motion. This gives the player a soft way to shape a small group without directly controlling all three unicorns.

## Mastery feedback

The game now calls out and scores learned techniques rather than only rewarding final coverage:

- **RUN ORDER** — successfully hand off a moving captain for the first time on each side
- **RESCUE** — take control of a distracted unicorn and actively pull it away
- **RABID HANDOFF** — trigger a Rage Corn frenzy, then release that unicorn while it is still productive
- **DOUBLE PRISM** — line up both captains and land useful impacts during the same shared dash
- **DISTRICT SECURED** — push one of the four town quadrants over its required paint threshold

The HUD tracks `SKILL` events during the run so players can see themselves learning a repeatable vocabulary rather than simply watching a percentage rise.

## Two-stage learning curve

### Little Cross

A tiny two-unicorn town teaches:

1. WASD steering,
2. Arrow-key steering at the same time,
3. the shared Space dash,
4. powerups,
5. distractions and rescue.

Reaching 28% takeover releases the herd.

### The Great Invasion

The full town is 3200 × 1800 world units but stays entirely visible. The six unicorns are split into stable left and right teams, allowing the player's eyes and hands to build a spatial mental model.

Winning currently requires:

- **70% total takeover**, and
- at least **38% unique ground paint in every quadrant**.

## Town as scoreboard

Ground coverage uses a persistent **4px world-space raster mask**. Every circular splatter is written into that mask and only newly touched pixels increase coverage. Overlapping paint therefore cannot double-score.

Takeover combines:

- **76% unique painted area**
- **24% weighted structural damage**

## Buildings now have readable identities

Generic repeated facades were replaced by five compact architectural grammars:

- **Bakery** — warm storefront, striped awning, large display windows; relatively fragile
- **Bank** — stone pediment and columns; substantially tougher and more valuable
- **Books** — brick facade with tall vertical windows; medium durability
- **Cafe** — low awning and broad glass front; easy to smash
- **Florist** — greenhouse-like roof and flower detailing; medium-light durability

The town also contains the Clock Tower, market stalls, fountains, hedges, flower gardens, a duck pond, traffic, crosswalks, powerups, butterflies and reactive townspeople.

## Powerups

- **Rage Corn** — temporary rabid speed, large random splatter and aggressive building damage
- **Prism Pop** — immediate radial rainbow explosion and nearby structural damage
- **Rainbow Soda** — sustained speed and a wider paint trail

Powerups respawn, so they are routing objectives rather than one-use collectibles.

## 13KB build

```bash
npm test
```

The dependency-free build creates:

- `dist/index.html`
- `dist/corni-cross.zip`

CI rejects any competition archive larger than **13,312 bytes**.

See `docs/DESIGN.md` for the agency/progression model and `docs/PLAYTEST.md` for the current qualification checklist.
