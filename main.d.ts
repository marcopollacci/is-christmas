type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type TZOffset = "Z" | `${"+" | "-"}${Digit}${Digit}:${Digit}${Digit}`;
type Millis = "" | `.${Digit}${Digit}${Digit}`;

type IsoTimeString =
  `${Digit}${Digit}:${Digit}${Digit}:${Digit}${Digit}${Millis}${TZOffset}`;

export type IsoDateString =
  `${Digit}${Digit}${Digit}${Digit}-${Digit}${Digit}-${Digit}${Digit}`;

export type IsoDateTimeString = `${IsoDateString}T${IsoTimeString}`;

export declare function isChristmas(
  today?: IsoDateString | IsoDateTimeString,
): boolean;
