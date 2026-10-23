export type WorkflowStage = 'idle' | 'progress' | 'completed';

export interface SectionItem {
  id: string;
  name: string;
  selector: string;
  dimensions: string;
  size: string;
  status: 'pending' | 'capturing' | 'completed';
}

export interface PageFolder {
  id: string;
  name: string;
  path: string;
  viewport?: string;
  sections: SectionItem[];
}

export interface ExtractorSiteData {
  name: string;
  subtitle: string;
  theme: string;
  defaultUrl: string;
  domain: string;
  defaultViewport: string;
  pages: PageFolder[];
  totalSections: number;
  totalSize: string;
}

export interface ExtractionRequest {
  url: string;
  viewports: string[];
  animatedSite: boolean;
  hideOverlays: boolean;
  flattenStickyNav: boolean;
}

export interface ExtractionProgressEvent {
  type: 'progress' | 'section' | 'complete' | 'error';
  percent?: number;
  statusText?: string;
  section?: SectionItem & { viewport: string; pageName: string };
  result?: {
    domain: string;
    totalSections: number;
    totalSize: string;
    pages: PageFolder[];
    zipBase64?: string;
  };
  error?: string;
}

export interface PipelineState {
  percent: number;
  stageName: string;
  currentSelector: string;
  isComplete: boolean;
}
