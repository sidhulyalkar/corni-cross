# Corni Cross v0.4 Design

## Core fantasy

A quaint town has been invaded by six magical unicorns. The player is not responsible for firing attacks. The unicorns are perfectly capable of causing trouble on their own. The player's skill is deciding **which unicorn deserves steering attention right now**.

## Two-stage teaching structure

### Level 1: Little Cross

Two unicorns, a small town, one-screen layout. The tutorial teaches movement, switching, powerups, and distractions in that order. It has no punitive hard failure; reaching the small takeover goal releases the herd.

### Level 2: The Great Invasion

Six unicorns in a 3200 × 1800 town. The entire map remains visible at once. Each unicorn begins in a different region, turning the screen into a live tactical board rather than a scrolling camera problem.

## Decision loop

1. Identify an idle or distracted unicorn.
2. Switch to it.
3. Route it toward an unpainted district, destructible block, or powerup.
4. Let automatic splatter / frenzy begin doing productive work.
5. Switch away before another unicorn wastes too much time.

The desired sensation is plate-spinning with tiny magical disasters.

## Paint model

The world is represented by a 4px raster mask. A splatter rasterizes a disk into the mask. Newly touched pixels increment paint area exactly once. The visible paint layer is drawn into a matching offscreen canvas, so scoring and visual coverage share the same stamp geometry.

This avoids coarse-cell artifacts and avoids expensive `getImageData()` scans during play.

## Difficulty systems

Power is not scarce, **attention is scarce**.

- Powerups turn a well-routed unicorn into temporary autonomous productivity.
- Fountains, flowers and butterflies turn an unattended unicorn into temporary dead weight.
- Buildings and hedges create pathing topology.
- Cars create recoverable stuns and anger spikes.
- Civilians create motion, readable town life and occasional provocation.
- Four district quotas require geographic distribution rather than local farming.

## Win calibration

Current large-town target: 66% takeover plus 32% paint in every quadrant during an 88-second run.

Passive simulation should lose. A simple purposeful routing policy should win narrowly enough that human optimization still has headroom.
