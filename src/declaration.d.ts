declare module PureDateFormat {
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
  export function add(
    date: Date,
    amount: number,
    unit: TimeUnit,
  ): Date;
  export function subtract(
    date: Date,
    amount: number,
    unit: TimeUnit,
  ): Date;
}
