export interface Author {
  name: string;
  link?: string;
}

export type CCLicense =
  | 'ZERO'
  | 'BY'
  | 'BY-SA'
  | 'BY-ND'
  | 'BY-NC'
  | 'BY-NC-SA'
  | 'BY-NC-ND';
