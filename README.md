# Corni Cross

**Corni Cross: Rainbow Rampage** is a tiny desktop arcade strategy game for the js13kGames 2026 theme **Unicorns and Rainbows**.

Six unruly unicorns are loose in one procedural town. You can directly control only **one unicorn at a time**. The others continue roaming, getting provoked by citizens and traffic, and causing autonomous rainbow chaos. Your job is not to save the town. Your job is to orchestrate the most spectacularly efficient rainbow takeover possible before the 90-second clock expires.

The active prototype is tracked in draft **PR #6** on `agent/v0.3-rainbow-rampage`.

## Win condition

The town is the scoreboard. `RAINBOWED %` combines:

- **56% surface area coverage** from unique 80 px town cells painted by unicorn movement and horn beams
- **44% structural volume** from weighted damage to buildings, fountains and street props

Reach **55% RAINBOWED** by the end of the 90-second run to win. Higher coverage and cleaner multi-unicorn destruction produce better scores.

## Controls

| Input | Action |
| --- | --- |
| `WASD` / arrows | Steer the selected unicorn |
| Mouse | Aim horn / charge direction |
| Left mouse | Fire rainbow horn beam |
| `Space` | Magical charge / smash |
| `Shift` | Cycle to the next unicorn |
| `1`–`6` | Select a unicorn directly |
| `M` | Mute / unmute |
| `P` / `Esc` | Pause |

## Why switching matters

Every unicorn has a different speed, wildness and smash-power profile plus a live **ANGER** value. Non-selected unicorns choose their own movement targets. Once sufficiently angry they begin seeking nearby destructible objects and can keep smashing after you switch away.

The intended expert loop is:

1. **Prime** a unicorn by charging, firing magic, getting heckled, or even taking a recoverable traffic bonk.
2. **Aim** that anger at a dense or high-value town block.
3. **Release** it by switching to another unicorn.
4. **Repeat** elsewhere while the first unicorn continues autonomously.
5. Keep several unicorns causing recent destruction at once to raise the live **TEAM ×N** multiplier.

This turns switching into spatial plate-spinning rather than character selection.

## Scoring better

- **Spread first.** Six unicorns painting six districts beats six unicorns repainting the same street.
- **Prime → release → switch.** High anger is most valuable when an autonomous unicorn has useful structures nearby.
- **Use charge for volume.** `Space` carries large momentum through clustered buildings and props.
- **Use the horn beam for precision.** Left click fills unpainted surface cells and finishes partially rainbowed structures without repositioning.
- **Keep destruction continuous.** Sustained damage grows `COMBO ×N`.
- **Overlap autonomous rampages.** Multiple unicorns with recent paint/damage activity raise the separate `TEAM ×N` multiplier.
- **Treat traffic as risk/reward.** Cars stun and cost time, but also spike anger. Advanced play can deliberately turn a bad-looking bonk into a useful autonomous rampage.
- **Read the town minimap.** District bars show structural destruction and unicorn dots show where your six agents are distributed.

## Town life

The city contains many non-combat civilians. They flee nearby unicorns, cheer, complain and occasionally provoke them with speech bubbles such as `NOT THE BAKERY!`, `Honestly? Iconic.`, `Who insures magic?`, and the inadvisable `Glitter goat!`.

People are never destruction targets. Contact causes fleeing and comic reactions rather than injury. Town destruction is colorful and procedural: cracked geometry, rainbow saturation, debris particles, trails and synth feedback.

## 13KB architecture

Everything is generated at runtime using Canvas 2D and WebAudio. There are no image, font or audio assets.

```bash
npm run dev
npm test
```

The build pipeline creates:

- `dist/index.html` — complete single-file game
- `dist/corni-cross.zip` — competition archive

The CI gate hard-fails above **13,312 bytes**. The first CI-qualified Rainbow Rampage rewrite is **8,945 bytes zipped**, leaving **4,367 bytes** for tuning and final polish.

## Current qualification priorities

1. tune the 55% win threshold against real play rather than simulation alone
2. tune autonomous rage so unattended unicorns feel useful but not optimal without intervention
3. tune building durability and score weights to create recognizable high-value routes
4. make switching cadence readable enough that players understand why TEAM multiplier increased
5. qualify Firefox / Chromium / Safari desktop and common aspect ratios
6. spend the remaining byte budget only on interactions that repeatedly improve playtest enjoyment
