# Divider

The Divider element provides a simple, standalone way to create visual separations in your layouts. Dividers automatically adapt to their background color for optimal visibility across four background types: white, light, dark, and black.

### Usage

Use `divider` or `divider--h` for horizontal dividers,
 and `divider--v` for vertical dividers.
 Dividers automatically detect their background and adjust their appearance for optimal contrast.

#### Automatic Background Detection

By default, dividers automatically detect whether they're on a white, light, dark, or black background and adjust their appearance accordingly.
 The system categorizes backgrounds into four types for optimal contrast:

- **White:** Very light backgrounds (gray-70 to gray-75 and pure white)
- **Light:** Light gray backgrounds (gray-50 to gray-65)
- **Dark:** Dark gray backgrounds (gray-30 to gray-45)
- **Black:** Very dark backgrounds (gray-10 to gray-25 and pure black)


White Background

Divider uses darkest style (level 7)

Light Background (gray-70)

Divider uses dark style (level 6)

Dark Background (gray-30)

Divider uses light style (level 3)

Black Background

Divider uses lightest style (level 1)

Auto Background Detection

    <!-- Dividers automatically detect their background -->
    <div class="bg--white">
      <div class="divider"></div> <!-- Automatically becomes divider--on-white -->
    </div>

    <div class="bg--gray-20">
      <div class="divider"></div> <!-- Automatically becomes divider--on-light -->
    </div>

    <div class="bg--gray-50">
      <div class="divider"></div> <!-- Automatically becomes divider--on-dark -->
    </div>

    <div class="bg--black">
      <div class="divider"></div> <!-- Automatically becomes divider--on-black -->
    </div>

#### Manual Background Control

You can manually specify the background type using `divider--on-white`, `divider--on-light`, `divider--on-dark`, or `divider--on-black` classes when automatic detection isn't suitable.

All variants on white

on-white (optimal)

on-light

on-dark

on-black (poor contrast)

All variants on black

on-white (poor contrast)

on-light

on-dark

on-black (optimal)

Manual Background Control

    <!-- Manually specify background type -->
    <div class="divider--on-white"></div>  <!-- For white backgrounds -->
    <div class="divider--on-light"></div>  <!-- For light backgrounds -->
    <div class="divider--on-dark"></div>   <!-- For dark backgrounds -->
    <div class="divider--on-black"></div>  <!-- For black backgrounds -->

    <!-- Works with vertical dividers too -->
    <div class="divider--v divider--on-white"></div>
    <div class="divider--v divider--on-light"></div>
    <div class="divider--v divider--on-dark"></div>
    <div class="divider--v divider--on-black"></div>

#### Vertical Dividers

Vertical dividers work the same way as horizontal dividers, with automatic background detection for all four background types.

Left SideWhite background

Right SideAuto-detected

Left SideBlack background

Right SideAuto-detected

Vertical Dividers

    <!-- Vertical divider with auto background detection -->
    <div class="divider--v"></div>

    <!-- Manually specified vertical dividers -->
    <div class="divider--v divider--on-white"></div>
    <div class="divider--v divider--on-light"></div>
    <div class="divider--v divider--on-dark"></div>
    <div class="divider--v divider--on-black"></div>

#### Common Usage Patterns

$1,234Revenue

42Orders

$29.38AOV

Section Separation

    <!-- Replacing common border--h-x w--full pattern -->
    <!-- Old way: -->
    <div class="border--h-6 w--full"></div>

    <!-- New way (with auto background detection): -->
    <div class="divider"></div>

    <!-- Or with manual specification: -->
    <div class="divider--on-light"></div>

Previous

[Description Format descriptive text with standardized styles](/framework/docs/3.1/description)

Next

[Rich Text Display formatted paragraphs with alignment and size variants](/framework/docs/3.1/rich_text)
