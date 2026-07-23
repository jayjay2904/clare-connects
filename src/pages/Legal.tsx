import { Link } from 'react-router-dom'
import { PageHero } from '../components/Elements'
import { site } from '../content/siteContent'

export function Privacy() {
  return <LegalPage title="Privacy information" intro="How Clare Connects handles personal information when you get in touch.">
    <h2>Information you may provide</h2>
    <p>This website does not store enquiry form submissions. If you choose to email Clare, your email is sent by your own email provider and may include your name, email address, telephone number, organisation, service interests and any information you include in your message.</p>
    <h2>Why the information is used</h2>
    <p>Clare uses the information you provide to understand and respond to your enquiry, discuss relevant services, keep an appropriate record of the conversation and take steps you request before entering into an arrangement.</p>
    <h2>Sharing with providers and trusted partners</h2>
    <p>Where it is relevant to your enquiry, Clare may need to introduce you to Utility Warehouse or another trusted provider or specialist. Clare will explain the proposed next step and will not make a warm introduction without appropriate transparency. Those organisations are responsible for their own privacy information and handling of personal data.</p>
    <h2>Storage and retention</h2>
    <p>Emails and related records may be stored by Clare’s email and business technology providers. Information is kept only for as long as reasonably necessary to respond, maintain the relationship, meet legal or accounting requirements, or deal with a complaint. Records are reviewed and deleted when they are no longer needed.</p>
    <h2>Cookies and analytics</h2>
    <p>The website does not currently use advertising or analytics cookies. It uses essential browser storage only to remember that you dismissed the cookie notice. Read the <Link to="/cookies">cookie information</Link> for more detail.</p>
    <h2>External websites</h2>
    <p>Links to Utility Warehouse, LinkedIn, Vimeo and other external services take you to websites controlled by those organisations. Their privacy and cookie terms apply when you use them.</p>
    <h2>Your choices and rights</h2>
    <p>You may ask Clare for access to your personal information, to correct it, delete it, restrict its use or explain how it has been handled. Email <a href={`mailto:${site.email}`}>{site.email}</a>. You may also raise a concern with the UK Information Commissioner’s Office.</p>
  </LegalPage>
}

export function Cookies() {
  return <LegalPage title="Cookie information" intro="A clear explanation of the limited browser storage used by this website.">
    <h2>What this website uses</h2>
    <p>Clare Connects currently uses only essential browser storage. When you select “Understood” on the cookie notice, your browser stores a small value named <code>cc-cookie-notice</code> so the notice does not appear on every visit.</p>
    <h2>No advertising or analytics cookies</h2>
    <p>No advertising, behavioural tracking or analytics cookies are currently set by Clare Connects. If this changes, this page and the cookie notice will be updated before non-essential technologies are used.</p>
    <h2>External services</h2>
    <p>Embedded or linked services, including Vimeo, LinkedIn and Utility Warehouse, may use their own cookies when you interact with them or visit their websites. Their cookie information applies to those services.</p>
    <h2>Managing browser storage</h2>
    <p>You can remove the saved cookie-notice preference through your browser’s privacy or site-data settings. The notice will appear again on your next visit.</p>
  </LegalPage>
}

export function Terms() {
  return <LegalPage title="Website terms" intro="Important information about Clare’s role and the use of this website.">
    <h2>About Clare Connects</h2>
    <p>This website provides general information about household services, business utilities, referrals and a business opportunity. It does not provide a binding quote, regulated financial advice or a guarantee that any particular service is available or suitable.</p>
    <h2>Clare’s relationship with providers</h2>
    <p>Clare is an authorised independent partner with Utility Warehouse and may receive commission when customers choose services through her. Business and specialist services may also be provided through trusted partner organisations. The relevant provider is responsible for its supply, contract, eligibility, advice, installation and service terms.</p>
    <h2>Quotes, savings and availability</h2>
    <p>Prices, services and availability depend on individual circumstances and provider terms. Clare Connects does not guarantee savings or a particular result. Review all provider information and contract terms before deciding to proceed.</p>
    <h2>Referrals and the opportunity</h2>
    <p>Connector rewards and opportunity outcomes are not guaranteed. They depend on eligibility, customers, individual effort and the applicable programme terms. Clare will explain the current programme before you make a decision.</p>
    <h2>External links</h2>
    <p>External links are provided to help you reach relevant information or services. Clare Connects is not responsible for the content, security or availability of third-party websites.</p>
    <h2>Questions and complaints</h2>
    <p>Start by emailing <a href={`mailto:${site.email}`}>{site.email}</a>. Clare will acknowledge the concern and explain the appropriate next step. Where a complaint concerns a provider’s service or contract, that provider’s complaints procedure may apply.</p>
  </LegalPage>
}

function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <><PageHero eyebrow="Clare Connects" title={title} intro={intro}/><article className="legal section">{children}<p className="legal-back"><Link to="/contact">Ask Clare a question</Link></p></article></>
}
