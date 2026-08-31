# 🦄 Unicorn Stampede

**A six-unicorn arcade-strategy score chase built for js13kGames 2026.** You directly control two unicorns at a time while the others keep executing the routes and impulses you leave behind. The rhythm is **steer → release → whip → switch → improvise**, then do it faster and cleaner than everyone else.

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

The current v0.21 work lives in draft PR #10 until its score economy and 13 KB package are qualified.

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

The best Whip is rarely just a hit. It should launch Yellow toward useful paint, a landmark, a powerup, a cleaner, or the next route.

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

Town Hall now has **two locks**:

1. destroy the first four landmarks;
2. reach at least **28% combined town chaos** from paint coverage + structural destruction.

Only then can Town Hall be smashed to complete the conquest.

That rule exists because landmark sniping should not be enough. A player who races through five buildings while barely affecting the rest of the town can finish, but cannot produce an elite leaderboard run.

## 🏁 Competitive score

Your final score combines **six different kinds of skill** instead of rewarding one exploit:

- **Speed** — every second left is worth points.
- **Paint coverage** — spread the stampede across the map.
- **Structural destruction** — wreck more than the five mandatory objectives.
- **Prism execution** — successful 3X chains matter, with a cap to prevent farming.
- **Orchestration** — maintaining a high average `ACTIVE` herd is valuable.
- **Counterplay** — stunning cleanup vehicles matters.
- **Stampede+ routing** — Prism Gates add optional score and speed opportunities.

The live HUD shows a projected score and score class while you play, so you can see immediately whether a decision is improving the run.

### Score classes

| Tier | Score | What it means |
| --- | ---: | --- |
| **LOW** | `< 120,000` | A clear or partial run with little optimization |
| **MEDIUM** | `120,000–189,999` | Solid play with some speed / territory / combo quality |
| **HIGH** | `190,000–259,999` | Strong multi-system execution |
| **HIGHER** | `260,000–339,999` | Expert orchestration |
| **HIGHEST** | `340,000+` | Record-hunting territory |

The exact formula is documented in [`docs/COMPETITIVE_SCORING.md`](docs/COMPETITIVE_SCORING.md).

These bands are goals, not fixed population percentiles. Once enough real leaderboard runs exist, we can recalibrate the labels from the observed distribution without changing the underlying score ordering.

## 🌍 World progression

Winning a world advances directly into the next one. The results screen explicitly tells you what comes next.

### 1. Prismborough — orchestration

The baseline exam. Learn to keep multiple useful plans alive while traffic, cleanup, distractions, and landmarks compete for attention.

- **100 seconds**
- score multiplier **×1.00**

### 2. Washwater Bay — defend success

Powerwashers and a helicopter attack areas where you are doing well. Helicopter drops are telegraphed, so strong players can reroute before impact or reclaim the area immediately afterward.

- **94 seconds**
- score multiplier **×1.12**

### 3. Cloudtop Heights — prediction

Crosswinds bias the entire herd, Whips launch farther, and the chain window tightens. This is the first world where prediction becomes as important as reaction.

- **90 seconds**
- score multiplier **×1.25**

### 4. Stampede+ — record hunting

Conquering Cloudtop unlocks the encore loop. Prismborough, Washwater, and Cloudtop cycle again with mixed pressure:

- six fewer seconds;
- an extra cleanup van immediately;
- 10% faster traffic;
- roaming gusts in earlier worlds;
- four optional **Prism Gates**;
- an additional **×1.15 score multiplier**.

Harder worlds therefore pay more for the same underlying skill. Serious record hunting should naturally migrate from Prismborough toward Cloudtop and Stampede+ instead of farming the easiest map forever.

## 🏆 Top-50 leaderboard

The hosted/local build includes a leaderboard layer **outside the 13 KB competition payload**.

