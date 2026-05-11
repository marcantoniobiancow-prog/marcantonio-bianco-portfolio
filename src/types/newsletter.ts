export interface NewsletterFormData {
  email: string;
  website?: string; // honeypot
  consent: boolean;
}

export interface NewsletterAPIResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export type FormState = 'idle' | 'loading' | 'success' | 'error';
