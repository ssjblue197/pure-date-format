# Date Formatter Module

This module provides functionality to format JavaScript `Date` objects into strings and parse date strings back into `Date` objects. The format can be customized with tokens, and the module supports multiple locales for day and month names.

## Features

- **Date Formatting**: Convert a `Date` object to a string using customizable format tokens.
- **Date Parsing**: Convert a formatted date string into a `Date` object.
- **Localization**: Support for localized day and month names using the `Intl.DateTimeFormat` API.
- **Customizable Format Tokens**: Use a variety of tokens to define date format, including time, day, month, year, AM/PM, and timezone.

## Installation

Install the module via npm:

```bash
npm install pure-date-formatter
```

## Usage

### 1. Formatting a Date

Use the `from` method to format a JavaScript `Date` object into a string.

```typescript
import formatter from 'pure-date-formatter';

const date = new Date();
const format = 'YYYY-MM-DD HH:mm:ss A';
const formattedDate = formatter.from(date, format, 'en-US');

console.log(formattedDate); // Example: "2024-09-07 02:35:45 PM"
```

### 2. Parsing a Date String

Use the `to` method to parse a formatted date string into a `Date` object.

```typescript
import formatter from 'pure-date-formatter';

const dateString = '2024-09-07 02:35:45 PM';
const format = 'YYYY-MM-DD HH:mm:ss A';
const parsedDate = formatter.to(dateString, format, 'en-US');

console.log(parsedDate); // Output: Date object for "2024-09-07 02:35:45 PM"
```

### 3. Supported Format Tokens

| Token  | Description                | Example   |
| ------ | -------------------------- | --------- |
| `YYYY` | Full year                  | 2024      |
| `YY`   | Two-digit year             | 24        |
| `MMMM` | Full month name            | September |
| `MMM`  | Abbreviated month name     | Sep       |
| `MM`   | Two-digit month number     | 09        |
| `M`    | Month number               | 9         |
| `DD`   | Two-digit day of the month | 07        |
| `D`    | Day of the month           | 7         |
| `HH`   | Two-digit hour (24-hour)   | 14        |
| `H`    | Hour (24-hour)             | 14        |
| `hh`   | Two-digit hour (12-hour)   | 02        |
| `h`    | Hour (12-hour)             | 2         |
| `mm`   | Two-digit minute           | 35        |
| `m`    | Minute                     | 35        |
| `ss`   | Two-digit second           | 45        |
| `s`    | Second                     | 45        |
| `SSS`  | Milliseconds               | 123       |
| `A`    | AM/PM                      | PM        |
| `a`    | am/pm                      | pm        |
| `Z`    | Timezone offset (+HH:mm)   | +02:00    |
| `ZZ`   | Timezone offset (+HHmm)    | +0200     |

### 4. Localization

Localized day and month names are supported through the `Intl.DateTimeFormat` API. Pass a valid locale code (e.g., `'en-US'`, `'fr-FR'`, etc.) as the third argument to either `from` or `to`.

```typescript
const formattedDate = formatter.from(new Date(), 'dddd, MMMM D, YYYY', 'fr-FR');
console.log(formattedDate); // Example: "samedi, septembre 7, 2024"
```

## API

### `from(date: Date, format: string, locale?: string)`

Formats a `Date` object into a string using a specified format.

- **`date`**: The `Date` object to format.
- **`format`**: A string defining the format using the supported tokens.
- **`locale`**: An optional locale string (default: `'en-US'`).

Returns the formatted date string.

### `to(dateString: string, format: string, locale?: string)`

Parses a formatted date string into a `Date` object.

- **`dateString`**: The formatted date string to parse.
- **`format`**: The format string that matches the date string.
- **`locale`**: An optional locale string (default: `'en-US'`).

Returns a JavaScript `Date` object representing the parsed date.

### `padZero(num: number, length: number)`

Pads a number with leading zeros to a specified length.

### `getLocalizedNames(locale: string)`

Returns localized day and month names for the given locale.

### `tokenizeFormat(format: string)`

Parses a format string into an array of tokens.

### `parseMatches(matches: RegExpMatchArray, tokens: Token[], localeData: LocaleData)`

Parses matched date components from a string.

### `buildRegexPattern(tokens: Token[], localeData: LocaleData)`

Builds a regular expression pattern to match the date string based on the format.

## License

This project is licensed under the MIT License.

## Support Me

If you like this project, please consider buying me a coffee. Your support helps me to keep the project alive and improving it.

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/ssjblue1979)
