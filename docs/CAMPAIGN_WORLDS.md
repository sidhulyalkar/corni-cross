# Corni Cross v0.13 — Campaign Worlds and Mastery Ladder

## Design goal

Corni Cross should get harder because the player is asked to apply familiar verbs under new rules, not because controls become less responsive or every entity simply moves faster.

The campaign therefore keeps the permanent vocabulary stable:

- WASD issues short routes to the left-side captain.
- Releasing a productive route lets the Smart Attention Director surface the next problem.
- The mouse aims a delayed Rainbow Whip beside the right-side captain.
- Successful whip hits launch the target and make the next hit harder to reacquire.
- Space couples both captains through the dual dash.
- Landmarks provide concrete victory objectives while persistent paint measures territorial quality.

Worlds mutate the *meaning* of those verbs.

## Progression

### Little Cross — Learn the permanent verbs

The tutorial teaches movement, Rainbow Whip timing, powerups, distractions, rescue and landmark destruction. It does not teach world-specific rules.

### World 1: Prismborough — Learn orchestration

The baseline competition town.

Primary lessons:

- keep multiple useful route orders alive;
- trust and understand Smart Director reassignment;
- choose landmark order intelligently;
- balance landmark destruction against persistent paint coverage;
- build reliable 2X/3X Prism Chase chains.

Time budget: **100 seconds**.

### World 2: Washwater Bay — Learn to defend success

The town begins fighting territory rather than merely obstructing movement.

New responses reuse the authoritative paint-erasure primitive:

- one additional cleanup van is active from the beginning;
- three ordinary civilians become roaming powerwashers that move toward the currently strongest-painted quadrant and erase paint around themselves;
- a helicopter patrol periodically identifies the player's strongest quadrant and performs a large water drop there.

The important strategic change is that successful territory attracts counterpressure. Players should learn to rotate attention instead of over-investing indefinitely in one district.

Time budget: **94 seconds**.

### World 3: Cloudtop Heights — Learn prediction

The core layout grammar remains recognizable, but crosswinds periodically reverse and push every live unicorn sideways. The Rainbow Whip also launches targets farther while shortening the effective chain window.

This turns the same mouse verb into a predictive targeting challenge. The player must lead moving targets, anticipate wind, and use stronger launches as traversal rather than treating them only as damage boosts.

Time budget: **90 seconds**.

## Replay variation without strategy amnesia

Each main-world start perturbs the deterministic town seed. Generic buildings, pedestrians and local micro-layout therefore vary between runs while major road grammar and landmark roles remain stable.

The objective is **structural familiarity with local novelty**:

- players should learn that landmarks, weak districts, cleaners and powerups matter;
- players should not win by memorizing one exact coordinate script.

## Three-crown mastery

Every world supports three independent levels of accomplishment:

1. **Conquer** — destroy Town Hall after removing the four outer landmark shields.
2. **Territory** — finish above a world-specific paint threshold.
3. **Prism mastery** — complete enough 3X Rainbow Whip chains during the run.

Current thresholds:

| World | Paint crown | 3X chains crown |
| --- | ---: | ---: |
| Prismborough | 60% | 2 |
| Washwater Bay | 48% | 2 |
| Cloudtop Heights | 54% | 3 |

Washwater's paint target is deliberately lower because territory is actively erased. Cloudtop's Prism target is deliberately higher because predictive whipping is the world's central mastery test.

A player can therefore progress after a one-crown clear, while replaying for three crowns remains an explicit skill goal.

## Difficulty philosophy

Difficulty should evolve along this ladder:

1. **Execution:** can I move/whip the unicorn I intend to affect?
2. **Attention:** can I identify which unicorn deserves intervention?
3. **Persistence:** can I leave useful autonomous orders running?
4. **Territory:** can I defend success when the town erases it?
5. **Prediction:** can I lead moving targets and account for environmental forces?
6. **Orchestration:** can I combine all of the above while completing landmarks quickly?

The game should never deliberately make direct controls mushy as a difficulty mechanism.

## Future world grammar

Future worlds should preferably be parameter combinations of existing primitives rather than independent engines. Candidate dimensions include:

- paint erasure shape/rate;
- wind or friction;
- traffic density;
- distraction ecology;
- landmark consequences;
- powerup frequency;
- response-agent routing;
- Rainbow Whip launch/timing parameters;
- world topology seed.

This is the creative-reserve rule: **new worlds should multiply existing systems before adding new systems.**
