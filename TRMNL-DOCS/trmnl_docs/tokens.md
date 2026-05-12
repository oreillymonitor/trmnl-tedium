# Tokens

The Tokens reference lists every Framework CSS variable from `_variables_root.scss` and display overrides in `_variables_overrides.scss`. Use it to understand defaults, 2-bit visual/layout behavior, high-density typography, and 4/8/16-bit scaling.

### How To Read This Table

Each row is a CSS custom property token. `Root` comes from `_variables_root.scss`. `2-bit`, `density 2x`, and `4/8/16-bit` come from mixins in `_variables_overrides.scss`.

### Palette

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Semantic | | | | |
| `--black` | #000000 | — | — | — |
| `--color-error` | var(--red) | — | — | — |
| `--color-primary` | var(--blue) | — | — | — |
| `--color-success` | var(--green) | — | — | — |
| `--color-warning` | var(--orange) | — | — | — |
| `--white` | #FFFFFF | — | — | — |
| Grayscale | | | | |
| `--gray-10` | #111111 | — | — | — |
| `--gray-15` | #222222 | — | — | — |
| `--gray-20` | #333333 | — | — | — |
| `--gray-25` | #444444 | — | — | — |
| `--gray-30` | #555555 | — | — | — |
| `--gray-35` | #666666 | — | — | — |
| `--gray-40` | #777777 | — | — | — |
| `--gray-45` | #888888 | — | — | — |
| `--gray-50` | #999999 | — | — | — |
| `--gray-55` | #AAAAAA | — | — | — |
| `--gray-60` | #BBBBBB | — | — | — |
| `--gray-65` | #CCCCCC | — | — | — |
| `--gray-70` | #DDDDDD | — | — | — |
| `--gray-75` | #EEEEEE | — | — | — |
| Legacy Grayscale | | | | |
| `--gray-1` | #111111 | — | — | — |
| `--gray-2` | #333333 | — | — | — |
| `--gray-3` | #555555 | — | — | — |
| `--gray-4` | #777777 | — | — | — |
| `--gray-5` | #999999 | — | — | — |
| `--gray-6` | #BBBBBB | — | — | — |
| `--gray-7` | #DDDDDD | — | — | — |

### Description

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Base | | | | |
| `--description-font-family` | "NicoPups" | "NicoPups" | "Inter Variable", Inter | — |
| `--description-font-size` | 16px | 16px | calc(13px * var(--ui-scale)) | — |
| `--description-font-smoothing` | none | none | auto | — |
| `--description-font-weight` | 400 | 400 | 400 | — |
| `--description-line-height` | 1 | 1 | 1.2 | — |
| Large | | | | |
| `--description-large-font-family` | "NicoClean" | "NicoClean" | "Inter Variable", Inter | — |
| `--description-large-font-size` | 16px | 16px | calc(16px * var(--ui-scale)) | — |
| `--description-large-font-smoothing` | none | none | auto | — |
| `--description-large-font-weight` | 400 | 400 | 700 | — |
| `--description-large-line-height` | 1.25 | 1.25 | 1.2 | — |
| Xlarge | | | | |
| `--description-xlarge-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--description-xlarge-font-size` | 21px | — | calc(21px * var(--ui-scale)) | — |
| `--description-xlarge-font-smoothing` | auto | — | auto | — |
| `--description-xlarge-font-weight` | 500 | — | 500 | — |
| `--description-xlarge-line-height` | 1.2 | — | 1.2 | — |
| Xxlarge | | | | |
| `--description-xxlarge-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--description-xxlarge-font-size` | 24px | — | calc(24px * var(--ui-scale)) | — |
| `--description-xxlarge-font-smoothing` | auto | — | auto | — |
| `--description-xxlarge-font-weight` | 475 | — | 475 | — |
| `--description-xxlarge-line-height` | 1.2 | — | 1.2 | — |

