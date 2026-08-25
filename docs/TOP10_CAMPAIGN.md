# Corni Cross v0.11 — Top-10 Campaign Design Contract

## One-sentence game

**Six unicorns are destroying a town. Keep them productively rampaging with short WASD route orders and moving-target Prism Chase clicks, destroy four landmark setpieces, then shatter Town Hall before the town cleans up too much of your rainbow invasion.**

Every production decision should make that sentence clearer, deeper, more readable, or more satisfying. New mechanics that do not reinforce it should replace something weaker rather than simply accumulating.

## Design principles

### 1. Randomness asks questions; player skill answers them

Unattended unicorns may wander, become distracted, chase powerups, rage at buildings or collide with traffic. Direct control remains authoritative. The player should lose because attention/route/aim choices were poor, not because the simulation ignored a command.

### 2. Attention is the scarce resource

The player should not spend effort selecting characters. The Smart Attention Director chooses which unicorn most needs intervention. The player spends attention on *what to do with that unicorn*.

### 3. Success creates difficulty

Prism Chase is the signature mouse rule. Each successful click dashes the target away, making the next click harder. The three-hit chain turns accuracy into escalating paint, speed, damage and spectacle.

### 4. The town is the scoreboard

The world should communicate progress before the HUD does:

- rainbow coverage is persistent spatial score;
- cleanup vans visibly erase that work;
- completed landmarks visibly transform;
- Town Hall remains visibly locked until the first four objectives fall;
- increasingly complete music and rainbow atmosphere communicate a productive herd.

### 5. One object should perform multiple jobs

Landmarks are simultaneously navigation targets, campaign objectives, structural-value targets, visual variety, spectacle moments, audio cues, strategic modifiers and tutorial anchors.

## Campaign arc

### Tutorial — Little Cross

Two unicorns only. No six-animal cognitive load. The tutorial requires demonstrated interactions rather than elapsed time:

1. steer Bolt;
2. click Mallow;
3. reacquire Mallow to make a Prism chain;
4. collect a powerup;
5. experience a distraction;
6. rescue the distracted unicorn with direct control;
7. destroy the Bakery.

The tutorial teaches the actual verbs used in the main game and ends with a real miniature version of the landmark objective.

### Act I — The Escape

Two unicorns in the full town. The player establishes the mental model of left-hand route planning, right-hand Prism Chase, visible landmark targets and persistent rainbow coverage.

### Act II — The Town Fights Back

Four unicorns. Cleanup vans enter and erase the exact same 4px raster cells that score paint coverage. They can be stunned by productive high-energy unicorn states. The game changes from expansion to expansion-versus-decay.

### Act III — Full Unicorn Emergency

All six unicorns. More cleanup pressure, denser procedural music, multiple simultaneous useful orders, harder visual reacquisition and the final objective push.

## Landmark campaign

The main binary win condition is not a coverage percentage.

Four outer objectives must be completed:

- Bakery
- Market
- Greenhouse
- Clock Tower

Then Town Hall becomes vulnerable.

Landmark consequences intentionally change the simulation:

- **Bakery:** comic civilian response plus large paint event.
- **Market:** releases useful rampage powerups.
- **Greenhouse:** releases butterflies, converting success into a new distraction hazard.
- **Clock Tower:** globally raises herd anger, escalating the endgame.
- **Town Hall:** triggers full-herd frenzy and the victory sequence.

Paint percentage remains a high-skill ranking/scoring layer. A player can understand victory without reading a decimal but still optimize coverage over repeated runs.

## Smart Attention Director

For each side of the herd the outgoing captain is excluded and candidates are ranked by urgency. Important signals include:

1. distraction;
2. stalled/slow movement;
3. weak local paint coverage;
4. useful nearby powerup;
5. active run order, which reduces urgency;
6. productive frenzy/rage, which reduces urgency.

The selected captain receives a strong temporary ring plus a reason label:

- DISTRACTED
- WEAK AREA
- POWERUP
- STALLED
- NEXT

The AI must be explainable enough that repeated play teaches the player how the system thinks.

## Control grammar

### Left channel

`WASD` is deliberate route planning. Releasing the last movement key while the captain has momentum creates a four-second order and asks the director for the next useful left-side intervention.

### Right channel

The mouse is a target-acquisition game, not continuous steering:

- click glowing captain;
- target splashes paint and dashes;
- reacquire within the chain window;
- second hit creates 2X PRISM;
- third hit creates 3X PRISM, a structural burst and immediate reassignment.

### Shared action

`Space` dashes both active captains in their current directions. It is the high-risk synchronization button rather than a required movement verb.

## Difficulty philosophy

Difficulty should come from:

- deciding which objective deserves attention;
- maintaining productive orders while cleanup erases territory;
- reading Smart Director cues quickly;
- reacquiring a moving Prism target;
- deciding whether to greed for hit two/three;
- exploiting landmark aftermath and powerups;
- covering fresh ground instead of repainting existing cells;
- coordinating simultaneous productive unicorns.

Difficulty should *not* come from hidden selection controls, weak steering authority, unexplained AI switches, browser shortcut collisions or needing to parse several percentage gates before understanding how to win.

## Audio/visual economy

The game uses procedural primitives and WebAudio. Any byte spent on presentation should ideally communicate state as well as decorate it.

Examples:

- captain ring color explains AI selection reason;
- landmark beacon is navigation + objective state;
- paint haze communicates global progress;
- soundtrack density communicates number of productive unicorns;
- setpiece particles communicate landmark completion;
- cleanup van animation communicates active score decay.

## Compression discipline

Human-readable source is the design surface. Production ugliness belongs in the build pipeline.

The build compares raw, Terser and Terser→Roadroller output using the same final ZIP writer and selects by final competition archive size. Compression changes are accepted only when they preserve qualification behavior.

The hard constraint is always the exact final `corni-cross.zip <= 13,312 bytes`.

## Human playtest gates before competition freeze

A candidate should not be treated as submission-ready until fresh players can usually:

- explain the objective after seeing the title/tutorial;
- get one satisfying successful interaction within the first 30 seconds;
- identify a landmark without reading instructions outside the game;
- understand why at least one Smart Director switch occurred;
- deliberately make a 2X Prism chain;
- recognize that cleanup vans erase progress;
- describe a strategy they want to try on a second run;
- voluntarily replay.

Advanced players should show measurable improvement in unique paint, landmark timing, chain frequency, wasted-attention time and final score without needing additional controls.
