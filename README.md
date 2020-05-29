# File Date Organizer for NodeJS

>  The following document applies to the command-line usage of `file-date-organizer`.  For usage directly in a Node application, please see the [alternate README located here](README-ALT.md).

## Purpose  
Locate files by date and move them into a date-based folder structure (ie `.../YYYY/MM/dd/hh`, etc.).  Dates are extracted from the file name (ie `Screen Shot 2020-05-28 at 10.16.59 AM.png`) or the file properties (created date, modified date, etc.).

> More info on _why_ I created this is on my blog: [https://fredlackey.com](https://www.fredlackey.com)

## Installation

```
npm i -g file-date-organizer
```

## Usage
Exatract then date from the _name_ of the file ... 
```
file-date-organizer \
  --source "/Users/flackey/Documents/Screenshots" \
  --target "/Volumes/MPHD01/Screenshots" \
  --use-name \
  --move \
  --recursive \
  --overwrite
```
... or, use a _file property_, such as the creation date ... 
```
file-date-organizer \
  --source "/Users/flackey/Documents/Screenshots" \
  --target "/Volumes/MPHD01/Screenshots" \
  --use-name \
  --move \
  --recursive \
  --overwrite
```

> **Important:**  
> Combining `--use-name` and any other `--use*` option will cuase `--use-name` to be leveraged first.  If a valid name can be found within the name then the properties of the file will be ignored.

### Parameters

| Name           | Description                              | Type            | Default |
|----------------|------------------------------------------|-----------------|---------|
| `source`       | Source Directory                         | `string (path)` |         |
| `target`       | Desination Directory                     | `string (path)` |         |
| `recursive`    | Locate files recursively                 | `boolean`       | `true`  |
| `overwrite`    | Overwrite existing target file           | `boolean`       | `false` |
| `copy`         | Copy the files                           | `boolean`       | `false` |
| `move`         | Move the files                           | `boolean`       | `false` |
| `use-name`     | Extract date from file name              | `boolean`       | `false` |
| `use-created`  | Use created date for target folder name  | `boolean`       | `false` |
| `use-modified` | Use modified date for target folder name | `boolean`       | `false` |
| `add-year`     | Target folder name includes file year    | `boolean`       | `true`  |
| `add-month`    | Target folder name includes file month   | `boolean`       | `true`  |
| `add-day`      | Target folder name includes file day     | `boolean`       | `true`  |
| `add-hour`     | Target folder name includes file hour    | `boolean`       | `false` |
| `add-minute`   | Target folder name includes file minute  | `boolean`       | `false` |
| `add-second`   | Target folder name includes file second  | `boolean`       | `false` |

### Contact  
Please feel free to contact me directly with any questions, comments, or enhancement requests:

**Fred Lackey**  
**[fred.lackey@gmail.com](mailto://fred.lackey@gmail.com)**  
**[http://fredlackey.com](http://www.fredlackey.com)**  
