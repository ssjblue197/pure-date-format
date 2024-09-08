declare namespace PureDateFormat {
  export function isValid(
    dateString: string,
    format?: string,
  ): boolean;
  export function to(
    dateString: string,
    format: string,
    locale?: string,
  ): string;
  export function from(
    date: Date,
    format: string,
    locale?: string,
  ): string;
}
