# SVG Countries Flags
Countries flags (rounded rectangular).

## Description
The archive contains vector and raster images of flags of the countries of the world.
For convenient work with projects, you can optimize images. Remove the extra weight, make them scalable (full window) and add a letter code (ISO_3166-2) to the image file name.

PS: The changes only for SVG files.

# Install

0. Installing npm dependency

```
npm install
```

1. Unpack archive

```
unzip ./src/countries-flags--82.zip -d ./src
```

2. Resize SVG files (Making an Image Responsive)

```
node resize.js
```

3. Rename SVG files by [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-2)

```
node rename.js
```

4. Optimize SVG files and move to dist

```
svgo -f ./src/countries-flags--82/svg -o ./dist/svg
```


## Disclamer
All images belong to their authors, I found this archive with country flags here https://iconplanet.app/package/countries-flags--82
