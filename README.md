# 🦄 Unicorn Stampede

**A ten-world, six-unicorn arcade-strategy score chase built for js13kGames 2026.** You directly control two unicorns at a time while the other four keep executing the routes and impulses you leave behind. The rhythm is **steer → release → whip → switch → improvise**, then carry that skill through increasingly hostile towns and do it faster, louder, and cleaner than everyone else.

<p align="center">
  <img src="docs/how-to-play.svg" alt="Unicorn Stampede competitive how-to-play guide" width="100%" />
</p>

## 🎮 Play it

On `main`, the repository keeps a qualified `dist/` snapshot:

- **`dist/local.html`** — recommended standalone playable build.
- **`dist/unicorn-stampede.zip`** — exact js13k submission archive.
- **`dist/index.html`** — aggressively packed competition HTML.
- **`dist/preview.html`** — browser-safe self-contained build.
- **`dist/compression.json`** — exact compression/size provenance.

v0.22 is developed in draft PR #11 on top of the qualified v0.21 competitive-scoring branch. It remains draft until the ten-world campaign, title experience, and packed size are independently qualified and human-playtested.

## ✨ The title screen is the game in miniature

The v0.22 title is an animated procedural arcade poster rather than an instruction wall:

- six unicorns visibly charge through a silhouetted town with rainbow trails;
- a shielded Town Hall and rainbow arcs establish the destruction fantasy before the first click;
- **ENTER / SPACE** is the obvious Play action;
- **A / D** exposes the current unlocked world and `Wn/10` campaign position;
- **L** exposes the Top 50 and best score;
- the permanent Blue / Yellow control grammar and the `4 landmarks + 28% chaos → Town Hall` conquest rule stay visible without competing with the hero scene.

The readable/local build spends bytes on this presentation. The 13 KB submission uses a tighter version of the same identity and preserves the ten-world progression contract.

## ⚡ The 20-second mental model

You have **six unicorns**, but only two direct-control roles:

| Role | Unicorns | Your input | What happens next |
| --- | --- | --- | --- |
| 🔵 **Blue** | Bolt, Daisy, Bumper | Hold **WASD** | Release the final key to leave that unicorn running and rotate attention |
| 🟡 **Yellow** | Mallow, Comet, Pickles | Aim beside Yellow and **click** | The Rainbow Whip launches it away from the cursor; 3X Prism rotates Yellow |
| 🌈 **Others** | everyone not currently selected | none | They keep following useful routes / local AI |

The campaign introduces this as **2 → 4 → 6**. You are not meant to micromanage six characters. You are meant to create useful motion, leave it alive, and jump to the next high-value problem.

## 🕹️ Controls

### Blue: route planning

- **W / A / S / D** — steer the current Blue unicorn.
- **Release the last held movement key** — commit its current direction and let it keep running.
- When another Blue is available, Smart Next can hand your control to the unicorn that most needs intervention.

Think: **“that route is good enough; what else can I improve?”**

### Yellow: Rainbow Whip / Prism Chase

- Move the mouse. The large coiled rainbow cursor is your Whip; its white center is the exact strike origin.
- Aim **beside** the highlighted Yellow unicorn, inside the glowing orbit.
- **Left click** — crack instantly. Yellow launches *away from your cursor*, so position is direction.
- Reacquire and hit again for **2X**, then **3X Prism**.
- 3X gives a strong reward and rotates control to another Yellow.

The best Whip is rarely just a hit. It should launch Yellow toward useful paint, a landmark, a powerup, a cleaner, a Prism Gate, or the next route.

### Shared / utility

- **Space** — dash both current captains.
- **A / D on the title** — select an unlocked campaign world.
- **L on title/results** — open the top-50 leaderboard.
- **P** or **Esc** — pause. `Esc` also closes the leaderboard.
- **M** — mute/unmute.
- **T on title** — replay Little Cross.

## 🏙️ Conquest is not the same as a good score

Every town has five landmark objectives:

1. Bakery
2. Market
3. Greenhouse
4. Clock Tower
5. Town Hall

Town Hall has **two locks**:

1. destroy the first four landmarks;
2. reach at least **28% combined town chaos** from paint coverage + structural destruction.

Only then can Town Hall be smashed to complete the conquest.

That rule exists because landmark sniping should not be enough. A player who races through the mandatory buildings while barely affecting the town can finish, but cannot produce an elite leaderboard run.

## 🏁 Competitive score

Your final score combines several independent kinds of skill instead of rewarding one exploit:

- **Speed** — every second left is worth points.
- **Paint coverage** — spread the stampede across the map.
- **Structural destruction** — wreck more than the mandatory objectives.
- **Prism execution** — successful 3X chains matter, with a cap to prevent farming.
- **Orchestration** — maintaining a high average `ACTIVE` herd is valuable.
- **Counterplay** — stunning cleanup vehicles matters.
- **Advanced routing** — Prism Gates add optional score and speed opportunities from World 4 onward.
- **Difficulty** — the same base skill score is worth progressively more in harder worlds.

The live HUD shows a projected score while you play, so you can see whether a decision is improving the run.

### Score classes

| Tier | Score | What it means |
| --- | ---: | --- |
| **LOW** | `< 120,000` | A clear or partial run with little optimization |
| **MEDIUM** | `120,000–189,999` | Solid play with some speed / territory / combo quality |
| **HIGH** | `190,000–259,999` | Strong multi-system execution |
| **HIGHER** | `260,000–339,999` | Expert orchestration |
| **HIGHEST** | `340,000+` | Record-hunting territory |

The exact formula is documented in [`docs/COMPETITIVE_SCORING.md`](docs/COMPETITIVE_SCORING.md). These bands are design goals, not fixed population percentiles; once enough real runs exist, they can be recalibrated from the observed distribution without changing score ordering.

## 🌍 Ten-world campaign

Winning a world advances directly into the next one. A single-crown conquest unlocks the next world; replaying for stronger crowns and leaderboard score remains optional mastery.

| # | World | Time | Score | Dominant remix |
| ---: | --- | ---: | ---: | --- |
| **1** | **Prismborough** | 100s | ×1.00 | Baseline orchestration exam |
| **2** | **Washwater Bay** | 94s | ×1.12 | Powerwashers + telegraphed helicopter water drops |
| **3** | **Cloudtop Heights** | 90s | ×1.25 | Reversing crosswinds + stronger predictive Whips |
| **4** | **Stampede+ Circuit** | 86s | ×1.32 | Encore pressure, extra cleanup, faster traffic, Prism Gates |
| **5** | **Neon Junction** | 84s | ×1.38 | Blackout pulses temporarily disable cleanup |
| **6** | **Frostfall Village** | 82s | ×1.44 | Ice-like momentum compounds every route and Whip |
| **7** | **Gearworks Quarter** | 80s | ×1.50 | Alternating conveyor bands push routes sideways |
| **8** | **Mirage Mesa** | 78s | ×1.56 | Heat currents bend vertical movement |
| **9** | **Moonfair Metro** | 76s | ×1.64 | 3X Prism chains accelerate combo credit |
| **10** | **Royal Rainbow Citadel** | 74s | ×1.75 | Wash + wind + ice + conveyors combine into the final exam |

### Why the later worlds fit inside js13k

Worlds 5–10 are not six independent engines. v0.22 encodes their identity through a tiny compositional grammar:

- world names are one shared string vector;
- timers are **derived mathematically** rather than stored ten times;
- feature masks are **derived from the world index** rather than stored ten times;
- only the score-multiplier vector remains explicit;
- later worlds reuse the same wind, cleanup, Whip, velocity, paint, Prism Gate, and movement primitives in different combinations;
- visual accents are procedural Canvas geometry rather than image assets.

The final Citadel is therefore mostly a *composition* of mechanics already paid for elsewhere. More game emerges from combinations rather than new object systems.

## 🏆 Top-50 leaderboard

The hosted/local build includes a leaderboard layer **outside the 13 KB competition payload**.

- Finish a conquest and the underlying run metrics are recorded.
- Press **L** from the title or results screen to view the top 50.
- A reachable shared service is labeled **GLOBAL TOP 50**.
- If the service is unavailable, the game falls back to this browser's saved scores and clearly labels them **LOCAL TOP 50**.
- v0.22 records all ten world identities in leaderboard rows.

The payload stores the score *and* its ingredients: world, time, paint, destruction, Prism chains, average ACTIVE, cleanup stuns, Prism Gates, duration, and game version.

A real public leaderboard must **recompute the score server-side** rather than trust the submitted number. The client contract is implemented in `src/leaderboard.js`; persistent global storage remains intentionally separate from the js13k game payload.

## 🌪️ How the game should feel

A strong sequence might look like this:

1. steer Bolt toward the Market;
2. release him before arrival so he keeps doing useful work;
3. Whip Mallow from below-left so the launch crosses an unpainted district and clips the Greenhouse;
4. abandon the 3X chase because a cleaner is deleting your strongest territory;
5. rotate Blue, stun the cleaner while boosted, and send that unicorn toward the Clock Tower;
6. use `Space` only when both current captains can turn the dash into value;
7. glance at the projected score and decide whether the run needs more speed, destruction, paint, or ACTIVE herd time;
8. in later worlds, account for wind / ice / conveyors / heat currents *before* committing the route;
9. break Town Hall only when ending now is worth more than squeezing extra score from the remaining seconds.

The tension is deliberate: **finishing earlier preserves the time bonus, but staying longer may earn paint, damage, Prism, ACTIVE, Gate, and cleanup points.** The best run finds the frontier between those incentives.

## 🧠 Strategies worth learning

### Route-and-rotate

Once Blue has a productive trajectory, stop babysitting it. Release it and solve another problem. High scores depend on several acceptable plans existing simultaneously.

### Aim Whips for aftermath

Cursor placement determines Yellow's launch vector. Use one crack to satisfy multiple objectives: continue a chain, cross weak territory, collide with an objective, grab a powerup, intercept cleanup, or thread a Prism Gate.

### Do not worship 3X

Prism chains are valuable, but they are capped and opportunity cost matters. Dropping a chain to save a district or finish a critical route can be the higher-scoring decision. Moonfair changes that arithmetic by accelerating chain credit, so the same habit should not be applied blindly everywhere.

### Treat `ACTIVE` as a mastery meter

A high `ACTIVE` count means several unicorns are productive. That contributes directly to score, but it also causes stronger pressure. You are rewarded for sustaining success under the consequences of success.

### Read the world, not just the unicorn

Frostfall exaggerates momentum. Gearworks changes horizontal drift by band. Mirage bends vertical motion. Cloudtop and Citadel push the whole herd. Skilled play becomes prediction: aim for where the route will become useful after the environment touches it.

### Destroy beyond the objective list

Mandatory landmarks get you through the campaign; broad structural destruction gets you up the board. The town itself is part of the score surface.

### Fight cleanup when the math says so

A cleaner stun scores directly *and* protects painted territory. Neon temporarily handles some of that work for you; Washwater and Citadel do the opposite and attack successful territory harder.

### Graduate into multipliers

Prismborough is where you learn a route grammar. The real record chase moves outward because later worlds pay substantially more for executing the same fundamentals under more hostile dynamics.

## 🧪 Little Cross tutorial

The tutorial deliberately teaches only permanent verbs:

1. steer Blue with WASD and release it;
2. crack Yellow with the Whip;
3. complete a 3X Prism chase;
4. smash the Bakery.

The campaign then teaches attention switching, cleanup, world hazards, score chasing, and advanced routing through play rather than through a wall of instructions.

## 🦄 The herd

- 🔵 **Bolt** — fast coverage.
- 🔵 **Daisy** — steadier placement.
- 🔵 **Bumper** — heavier impact.
- 🟡 **Mallow** — controlled Whip target.
- 🟡 **Comet** — quick Prism chaser.
- 🟡 **Pickles** — wilder momentum.

Their differences are intended to become something you feel and exploit rather than a stat sheet you must memorize.

## 🛠️ Development

```bash
npm install
npm run build:fast   # quick browser-safe dist/local.html
npm test             # behavior + ten-world + compression + packed-runtime qualification
npm run build        # full compression tournament
```

Readable gameplay source lives in `src/`. The leaderboard host layer is readable source too, but is excluded from the 13 KB packed game.

The submission build compares Terser/property-mangling/Roadroller/DEFLATE/AdvZIP/Zopfli variants and selects the smallest valid archive. `dist/unicorn-stampede.zip` must remain below the **13,312-byte** js13k limit; `dist/compression.json` is the authoritative size record for a qualified snapshot.

CI uses per-PR concurrency with `cancel-in-progress`, so superseded compression tournaments do not waste runners. On `main`, only a successful exact release-input change may refresh the committed `dist/` snapshot.

## 📚 Design notes

- [`docs/COMPETITIVE_SCORING.md`](docs/COMPETITIVE_SCORING.md)
- [`docs/CAMPAIGN_WORLDS.md`](docs/CAMPAIGN_WORLDS.md)
- `docs/CREATIVE_RESERVE.md`
- `docs/COMPRESSION.md`
- `docs/PRISM_CHASE.md`
- `docs/SMART_DIRECTOR.md`
- `docs/TOP10_CAMPAIGN.md`

---

**Design target:** a first-time player can conquer a town; a good player learns to orchestrate six unicorns; an expert starts seeing ten different towns as ten versions of the same score-optimization language. 🌈
