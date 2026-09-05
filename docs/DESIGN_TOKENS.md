# Colour system

This document is the authoritative colour reference for the portfolio. The
layout and spacious editorial direction remain independent of this palette.
Components must consume the semantic CSS variables defined in
`src/styles/global.css`; raw colour values must not be repeated in components.

## Light mode

| Role | Value |
| --- | --- |
| Background | `#F7F6F1` |
| Surface | `#FFFFFF` |
| Soft surface | `#F0F3ED` |
| Primary text | `#171C1F` |
| Muted text | `#68716D` |
| Border | `#DCE1DC` |
| Strong border | `#C8CFC9` |
| Fresh green | `#3FAE63` |
| Green hover | `#318C4D` |
| Soft green | `#E5F3E8` |
| Orange / amber | `#D88618` |
| Orange hover | `#B96D0D` |
| Soft orange | `#F8EBD7` |
| Contact background | `#E8F0E7` |
| Primary action fill | `#A45E08` |
| Primary action fill hover | `#8B4D08` |
| Primary action text | `#FFFFFF` |

## Dark mode

| Role | Value |
| --- | --- |
| Background | `#0C1419` |
| Surface | `#121C22` |
| Soft / elevated surface | `#17242B` |
| Primary text | `#F2F5F3` |
| Muted text | `#9CA8A3` |
| Border | `#29363C` |
| Strong border | `#38474E` |
| Fresh green | `#53D17A` |
| Green hover | `#70DE91` |
| Soft green | `#173625` |
| Orange / amber | `#F0A126` |
| Orange hover | `#FFB43C` |
| Soft orange | `#3A2914` |
| Contact background | `#102D21` |
| Primary action fill | `#A45E08` |
| Primary action fill hover | `#8B4D08` |
| Primary action text | `#FFFFFF` |

## Usage rules

- Keep the approximate visual balance at 80% neutral, 12% green and 8% orange.
- Use green for section labels, small indicators, timelines, icons and subtle
  natural details.
- Use orange for primary calls to action, important links, interactive states,
  the language control and live application links.
- Primary buttons use the dedicated deeper-orange fill and white text; their
  hover state uses the corresponding button-fill hover token.
- Secondary buttons stay transparent with neutral borders.
- Preserve accessible contrast in both themes.
- Do not use gradients, neon or glow effects, and do not use pure black for the
  dark theme.

### Accessibility adaptations

White text on the original primary oranges has a contrast ratio of 2.86:1 in
light mode and 1.95:1 in dark mode. Primary buttons therefore use a dedicated,
deeper orange fill with white text: `#A45E08` reaches 5.02:1, while the darker
hover fill reaches 6.64:1. The original orange tokens remain in use for borders,
links, highlights, and other non-button roles. Small green and orange text uses
readable semantic tokens derived from the corresponding accent and primary-text
tokens.
