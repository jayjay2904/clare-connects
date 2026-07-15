import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

function view(path = '/') { return render(<MemoryRouter initialEntries={[path]}><App/></MemoryRouter>) }
describe('Clare Connects website', () => {
  test('renders configured homepage and main navigation', () => { view(); expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Connections that make life and business simpler'); expect(screen.getByRole('navigation', { name: 'Main navigation' })).toHaveTextContent('Business Utilities') })
  test('routes to business utilities', () => { view('/business-utilities'); expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Bring clarity') })
  test('shows branded not found page', () => { view('/missing-page'); expect(screen.getByText('This page isn’t part of the network.')).toBeInTheDocument() })
  test('opens and closes the mobile menu accessibly', async () => { const user = userEvent.setup(); view(); await user.click(screen.getByRole('button', { name: 'Open menu' })); expect(screen.getByRole('dialog', { name: 'Navigation menu' })).toBeInTheDocument(); await user.keyboard('{Escape}'); expect(screen.queryByRole('dialog', { name: 'Navigation menu' })).not.toBeInTheDocument() })
  test('validates required contact form fields', async () => { const user = userEvent.setup(); view('/contact'); await user.click(screen.getByRole('button', { name: 'Send enquiry' })); expect(screen.getByRole('alert')).toHaveTextContent('Please enter your name'); expect(screen.getByRole('alert')).toHaveTextContent('valid email') })
  test('submits the contact form and announces success', async () => { const user = userEvent.setup(); view('/contact'); await user.type(screen.getByLabelText(/Name/), 'John'); await user.type(screen.getByLabelText(/Email/), 'john@example.com'); await user.type(screen.getByLabelText(/Message/), 'Please contact me about my home services.'); await user.click(screen.getByRole('checkbox')); await user.click(screen.getByRole('button', { name: 'Send enquiry' })); await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Thank you'), { timeout: 2000 }) })
  test('opens, resets and closes the assistant', async () => { const user = userEvent.setup(); view(); await user.click(screen.getByRole('button', { name: 'Open Ask Clare Connects assistant' })); expect(screen.getByRole('dialog', { name: 'Ask Clare Connects' })).toBeInTheDocument(); await user.click(screen.getByRole('button', { name: 'Reset' })); await user.click(screen.getByRole('button', { name: 'Close assistant' })); expect(screen.queryByRole('dialog', { name: 'Ask Clare Connects' })).not.toBeInTheDocument() })
})
