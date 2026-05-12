# Image Stroke

The Image Stroke system allows you to add an outline to a vector or transparent raster images with customizable stroke width and color. This is useful for creating images that stand out against shaded backgrounds.

### Usage

The Image Stroke system includes preset size modifiers that allow you to quickly apply different stroke widths to your images. The default stroke is 1.5px white, with additional options for base (1.5px, equivalent to default), small (1px), medium (2px), large (2.5px), and extra large (3px). The `image-stroke--base` modifier explicitly sets the default stroke width and is useful for responsive layouts.

No Stroke

Small

Base

Default

Medium

Large

Extra Large

Image StrokePreset Sizes

    <img src="/images/trmnl--glyph-black.svg">
    <img class="image-stroke image-stroke--small" src="/images/trmnl--glyph-black.svg">
    <img class="image-stroke image-stroke--base" src="/images/trmnl--glyph-black.svg">
    <img class="image-stroke" src="/images/trmnl--glyph-black.svg">
    <img class="image-stroke image-stroke--medium" src="/images/trmnl--glyph-black.svg">
    <img class="image-stroke image-stroke--large" src="/images/trmnl--glyph-black.svg">
    <img class="image-stroke image-stroke--xlarge" src="/images/trmnl--glyph-black.svg">

### Stroke Colors

Use the black modifier for images on dark backgrounds.

No Stroke

Small

Base

Default

Medium

Large

Extra Large

Image StrokeColor Variants

    <img src="/images/trmnl--glyph-white.svg">
    <img class="image-stroke image-stroke--black image-stroke--small" src="/images/trmnl--glyph-white.svg">
    <img class="image-stroke image-stroke--black image-stroke--base" src="/images/trmnl--glyph-white.svg">
    <img class="image-stroke image-stroke--black" src="/images/trmnl--glyph-white.svg">
    <img class="image-stroke image-stroke--black image-stroke--medium" src="/images/trmnl--glyph-white.svg">
    <img class="image-stroke image-stroke--black image-stroke--large" src="/images/trmnl--glyph-white.svg">
    <img class="image-stroke image-stroke--black image-stroke--xlarge" src="/images/trmnl--glyph-white.svg">

Previous

[Image Optimize images using dithering techniques for 1-bit rendering](/framework/docs/3.1/image)

Next

[Scale Scale interface to affect content density and readability](/framework/docs/3.1/scale)
