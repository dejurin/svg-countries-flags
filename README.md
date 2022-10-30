# SVG Countries Flags
Countries flags (rounded rectangular).

  - [Description](#description)
  - [Installation](#installation)
  - [Preview](#preview)
  - [Disclamer](#disclamer)

## Description
The archive contains vector and raster images of flags of the countries of the world.
For convenient work with projects, you can optimize images. Remove the extra weight, make them scalable (full window) and add a letter code (ISO_3166-2) to the image file name.

PS: The changes only for SVG files.


## Installation

0. Installing npm dependency

```
npm install
```

1. Unpack archive

```
unzip ./src/countries-flags--82.zip -d ./src
```

2. Move files to dist folder

```
cp -a ./src/countries-flags--82/svg/. ./dist/svg
```

3. Resize SVG files (Making an Image Responsive)

```
node resize.js
```

4. Rename SVG files by [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-2)

```
node rename.js
```

5. Optimize SVG files

```
svgo -f ./dist/svg
```

## Preview

![SVG Countries Flags](https://github.com/dejurin/svg-countries-flags/blob/f893a4eec14ca1b5380e4e375f77f8b5702c4dfb/flags.png "SVG Countries Flags")


## Disclamer

All images belong to their authors, I found this archive with country flags here https://iconplanet.app/package/countries-flags--82
