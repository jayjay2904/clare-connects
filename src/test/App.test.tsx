import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

function view(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><App/></MemoryRouter>)
}

describe('Clare Connects website', () => {
  test('renders the benefit-led homepage and refined navigation', () => {
    view()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Making home and business essentials easier to manage')
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toHaveTextContent('Become a Connector')
    expect(nav).toHaveTextContent('Work With Clare')
  })

  test('renders Clare’s approved logo and photography', () => {
    view()
    expect(screen.getByAltText('Clare, founder of Clare Connects')).toHaveAttribute('src', '/assets/clare-headshot-studio.jpg')
    expect(screen.getAllByRole('link', { name: 'Clare Connects home' })[0].querySelector('img')).toHaveAttribute('src', '/assets/clare-connects-logo.png')
  })

  test('shows the approved utility stories without invented attribution', () => {
    view()
    expect(screen.getAllByText('Business Utilities').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Home Utilities').length).toBeGreaterThan(0)
    expect(screen.getByText(/genuinely cares about finding the right solution/)).toBeInTheDocument()
    expect(screen.getByText(/complex utility decisions feel simple/)).toBeInTheDocument()
  })

  test('shows the independent partner and commission disclosure', () => {
    view()
    expect(screen.getByText(/authorised independent partner with Utility Warehouse/)).toBeInTheDocument()
    expect(screen.getByText(/may receive commission/)).toBeInTheDocument()
  })

  test('routes to utilities pages and provides practical preparation guidance', async () => {
    const business = view('/business-utilities')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Bring clarity')
    expect(screen.getByText('A village hall')).toBeInTheDocument()
    business.unmount()
    view('/utilities')
    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('One conversation'))
    expect(screen.getByText('Recent bills')).toBeInTheDocument()
    expect(screen.getByText('Contract end date')).toBeInTheDocument()
  })

  test('renders supplied Connector links and embedded explainer', () => {
    view('/connectors')
    expect(screen.getByRole('link', { name: /Register a new Connector/ })).toHaveAttribute('href', 'https://uw.partners/clare.and.john/connect')
    expect(screen.getByRole('link', { name: /Learn how referrals work/ })).toHaveAttribute('href', 'https://vimeo.com/1200796333')
    expect(screen.getByTitle('How Clare Connectors work')).toHaveAttribute('src', 'https://player.vimeo.com/video/1200796333')
  })

  test('keeps the Connector explainer after its definition and alternates backgrounds', () => {
    view('/connectors')
    const definition = screen.getByText('What is a Clare Connector?').closest('section')
    const explainer = screen.getByText('Watch the Connector explainer', { selector: '.eyebrow' }).closest('section')
    const graphic = screen.getByRole('img', { name: 'Clare Connector network' })
    expect(definition?.nextElementSibling).toBe(explainer)
    expect(graphic.querySelector('svg')).toBeInTheDocument()
    expect(graphic.querySelectorAll('strong, span')).toHaveLength(0)
    expect(explainer).toHaveClass('cream')
    expect(screen.getByText('A network with many shapes').closest('section')).not.toHaveClass('cream')
    expect(screen.getByText('How introductions work').closest('section')).toHaveClass('cream')
  })

  test('uses the correct personalised UW links', () => {
    const join = view('/join')
    expect(screen.getByRole('link', { name: /Explore the opportunity/ })).toHaveAttribute('href', 'https://uw.partners/clare.and.john/partner/join')
    join.unmount()
    view('/home-utilities')
    expect(screen.getAllByRole('link', { name: /Review my household bills/ })[0]).toHaveAttribute('href', 'https://uw.partners/clare.and.john/join')
  })

  test('shows the presentation card and inclusive team artwork', () => {
    view('/join')
    expect(screen.queryByTitle('Utility Warehouse opportunity presentation')).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View the presentation/ })).toHaveAttribute('href', 'https://earnuw.co.uk')
    expect(screen.getByAltText(/happy, inclusive team/)).toHaveAttribute('src', '/assets/clare-connects-team.png')
  })

  test('provides a real direct-email enquiry path without a pretend form', () => {
    view('/contact')
    const email = screen.getByRole('link', { name: 'Email Clare' })
    expect(email).toHaveAttribute('href', expect.stringMatching(/^mailto:clare@clareconnects\.com\?/))
    expect(screen.getByText(/Nothing is stored by this website/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Send enquiry' })).not.toBeInTheDocument()
    expect(screen.getAllByText(/Stoke-on-Trent/).length).toBeGreaterThan(0)
  })

  test('publishes complete privacy, cookie and terms routes', () => {
    const privacy = view('/privacy')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Privacy information')
    expect(screen.getByText('Storage and retention')).toBeInTheDocument()
    privacy.unmount()
    const cookies = view('/cookies')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Cookie information')
    expect(screen.getByText('No advertising or analytics cookies')).toBeInTheDocument()
    cookies.unmount()
    view('/terms')
    expect(screen.getByText('Clare’s relationship with providers')).toBeInTheDocument()
  })

  test('credits OB Labs discreetly in the footer', () => {
    view()
    const credit = screen.getByText('Website is designed and created by OB Labs')
    expect(credit).toBeInTheDocument()
    expect(credit.querySelector('img')).toHaveAttribute('src', '/assets/ob-labs-logo.svg')
  })

  test('shows branded not found page', () => {
    view('/missing-page')
    expect(screen.getByText('This page isn’t part of the network.')).toBeInTheDocument()
  })

  test('opens and closes the mobile menu accessibly', async () => {
    const user = userEvent.setup()
    view()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Navigation menu' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Navigation menu' })).not.toBeInTheDocument()
  })

  test('opens, resets and closes the assistant', async () => {
    const user = userEvent.setup()
    view()
    await user.click(screen.getByRole('button', { name: 'Open Ask Clare Connects assistant' }))
    expect(screen.getByRole('dialog', { name: 'Ask Clare Connects' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Reset' }))
    await user.click(screen.getByRole('button', { name: 'Close assistant' }))
    expect(screen.queryByRole('dialog', { name: 'Ask Clare Connects' })).not.toBeInTheDocument()
  })
})
