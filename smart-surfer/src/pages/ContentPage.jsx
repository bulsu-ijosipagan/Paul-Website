import Hero from "../components/Hero";
import Accordion from "../components/Accordion";
import InfoCard from "../components/InfoCard";
import contentHeroImage from "../public/images/Highlights/Highlights 14.jpg";
import sexualExploitationImage from "../public/images/ContentLogos/SexualExploitation.png";
import onlineGroomingImage from "../public/images/ContentLogos/OnlineGrooming.png";
import digitalPrivacyImage from "../public/images/ContentLogos/DigitalPrivacy.png";
import criticalThinkingImage from "../public/images/ContentLogos/CriticalThinking.png";
import respondingToCsaemImage from "../public/images/ContentLogos/RespondingToCSAEM.png";
import "./ContentPage.css";

function ContentPage() {
  return (
    <>
      <Hero
        title="Learn and Stay Safe"
        subtitle="Ang kaalaman ay sandata sa pagprotekta sa sarili at sa kapwa."
        compact
        image={contentHeroImage}
      />
      <section className="page-section content-intro">
        <div className="card-grid two-columns">
          <InfoCard
            icon="◉"
            title="Child Sexual Abuse and Exploitation Materials (CSAEM)"
            accent="purple"
          >
            <p>
              Sa ilalim ng Republic Act No. 11930, ang CSAEM ay tumutukoy sa
              anumang materyal na biswal, audio, o nakasulat na nagpapakita ng
              bata na sangkot sa aktuwal o ginayang seksuwal na gawain, o
              nagbibigay-diin sa mga pribadong bahagi ng katawan ng bata para sa
              layuning seksuwal na pagsasamantala.
            </p>
          </InfoCard>
          <InfoCard icon="▣" title="Media Literacy" accent="blue">
            <p>
              Ayon sa National Association for Media Literacy Education, ang
              media literacy ay kakayahang unawain ang digital na kapaligiran sa
              pamamagitan ng pagsusuri, pagtataya, at responsableng paggamit ng
              iba't ibang uri ng media. Tinutulungan nito ang mga tao na
              mag-isip nang kritikal tungkol sa mga mensaheng kanilang
              natatanggap at ginagawa. Dahil dito, mas nauunawaan nila ang mga
              posibleng panganib sa iba't ibang online platform at nagiging mas
              responsable sa pakikisalamuha sa iba.
            </p>
          </InfoCard>
        </div>
      </section>
      <section
        className="page-section law-section"
        aria-labelledby="ra-11930-heading"
      >
        <div className="law-card">
          <div className="section-heading">
            <p className="eyebrow">Know your rights</p>
            <h2 id="ra-11930-heading">RA 11930: Protect Children Online</h2>
          </div>
          <p>
            Ang Republic Act No. 11930, o Anti-OSAEC and Anti-CSAEM Act, ay
            batas na naglalayong protektahan ang mga bata laban sa seksuwal na
            pang-aabuso at pagsasamantala sa pamamagitan ng internet at iba pang
            teknolohiya.
          </p>

          <h3>Purpose of the Law</h3>
          <p>
            Layunin ng RA 11930 na maiwasan ang seksuwal na pang-aabuso at
            pagsasamantala sa mga bata, lalo na sa online platforms. Itinatakda
            rin nito ang mga parusa sa mga lumalabag at mga hakbang upang
            maprotektahan ang mga bata laban sa OSAEC at CSAEM.
          </p>

          <h3>What are OSAEC and CSAEM?</h3>
          <dl className="law-definitions">
            <div>
              <dt>OSAEC (Online Sexual Abuse or Exploitation of Children)</dt>
              <dd>
                Pang-aabuso o pagsasamantala sa bata gamit ang internet o
                digital technology, gaya ng online grooming, seksuwal na
                pamimilit, at live-streaming ng pang-aabuso.
              </dd>
            </div>
            <div>
              <dt>CSAEM (Child Sexual Abuse or Exploitation Materials)</dt>
              <dd>
                Mga larawan, video, audio, o iba pang materyal na nagpapakita o
                naglalarawan ng seksuwal na pang-aabuso o pagsasamantala sa
                bata.
              </dd>
            </div>
          </dl>

          <h3>What is the difference between OSAEC and CSAEM?</h3>
          <p>
            Ang OSAEC ay ang pang-aabuso o pagsasamantala sa bata gamit ang
            internet. Ang CSAEM naman ay mga larawan, video, audio, o iba pang
            materyal na nagpapakita ng seksuwal na pang-aabuso o pagsasamantala
            sa bata.
          </p>
          <p>
            Sa madaling salita: Ang OSAEC ay ang pang-aabuso, habang ang CSAEM
            ay ang mga materyal na nagpapakita nito. Parehong mahalagang
            maunawaan ang mga ito upang mas maprotektahan ang mga bata online.
          </p>

          <h3>What does the law prohibit?</h3>
          <p>
            Ipinagbabawal ng batas ang pang-aabuso at pagsasamantala sa mga
            bata, paggawa at pagpapakalat ng mga larawan o video na nagpapakita
            nito, pagbebenta o pag-iingat ng mga ganitong materyal, at
            panlilinlang sa mga bata online para sa seksuwal na layunin. Ang mga
            lalabag ay maaaring makulong at pagmultahin.
          </p>

          <h3>Penalties under RA 11930</h3>
          <ul>
            <li>
              Paggawa o pagpapakalat ng CSAEM: life imprisonment at multang
              hindi bababa sa ₱2,000,000.
            </li>
            <li>
              Pagkakaroon o possession ng CSAEM: pagkakakulong ng 12 taon at 1
              araw hanggang 20 taon, at multang hindi bababa sa ₱300,000.
            </li>
            <li>
              Sadyang pag-access sa CSAEM: pagkakakulong ng 10 taon at 1 araw
              hanggang 12 taon, at multang ₱200,000 hanggang ₱300,000.
            </li>
          </ul>
          <p>
            Ang mga parusa ay batay sa Section 10 ng RA 11930. Ang eksaktong
            parusa ay nakadepende sa uri ng paglabag.
          </p>

          <h3>Examples of normalized misconceptions</h3>
          <div className="misconception-list">
            <article>
              <h4>
                “Okay lang i-share ang CSAEM kung marami nang nag-share nito.”
              </h4>
              <p>
                <strong>Reality:</strong> Ipinagbabawal ang pagpapakalat ng
                CSAEM sa ilalim ng RA 11930, kahit marami na ang nagbahagi nito.
                Huwag itong i-share o i-repost. Iulat ito sa halip.
              </p>
            </article>
            <article>
              <h4>“Okay lang humingi ng malaswang larawan sa private chat.”</h4>
              <p>
                <strong>Reality:</strong> Mali pa rin ang humingi o magkalat ng
                mga larawang o bidyong nagpapakita ng seksuwal na pang-aabuso sa
                mga bata, kahit sa private chat lamang. Ipinagbabawal ito ng RA
                11930.
              </p>
            </article>
            <article>
              <h4>
                “Jowa ko naman siya kaya hindi niya ikakalat ang private picture
                ko.”
              </h4>
              <p>
                <strong>Reality:</strong> Hindi garantiya ang pagmamahal at
                tiwala na mananatiling pribado ang mga larawan. Kung menor de
                edad ang nasa seksuwal na larawan, maaaring lumabag sa RA 11930
                ang paggawa o pagpapakalat nito.
              </p>
            </article>
            <article>
              <h4>“Okay lang i-save ang larawan o video para sa sarili ko.”</h4>
              <p>
                <strong>Reality:</strong> Ipinagbabawal ng RA 11930 ang
                pagtataglay ng CSAEM, kahit pansariling gamit lamang. Huwag
                itong i-save o i-download. Sa halip, i-report ito sa platform at
                sa kinauukulang awtoridad.
              </p>
            </article>
            <article>
              <h4>
                “Okay lang i-post ang anak ko kahit may malaswang komento.”
              </h4>
              <p>
                <strong>Reality:</strong> Bilang magulang, mahalagang
                isaalang-alang ang privacy at kaligtasan ng anak sa bawat
                ipo-post. Huwag balewalain o gawing normal ang mga seksuwalisado
                at mapang-abusong komento tungkol sa mga bata. I-report ang mga
                ito at protektahan ang dignidad ng bata online.
              </p>
            </article>
          </div>

          <h3>What to do?</h3>
          <ul>
            <li>Huwag i-download o ipakalat ang posibleng CSAEM.</li>
            <li>
              Iulat ang pinaghihinalaang pang-aabuso sa pulisya, lokal na
              tanggapan ng social welfare, o kinauukulang awtoridad.
            </li>
            <li>
              Protektahan ang pagkakakilanlan at pribadong impormasyon ng bata.
            </li>
            <li>
              Huwag imbestigahan o komprontahin ang pinaghihinalaang salarin.
            </li>
          </ul>

          <div className="law-reminder">
            <h3>Remember</h3>
            <p>
              Huwag magkalat. Huwag manahimik. Iulat at protektahan ang bata.
            </p>
            <p>
              Para sa buong detalye, sumangguni sa Republic Act No. 11930 at sa
              mga opisyal na sanggunian.
            </p>
          </div>
        </div>
      </section>
      <section className="page-section topics-section">
        <div className="section-heading">
          <p className="eyebrow">Explore the topics</p>
          <h2>Tools for safer choices online</h2>
        </div>
        <div className="accordion-list">
          <Accordion
            title="Online Sexual Exploitation and Abuse Awareness"
            image={sexualExploitationImage}
          >
            <p>
              Ang online sexual exploitation and abuse ay nangyayari kapag
              ginagamit ang internet upang manipulahin, abusuhin, o
              pagsamantalahan ang mga bata. Maaari itong mangyari sa pamamagitan
              ng social media, online games, at messaging applications
            </p>
            <p>
              <strong>Common Forms:</strong>
            </p>
            <ul>
              <li>Online grooming at panlilinlang sa mga bata.</li>
              <li>
                Mga pagbabanta o pamba-blackmail gamit ang mga pribadong larawan
              </li>
              <li>
                Paggawa o pagpapakalat ng Child Sexual Abuse and Exploitation
                Material (CSAEM).
              </li>
            </ul>
            <p>
              <strong>How to Stay Safe:</strong>
            </p>
            <ul>
              <li>Mag-ingat sa pakikipag-usap sa mga hindi kakilala online.</li>
              <li>
                Huwag magpadala sa pamimilit na magbahagi ng mga pribadong
                larawan.
              </li>
              <li>
                I-report ang kahina-hinalang kilos at humingi ng tulong sa isang
                pinagkakatiwalaang tao.
              </li>
            </ul>
            <p>
              <strong>Remember:</strong> Bawat bata ay nararapat na
              maprotektahan at maging ligtas, online man o offline.
            </p>
            <p>
              <strong>References:</strong>
            </p>
            <ul className="reference-list">
              <li>
                <a
                  href="https://ecpat.org/resource/factsheets-on-online-child-sexual-exploitation-ocse-manifestations-online-grooming/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ECPAT International: Online Child Sexual Exploitation and
                  Online Grooming
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncmec.org/theissues/onlineenticement"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Center for Missing &amp; Exploited Children: Online
                  Enticement
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncmec.org/theissues/sextortion"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Center for Missing &amp; Exploited Children:
                  Sextortion
                </a>
              </li>
            </ul>
          </Accordion>
          <Accordion
            title="Online Grooming and Manipulation"
            image={onlineGroomingImage}
          >
            <p>
              Nangyayari ang online grooming kapag ang isang tao ay bumubuo ng
              tiwala sa isang bata upang manipulahin o seksuwal na
              pagsamantalahan siya. Maaari itong magsimula sa palakaibigang
              pag-uusap na unti-unting nagiging palihim, mapangkontrol, o hindi
              angkop.
            </p>
            <p>
              <strong>Warning Signs:</strong>
            </p>
            <ul>
              <li>Pinagpapalihim sa iyo ang inyong mga pag-uusap.</li>
              <li>Humihingi ng pribadong larawan o personal na impormasyon.</li>
              <li>
                Gumagamit ng pagbabanta, regalo, o panunumbat upang kontrolin
                ka.
              </li>
            </ul>
            <p>
              <strong>How to Protect Yourself:</strong>
            </p>
            <ul>
              <li>
                Magtakda ng hangganan at huwag magpadala sa pamimilit na
                pumayag.
              </li>
              <li>
                I-block at i-report ang mga kahina-hinalang account kung ligtas
                itong gawin.
              </li>
              <li>
                Humingi ng tulong sa isang pinagkakatiwalaang nakatatanda.
              </li>
            </ul>
            <p>
              <strong>Remember:</strong> Ang taong mapagkakatiwalaan ay
              gumagalang sa iyong mga hangganan at hindi ka pinipilit na gawin
              ang anumang bagay na hindi ka komportable.
            </p>
            <p>
              <strong>References:</strong>
            </p>
            <ul className="reference-list">
              <li>
                <a
                  href="https://ecpat.org/resource/factsheets-on-online-child-sexual-exploitation-ocse-manifestations-online-grooming/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ECPAT International: Online Child Sexual Exploitation and
                  Online Grooming
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncmec.org/theissues/onlineenticement"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Center for Missing &amp; Exploited Children: Online
                  Enticement
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncmec.org/theissues/sextortion"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Center for Missing &amp; Exploited Children:
                  Sextortion
                </a>
              </li>
              <li>
                <a
                  href="https://www.esafety.gov.au/parents/issues-and-advice/grooming-or-unwanted-contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  eSafety Commissioner: Grooming or Unwanted Contact
                </a>
              </li>
            </ul>
          </Accordion>
          <Accordion
            title="Digital Privacy and Personal Information"
            image={digitalPrivacyImage}
            defaultOpen
          >
            <p>
              Ang digital privacy ay tumutukoy sa pagprotekta sa iyong personal
              na impormasyon, mga account, larawan, at online na gawain upang
              maiwasan ang maling paggamit ng mga ito.
            </p>
            <p>
              <strong>Protect Yourself Online:</strong>
            </p>
            <ul>
              <li>
                Gumamit ng matibay na password at i-enable ang two-factor
                authentication.
              </li>
              <li>
                Panatilihing pribado ang iyong address, mga password, at
                lokasyon.
              </li>
              <li>
                Suriin ang privacy settings ng iyong social media accounts.
              </li>
              <li>
                Mag-isip muna bago mag-post ng mga personal na larawan o
                impormasyon.
              </li>
            </ul>
            <p>
              <strong>Why It Matters:</strong>
            </p>
            <p>
              Ang pagprotekta sa iyong privacy ay nakatutulong upang maiwasan
              ang pagnanakaw ng pagkakakilanlan, pamba-blackmail, at iba pang
              panganib online.
            </p>
            <p>
              <strong>Remember:</strong> Mag-isip muna bago mag-post. Mahalagang
              protektahan ang iyong personal na impormasyon
            </p>
            <p>
              <strong>References:</strong>
            </p>
            <ul className="reference-list">
              <li>
                <a
                  href="https://www.cisa.gov/sites/default/files/publications/Online-Privacy-Tip-Sheet-122019-508.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  CISA: Online Privacy Tip Sheet
                </a>
              </li>
              <li>
                <a
                  href="https://www.cisa.gov/secure-our-world"
                  target="_blank"
                  rel="noreferrer"
                >
                  CISA: Secure Our World
                </a>
              </li>
              <li>
                <a
                  href="https://consumer.ftc.gov/articles/protect-your-personal-information-hackers-and-scammers"
                  target="_blank"
                  rel="noreferrer"
                >
                  FTC: Protect Your Personal Information from Hackers and
                  Scammers
                </a>
              </li>
              <li>
                <a
                  href="https://consumer.ftc.gov/articles/creating-strong-passwords-and-other-ways-protect-your-accounts"
                  target="_blank"
                  rel="noreferrer"
                >
                  FTC: Creating Strong Passwords and Other Ways to Protect Your
                  Accounts
                </a>
              </li>
            </ul>
          </Accordion>
          <Accordion
            title="Critical Thinking and Fact-Checking"
            image={criticalThinkingImage}
          >
            <p>
              Ang media literacy ay tumutulong sa atin na maunawaan at masuri
              ang mga impormasyong nakikita online. Dahil hindi lahat ng nasa
              internet ay totoo, mahalagang mag-isip nang kritikal bago maniwala
              o magbahagi ng anumang content.
            </p>
            <p>
              <strong>Watch Out For:</strong>
            </p>
            <ul>
              <li>Pekeng balita at mapanlinlang na mga pamagat.</li>
              <li>Mga larawang at bidyong inedit o binago upang manlinlang.</li>
              <li>
                Mga impormasyong hindi beripikado at nagmula sa hindi
                mapagkakatiwalaang sources.
              </li>
            </ul>
            <p>
              <strong>How to Fact-Check:</strong>
            </p>
            <ul>
              <li>Suriin kung sino ang naglathala ng impormasyon.</li>
              <li>Ihambing ito sa mga mapagkakatiwalaang sources.</li>
              <li>Tiyakin ang petsa at mga ebidensiyang sumusuporta rito.</li>
              <li>Mag-isip muna bago magbahagi.</li>
            </ul>
            <p>
              <strong>Remember:</strong> Huwag agad maniwala sa lahat ng
              nakikita online. Beripikahin muna ang impormasyon bago ito
              responsableng ibahagi.
            </p>
            <p>
              <strong>References:</strong>
            </p>
            <ul className="reference-list">
              <li>
                <a
                  href="https://www.ifla.org/news/how-to-spot-fake-news-ifla-in-the-post-truth-society/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IFLA: How to Spot Fake News
                </a>
              </li>
              <li>
                <a
                  href="https://unesdoc.unesco.org/ark:/48223/pf0000265552"
                  target="_blank"
                  rel="noreferrer"
                >
                  UNESCO: Journalism, Fake News and Disinformation
                </a>
              </li>
            </ul>
          </Accordion>
          <Accordion
            title="Reporting and Responding to CSAEM"
            image={respondingToCsaemImage}
          >
            <p>
              Ang Child Sexual Abuse and Exploitation Material (CSAEM) ay
              tumutukoy sa mga materyal na nagpapakita o nagdodokumento ng
              seksuwal na pang-aabuso o pagsasamantala sa mga bata. Ang
              pagpapakalat ng mga materyal na ito ay maaaring magdulot ng higit
              pang pinsala sa mga biktima.
            </p>
            <p>
              <strong>What Should You Do?</strong>
            </p>
            <ul>
              <li>
                Huwag i-download, i-save, o ibahagi ang mga materyal na ito.
              </li>
              <li>
                I-report ang mga ito gamit ang reporting tools ng platform.
              </li>
              <li>
                Makipag-ugnayan sa kinauukulang awtoridad o mga organisasyong
                nangangalaga sa mga bata.
              </li>
              <li>Protektahan ang pagkakakilanlan at privacy ng bata.</li>
              <li>
                Huwag personal na komprontahin ang mga pinaghihinalaang salarin.
              </li>
            </ul>
            <p>
              <strong>Why Reporting Matters:</strong>
            </p>
            <p>
              Ang pag-uulat ng pinaghihinalaang CSAEM ay makatutulong upang
              mapigilan ang patuloy na pagpapakalat nito at masuportahan ang mga
              pagsisikap na protektahan ang mga bata.
            </p>
            <p>
              <strong>Remember:</strong> Pigilan ang pagkalat, mag-ulat nang
              responsable, at tumulong sa pagprotekta sa mga bata online.
            </p>
            <p>
              <strong>References:</strong>
            </p>
            <ul className="reference-list">
              <li>
                <a
                  href="https://inhope.org/what-we-do/how-to-report"
                  target="_blank"
                  rel="noreferrer"
                >
                  INHOPE: How to Report
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncmec.org/gethelpnow/cybertipline"
                  target="_blank"
                  rel="noreferrer"
                >
                  NCMEC: CyberTipline
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncmec.org/gethelpnow/exploitation-resources"
                  target="_blank"
                  rel="noreferrer"
                >
                  NCMEC: Exploitation Resources
                </a>
              </li>
              <li>
                <a
                  href="https://www.unicef.org/media/reporting-guidelines"
                  target="_blank"
                  rel="noreferrer"
                >
                  UNICEF: Reporting Guidelines
                </a>
              </li>
              <li>
                <a
                  href="https://iacvawc.gov.ph/report-abuse/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IACVAWC: Report Abuse
                </a>
              </li>
            </ul>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default ContentPage;