### Other

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| `--font-base-font-family` | "NicoClean" | "NicoClean" | "Inter Variable", Inter | — |
| `--font-base-font-size` | 16px | 16px | calc(16px * var(--ui-scale)) | — |
| `--font-base-font-smoothing` | none | none | auto | — |
| `--font-base-line-height` | 1.25 | 1.25 | calc(22px * var(--ui-scale)) | — |
| `--font-giga-font-family` | "Inter Variable", Inter | — | — | — |
| `--font-giga-font-size` | 96px | — | — | — |
| `--font-giga-font-smoothing` | auto | — | — | — |
| `--font-giga-line-height` | 108px | — | — | — |
| `--font-large-font-family` | "BlockKie" | "BlockKie" | "Inter Variable", Inter | — |
| `--font-large-font-size` | 26px | 26px | calc(21px * var(--ui-scale)) | — |
| `--font-large-font-smoothing` | none | none | auto | — |
| `--font-large-line-height` | 1 | 1 | 1.2 | — |
| `--font-mega-font-family` | "Inter Variable", Inter | — | — | — |
| `--font-mega-font-size` | 74px | — | — | — |
| `--font-mega-font-smoothing` | auto | — | — | — |
| `--font-mega-line-height` | 86px | — | — | — |
| `--font-peta-font-family` | "Inter Variable", Inter | — | — | — |
| `--font-peta-font-size` | 170px | — | — | — |
| `--font-peta-font-smoothing` | auto | — | — | — |
| `--font-peta-line-height` | 180px | — | — | — |
| `--font-small-font-family` | "NicoPups" | "NicoPups" | "Inter Variable", Inter | — |
| `--font-small-font-size` | 16px | 16px | calc(13px * var(--ui-scale)) | — |
| `--font-small-font-smoothing` | none | none | auto | — |
| `--font-small-line-height` | 1 | 1 | calc(18px * var(--ui-scale)) | — |
| `--font-tera-font-family` | "Inter Variable", Inter | — | — | — |
| `--font-tera-font-size` | 128px | — | — | — |
| `--font-tera-font-smoothing` | auto | — | — | — |
| `--font-tera-line-height` | 128px | — | — | — |
| `--font-xlarge-font-family` | "Inter Variable", Inter | — | — | — |
| `--font-xlarge-font-size` | 26px | — | — | — |
| `--font-xlarge-font-smoothing` | auto | — | — | — |
| `--font-xlarge-line-height` | 29px | — | — | — |
| `--font-xxlarge-font-family` | "Inter Variable", Inter | — | — | — |
| `--font-xxlarge-font-size` | 38px | — | — | — |
| `--font-xxlarge-font-smoothing` | auto | — | — | — |
| `--font-xxlarge-line-height` | 42px | — | — | — |
| `--font-xxxlarge-font-family` | "Inter Variable", Inter | — | — | — |
| `--font-xxxlarge-font-size` | 58px | — | — | — |
| `--font-xxxlarge-font-smoothing` | auto | — | — | — |
| `--font-xxxlarge-line-height` | 70px | — | — | — |

### Layout

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

### Spacing

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| `--gap` | 10px | — | — | — |
| `--gap-large` | 20px | — | — | — |
| `--gap-medium` | 16px | — | — | — |
| `--gap-small` | 7px | — | — | — |
| `--gap-xlarge` | 30px | — | — | — |
| `--gap-xsmall` | 5px | — | — | — |
| `--gap-xxlarge` | 40px | — | — | — |
| `--list-gap-large` | 16px | — | — | — |
| `--list-gap-small` | 8px | — | — | — |

### Item

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Base | | | | |
| `--item-index-font-family` | "NicoPups" | "NicoPups" | "Inter Variable", Inter | — |
| `--item-index-font-size` | 16px | 16px | calc(13px * var(--ui-scale)) | — |
| `--item-index-font-smoothing` | none | none | auto | — |
| `--item-index-font-weight` | 400 | 400 | 600 | — |
| `--item-index-line-height` | 1 | 1 | 1 | — |
| `--item-meta-width` | 10px | 10px | — | calc(10px * var(--ui-scale)) |

