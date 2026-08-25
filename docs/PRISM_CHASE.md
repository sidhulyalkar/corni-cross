# Corni Cross v0.10 — Prism Chase

## Why this revision exists

The v0.9 mouse drag mechanic solved keyboard overload but created a new problem: aiming and holding a drag while the whole town moved was too cognitively expensive, and coordinate edge cases could make the right captain feel stuck. v0.10 removes mouse steering entirely.

The mouse side is now a moving-target arcade challenge. The player does not drag a route. They **find and hit the highlighted unicorn**.

## Prism Chase

A successful click on the current yellow captain:

1. creates an immediate rainbow paint burst at the unicorn;
2. asks its smart AI for a fresh productive route;
3. launches the unicorn along that route;
4. opens a 0.6-second chain window.

The dash means the target physically moves after every hit. To continue the chain, the player has to reacquire the same moving unicorn.

- hit 1: dash + paint burst
- hit 2 before timeout: **2X PRISM**, +400 and a stronger temporary boost
- hit 3 before timeout: **3X PRISM**, +900, a large area burst, nearby structural damage, and immediate smart reassignment

If the 0.6-second window expires after hit 1 or 2, the Attention Director automatically selects the next right-side problem. Missing a chain costs bonus opportunity, not game flow.

The intended expert rhythm is:

> find glow → click → chase → click → chase → click → instantly acquire next glow

## Smarter Attention Director

Each side still has three possible unicorns, but captain assignment is no longer cyclic. The outgoing captain is excluded and every remaining live candidate receives an urgency score.

The director now considers:

- **distraction** — by far the strongest signal;
- **stalling** — low-speed unicorns are surfaced;
- **district need** — a unicorn standing in a poorly painted quadrant is more valuable to control than one in an already-saturated quadrant;
- **existing run orders** — a unicorn already executing a useful command is deprioritized;
- **productive rage** — a unicorn already rabid and causing useful autonomous damage is deprioritized;
- **nearby powerups** — a small urgency bonus is given when the player can immediately convert attention into a useful pickup.

This director is intentionally not optimal in a global-planning sense. It is an attention heuristic. It should reliably surface useful decisions without solving the player's route strategy.

## Smarter autonomous routing

Unattended unicorns also have a better default policy:

- nearby powerups are considered from a larger radius and with higher probability;
- when no urgent target or powerup dominates, an unattended unicorn is biased toward the weaker of the two quadrants on its half of town;
- rage still allows structure-seeking behavior to override coverage routing.

This reduces wasted wandering while preserving personality noise, distractions, collisions and emergent chaos.

## Difficulty increase

The new controls are easier to understand, so the town is allowed to demand more:

- main timer: **100 seconds** (down from 105)
- overall takeover goal: **72%** (up from 68%)
- minimum unique paint in every quadrant: **38%** (up from 35%)

The player gains efficiency from the smarter director, but must convert it into fast decisions and successful Prism chains.

## Left hand

The left half remains deliberate route control:

- hold WASD to steer;
- release the final WASD key while moving;
- the outgoing captain receives a four-second directional order;
- the director immediately chooses the next left-side problem.

This creates a useful contrast: **left hand plans routes, mouse hand executes reaction chains**.

## Tutorial

Little Cross now teaches:

1. WASD movement;
2. click the highlighted mouse unicorn to trigger a dash;
3. reacquire and click it again to understand the chain window;
4. powerups;
5. distractions;
6. rescue;
7. takeover.

The shared Space dual-dash remains discoverable from the title/HUD rather than interrupting the mouse-chain lesson.

## Permanent qualification contract

The headless suite must verify:

- browser safety containment;
- first mouse hit creates a click-dash;
- second moving-target hit creates a Prism chain;
- left release creates a run order and smart reassignment;
- third mouse hit produces immediate smart reassignment;
- a timed-out partial chain also auto-reassigns;
- a distracted unicorn beats an already-ordered unicorn in director priority;
- 2 → 4 → 6 progression remains valid;
- archive contains exactly one root `index.html` and remains at or below 13,312 bytes.
