# Framework Runtime

Different devices have different, fixed amounts of screen space. The Framework Runtime fills that space the best way it can when a plugin layout renders. It follows a few simple rules and does the heavy, repetitive calculations for you, so the result is clean and reliable every time. You can inspect it from the “Framework Runtime” panel in the top navigation.

### What it does

At a high level, it measures the space you have and then plans columns, clamps text, formats and fits values, and adjusts gaps and index widths - so everything fits neatly without manual tweaking.

- Normalizes screen context (size, orientation, bit depth, scale)
- Maps legacy responsive classes to data attributes for consistency
- Formats values and fits numbers into their containers
- Adjusts gaps so columns/grids land on integer pixel widths
- Plans multi-column layouts, re-clamps text per column, and can add a trailing “and N more” label when enabled
- Applies standalone clamping where needed outside columns
- Limits overly tall content and schedules pixel-perfect text processing


### Runtime steps and stats

When the runtime executes, it performs these steps in order.

#### Clamp

Clamps text to N lines.

- Word‑based ellipsis
- Preserves original text
- Re‑clamps when widths change
- Supports responsive data attributes (size/orientation)
- Maps legacy class utilities to `data-clamp`
- Applies outside and inside columns (per‑column re‑clamp handled by Overflow)

Go to[Clamp](/framework/docs/3.1/clamp)

#### Overflow

Plans 1..N columns with off‑screen staging and commits the best fit, then re‑clamps per real column width.

- Duplicates group headers across columns when needed
- Optional trailing “and N more” label for hidden items (enable with `data-overflow-counter="true"`)
- Enforces final fit by hiding trailing items if necessary

Go to[Overflow](/framework/docs/3.1/overflow)

#### Value Formatting

Formats numbers to fit available space and abbreviates as needed (k, M, B).

- Respects `data-value-locale`
- Works with `data-fit-value` for auto‑sizing

Go to[Format Value](/framework/docs/3.1/format_value)

#### Fit Value

Adjusts font size, line‑height, and weight to fit numbers within their containers.

- Minimum font size safeguard (default 8px)
- Accepts `data-fit-value` or `data-value-fit`

Go to[Fit Value](/framework/docs/3.1/fit_value)

#### Grid Gaps

Tweaks CSS gaps so grid column widths resolve to integer pixels.

- Disable with `data-adjust-grid-gaps="false"`
- Falls back to measuring child positions when `gap` is not explicitly set

Go to[Grid](/framework/docs/3.1/grid)

#### Column Gaps

Normalizes gaps between `.column` elements so column widths are integers.

- Disable with `data-adjust-column-gaps="false"`
- Runs as a pre‑pass for non‑overflow columns and a final pass after Overflow

Go to[Columns](/framework/docs/3.1/columns)

#### Pixel‑Perfect Fonts

Wraps lines in spans and enforces even/odd widths for crisp rendering; scheduled in idle time.

- Skipped on higher bit‑depth modes
- Respects centered alignment

Go to[Pixel Perfect](/framework/docs/3.1/pixel_perfect)

#### Content Limiter

Constrains content height by view type or explicit threshold and flags small content.

- Override via `data-content-max-height`
- Adds `content--small` and `clamp--N` classes

Go to[Content Limiter](/framework/docs/3.1/content_limiter)

#### Index Widths

Ensures item index badges render at even widths to avoid artifacts.

- Observes width changes and adjusts without feedback loops
- Runs after column layouts commit to cover in‑column indices

Go to[Item](/framework/docs/3.1/item)

### Why this exists

Plugins need to fit source data into a static layout space that is device‑defined and varies by model, orientation, and density. While this resembles responsive web design, the runtime provides purpose‑built tools—overflow planning, per‑column clamping, integer pixel alignment, and value fitting—tailored specifically for TRMNL devices.

### Related Tokens

These tokens are automatically mapped to this page by token prefix.

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| `--full-h` | calc(var(--screen-h) - var(--gap) * 2) | — | — | — |
| `--full-w` | calc(var(--screen-w) - var(--gap) * 2) | — | — | — |
| `--half_horizontal-h` | calc((var(--screen-h) - var(--gap) * 2) / 2 - var(--gap) / 2) | — | — | — |
| `--half_horizontal-w` | calc((var(--screen-w) - var(--gap) * 2)) | — | — | — |
| `--half_vertical-h` | calc((var(--screen-h) - var(--gap) * 2)) | — | — | — |
| `--half_vertical-w` | calc((var(--screen-w) - var(--gap) * 2) / 2 - var(--gap) / 2) | — | — | — |
| `--quadrant-h` | calc((var(--screen-h) - var(--gap) * 2) / 2 - var(--gap) / 2) | — | — | — |
| `--quadrant-w` | calc((var(--screen-w) - var(--gap) * 2) / 2 - var(--gap) / 2) | — | — | — |
| `--screen-h` | 480px | — | — | — |
| `--screen-h-original` | 480px | — | — | — |
| `--screen-w` | 800px | — | — | — |
| `--screen-w-original` | 800px | — | — | — |
| `--ui-scale` | 1 | — | — | — |

Previous

[Pixel Perfect Ensure text renders with crisp edges by aligning to the pixel grid](/framework/docs/3.1/pixel_perfect)

Next

[Structure The framework's exact div hierarchy and how Screen, View, Layout, Title Bar, Columns, and Mashup work together](/framework/docs/3.1/structure)
