# Corni Cross v0.5 Design

## Core fantasy

A quaint town is being overrun by six magical unicorns. You are not a shooter and you are not a shepherd. You are operating two enormous, barely cooperative captains while four unattended unicorns keep making their own decisions.

The desired feeling is **split-brain arcade logistics**: one hand fixes the left half of town while the other hand steers a second crisis on the right.

## Dual-captain architecture

The herd is organized into two stable spatial teams:

- left team: Bolt, Daisy, Bumper
- right team: Mallow, Comet, Pickles

`WASD` always controls one left-team captain and arrows always control one right-team captain. Left Shift and Right Shift rotate the captain within the corresponding trio.

This replaces six-character cycling with two persistent fields of attention. Unselected herd members retain autonomous AI.

## Shared dash

`Space` dashes both captains at once along their current facing vectors.

This is intentionally not a free mobility button. The player should line up two useful trajectories before firing it. If both captains damage or collect a useful target during one dash window, the game awards **DOUBLE PRISM +2500**.

The mechanic converts simultaneous control into a timing challenge rather than merely doubling player power.

## Captain authority

A controlled unicorn visibly grows to roughly 1.5× scale. The same state has gameplay authority:

- wider automatic paint footprint
- larger collision / pickup radius
- increased structural damage
- more readable civilian avoidance

The visual and mechanical enlargement make control state unmistakable even in the zoomed-out full-town view.

## Town grammar

The 3200 × 1800 town now contains four named visual districts plus clearer landmarks:

- storefront blocks with readable shop signs
- a high-value Clock Tower
- a destructible market cluster
- fountains and a duck pond
- flower gardens and moving butterflies
- hedges, crosswalks and traffic corridors
- larger buses mixed into normal traffic

Powerups create productive routing goals while distractions create attention debt.

## Paint model

The 4px persistent raster mask remains authoritative. Paint area is incremented only when a previously untouched mask pixel enters a splatter disk. The visible offscreen paint canvas receives the same geometry.

No per-frame image scan is required.

## Difficulty

v0.5 raises the large-town gate to 70% takeover plus 38% ground coverage in every quadrant. Passive AI remains far below this target, while a simple policy that actively routes both captains through powerups can exceed it.

The intended mastery ladder is:

1. keep both captains moving
2. rotate each trio without losing spatial orientation
3. rescue distractions before they become dead time
4. route powerups, then rotate away while frenzy works autonomously
5. align synchronized dashes for double impacts
6. use quadrant coverage rather than raw destruction as the late-run routing signal