### Label

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Base | | | | |
| `--label-font-family` | "NicoClean" | "NicoClean" | "Inter Variable", Inter | — |
| `--label-font-size` | 16px | 16px | calc(16px * var(--ui-scale)) | — |
| `--label-font-smoothing` | none | none | auto | — |
| `--label-font-weight` | 400 | 400 | 500 | — |
| `--label-line-height` | 1.25 | 1.25 | 1.25 | — |
| Small | | | | |
| `--label-small-font-family` | "NicoPups" | "NicoPups" | "Inter Variable", Inter | — |
| `--label-small-font-size` | 16px | 16px | calc(13px * var(--ui-scale)) | — |
| `--label-small-font-smoothing` | none | none | auto | — |
| `--label-small-font-weight` | 400 | 400 | 500 | — |
| `--label-small-line-height` | 1 | 1 | 1 | — |
| Large | | | | |
| `--label-large-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--label-large-font-size` | 21px | — | calc(21px * var(--ui-scale)) | — |
| `--label-large-font-smoothing` | auto | — | auto | — |
| `--label-large-font-weight` | 500 | — | 500 | — |
| `--label-large-line-height` | 1.2 | — | 1.2 | — |
| Xlarge | | | | |
| `--label-xlarge-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--label-xlarge-font-size` | 26px | — | calc(26px * var(--ui-scale)) | — |
| `--label-xlarge-font-smoothing` | auto | — | auto | — |
| `--label-xlarge-font-weight` | 475 | — | 475 | — |
| `--label-xlarge-line-height` | 1.2 | — | 1.2 | — |
| Xxlarge | | | | |
| `--label-xxlarge-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--label-xxlarge-font-size` | 30px | — | calc(30px * var(--ui-scale)) | — |
| `--label-xxlarge-font-smoothing` | auto | — | auto | — |
| `--label-xxlarge-font-weight` | 450 | — | 450 | — |
| `--label-xxlarge-line-height` | 1.2 | — | 1.2 | — |

### Progress

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Base | | | | |
| `--progress-bar-height` | 24px | — | — | — |
| `--progress-bar-height-large` | 32px | — | — | — |
| `--progress-bar-height-small` | 12px | — | — | — |
| `--progress-bar-height-xsmall` | 6px | — | — | — |
| `--progress-bar-radius` | 10px | — | — | — |
| `--progress-dot-size` | 16px | — | — | — |
| `--progress-dot-size-large` | 20px | — | — | — |
| `--progress-dot-size-small` | 12px | — | — | — |
| `--progress-dot-size-xsmall` | 8px | — | — | — |

### Rich Text

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Base | | | | |
| `--richtext-content-max-width` | 640px | — | — | — |
| `--richtext-font-family` | "NicoClean" | "NicoClean" | "Inter Variable", Inter | — |
| `--richtext-font-size` | 16px | 16px | calc(16px * var(--ui-scale)) | — |
| `--richtext-font-smoothing` | none | none | auto | — |
| `--richtext-font-weight` | 400 | 400 | 500 | — |
| `--richtext-line-height` | 22px | 22px | calc(22px * var(--ui-scale)) | — |
| Small | | | | |
| `--richtext-small-font-family` | "NicoPups" | "NicoPups" | "Inter Variable", Inter | — |
| `--richtext-small-font-size` | 16px | 16px | calc(13px * var(--ui-scale)) | — |
| `--richtext-small-font-smoothing` | none | none | auto | — |
| `--richtext-small-font-weight` | 400 | 400 | 500 | — |
| `--richtext-small-line-height` | 16px | 16px | calc(18px * var(--ui-scale)) | — |
| Large | | | | |
| `--richtext-large-font-family` | "BlockKie" | "BlockKie" | "Inter Variable", Inter | — |
| `--richtext-large-font-size` | 26px | 26px | calc(21px * var(--ui-scale)) | — |
| `--richtext-large-font-smoothing` | none | none | auto | — |
| `--richtext-large-font-weight` | 400 | 400 | 500 | — |
| `--richtext-large-line-height` | 1 | 1 | 1.2 | — |
| Xlarge | | | | |
| `--richtext-xlarge-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--richtext-xlarge-font-size` | 30px | — | calc(30px * var(--ui-scale)) | — |
| `--richtext-xlarge-font-smoothing` | auto | — | auto | — |
| `--richtext-xlarge-font-weight` | 425 | — | 425 | — |
| `--richtext-xlarge-line-height` | 1.2 | — | 1.2 | — |
| Xxlarge | | | | |
| `--richtext-xxlarge-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--richtext-xxlarge-font-size` | 35px | — | calc(35px * var(--ui-scale)) | — |
| `--richtext-xxlarge-font-smoothing` | auto | — | auto | — |
| `--richtext-xxlarge-font-weight` | 400 | — | 400 | — |
| `--richtext-xxlarge-line-height` | 1.2 | — | 1.2 | — |
| Xxxlarge | | | | |
| `--richtext-xxxlarge-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--richtext-xxxlarge-font-size` | 40px | — | calc(40px * var(--ui-scale)) | — |
| `--richtext-xxxlarge-font-smoothing` | auto | — | auto | — |
| `--richtext-xxxlarge-font-weight` | 375 | — | 375 | — |
| `--richtext-xxxlarge-line-height` | 1.2 | — | 1.2 | — |

