export type OpenAIModel = 'gpt-3.5-turbo' | 'gpt-4';
export type DeepSeekModel = 'deepseek-chat' | 'deepseek-coder';
export type BPF = 'libbpf' | 'bpftrace';

export interface TranslateBody {
  help_doc: string;
  language: string;
  model: OpenAIModel | DeepSeekModel;
  apiKey: string;
  baseURL: string;
}

export interface TranslateResponse {
  code: string;
}

export declare interface ParsedEvent {
  type: 'event'
  event?: string
  id?: string
  data: string
}

export declare interface ReconnectInterval {
  type: 'reconnect-interval'
  value: number
}