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
npm install pure-date-format
```

## Usage

### 1. Formatting a Date

Use the `from` method to format a JavaScript `Date` object into a string.

```typescript
import formatter from 'pure-date-format';

const date = new Date();
const format = 'YYYY-MM-DD HH:mm:ss A';
const formattedDate = formatter.from(date, format, 'en-US');

console.log(formattedDate); // Example: "2024-09-07 02:35:45 PM"
```

### 2. Parsing a Date String

Use the `to` method to parse a formatted date string into a `Date` object.

```typescript
import formatter from 'pure-date-format';

const dateString = '2024-09-07 02:35:45 PM';
const format = 'YYYY-MM-DD HH:mm:ss A';
const parsedDate = formatter.to(dateString, format, 'en-US');

console.log(parsedDate); // Output: Date object for "2024-09-07 02:35:45 PM"
```

### 3. Validation a Date String

- Check if the date string can be parsed as a valid `Date` object.
- Supports custom date formats when provided.
- Handles invalid date strings gracefully by returning `false`.

```typescript
import formatter from 'pure-date-format';

const dateString = '2024-09-07 02:35:45 PM';
const format = 'YYYY-MM-DD HH:mm:ss A';
const isValid = formatter.isValid(dateString, format);

console.log(isValid); // Output: true
```

### 4. Supported Format Tokens

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

### 5. Localization

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

### `isValid(dateString: string, format?: string)`

The `isValid` function validates a date string by checking if it can be parsed into a valid date object. Optionally, it allows specifying a format for the date string to ensure the input adheres to a specific date format.

- **`dateString`**: The formatted date string to validate.
- **`format`**(optional, string): A specific date format to validate against (e.g., 'YYYY-MM-DD'). If no format is provided, the function defaults to creating a Date object from the string.

Returns `true` if the `dateString` is a valid date or `false` if if the `dateString` is invalid.

## License

This project is licensed under the MIT License.

## Support Me

If you like this project, please consider buying me a coffee. Your support helps me to keep the project alive and improving it.

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/ssjblue1979)