### Rounded

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| `--rounded` | 10px | — | — | — |
| `--rounded-full` | 9999px | — | — | — |
| `--rounded-large` | 20px | — | — | — |
| `--rounded-medium` | 15px | — | — | — |
| `--rounded-none` | 0px | — | — | — |
| `--rounded-small` | 7px | — | — | — |
| `--rounded-xlarge` | 25px | — | — | — |
| `--rounded-xsmall` | 5px | — | — | — |
| `--rounded-xxlarge` | 30px | — | — | — |

### Table

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Base | | | | |
| `--table-tbody-height` | 46px | — | — | — |
| `--table-thead-height` | 36px | — | — | — |
| Xsmall | | | | |
| `--table-xsmall-tbody-height` | 22px | — | — | — |
| `--table-xsmall-thead-height` | 18px | — | — | — |
| Small | | | | |
| `--table-small-tbody-height` | 31px | — | — | — |
| `--table-small-thead-height` | 24px | — | — | — |
| Large | | | | |
| `--table-large-tbody-height` | 56px | — | — | — |
| `--table-large-thead-height` | 44px | — | — | — |
| Xlarge | | | | |
| `--table-xlarge-tbody-height` | 72px | — | — | — |
| `--table-xlarge-thead-height` | 56px | — | — | — |

### Title Bar

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Base | | | | |
| `--title-bar-border-radius` | 10px | 10px | — | 10px |
| `--title-bar-font-family` | "NicoClean" | "NicoClean" | "Inter Variable", Inter | — |
| `--title-bar-font-size` | 16px | 16px | calc(16px * var(--ui-scale)) | — |
| `--title-bar-font-smoothing` | none | none | auto | — |
| `--title-bar-font-weight` | 400 | 400 | 700 | — |
| `--title-bar-height` | 40px | 40px | — | calc(40px * var(--ui-scale)) |
| `--title-bar-image-height` | 28px | 28px | — | calc(28px * var(--ui-scale)) |
| `--title-bar-line-height` | 1 | 1 | calc(22px * var(--ui-scale)) | — |
| `--title-bar-padding-top` | 5px | 5px | 0px | 0px |
| `--title-bar-text-stroke-width` | 3.5px | 3.5px | 2px | 2px |
| Small | | | | |
| `--title-bar-small-font-size` | 16px | 16px | calc(16px * var(--ui-scale)) | — |
| `--title-bar-small-height` | 32px | 32px | — | calc(32px * var(--ui-scale)) |
| `--title-bar-small-image-height` | 24px | 24px | — | calc(24px * var(--ui-scale)) |

### Title

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Base | | | | |
| `--title-font-family` | "BlockKie" | "BlockKie" | "Inter Variable", Inter | — |
| `--title-font-size` | 26px | 26px | calc(21px * var(--ui-scale)) | — |
| `--title-font-smoothing` | none | none | auto | — |
| `--title-font-weight` | 400 | 400 | 400 | — |
| `--title-line-height` | 1 | 1 | 1.2 | — |
| Small | | | | |
| `--title-small-font-family` | "NicoClean" | "NicoClean" | "Inter Variable", Inter | — |
| `--title-small-font-size` | 16px | 16px | calc(16px * var(--ui-scale)) | — |
| `--title-small-font-smoothing` | none | none | auto | — |
| `--title-small-font-weight` | 400 | 400 | 700 | — |
| `--title-small-line-height` | 1 | 1 | 1.2 | — |
| Large | | | | |
| `--title-large-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--title-large-font-size` | 30px | — | calc(30px * var(--ui-scale)) | — |
| `--title-large-font-smoothing` | auto | — | auto | — |
| `--title-large-font-weight` | 425 | — | 425 | — |
| `--title-large-line-height` | 1.2 | — | 1.2 | — |
| Xlarge | | | | |
| `--title-xlarge-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--title-xlarge-font-size` | 35px | — | calc(35px * var(--ui-scale)) | — |
| `--title-xlarge-font-smoothing` | auto | — | auto | — |
| `--title-xlarge-font-weight` | 400 | — | 400 | — |
| `--title-xlarge-line-height` | 1.2 | — | 1.2 | — |
| Xxlarge | | | | |
| `--title-xxlarge-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--title-xxlarge-font-size` | 40px | — | calc(40px * var(--ui-scale)) | — |
| `--title-xxlarge-font-smoothing` | auto | — | auto | — |
| `--title-xxlarge-font-weight` | 375 | — | 375 | — |
| `--title-xxlarge-line-height` | 1.2 | — | 1.2 | — |

