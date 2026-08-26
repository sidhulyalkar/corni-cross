# Corni Cross v0.12 — Creative Reserve Architecture

## Purpose

The competition ZIP is a design budget, not a target to fill immediately. v0.12 establishes a reserve-first architecture so playtesting can still lead to new mechanics, alternate modes, richer town reactions and visual/audio tuning late in development.

## Rule 1: optimize final ZIP bytes, not readable source bytes

Readable source remains intentionally modular. The release build runs a compression tournament and chooses the smallest artifact that passes packed-runtime qualification.

The tournament now compares:

- raw source + ZIP
- Terser + ZIP
- JavaScript-only Roadroller
- deeper JavaScript Roadroller search
- whole-document Roadroller using `text/write`
- deeper whole-document Roadroller search

`compression.json` records every candidate. No manual byte golf should be accepted without showing an improvement to the final competition ZIP.

## Rule 2: apparent variety should come from grammars

Do not create a unique simulation for every funny idea.

### Town response grammar

A response agent should eventually be describable by a compact parameter tuple:

- movement mode
- erase geometry
- cadence
- vulnerability/stun behavior
- visual skin

The same underlying erase/stun code can therefore present as:

- street sweeper
- human powerwasher
- rooftop sprinkler
- helicopter water drop
- emergency cleanup crew

The player experiences five town reactions while the archive pays for one response system.

### Architecture grammar

Buildings should increasingly be generated from reusable genes:

- roof
- facade
- opening pattern
- awning/sign
- palette
- toughness/value

Visual genes should also imply gameplay. Stone reads tough, glass reads fragile, greenhouse geometry implies butterfly aftermath, tower geometry implies landmark value.

### Effect grammar

Reuse the same particle primitive for rainbow paint, water, flowers, bread/debris and landmark bursts by changing only palette, gravity, shape and lifetime.

Reuse the same procedural audio primitives for impact, warning, cleanup, Prism and landmark motifs by changing frequency/envelope patterns rather than adding independent audio systems.

### Dialogue grammar

Prefer context-conditioned phrase fragments over long literal quote lists. Landmark, cleanup and civilian state should provide nouns/verbs while a tiny grammar creates many reactions.

## Rule 3: randomness changes situations, not learned strategy

Runs should vary in layout and pressure while preserving strategic invariants.

Potential town DNA fields:

- road orientation / block offsets
- landmark permutation
- district architectural palette
- powerup bias
- distraction pockets
- cleanup-response mix

The generator must preserve reachability, fair landmark spacing and useful route choices. Players should learn transferable ideas such as powerup timing, weak-area recovery, Prism Chase and cleanup interception rather than memorize coordinates.

## Rule 4: every feature should do multiple jobs

Examples:

- Rainbow Whip = theme + mouse aiming + animation + difficulty + Prism progression.
- Greenhouse = landmark + visual identity + objective + butterfly consequence.
- Cleanup agent = enemy pressure + territory reversal + secondary target + act escalation.
- Paint raster = visible town transformation + exact score state + cleanup authority.
- Adaptive music = audio identity + productivity feedback + mastery reward.

A feature that performs only one minor job should face a very high bar for inclusion.

## Rainbow Whip contract

The mouse interaction is now spatial rather than a direct UI click.

1. The selected mouse captain carries a faint animated whip orbit.
2. The player clicks beside the unicorn, inside a generous annulus.
3. A three-stripe rainbow lash materializes from the cursor and takes ~110 ms to arrive.
4. The target may move during that travel time, so the player learns to lead the lash.
5. A connection creates paint, sound and a dash away from the whip origin.
6. Subsequent successful lashes within the Prism window produce 2X and 3X states.
7. The third connection creates the large structural/paint reward and hands attention onward.

The mechanic should be difficult because the unicorn moved, never because the valid click region is invisible.

## Reserve policy

During playtesting, track for every proposed addition:

- final ZIP delta
- first-run comprehension delta
- replay/variety value
- whether it reuses an existing grammar
- whether it improves one of the judged dimensions: gameplay, controls, graphics, audio, theme/innovation

Prefer changes that improve several dimensions at once.

Do not spend the final reserve merely because it exists. Keep enough margin for late browser fixes, accessibility/readability tuning and competition packaging surprises.
