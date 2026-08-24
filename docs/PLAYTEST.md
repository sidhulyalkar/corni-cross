# Corni Cross v0.6 Playtest Checklist

## Controls / agency

- Can a new player understand that WASD and Arrow keys control two different captains at the same time?
- Does the enlarged captain + halo + facing arrow make both controlled unicorns immediately findable?
- Does captain facing match intended input closely enough that Space dash outcomes feel deserved?
- Can a player intentionally pull a captain away from a fountain/flower/pond without feeling that controls are disabled?
- After a Shift handoff, is the old captain's 2.4 second order visually obvious and strategically useful?
- Do Left Shift and Right Shift feel predictable enough that players build a stable mental model of each trio?
- Does captain wake help nearby teammates without making them feel glued together?

## Learning / mastery

- Does the Little Cross tutorial teach two-handed movement without overwhelming the player?
- Does the between-level screen make the new handoff rule clear before the six-unicorn run starts?
- Do RUN ORDER, RESCUE, RABID HANDOFF, DOUBLE PRISM and DISTRICT SECURED callouts teach repeatable techniques?
- By run 2 or 3, is the player deliberately setting routes before switching rather than rotating reactively?
- Does `SKILL` count feel like evidence of better technique rather than arbitrary score inflation?

## Town readability

- Can Bakery / Bank / Books / Cafe / Florist be distinguished from silhouette/facade at full-town zoom?
- Does the Bank visually communicate that it is tougher than the Cafe/Bakery?
- Are Clock Tower, market stalls, Rage Corn, Prism Pop, Rainbow Soda, fountains, flowers and duck pond recognizable without reading labels?
- Do paint, civilian bubbles and particles obscure navigational information at high takeover percentages?

## Difficulty

Current main target: 70% takeover and 38% paint in each quadrant.

Record after each test:

- final takeover
- four quadrant percentages
- skill event count
- number of successful Double Prism dashes
- number of rescue events
- whether either captain felt lost visually
- whether a loss felt attributable to decisions rather than randomness

Calibration anchors from deterministic simulation:

- passive/no-input: ~24% takeover, loss
- basic purposeful route/powerup bot: ~87% takeover, win

## Technical qualification

- `npm test` passes
- competition ZIP < 13,312 bytes
- ZIP contains exactly root `index.html`
- Firefox desktop
- Chromium desktop
- Safari desktop where available
- 16:9 and ultrawide containment
- keyboard blur clears held movement
- pause does not advance game time
- mute remains persistent during a run
- no console/runtime errors during tutorial → transition → main → end flow
