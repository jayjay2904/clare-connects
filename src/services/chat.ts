export interface ChatService { reply(question: string): Promise<string> }
const answers: [RegExp, string][] = [
  [/house|bill|home/i, 'Clare can help you review household essentials such as energy, broadband and mobile services in one friendly conversation. She works with established providers to explore a suitable option.'],
  [/business|utilities/i, 'Clare can help businesses bring utility contracts, connectivity, efficiency and renewal conversations together, with trusted specialist introductions where useful.'],
  [/connector/i, 'A Clare Connector introduces people or organisations who may benefit from Clare’s help. Both informal advocates and professional collaborators are welcome.'],
  [/opportunity|join/i, 'The opportunity may suit people who enjoy helping others and want to build something gradually. Outcomes depend on personal effort and circumstances.'],
  [/contact|email/i, 'You can email Clare directly at clare@clareconnects.com. The website will prepare an email with a few helpful prompts, and Clare aims to respond within two working days.'],
]
export class DemoChatService implements ChatService {
  async reply(question: string) { await new Promise((r) => setTimeout(r, 450)); return answers.find(([test]) => test.test(question))?.[1] ?? 'I can help with home services, business utilities, Clare Connectors and the opportunity. For anything more specific, please contact Clare.' }
}
export class HttpChatService implements ChatService {
  constructor(private endpoint: string) {}
  async reply(question: string) { const response = await fetch(this.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }) }); if (!response.ok) throw new Error('Chat unavailable'); const data = await response.json() as { answer: string }; return data.answer }
}
export const chatService: ChatService = import.meta.env.VITE_CHAT_ENDPOINT ? new HttpChatService(import.meta.env.VITE_CHAT_ENDPOINT) : new DemoChatService()
