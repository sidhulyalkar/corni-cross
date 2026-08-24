# Corni Cross Playtest / Release Checklist

## Build integrity

- [ ] all four source modules pass `node --check`
- [ ] `npm run build` completes
- [ ] `npm run size` reports <= 13,312 bytes
- [ ] submission ZIP contains `index.html` at archive root
- [ ] game starts offline without network requests

## First 60 seconds

- [ ] title makes the premise and controls legible without README context
- [ ] first-run tutorial cannot deadlock if the player experiments early
- [ ] whistle direction is visually understandable
- [ ] shoo direction is visually understandable
- [ ] dash feels materially different from normal movement
- [ ] first crossing demonstrates why herd positioning matters

## Herd feel

- [ ] individual unicorns feel related but not identical
- [ ] cohesion does not collapse into a single overlapping blob
- [ ] recovering one straggler is satisfying rather than tedious
- [ ] the herd cannot permanently soft-lock behind props
- [ ] Prism Burst creates an obvious temporary power spike

## Traffic / town

- [ ] car paths can be read before contact
- [ ] bus contact is dramatic but recoverable
- [ ] fountains noticeably bend trajectories
- [ ] food cart attraction is discoverable during normal play
- [ ] construction meaningfully changes routing
- [ ] pigeons add life without obscuring hazards

## Feedback

- [ ] collisions communicate impact through motion, particles, BONK text and sound
- [ ] Rainbow Chain state is visible at a glance
- [ ] Prism-ready state is unmistakable
- [ ] mute and pause work after audio has initialized
- [ ] end screen makes improvement targets obvious

## Browser pass

- [ ] Chromium desktop
- [ ] Firefox desktop
- [ ] Safari desktop if available
- [ ] 16:9 viewport
- [ ] ultrawide viewport
- [ ] lower-resolution laptop viewport
- [ ] keyboard + mouse only, no touch assumptions

## Competition submission

- [ ] exact final ZIP size recorded in README / release notes
- [ ] exact Git SHA recorded with submission
- [ ] competition-hosted draft tested, not only local build
- [ ] screenshots taken from the exact submitted build
- [ ] no code changes after final qualification without rebuilding and rechecking ZIP
