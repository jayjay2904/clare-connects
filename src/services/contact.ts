export type ContactPayload = Record<string, string | boolean>
export interface ContactFormService { submit(data: ContactPayload): Promise<void> }

export class MockContactFormService implements ContactFormService {
  async submit(): Promise<void> { await new Promise((resolve) => setTimeout(resolve, 650)) }
}

export class HttpContactFormService implements ContactFormService {
  constructor(private endpoint: string) {}
  async submit(data: ContactPayload) {
    const response = await fetch(this.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    if (!response.ok) throw new Error('Submission failed')
  }
}

export const contactService: ContactFormService = import.meta.env.VITE_CONTACT_ENDPOINT
  ? new HttpContactFormService(import.meta.env.VITE_CONTACT_ENDPOINT)
  : new MockContactFormService()
