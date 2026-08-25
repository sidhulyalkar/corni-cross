# Changelog

## 0.11.0 - Landmark campaign / Top-10 pass

- replaced the abstract percentage-only victory with a five-landmark campaign: Bakery, Market, Greenhouse, Clock Tower, then shielded Town Hall
- made paint percentage a quality/rank layer while Town Hall destruction is the concrete win condition
- turned the existing 2 → 4 → 6 progression into three acts: The Escape, Town Fights Back, Full Unicorn Emergency
- added cleanup vans that erase the exact scored 4px rainbow raster and can be stunned by high-energy unicorns
- added landmark-specific aftermath: market powerups, greenhouse butterfly release, clock anger escalation and final Town Hall herd frenzy
- added screen-space landmark beacons, objective health/state, locked Town Hall presentation and a direct title-screen explanation of the campaign
- added Smart Attention Director reason cues: DISTRACTED, WEAK AREA, POWERUP, STALLED and NEXT
- added lightweight adaptive procedural music that layers as more unicorns stay productive
- added first-glance tutorial/intermission copy focused on the actual objective rather than percentages
- expanded the headless suite to cover landmark gating, Town Hall shielding, cleanup erasure, act escalation and director explanations
- replaced the raw-DEFLATE-only build with a measured raw vs Terser vs Terser→Roadroller compression tournament
- Roadroller now creates several kilobytes of usable design budget while preserving readable source

## 0.10.0 - Prism Chase

- removed continuous mouse dragging and the associated cursor-corner failure mode
- made the right-side captain a moving target: click → dash → reacquire → 2X → reacquire → 3X
- added automatic reassignment when a Prism chain completes or times out
- improved Smart Attention routing with distraction, stall, district need, order/rage and powerup signals
- improved autonomous powerup and weak-area routing

## 0.9.0 - Smart Attention Director

- removed most manual character cycling from the primary loop
- releasing a productive WASD route now creates an order and automatically selects the next useful left-side intervention
- introduced auto-selection based on problem urgency instead of fixed roster order
- added strong temporary selection glow for visual reacquisition

## 0.8.0 - Mouse captain and browser hardening

- introduced mouse control for the right-side captain with arrow-key fallback
- added unload/runtime recovery guards and stronger focus-loss handling
- retained modifier-key shortcut containment

## 0.7.0 - Learn two, command six

- removed Shift/modifier keys from gameplay
- made Little Cross objective-gated so core lessons must be demonstrated before graduation
- changed the main town into a 2 → 4 → 6 unicorn progression instead of immediate six-agent overload
- added early skill-based wave releases plus safety timers
- extended directional orders and increased direct-control authority

## 0.6.0 - Agency and mastery

- made captain facing follow player input directly so shared dashes are predictable
- added directional orders, captain wake and direct-control rescue
- added mastery callouts and distinct Bakery, Bank, Books, Cafe and Florist facade grammars

## 0.5.0 - Dual Captains

- added simultaneous left/right captains, synchronized dash and richer town landmarks

## 0.4.0 - The Great Rainbow Invasion

- added autonomous splatter, precise 4px paint accounting, powerups, distractions and the full-town tactical view

## 0.3.0 - Rainbow Rampage

- pivoted from escort herding into destructible rainbow-town strategy
