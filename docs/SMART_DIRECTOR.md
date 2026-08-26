# Corni Cross v0.9 — Smart Attention Director

## Goal

The player should make fast tactical decisions, not spend attention cycling through six unicorns. v0.9 turns captain selection into an automatic attention-management system.

## Core loop

1. Steer the current left captain with WASD or acquire the current right captain with the mouse.
2. Establish a useful route.
3. Release the controls. The outgoing captain receives a four-second directional order.
4. The Attention Director selects the live teammate that most needs intervention.
5. A larger pulsing captain ring makes the new assignment easy to find.
6. Reorient that captain and repeat.

This means expertise should look like short, decisive bursts of control rather than frantic character cycling.

## Attention Director priority

Within each three-unicorn side, the selector excludes the outgoing captain and scores live candidates from three signals:

- **distraction:** the strongest priority; fountains, flowers, ponds and butterflies should pull the player's attention to a unicorn that is currently wasting time;
- **existing order:** a unicorn that is already following a useful four-second command is deliberately deprioritized;
- **stalling:** a low-speed unicorn receives an urgency bump so idle/stuck animals are surfaced before productive ones.

The system is intentionally heuristic rather than omniscient. It removes bookkeeping while leaving route choice, powerup choice, district strategy and synchronized dashes to the player.

## Left-hand flow

- Hold WASD to steer.
- Releasing the final WASD key while the captain is moving commits the route and automatically selects the next needy left-side unicorn.
- There is no required cycle key.

## Mouse flow

The right side is a visual acquisition/aim game:

- Find the yellow highlighted captain.
- Click near the unicorn to acquire it. The hit target is intentionally generous.
- Drag toward a desired route while holding the button.
- Release after a meaningful drag to commit the route and automatically select the next needy right-side unicorn.
- A plain click without a drag does **not** switch captains. This leaves room for Prism tapping.

## Prism tapping

Rapid clicks on the currently highlighted mouse captain create a skill/reward layer before the final drag:

- **double click — 2X PRISM:** short boosted movement/paint/damage window and +400 score;
- **triple click — 3X PRISM:** longer boost and +600 score.

Boosted unicorns can damage structures directly and receive a 1.35× structural-damage multiplier while the boost is active. This makes fast visual acquisition useful to the town-takeover objective rather than a cosmetic reaction test.

A useful expert gesture becomes: **find → double/triple tap → drag → release → find the next glow**.

## Progression

Little Cross now teaches `CLICK MALLOW + DRAG`. The main town still releases the herd as 2 → 4 → 6, but Wave 2 introduces automatic captain rotation rather than manual handoff keys. The existing 38-second safety release remains so a player cannot be progression-locked.

## Safety retained

v0.8 browser protections remain intact: Ctrl/Meta/Alt combinations are excluded during play, blur clears active input state, `beforeunload` guards accidental close/reload where the browser permits it, and uncaught runtime errors recover to the title state.

## Qualification targets

The regression suite must permanently verify:

- browser safety guards;
- tutorial mouse acquisition and drag;
- left-side release → order → auto-select;
- mouse drag-release → order → auto-select;
- double-click Prism boost;
- distracted-unicorn priority in the Attention Director;
- 2 → 4 → 6 progression;
- competition archive integrity and the 13,312-byte hard limit.
