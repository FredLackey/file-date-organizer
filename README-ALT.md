# File Date Organizer for NodeJS

>  The following document applies to the programaticc usage of `file-date-organizer`.  For use from the command line, please see the [main README located here](README.md).

## Purpose  
Locate files by date and move them into a date-based folder structure (ie `.../YYYY/MM/dd/hh`, etc.).  Dates are extracted from the file name (ie `Screen Shot 2020-05-28 at 10.16.59 AM.png`) or the file properties (created date, modified date, etc.).

> More info on _why_ I created this is on my blog: [https://fredlackey.com](https://www.fredlackey.com)

## Installation

```
npm i file-date-organizer
```

## Usage

```
const flr = require('file-date-organizer');

const results = flr.process({
  source    : '/Users/flackey/Documents/Screenshots',
  target    : '/Volumes/MPHD01/Screenshots',
  useName   : true,
  recursive : true,
  overwrite : true
});
```

### Options

| Name          | Description                              | Type            | Default |
|---------------|------------------------------------------|-----------------|---------|
| `source`      | Source Directory                         | `string (path)` |         |
| `target`      | Desination Directory                     | `string (path)` |         |
| `recursive`   | Locate files recursively                 | `boolean`       | `true`  |
| `overwrite`   | Overwrite existing target file           | `boolean`       | `false` |
| `copy`        | Copy the files                           | `boolean`       | `false` |
| `move`        | Move the files                           | `boolean`       | `false` |
| `useName`     | Extract date from file name              | `boolean`       | `false` |
| `useCreated`  | Use created date for target folder name  | `boolean`       | `false` |
| `useModified` | Use modified date for target folder name | `boolean`       | `false` |
| `addYear`     | Target folder name includes file year    | `boolean`       | `true`  |
| `addMonth`    | Target folder name includes file month   | `boolean`       | `true`  |
| `addDay`      | Target folder name includes file day     | `boolean`       | `true`  |
| `addHour`     | Target folder name includes file hour    | `boolean`       | `false` |
| `addMinute`   | Target folder name includes file minute  | `boolean`       | `false` |
| `addSecond`   | Target folder name includes file second  | `boolean`       | `false` |

### Contact  
Please feel free to contact me directly with any questions, comments, or enhancement requests:

**Fred Lackey**  
**[fred.lackey@gmail.com](mailto://fred.lackey@gmail.com)**  
**[http://fredlackey.com](http://www.fredlackey.com)**  
