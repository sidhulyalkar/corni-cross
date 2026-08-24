# Corni Cross v0.6 Design

## Design thesis

The game should generate chaos, but the **player should generate intent**.

Random movement, traffic, civilian provocation and distractions are there to create situations. They should never make the player feel that inputs are decorative. Every time the player learns a mechanic, they gain a more powerful way to impose structure on the herd.

## Agency ladder

### 1. Direct steering

WASD and Arrow keys are two simultaneous high-authority control channels. The selected captains are larger, faster, paint wider, damage more and face exactly where the player steers.

A direct captain should feel deterministic enough that failure is legible: the player chose a bad line, hit a blocker, or committed a shared dash at the wrong time.

### 2. Rescue

Distractions are intentionally strong on unattended unicorns but weak against a controlled one. Moving a distracted captain quickly breaks the fixation and earns a RESCUE mastery event.

This turns fountains/flowers/ponds/butterflies into an attention-economy problem instead of an input-frustration mechanic.

### 3. Handoff order

Cycling a moving captain does not instantly surrender it to AI. The outgoing unicorn stores the player's last facing direction and continues that route for 2.4 seconds.

That is the core intermediate skill:

1. line up a useful corridor,
2. move with intent,
3. Shift to hand off,
4. immediately steer the next unicorn,
5. return before the order expires or chaos reasserts itself.

### 4. Captain wake

A moving captain gently biases nearby teammates on the same side. Skilled players can therefore move a small cluster through a corridor or toward a powerup without individually possessing every unicorn.

The wake is intentionally soft: it helps organization but does not turn the herd into a rigid formation.

### 5. Powerup handoff

Powerups become most interesting when combined with the handoff system. A player should route a captain into Rage Corn or Rainbow Soda, point it toward productive geometry, then switch away while the effect continues.

A rabid handoff receives explicit mastery feedback.

### 6. Synchronized dual dash

Space remains the advanced coordination mechanic because it commits both captains at once. Their facing arrows make the setup readable.

Landing productive impacts with both during the same dash window awards DOUBLE PRISM. This is intended to be a visible skill ceiling rather than a basic requirement.

## Learning progression

The tutorial teaches only the verbs that are meaningful with two unicorns: steer both, dash, collect powerups, escape distractions.

The transition into the six-unicorn town explicitly introduces handoff orders. The main run then teaches through immediate mastery callouts rather than long tutorial text.

The desired feeling is:

- first run: survive the control scheme,
- second run: discover useful handoffs,
- third run: deliberately rescue and powerup-handoff,
- later runs: set two routes in parallel and synchronize Double Prism hits while closing weak districts.

## Skill feedback

`SKILL` events are not cosmetic achievements. They name the behaviors the score system wants the player to repeat:

- RUN ORDER
- RESCUE
- RABID HANDOFF
- DOUBLE PRISM
- DISTRICT SECURED

A high takeover with few skill events should feel different from a technically sophisticated run.

## Town readability

The town remains one tactical screen. Spatial continuity is more important than cinematic camera movement.

Each building family now has a different silhouette/facade grammar so the player can learn target value without reading every label:

- Bakery: awning + display glass
- Bank: pediment + columns
- Books: brick + vertical windows
- Cafe: awning + broad storefront
- Florist: greenhouse roof + flower strip

Durability/value roughly follows visual expectation. The Bank is hard/high-value, Cafe/Bakery are easier, and the others sit between them.

Large landmarks and distractions remain distinct by geometry: Clock Tower, market, circular fountains, duck pond, hedges and flower gardens.

## Difficulty philosophy

The game should not be won by passive simulation. A no-input herd should leave much of the town untouched.

The current deterministic qualification runs show:

- passive main-town policy: roughly 24% takeover, decisive loss
- simple purposeful route/powerup policy: roughly 87% takeover, decisive win

That large separation is intentional. Human tuning should determine where ordinary first-time play lands between those anchors.

## Paint accuracy

The paint model remains a 4px persistent raster mask. Each stamp counts only pixels that were previously untouched, and the same stamp geometry is drawn to the visible offscreen paint canvas.

This keeps coverage measurement spatially meaningful while avoiding full-frame pixel scans.
