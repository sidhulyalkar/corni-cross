# Corni Cross v0.7 Design

## Design thesis

**Chaos proposes. The player disposes.**

Unicorn personality, traffic, civilians and distractions should continuously create funny problems, but direct input and learned techniques must be strong enough that an expert run looks visibly more intentional than a first run.

## Cognitive-load ramp

The game now teaches the same control architecture it later tests.

### 1. Little Cross: two direct captains

Bolt is permanently associated with the left/WASD channel and Mallow with the right/Arrow channel. The tutorial has no meaningful time pressure and cannot complete from paint percentage alone.

The player must demonstrate the interaction sequence before graduation. This prevents accidental tutorial completion.

### 2. Big town Wave 1: route planning

Only Bolt and Mallow are active. The town is already large, but the control problem remains two-dimensional: keep both captains productive and learn where powerups, distractions and valuable structures live.

Wave 2 releases at 10% takeover or after a safety timeout.

### 3. Big town Wave 2: command persistence

Daisy and Comet join. The game now introduces `Q` and `Enter` handoffs. A moving outgoing captain receives a four-second run order.

The preferred unlock is one successful handoff on each side. A safety timeout releases the final pair if the player never performs them.

### 4. Big town Wave 3: full orchestration

Bumper and Pickles join. Only now does the six-unicorn game exist.

At this point the player has already practiced direct control, rescue, powerups and handoff persistence. The final challenge is combining those tools rather than discovering them under pressure.

## Input safety and ergonomics

Modifier keys are no longer gameplay controls. Left Shift sat too close to Ctrl and increased accidental browser-shortcut risk under frantic play.

The ergonomic layout is:

- left hand: `WASD` + `Q`
- right hand: arrows + `Enter`
- shared action: `Space`

During `play`, Ctrl/Meta/Alt combinations are cancelled before they enter the game key state. This both avoids stale modifier state and blocks common cancellable browser shortcuts.

## Agency tools

### Direct steering

Captain input is high-authority, sets facing directly and now has higher acceleration/top speed. A player should feel responsible for a bad line rather than feel that the simulation ignored them.

### Rescue

Distractions are strong against unattended unicorns and intentionally weak against direct control. Reasserting control is a skill event.

### Four-second run orders

A moving captain handed off with `Q` or `Enter` keeps its chosen heading for four seconds, continues painting and resists distractions. This makes one control channel capable of maintaining several concurrent intentions.

### Captain wake

Nearby autonomous teammates receive a soft bias from the current captain's movement. It rewards route planning without making the herd rigid.

### Powerup handoff + shared dash

Powerups provide temporary autonomous productivity. The shared Space dash remains the high-risk/high-reward coordination mechanic, culminating in DOUBLE PRISM when both sides connect productively.

## Scoring and difficulty

The town remains the score surface. Ground paint is authoritative at 4px resolution and structural damage is weighted by target value.

Current win gate:

- 68% total takeover
- 35% unique ground paint in every quadrant
- 105 second large-town clock

Deterministic local anchors for v0.7:

- passive/no-input policy: roughly 34% takeover, loss
- simple purposeful dual-route policy: roughly 89% takeover, win

The gap is intentional. Improvement should come primarily from learned control, not favorable randomness.
