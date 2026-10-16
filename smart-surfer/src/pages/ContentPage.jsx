import Hero from '../components/Hero'
import Accordion from '../components/Accordion'
import InfoCard from '../components/InfoCard'
import contentHeroImage from '../public/images/ChildImages/Childimage2.png'
import sexualExploitationImage from '../public/images/ContentLogos/SexualExploitation.png'
import onlineGroomingImage from '../public/images/ContentLogos/OnlineGrooming.png'
import digitalPrivacyImage from '../public/images/ContentLogos/DigitalPrivacy.png'
import criticalThinkingImage from '../public/images/ContentLogos/CriticalThinking.png'
import respondingToCsaemImage from '../public/images/ContentLogos/RespondingToCSAEM.png'
import './Pages.css'

function ContentPage() {
  return (
    <>
      <Hero eyebrow="Smart Surfer" title="Learn and Stay Safe" subtitle="Knowledge is one of the strongest tools for protecting yourself and others." compact image={contentHeroImage} />
      <section className="page-section content-intro">
        <div className="card-grid two-columns">
          <InfoCard icon="◉" title="Child Sexual Abuse and Exploitation Materials (CSAEM)" accent="purple">
            <p>refers to any visual, audio, or written depiction—such as photographs, videos, audio recordings, or computer-generated imagery—that shows or describes minors (individuals under the age of majority or age of consent) engaged in sexual acts, or displays the sexual organs of minors for a sexual purpose.</p>
          </InfoCard>
          <InfoCard icon="▣" title="Media Literacy" accent="blue">
            <p>Media literacy is the ability to access, understand, analyze, evaluate, and create information from different types of media, such as television, newspapers, social media, websites, and videos.</p>
          </InfoCard>
        </div>
      </section>
      <section className="page-section topics-section">
        <div className="section-heading">
          <p className="eyebrow">Explore the topics</p>
          <h2>Tools for safer choices online</h2>
        </div>
        <div className="accordion-list">
          <Accordion title="Online Sexual Exploitation and Abuse Awareness" image={sexualExploitationImage}>
            <p>Online sexual exploitation and abuse happen when the internet is used to manipulate, abuse, or exploit children. These may occur through social media, online games, and messaging applications.</p>
            <p><strong>Common Forms:</strong></p>
            <ul>
              <li>Online grooming and manipulation</li>
              <li>Threats or blackmail involving private images</li>
              <li>Creating or sharing Child Sexual Abuse and Exploitation Material (CSAEM)</li>
            </ul>
            <p><strong>How to Stay Safe:</strong></p>
            <ul>
              <li>Be careful when interacting with strangers online.</li>
              <li>Never feel pressured to share private photos.</li>
              <li>Report suspicious behavior and seek help from a trusted person.</li>
            </ul>
            <p><strong>Remember:</strong> Every child deserves protection and safety, both online and offline.</p>
          </Accordion>
          <Accordion title="Online Grooming and Manipulation" image={onlineGroomingImage}>
            <p>Online grooming occurs when someone builds trust with a child to manipulate or sexually exploit them. It can begin with friendly conversations and gradually become secretive, controlling, or inappropriate.</p>
            <p><strong>Warning Signs:</strong></p>
            <ul>
              <li>Asking you to keep conversations secret</li>
              <li>Requesting private photos or personal information</li>
              <li>Using threats, gifts, or guilt to control you</li>
            </ul>
            <p><strong>How to Protect Yourself:</strong></p>
            <ul>
              <li>Set boundaries and never feel pressured to say yes.</li>
              <li>Block and report suspicious accounts when safe.</li>
              <li>Ask a trusted adult for help.</li>
            </ul>
            <p><strong>Remember:</strong> A trustworthy person respects your boundaries and never forces you to do something uncomfortable.</p>
          </Accordion>
          <Accordion title="Digital Privacy and Personal Information" image={digitalPrivacyImage} defaultOpen>
            <p>Digital privacy means protecting your personal information, accounts, photos, and online activities from misuse.</p>
            <p><strong>Protect Yourself Online:</strong></p>
            <ul>
              <li>Use strong passwords and enable two-factor authentication.</li>
              <li>Keep your address, passwords, and location private.</li>
              <li>Check your social media privacy settings.</li>
              <li>Think before posting personal photos or information.</li>
            </ul>
            <p><strong>Why It Matters:</strong></p>
            <p>Protecting your privacy helps prevent identity theft, blackmail, and other online risks.</p>
            <p><strong>Remember:</strong> Think before you post. Your personal information deserves protection.</p>
          </Accordion>
          <Accordion title="Critical Thinking and Fact-Checking" image={criticalThinkingImage}>
            <p>Media literacy helps us understand and evaluate information found online. Since not everything on the internet is true, we must think critically before believing or sharing content.</p>
            <p><strong>Watch Out For:</strong></p>
            <ul>
              <li>Fake news and misleading headlines</li>
              <li>Edited or manipulated images and videos</li>
              <li>Unverified information from unreliable sources</li>
            </ul>
            <p><strong>How to Fact-Check:</strong></p>
            <ul>
              <li>Check who published the information.</li>
              <li>Compare it with reliable sources.</li>
              <li>Verify the date and supporting evidence.</li>
              <li>Think before sharing.</li>
            </ul>
            <p><strong>Remember:</strong> Don&apos;t believe everything you see online. Verify first, then share responsibly.</p>
          </Accordion>
          <Accordion title="Reporting and Responding to CSAEM" image={respondingToCsaemImage}>
            <p>Child Sexual Abuse and Exploitation Material (CSAEM) involves material depicting or documenting the sexual abuse or exploitation of children. Sharing this material can cause further harm to victims.</p>
            <p><strong>What Should You Do?</strong></p>
            <ul>
              <li>Never download, save, or share the material.</li>
              <li>Report it using the platform&apos;s reporting tools.</li>
              <li>Contact appropriate authorities or child protection organizations.</li>
              <li>Protect the child&apos;s identity and privacy.</li>
              <li>Never confront suspected offenders yourself.</li>
            </ul>
            <p><strong>Why Reporting Matters:</strong></p>
            <p>Reporting suspected CSAEM can help prevent further circulation and support efforts to protect children.</p>
            <p><strong>Remember:</strong> Stop the spread, report responsibly, and help protect children online.</p>
          </Accordion>
        </div>
      </section>
    </>
  )
}

export default ContentPage
