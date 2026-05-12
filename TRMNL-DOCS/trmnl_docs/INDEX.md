# TRMNL Documentation Index

### How to use this index
This file serves as a high-efficiency Table of Contents and index for the TRMNL Framework documentation. LLMs and developers should consult this index first to identify the relevant documentation files for specific tasks before reading individual documents. This minimizes token usage and provides immediate context on the framework's capabilities.

## Core Guides
- [v3-overview.md](v3-overview.md): Introduction to Framework v3's complete color system, chromatic palettes, and architectural shifts.
- [v3-upgrade-guide.md](v3-upgrade-guide.md): Migration guide for upgrading from v2 to v3, focusing on the new linear grayscale dither scale.
- [v3-enhancement-guide.md](v3-enhancement-guide.md): Best practices for adopting new v3 features like chromatic colors and semantic roles.
- [trmnl-x-guide.md](trmnl-x-guide.md): Comprehensive guide for supporting TRMNL X's larger 4-bit ePaper display and portrait orientation.
- [framework-runtime.md](framework-runtime.md): Overview of how the framework automatically handles layout rendering and space calculations across devices.

## Foundation
- [structure.md](structure.md): Defines the fixed display hierarchy including Screen, View, Layout, and Title Bar.
- [screen.md](screen.md): The outermost container defining device dimensions; automatically provided by the platform.
- [view.md](view.md): The container for plugin instances; automatically managed by the platform.
- [layout.md](layout.md): The primary content container inside a View for organizing content horizontally or vertically.
- [tokens.md](tokens.md): Reference for all Framework CSS variables, including display overrides and scaling defaults.
- [colors.md](colors.md): Complete palette definition for grayscale, chromatic hues, and semantic roles.
- [pixel-perfect.md](pixel-perfect.md): System for ensuring crisp text rendering by aligning specialized pixel fonts to the grid.

## Typography
- [font-family.md](font-family.md): Documentation for Classic and TRMNL pixel font bundles and high-density Inter Variable support.
- [font-weight.md](font-weight.md): Utility classes for controlling font weight across different display density tiers.
- [font-glyphs.md](font-glyphs.md): Visual inventory of every available character in the Framework's font bundles.
- [text-size.md](text-size.md): Utilities for controlling font size, line-height, and smoothing for different active density tiers.
- [text-alignment.md](text-alignment.md): Horizontal text alignment utilities (left, center, right, justify) with responsive support.
- [text-color.md](text-color.md): Grayscale text colors using dither patterns optimized for 1-bit ePaper displays.
- [text-stroke.md](text-stroke.md): System for adding outlines to text for improved visibility against shaded backgrounds.
- [rich-text.md](rich-text.md): Flexible container for formatted text content, maintaining readability and visual hierarchy.

## Arrangement
- [flex.md](flex.md): Flexbox utility classes for creating responsive row and column layouts.
- [grid.md](grid.md): CSS Grid-based system for complex column and row arrangements.
- [columns.md](columns.md): Automated system for distributing same-type data items into balanced, overflow-aware columns.
- [gap.md](gap.md): Consistent spacing utilities between elements using the native CSS gap property.
- [mashup.md](mashup.md): Automatic arrangement of multiple plugin views within a single device screen.

## Responsive Utilities
- [responsive.md](responsive.md): Dual-approach system for size-based breakpoints and bit-depth (color) variants.
- [responsive-test.md](responsive-test.md): Verification page for testing equivalence between SCSS mixins and CSS utility classes.
- [visibility.md](visibility.md): Comprehensive control over element visibility and display types across different devices.
- [scale.md](scale.md): Utilities for scaling the entire UI factor to adapt content density for different viewing distances.

## Styling
- [background.md](background.md): Background color utilities using dither patterns for 1-bit and solid colors for 4-bit+ displays.
- [border.md](border.md): Grayscale border system using dither patterns to create varying intensity levels.
- [rounded.md](rounded.md): Consistent border-radius values for creating smooth, standardized corners.
- [outline.md](outline.md): Pixel-perfect rounded borders using a 9-slice composite image for crisp rendering.
- [spacing.md](spacing.md): Utility classes for precise control over margins and padding.
- [size.md](size.md): Utilities for controlling width and height dimensions with fixed and responsive options.
- [aspect-ratio.md](aspect-ratio.md): Maintaining consistent element proportions using the native CSS aspect-ratio property.

## Modulations
- [clamp.md](clamp.md): Engine for truncating text to a specified number of lines using word-based ellipsis.
- [overflow.md](overflow.md): Automated multi-column layout engine with "and X more" labels for exceeding content.
- [table-overflow.md](table-overflow.md): Vertical height constraint system for tables with trailing hidden entry counts.
- [content-limiter.md](content-limiter.md): Automatic height restriction and typography scaling based on available view space.
- [fit-value.md](fit-value.md): Dynamic resizing of font size, weight, and line-height to ensure text fits its container.
- [format-value.md](format-value.md): Automatic numeric formatting including abbreviations, precision, and currency symbols.

## Elements
- [image.md](image.md): Dithered grayscale image rendering optimized for 1-bit black and white displays.
- [image-stroke.md](image-stroke.md): System for adding customizable outlines to vector or transparent raster images.
- [divider.md](divider.md): Simple visual separators that automatically adapt to their background color.
- [label.md](label.md): Standardized text labels with various style variants for status and highlighting.
- [progress.md](progress.md): Visual indicators for completion status and step-based processes.

## Components
- [title-bar.md](title-bar.md): Consistent terminal-like header component for displaying application and instance info.
- [title.md](title.md): Standardized text headings with multiple size variants for clear visual hierarchy.
- [description.md](description.md): Component for displaying descriptive text content with consistent styling.
- [value.md](value.md): Styling for numerical and textual values with support for tabular numbers.
- [item.md](item.md): Flexible container for list content, metadata, and indexing.
- [table.md](table.md): Structured data presentation with consistent styling and various size options.
- [chart.md](chart.md): Minimal styling utilities for displaying numerical or time-centric data as graphs.
