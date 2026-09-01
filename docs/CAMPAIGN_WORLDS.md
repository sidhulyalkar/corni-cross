# Unicorn Stampede v0.22 — Ten-World Campaign and Mastery Ladder

## Design goal

Unicorn Stampede should get harder because the player applies familiar verbs under new environmental rules, not because direct controls become mushy or every object merely receives more HP.

The permanent vocabulary stays stable:

- WASD steers the current Blue captain.
- Releasing the final movement key leaves that unicorn running a useful route and rotates attention.
- The mouse positions the Rainbow Whip beside the current Yellow captain; clicking launches Yellow away from the cursor.
- Three successful Whips create a 3X Prism and rotate Yellow.
- Space dashes both current captains.
- Four outer landmarks + 28% combined chaos unlock Town Hall.
- Competitive score measures speed, paint, structural destruction, Prism execution, average ACTIVE herd, cleanup counterplay, optional Gate routing, and world difficulty.

Worlds mutate the *meaning* of those verbs while preserving their responsiveness.

## Little Cross — learn the permanent verbs

The four-step tutorial teaches only what never changes:

1. steer Blue and release it;
2. crack Yellow with the Whip;
3. complete a 3X Prism chase;
4. smash the Bakery.

World-specific pressure is learned through play rather than through additional mandatory tutorial chores.

## The ten worlds

| # | World | Time | Score | Primary lesson / mutation |
| ---: | --- | ---: | ---: | --- |
| 1 | **Prismborough** | 100s | ×1.00 | Orchestrate useful autonomous routes |
| 2 | **Washwater Bay** | 94s | ×1.12 | Defend successful territory from powerwashers and helicopter drops |
| 3 | **Cloudtop Heights** | 90s | ×1.25 | Predict reversing crosswinds and stronger Whip trajectories |
| 4 | **Stampede+ Circuit** | 86s | ×1.32 | Handle immediate pressure while routing through optional Prism Gates |
| 5 | **Neon Junction** | 84s | ×1.38 | Exploit periodic blackout windows that stun cleanup |
| 6 | **Frostfall Village** | 82s | ×1.44 | Plan around compounding momentum / ice-like drift |
| 7 | **Gearworks Quarter** | 80s | ×1.50 | Route through alternating horizontal conveyor bands |
| 8 | **Mirage Mesa** | 78s | ×1.56 | Anticipate continuous heat-current vertical displacement |
| 9 | **Moonfair Metro** | 76s | ×1.64 | Turn precise 3X Prism execution into accelerated combo credit |
| 10 | **Royal Rainbow Citadel** | 74s | ×1.75 | Combine Washwater, crosswind, Frostfall, Gearworks, Stampede+ and Gate pressure |

### World 1: Prismborough — orchestration

The baseline competition town. Learn to keep several useful route orders alive, trust Smart Next, choose landmark order, and balance conquest speed against broad town impact.

### World 2: Washwater Bay — defend success

Successful territory attracts counterpressure. Three roaming powerwashers move toward the strongest-painted quadrant and erase nearby paint. A helicopter telegraphs a larger drop on successful territory. Strong play rotates attention rather than over-investing indefinitely in one district.

### World 3: Cloudtop Heights — prediction

Reversing crosswinds push every live unicorn sideways. Whip behavior is more aggressive, so cursor placement becomes predictive rather than purely reactive. The player learns to aim for where a launch becomes useful *after* wind touches it.

### World 4: Stampede+ Circuit — pressure + optional routing

The campaign formally enters Stampede+ rather than hiding it as an endless-loop modifier. The town begins with extra cleanup and faster traffic. Four optional Prism Gates reward route geometry with score and temporary speed. The key lesson is choosing when a Gate is worth bending an otherwise good plan.

### World 5: Neon Junction — exploit windows

Periodic blackout pulses stun cleanup. This creates an inversion of Washwater: instead of constantly defending paint, the player gets short windows to expand aggressively while cleanup is offline. The skill is recognizing and exploiting timing windows rather than treating pressure as constant.

### World 6: Frostfall Village — commitment

Velocity compounds more strongly, creating ice-like momentum. A route that is slightly wrong becomes increasingly wrong; a well-aimed Whip can become excellent traversal. The world rewards earlier prediction and cleaner release angles.

