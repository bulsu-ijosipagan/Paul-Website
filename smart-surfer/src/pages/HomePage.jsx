import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import PartnersCarousel from "../components/PartnersCarousel";
import HighlightsCarousel from "../components/HighlightsCarousel";
import smartSurferLogo from "../public/images/SmartSurferLogo.png";
import homeHeroImage from "../public/images/ChildImages/1MAIN COVER.PNG";
import "./HomePage.css";

function HomePage({ onNavigate }) {
  return (
    <>
      <Hero
        title="SMART SURFER"
        subtitle="Spot Abuse, Stop Abuse"
        image={homeHeroImage}
      />
      <section className="page-section intro-section">
        <div className="intro-art">
          <img src={smartSurferLogo} alt="Smart Surfer logo" />
        </div>
        <div className="intro-copy">
          <p className="eyebrow">Welcome to Smart Surfer</p>
          <h2>
            <span className="horizon-text">What is</span>{" "}
            <span className="horizon-text">Smart Surfer</span>?
          </h2>
          <p>
            Ang Smart Surfer ay isang proyekto na naglalayong tulungan ang mga
            young adults na maging mulat, makilala ang mga senyales ng
            pang-aabuso, at mas maprotektahan ang kanilang sarili habang
            gumagamit ng internet.
          </p>
          <button
            className="primary-button"
            onClick={() => onNavigate("content")}
          >
            View the contents here <span>→</span>
          </button>
        </div>
      </section>
      <section className="purpose-section" aria-label="Our purpose and goal">
        <div className="purpose-column">
          <h2>Our Purpose</h2>
          <p>
            Palalimin ang kaalaman at pag-unawa ng mga young adults upang maging
            matalino, mapagmatyag, at responsable sa paggamit ng mga digital na
            plataporma.
          </p>
        </div>
        <div className="purpose-column">
          <h2>Our Goal</h2>
          <p>
            Gawing gabay ang kaalaman sa media at palakasin ang kamalayan ng mga
            young adults upang matulungan silang makilala, umiwas, at wastong
            tumugon sa mga mapanganib na nilalaman ng internet.
          </p>
        </div>
      </section>
      <PartnersCarousel />
      <HighlightsCarousel />
      <section className="page-section pillars-section">
        <div className="section-heading">
          <p className="eyebrow">Build your digital confidence</p>
          <h2>Learn. Think. Speak up.</h2>
        </div>
        <div className="card-grid three-columns">
          <InfoCard icon="lightbulb" title="Learn the signs" accent="purple">
            Understanding common online risks makes it easier to notice when a
            situation is unsafe.
          </InfoCard>
          <InfoCard icon="lock" title="Protect your privacy" accent="blue">
            Small habits like strong passwords and careful sharing help keep
            your personal life yours.
          </InfoCard>
          <InfoCard icon="♡" title="Reach out for help" accent="pink">
            You do not have to handle a worrying situation alone. Trusted adults
            and hotlines can help.
          </InfoCard>
        </div>
      </section>
      <section className="callout-section">
        <div>
          <p className="eyebrow">Need support?</p>
          <h2>If something feels wrong, tell someone you trust.</h2>
        </div>
        <button className="light-button" onClick={() => onNavigate("hotlines")}>
          REPORTING HOTLINES <span>→</span>
        </button>
      </section>
    </>
  );
}

export default HomePage;
