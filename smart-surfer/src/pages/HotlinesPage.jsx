import Hero from "../components/Hero";
import emergencyHeroImage from "../public/images/EmergenyHotlinesLogos/EmergencyHotline.jpg";
import emergency911Logo from "../public/images/EmergenyHotlinesLogos/911 logo.png";
import ecpatLogo from "../public/images/EmergenyHotlinesLogos/ecpatph.png";
import makabataLogo from "../public/images/EmergenyHotlinesLogos/makabata.png";
import wcpdLogo from "../public/images/EmergenyHotlinesLogos/womenandchildrenprotectiondesk.png";
import cswdoLogo from "../public/images/EmergenyHotlinesLogos/socialwelfareanddevelopmentoffice.png";
import bcpcLogo from "../public/images/EmergenyHotlinesLogos/baranggaychildprotectioncommittee.png";
import "./HotlinesPage.css";

function HotlinesPage() {
  return (
    <>
      <Hero
        title="Contact Information"
        subtitle="Kung makaranas o makasaksi ng pang-aabuso at pagsasamantala sa internet, may mga taong handang tumulong at sumuporta sa iyo."
        compact
        image={emergencyHeroImage}
      />
      <section className="page-section hotline-page">
        <div className="notice">
          <span className="notice-icon" aria-hidden="true">
            !
          </span>
          <p>
            Kung may makita o malaman kang mga materyal sa internet na may
            kaugnayan sa seksuwal na pang-aabuso o pagsasamantala sa mga bata,
            maaari mo itong iulat sa pamamagitan ng mga sumusunod:
          </p>
        </div>
        <div className="hotline-list">
          <article className="hotline-card">
            <img
              className="hotline-image"
              src={ecpatLogo}
              alt="ECPAT Philippines logo"
            />
            <div>
              <h2>ECPAT Philippines - eProtectKids CSAEM Hotline</h2>
              <dl>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:+63289208151">(+632) 8920-8151</a>
                  </dd>
                </div>
                <div>
                  <dt>Fax</dt>
                  <dd>(+632) 84415108</dd>
                </div>
                <div>
                  <dt>Online Reporting</dt>
                  <dd>
                    <a
                      href="https://ecpat.org.ph/report/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ecpat.org.ph/report/
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Email Address</dt>
                  <dd>
                    <a href="mailto:info@ecpat.org.ph">info@ecpat.org.ph</a>
                  </dd>
                </div>
              </dl>
              <p>
                Tumatanggap ang eProtectKids CSAEM Hotline ng mga ulat tungkol
                sa mga larawan, bidyo, at iba pang materyal na nagpapakita ng
                seksuwal na pang-aabuso at pagsasamantala sa mga bata (CSAEM),
                pati na rin sa iba pang uri ng seksuwal na pagsasamantala sa mga
                bata sa internet. Maaari ring magsumite ng ulat nang hindi
                inilalantad ang sariling pagkakakilanlan.
              </p>
            </div>
          </article>
          <article className="hotline-card">
            <img
              className="hotline-image"
              src={makabataLogo}
              alt="MAKABATA Helpline logo"
            />
            <div>
              <h2>
                MAKABATA Helpline 1383 – Council for the Welfare of Children
                (CWC) / DSWD
              </h2>
              <dl>
                <div>
                  <dt>Telephone</dt>
                  <dd>
                    <a href="tel:1383">1383</a>
                  </dd>
                </div>
                <div>
                  <dt>Mobile</dt>
                  <dd>
                    <a href="tel:09193541383">0919-354-1383</a>
                  </dd>
                </div>
                <div>
                  <dt>Mobile</dt>
                  <dd>
                    <a href="tel:09158022375">0915-802-2375</a>
                  </dd>
                </div>
              </dl>
              <p>
                Ang MAKABATA Helpline ay nagbibigay ng tulong sa mga usaping may
                kaugnayan sa karapatan ng mga bata, kabilang ang pang-aabuso at
                iba pang paglabag sa kanilang mga karapatan. Tinutulungan din
                nito ang mga bata na makakuha ng suporta mula sa mga angkop na
                ahensya. Bukas ang helpline 24 oras para sa mga agarang
                pangangailangan.
              </p>
            </div>
          </article>
          <article className="hotline-card">
            <img
              className="hotline-image"
              src={wcpdLogo}
              alt="Women and Children Protection Desk logo"
            />
            <div>
              <h2>
                City of San Jose Delmonte, Philippine National Police – Women
                and Children Protection Desk (WCPD)
              </h2>
              <dl>
                <div>
                  <dt>Mobile</dt>
                  <dd>
                    <a href="tel:09164320401">0916-432-0401</a>
                  </dd>
                </div>
                <div>
                  <dt>Mobile</dt>
                  <dd>
                    <a href="tel:09555006105">0955-500-6105 (WCPD)</a>
                  </dd>
                </div>
                <div>
                  <dt>Email Address</dt>
                  <dd>
                    <a href="mailto:sanjosedelmontepcr@gmail.com">
                      sanjosedelmontepcr@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
              <p>
                Para sa mga usaping may kinalaman sa pang-aabuso,
                pagsasamantala, o kaligtasan ng mga bata sa Lungsod ng San Jose
                del Monte, maaari kayong makipag-ugnayan sa WCPD ng San Jose del
                Monte City Police Station para sa pag-uulat, tulong, at
                pag-refer sa angkop na ahensya.
              </p>
            </div>
          </article>
          <article className="hotline-card">
            <img
              className="hotline-image"
              src={cswdoLogo}
              alt="City Social Welfare and Development Office logo"
            />
            <div>
              <h2>
                San Jose del Monte City Social Welfare and Development Office
                (CSWDO)
              </h2>
              <dl>
                <div>
                  <dt>Telephone</dt>
                  <dd>
                    <a href="tel:0449197370">0449197370</a>
                  </dd>
                </div>
                <div>
                  <dt>Email Address</dt>
                  <dd>
                    <a href="mailto:cswdo.csjdm@gmail.com">
                      cswdo.csjdm@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
              <p>
                Maaari ring humingi ng tulong ang mga residente ng Barangay
                Muzon South, San Jose del Monte City sa City Social Welfare and
                Development Office (CSWDO) o sa mga kawani ng lokal na
                pamahalaan na nangangalaga sa mga bata. Maaari silang tumulong
                sa mga batang nangangailangan ng proteksyon, agarang aksyon,
                karagdagang tulong, o pag-uugnay sa angkop na ahensya.
              </p>
            </div>
          </article>
          <article className="hotline-card">
            <img
              className="hotline-image"
              src={bcpcLogo}
              alt="Barangay Muzon South Barangay Child Protection Committee logo"
            />
            <div>
              <h2>
                Barangay Muzon South – Barangay Child Protection Committee
                (BCPC)
              </h2>
              <dl>
                <div>
                  <dt>Barangay Hotline</dt>
                  <dd>
                    <a href="tel:09478941328">0947-894-1328</a>
                  </dd>
                </div>
                <div>
                  <dt>Rescue Hotline</dt>
                  <dd>
                    <a href="tel:09231988688">0923-198-8688</a>
                  </dd>
                </div>
              </dl>
              <p>
                Para sa mga usaping may kinalaman sa pang-aabuso,
                pagsasamantala, o kaligtasan ng mga bata sa Barangay Muzon
                South, San Jose del Monte City, maaaring lumapit sa mga opisyal
                ng barangay o sa Barangay Child Protection Committee (BCPC)
                upang mag-ulat, humingi ng tulong, at maituro sa angkop na
                ahensya o serbisyong nangangalaga sa mga bata.
              </p>
            </div>
          </article>
          <article className="hotline-card emergency-card">
            <img
              className="hotline-image"
              src={emergency911Logo}
              alt="Emergency 911 Philippines logo"
            />
            <div>
              <h2>Emergency 911 Philippines</h2>
              <p>
                <strong>Emergency assistance:</strong> Kung may agarang panganib
                o emergency, makipag-ugnayan sa mga serbisyong pang-emergency o
                tumawag sa <a href="tel:911">911</a>.
              </p>
              <p>
                <strong>Important:</strong> Huwag i-download, i-save, ipasa,
                i-repost, o ibahagi ang mga pinaghihinalaang CSAEM. Sa pag-uulat
                ng mga ganitong materyal sa internet, gamitin ang tamang
                reporting channel at ibigay lamang ang impormasyong hinihingi ng
                awtorisadong ahensya o serbisyong nagbibigay ng tulong.
              </p>
            </div>
          </article>
        </div>
        <p className="safety-note">
          <strong className="safety-note-label">Remember:</strong> Kung ikaw ay nasa agarang panganib,
          makipag-ugnayan agad sa mga serbisyong pang-emergency sa inyong lugar.
          Karapatan mong maging ligtas, mapakinggan, at matulungan.
        </p>
      </section>
    </>
  );
}

export default HotlinesPage;
