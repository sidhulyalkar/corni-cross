# Corni Cross Compression Lab

The competition artifact is selected by measured final ZIP size, not source-code aesthetics.

## Tournament

Every build generates three semantically equivalent candidates:

1. **raw** — readable game source concatenated exactly as development uses it;
2. **terser** — top-level mangling plus four safe compression passes;
3. **roadroller** — the Terser candidate packed through Roadroller before DEFLATE.

All candidates receive the same canvas/CSS shell and the same deterministic single-file ZIP writer. `dist/compression.json` records HTML and final ZIP bytes for every variant, and the smallest candidate becomes both `dist/index.html` and `dist/corni-cross.zip`.

This keeps compression changes measurable and reversible. Gameplay source remains readable; no gameplay feature should be manually golfed before the build system has attempted to remove the cost automatically.

## Qualification contract

CI installs exact compressor versions, runs source syntax and gameplay smoke tests, executes the compression tournament, enforces the 13,312-byte limit, validates ZIP integrity, confirms that the archive contains only root `index.html`, and uploads both the submission and compression report.

## Future experiments

Only add a compression stage when it beats the current winner on final ZIP bytes *and* survives browser qualification. Useful candidates include property transforms, alternate Terser settings, HTML/CSS-to-JS packing, ECT/advzip recompression, code-order search, and generated constant/property dictionaries.

The metric is always the exact competition ZIP. Raw, minified, or Roadroller source size is diagnostic only.
