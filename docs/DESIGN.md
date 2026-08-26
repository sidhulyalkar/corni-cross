# Corni Cross v0.11 Design

## Design thesis

**Chaos proposes. The player disposes.**

Unicorn personality, traffic, civilians, cleanup crews and distractions continuously create funny problems, but direct input and learned techniques must be strong enough that an expert run looks visibly more intentional than a first run.

The competition-facing one-sentence game is:

> Six unicorns are destroying a town. Keep them productively rampaging with short WASD route orders and moving-target Prism Chase clicks, destroy four landmark setpieces, then shatter Town Hall before the town cleans up too much of your rainbow invasion.

See `TOP10_CAMPAIGN.md` for the complete current design contract.

## Control architecture

The game deliberately has two different control languages.

### Left hand — planning

`WASD` directly steers the current left captain. Releasing the final movement key while moving commits a four-second run order. The Smart Attention Director then automatically chooses the next useful left-side intervention.

### Mouse — reaction

The highlighted right captain is a moving arcade target. Clicking it splashes paint and launches it along a productive route. A second and third reacquisition within the chain window escalate to 2X and 3X Prism rewards.

### Shared action

`Space` dashes both current captains in their existing directions. It is a synchronization tool, not a required movement input.

## Cognitive-load ramp

The same vocabulary is learned and then combined:

1. **Little Cross:** two unicorns, direct movement, first Prism chain, powerup, distraction/rescue and Bakery objective.
2. **Act I — The Escape:** two unicorns in the full town, route planning and landmark navigation.
3. **Act II — Town Fights Back:** four unicorns and cleanup vans that erase rainbow progress.
4. **Act III — Full Unicorn Emergency:** all six unicorns, increased cleanup pressure and the final landmark push.

## Victory and mastery

Victory is concrete: complete Bakery, Market, Greenhouse and Clock Tower to remove Town Hall's shield, then destroy Town Hall.

Paint percentage is not a hidden second win gate. It is the quality layer. Better players paint more fresh ground, finish landmarks faster, chain more Prism hits, preserve territory against cleanup and complete the campaign with more time remaining.

## Smart Attention Director

Selection automation removes bookkeeping, not strategy. The director favors distracted, stalled, weak-area or powerup-adjacent unicorns and deprioritizes animals already following useful orders or productively rampaging.

The selected captain is accompanied by an explainable reason cue so players can learn the system instead of experiencing it as random switching.

## World-as-HUD

The town communicates state directly:

- unique rainbow paint persists on the streets;
- cleanup vans visibly erase scored paint;
- landmarks have distinct silhouettes, beacons and health state;
- Town Hall visibly remains locked until the outer four objectives fall;
- landmark destruction changes the simulation;
- soundtrack density grows with productive herd activity.

HUD numbers support the town rather than replacing it.

## Byte philosophy

Readable source remains readable. The production pipeline measures raw, Terser and Terser→Roadroller candidates and chooses the smallest final competition ZIP. Manual code golfing is a last resort, not the development model.

A new byte should ideally serve more than one role: information + spectacle, objective + environment, audio + state feedback, or mechanic + tutorial.