### World 7: Gearworks Quarter — map-aware routing

Alternating horizontal bands push unicorns in opposite directions. The same nominal heading behaves differently depending on vertical position, so route planning becomes map-relative rather than purely target-relative.

### World 8: Mirage Mesa — flowing trajectories

Heat currents continuously bend vertical motion with a spatially varying sinusoid. A useful route is a curve, not a line. The player learns to think in future trajectories rather than cursor-to-target vectors.

### World 9: Moonfair Metro — combo economy

Successful 3X Prism chains earn accelerated Prism credit while the global cap remains bounded. This changes the opportunity cost of abandoning a chain: precision is more valuable here, but still competes against time, territory, cleanup and landmarks.

### World 10: Royal Rainbow Citadel — transfer exam

The Citadel deliberately does not invent one giant bespoke boss system. It combines mechanics the player already learned: Washwater response, crosswind, Frostfall momentum, Gearworks conveyors, Stampede+ pressure and Prism Gates. Difficulty comes from simultaneously applying familiar skills.

## Compression architecture

The ten-world campaign follows the creative-reserve rule: **multiply existing systems before adding new systems.**

v0.22 makes the campaign data smaller than a naïve ten-row configuration:

- all ten names live in one delimiter-compressed string vector;
- timers are derived from the world index with a short piecewise expression;
- feature masks are also derived from the world index;
- only the score-multiplier vector is explicitly stored;
- Worlds 4–9 share the Stampede+ bit and add one dominant mechanic bit;
- Citadel uses a compact combination mask rather than a new engine;
- visual identities are Canvas geometry composed from rectangles, ellipses, arcs and lines already used elsewhere;
- Prism Gates reuse high bits in the existing district mask rather than creating a separate collection-state array.

This means a new world is primarily **a new composition of old verbs**, which is both a game-design constraint and a compression strategy.

## Replay variation without strategy amnesia

Each main-world start perturbs the deterministic town seed. Generic buildings, pedestrians and local micro-layout vary between runs while major road grammar and landmark roles remain stable.

The target is **structural familiarity with local novelty**:

- players should learn what kinds of routes, landmarks, cleaners and world forces matter;
- players should not win by memorizing one coordinate script.

## Three-crown mastery

Every world supports three levels of accomplishment:

1. **Conquer** — satisfy the four-landmark + 28% chaos gate and destroy Town Hall.
2. **Territory** — finish above a world-specific paint threshold.
3. **Prism mastery** — complete enough 3X Prism-chain credit during the run.

The first three worlds preserve their established thresholds for save/gameplay compatibility:

| World | Paint crown | Prism crown |
| --- | ---: | ---: |
| Prismborough | 60% | 2 |
| Washwater Bay | 48% | 2 |
| Cloudtop Heights | 54% | 3 |

From World 4 onward, the paint threshold rises gradually with world index and Prism requirements step up in later worlds. One crown is enough to unlock the next world; three crowns remain optional mastery.

## Difficulty ladder

The intended learning progression is:

1. **Execution** — can I affect the intended captain?
2. **Attention** — can I identify which captain deserves intervention?
3. **Persistence** — can I leave useful autonomous work alive?
4. **Territory** — can I defend or exploit changes in cleanup pressure?
5. **Prediction** — can I lead moving targets under environmental forces?
6. **Map reading** — can I reason about location-dependent route physics?
7. **Economy** — can I choose among speed, damage, paint, Prism, Gates and cleanup?
8. **Transfer** — can I combine all of the above in the Citadel?

The game should never deliberately make direct input unreliable as a difficulty mechanism.

## Qualification contract

Maintained tests must prove more than the presence of world names:

- exact progression Prismborough → Washwater → Cloudtop → Stampede+ → Neon → Frostfall → Gearworks → Mirage → Moonfair → Citadel → Prismborough;
- exact timers and derived feature masks;
- Washwater erasure and helicopter telegraph;
- Cloudtop crosswind;
- Stampede+ Prism Gate reward;
- Neon cleanup blackout;
- Frostfall momentum amplification;
- Gearworks conveyor displacement;
- Mirage heat-current displacement;
- Moonfair Prism-credit acceleration;
- Citadel combined-system activation;
- the packed js13k artifact itself can boot World 10 and display campaign mastery.
