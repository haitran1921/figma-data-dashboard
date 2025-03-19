// Figma API Response Types
export interface FigmaFileResponse {
  name: string;
  lastModified: string;
  version: string;
  document: FigmaDocument;
}

export interface FigmaDocument {
  id: string;
  name: string;
  type: string;
  children: FigmaNode[];
}

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
}

export interface FigmaStyle {
  key: string;
  name: string;
  description: string;
  styleType: string;
}

export interface FigmaComponent {
  key: string;
  name: string;
  description: string;
  componentSetId?: string;
}

export interface FigmaVariable {
  id: string;
  name: string;
  valuesByMode: {
    [modeId: string]: any;
  };
}