- Finish a conquest and your run metrics are recorded.
- Press **L** from the title or results screen to view the top 50.
- A reachable shared service is labeled **GLOBAL TOP 50**.
- If the service is unavailable, the game falls back to this browser's saved scores and clearly labels them **LOCAL TOP 50**.

The leaderboard payload stores the score *and* the underlying metrics: world, time, paint, destruction, Prism chains, average ACTIVE, cleanup stuns, Prism Gates, duration, and game version.

A real public leaderboard must **recompute the score server-side** rather than trust the submitted number. The client contract is implemented in `src/leaderboard.js`; persistent global storage is intentionally separate from the js13k game payload.

## 🌪️ How the game should feel

A strong sequence might look like this:

1. steer Bolt toward the Market;
2. release him before he arrives so he keeps doing useful work;
3. Whip Mallow from below-left so her 2X launch crosses an unpainted district and clips the Greenhouse;
4. abandon the 3X chase because a cleaner is deleting your strongest territory;
5. rotate Blue, stun the cleaner while boosted, and send that unicorn toward the Clock Tower;
6. use `Space` only when both current captains can turn the dash into value;
7. glance at the projected score and decide whether the run needs more speed, more destruction, or more ACTIVE herd time;
8. break Town Hall only when ending now is worth more than squeezing extra score from the remaining seconds.

The tension is deliberate: **finishing earlier preserves the time bonus, but staying longer may earn paint, damage, Prism, ACTIVE, and cleanup points.** The best run finds the frontier between those incentives.

## 🧠 Strategies worth learning

### Route-and-rotate

Once Blue has a productive trajectory, stop babysitting it. Release it and solve another problem. High scores depend on several acceptable plans existing simultaneously.

### Aim Whips for aftermath

Cursor placement determines Yellow's launch vector. Use one crack to satisfy multiple objectives: continue a chain, cross weak territory, collide with an objective, grab a powerup, or intercept cleanup.

### Do not worship 3X

Prism chains are valuable, but they are capped and opportunity cost matters. Dropping a chain to save a district or finish a critical route can be the higher-scoring decision.

### Treat `ACTIVE` as a mastery meter

A high `ACTIVE` count means several unicorns are currently productive. That directly contributes to competitive score, but it also causes stronger pressure. You are rewarded for sustaining success under the consequences of success.

### Destroy beyond the objective list

Mandatory landmarks get you through the campaign; broad structural destruction gets you up the board. The town itself is part of the score surface.

### Fight cleanup when the math says so

A cleaner stun scores directly *and* protects painted territory. A perfectly timed intercept can therefore pay twice.

### Use harder worlds when you are ready

Washwater, Cloudtop, and Stampede+ multiply the same core score. Learn the route grammar in Prismborough, then carry it into environments that pay more because they demand more.

## 🧪 Little Cross tutorial

The tutorial deliberately teaches only the permanent verbs:

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
npm test             # behavior + competitive + compression + packed-runtime qualification
npm run build        # full compression tournament
```

Readable gameplay source lives in `src/`. The leaderboard host layer is also readable source but is excluded from the 13 KB packed game.

The submission build compares Terser/property-mangling/Roadroller/DEFLATE/AdvZIP/Zopfli variants and selects the smallest valid archive. `dist/unicorn-stampede.zip` must remain below the **13,312-byte** js13k limit; `dist/compression.json` is the authoritative size record for a qualified snapshot.

`dist/` is committed only as a qualified release snapshot. Source remains authoritative.

## 📚 Design notes

- [`docs/COMPETITIVE_SCORING.md`](docs/COMPETITIVE_SCORING.md)
- `docs/CAMPAIGN_WORLDS.md`
- `docs/CREATIVE_RESERVE.md`
- `docs/COMPRESSION.md`
- `docs/PRISM_CHASE.md`
- `docs/SMART_DIRECTOR.md`
- `docs/TOP10_CAMPAIGN.md`

---

**Design target:** a first-time player can conquer a town; a good player learns to orchestrate it; an expert starts seeing the whole map as a score optimization problem. 🌈
