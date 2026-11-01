import { useState } from "react";
import socialWelfareLogo from "../public/images/partners/social_welfare_development_office_logo.png";
import sanggunianKabataanLogo from "../public/images/partners/sangguniang-kabataan-logo.png";
import ecpatLogo from "../public/images/partners/ecpat_logo.png";
import departmentLogo from "../public/images/partners/dept-of-comm-performance.png";
import calLogo from "../public/images/partners/cal_logo.png";
import bolsoLogo from "../public/images/partners/bolso_logo.png";
import barangayLogo from "../public/images/partners/baranggaychildprotectioncommittee.png";
import genderAndDevelopmentLogo from "../public/images/partners/BulsSU_Gender_Dev_Center.png";

const partners = [
  {
    name: "Bulacan State University",
    image: bolsoLogo,
    description:
      "Isang pampublikong pamantasan na nagsusulong ng de-kalidad na edukasyon, pananaliksik, at aktibong pakikilahok sa komunidad. Sinusuportahan nito ang mga programang nagbibigay ng kaalaman, nagpapalawak ng kamalayan sa mga isyung panlipunan, at nagtataguyod ng kapakanan ng mamamayan.",
  },
  {
    name: "Bulacan State University – College of Arts and Letters",
    image: calLogo,
    description:
      "Isang kolehiyong naglalayong linangin ang pagkamalikhain, kakayahang makipagtalastasan, at mapanuring pag-iisip sa pamamagitan ng pag-aaral at pagsasabuhay ng sining, humanidades, at komunikasyon.",
  },
  {
    name: "BULSU Department of Communication and Performing Arts",
    image: departmentLogo,
    description:
      "Isang departamento na nakatuon sa larangan ng komunikasyon at sining ng pagtatanghal. Layunin nitong linangin ang kakayahan ng mga mag-aaral sa paggamit ng midya, malikhaing pagpapahayag, at responsableng pakikipagkomunikasyon.",
  },
  {
    name: "ECPAT Philippines",
    image: ecpatLogo,
    description:
      "Isang organisasyong nagsusulong sa pangangalaga sa mga bata laban sa seksuwal na pagsasamantala at pang-aabuso. Itinataguyod din nito ang pagkakaroon ng ligtas na kapaligiran para sa mga bata, kabilang na ang paggamit nila ng internet at iba pang digital na plataporma.",
  },
  {
    name: "City of San Jose del Monte – City Social Welfare and Development Office (CSWDO)",
    image: socialWelfareLogo,
    description:
      "Isang tanggapan ng pamahalaang panlungsod na nagbibigay ng tulong at suporta sa mga mamamayan, lalo na sa mga pamilyang nangangailangan. Nangunguna rin ito sa mga programang naglalayong pangalagaan ang mga bata at tiyakin ang kanilang kaligtasan at kapakanan.",
  },
  {
    name: "Barangay Muzon South",
    image: barangayLogo,
    description:
      "Isang lokal na yunit ng pamahalaan na naglilingkod sa mga residente ng Muzon South. Sinusuportahan nito ang mga proyekto at programang pangkomunidad na naghihikayat sa pakikilahok ng mga mamamayan at nagtataguyod ng kanilang kaligtasan at kapakanan.",
  },
  {
    name: "Sangguniang Kabataan – Muzon South",
    image: sanggunianKabataanLogo,
    description:
      "Ang konseho ng kabataan ng Barangay Muzon South na naglalayong suportahan ang pag-unlad ng mga kabataan at ng komunidad sa pamamagitan ng mga programang nagtataguyod ng kanilang kaligtasan, kapakanan, at aktibong pakikilahok sa mga gawaing pangkomunidad.",
  },
  {
    name: "BulSU Gender and Development Center",
    image: genderAndDevelopmentLogo,
    description:
      "Nagtataguyod ng pantay na oportunidad sa edukasyon, anuman ang kasarian, at naghihikayat ng pagiging responsable sa lipunan. Kaakibat ito ng adbokasiya ng Smart Surfer na magpalawak ng kaalaman tungkol sa CSAEM at makatulong sa pagpigil sa seksuwal na pang-aabuso at pagsasamantala sa mga bata sa internet.",
  },
];

function PartnersCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = partners.length;

  const moveSlide = (direction) => {
    setActiveSlide(
      (currentSlide) => (currentSlide + direction + slideCount) % slideCount,
    );
  };

  const visiblePartners = [partners[activeSlide]];

  return (
    <section className="partners-section" aria-labelledby="partners-heading">
      <div className="section-heading">
        <p className="eyebrow">Working together</p>
        <h2 id="partners-heading">Our Partners</h2>
      </div>
      <div className="partners-carousel">
        <button
          className="partner-arrow partner-arrow-previous"
          type="button"
          onClick={() => moveSlide(-1)}
          aria-label="View previous partners"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div className="partner-list">
          {visiblePartners.map((partner) => (
            <article className="partner-card" key={partner.name}>
              <div className="partner-logo-wrap">
                <img src={partner.image} alt="" />
              </div>
              <div className="partner-details">
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            </article>
          ))}
        </div>
        <button
          className="partner-arrow partner-arrow-next"
          type="button"
          onClick={() => moveSlide(1)}
          aria-label="View next partners"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="partner-dots" aria-label="Partner slides">
        {Array.from({ length: slideCount }, (_, index) => (
          <button
            className={`partner-dot ${index === activeSlide ? "active" : ""}`}
            type="button"
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show partner slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default PartnersCarousel;