### Scaling

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| `--ui-scale` | 1 | — | — | — |

### Value

| Token | 1-bit | 2-bit | Density 2x | 4/8/16-bit |
| --- | --- | --- | --- | --- |
| Base | | | | |
| `--value-font-family` | "Inter Variable", Inter | — | "Inter Variable", Inter | — |
| `--value-font-size` | 38px | — | calc(38px * var(--ui-scale)) | — |
| `--value-font-smoothing` | auto | — | auto | — |
| `--value-font-weight` | 450 | — | 450 | — |
| `--value-line-height` | 42px | — | calc(42px * var(--ui-scale)) | — |
| Xxsmall | | | | |
| `--value-xxsmall-font-family` | "NicoClean" | "NicoClean" | "Inter Variable", Inter | — |
| `--value-xxsmall-font-size` | 16px | 16px | calc(16px * var(--ui-scale)) | — |
| `--value-xxsmall-font-smoothing` | none | none | auto | — |
| `--value-xxsmall-font-weight` | 400 | 400 | 700 | — |
| `--value-xxsmall-line-height` | 16px | 16px | calc(14px * var(--ui-scale)) | — |
| Xsmall | | | | |
| `--value-xsmall-font-size` | 20px | — | calc(20px * var(--ui-scale)) | — |
| `--value-xsmall-font-weight` | 600 | — | 600 | — |
| `--value-xsmall-line-height` | 24px | — | calc(24px * var(--ui-scale)) | — |
| Small | | | | |
| `--value-small-font-size` | 26px | — | calc(26px * var(--ui-scale)) | — |
| `--value-small-font-weight` | 500 | — | 475 | — |
| `--value-small-line-height` | 29px | — | calc(29px * var(--ui-scale)) | — |
| Large | | | | |
| `--value-large-font-size` | 58px | — | calc(58px * var(--ui-scale)) | — |
| `--value-large-font-weight` | 400 | — | 400 | — |
| `--value-large-line-height` | 70px | — | calc(70px * var(--ui-scale)) | — |
| Xlarge | | | | |
| `--value-xlarge-font-size` | 74px | — | calc(74px * var(--ui-scale)) | — |
| `--value-xlarge-font-weight` | 375 | — | 375 | — |
| `--value-xlarge-line-height` | 86px | — | calc(86px * var(--ui-scale)) | — |
| Xxlarge | | | | |
| `--value-xxlarge-font-size` | 96px | — | calc(96px * var(--ui-scale)) | — |
| `--value-xxlarge-font-weight` | 350 | — | 350 | — |
| `--value-xxlarge-line-height` | 108px | — | calc(108px * var(--ui-scale)) | — |
| Xxxlarge | | | | |
| `--value-xxxlarge-font-size` | 128px | — | calc(128px * var(--ui-scale)) | — |
| `--value-xxxlarge-font-weight` | 300 | — | 300 | — |
| `--value-xxxlarge-line-height` | 128px | — | calc(128px * var(--ui-scale)) | — |
| Mega | | | | |
| `--value-mega-font-size` | 170px | — | calc(170px * var(--ui-scale)) | — |
| `--value-mega-font-weight` | 275 | — | 275 | — |
| `--value-mega-line-height` | 180px | — | calc(180px * var(--ui-scale)) | — |
| Giga | | | | |
| `--value-giga-font-size` | 220px | — | calc(220px * var(--ui-scale)) | — |
| `--value-giga-font-weight` | 250 | — | 250 | — |
| `--value-giga-line-height` | 230px | — | calc(230px * var(--ui-scale)) | — |
| Tera | | | | |
| `--value-tera-font-size` | 290px | — | calc(290px * var(--ui-scale)) | — |
| `--value-tera-font-weight` | 225 | — | 225 | — |
| `--value-tera-line-height` | 300px | — | calc(300px * var(--ui-scale)) | — |
| Peta | | | | |
| `--value-peta-font-size` | 380px | — | calc(380px * var(--ui-scale)) | — |
| `--value-peta-font-weight` | 200 | — | 200 | — |
| `--value-peta-line-height` | 390px | — | calc(390px * var(--ui-scale)) | — |

Previous

[Colors Complete palette definition: grayscale, chromatic hues, and blend pairs](/framework/docs/3.1/colors)

Next

[Font Family Switch between Classic and TRMNL font bundles per device](/framework/docs/3.1/font_family)
