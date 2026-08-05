const CTA = "Schedule Your Complimentary Exam";

const doctors = [
  {
    name: "William P. O'Gara",
    degree: "DDS",
    image: "/images/ogjan23-156-e1709589289735-b171a53f27.jpg",
    detail: "Reno born and raised. Founder of the practice in 1990 and a former Nevada State Board of Dental Examiners appointee.",
    note: "Clinical excellence · Community leadership",
  },
  {
    name: "K.C. Gilbert",
    degree: "DMD, MS",
    image: "/images/ogjan23-201-scaled-e1709589308887-1c07b3ff1f.jpg",
    detail: "A Reno native, top-5% dental school graduate, and former chief resident at the University of Florida.",
    note: "Research driven · Nevada rooted",
  },
  {
    name: "John Silvaroli",
    degree: "DMD, MS",
    image: "/images/ogjan23-161-scaled-e1709588865900-0475d92c4e.jpg",
    detail: "A Reno resident since 1997, UNLV magna cum laude graduate, published researcher, and orthodontic specialist.",
    note: "Award-winning · Detail focused",
  },
];

const faqs = [
  ["Is the first visit really complimentary?", "Yes. Your new patient exam includes a full evaluation, digital imaging if needed, and a conversation with one of our doctors. No referral, obligation, or fee."],
  ["Do you treat adults?", "Absolutely. One in five orthodontic patients is an adult, and our doctors have treated patients in their 50s and beyond."],
  ["What treatment options do you offer?", "We offer traditional and ceramic braces, Spark, Invisalign, custom in-house clear aligners, retainers, and care for children, teens, and adults."],
  ["Can you make treatment affordable?", "We offer 0% interest financing, low and no-down-payment options, extended monthly plans, family discounts, and coordination with most major insurance plans."],
];

export default function Page() {
  return (
    <main>
      <style>{`
        :root { --ink:#143745; --blue:#247f9f; --aqua:#75cfcd; --cream:#f6f2e8; --coral:#ed715e; --white:#fff; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; color:var(--ink); background:#fcfbf7; font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; }
        img { display:block; max-width:100%; }
        .wrap { width:min(1180px, calc(100% - 48px)); margin-inline:auto; }
        .announcement { padding:10px 20px; background:var(--ink); color:white; text-align:center; font-size:13px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; }
        nav { height:88px; display:flex; align-items:center; justify-content:space-between; gap:28px; }
        .logo { width:170px; height:64px; object-fit:contain; }
        .links { display:flex; align-items:center; gap:29px; font-size:14px; font-weight:700; }
        .links a:not(.button) { text-decoration:none; }
        .button { display:inline-flex; justify-content:center; align-items:center; min-height:52px; padding:0 24px; border-radius:100px; background:var(--coral); color:white; text-decoration:none; font-size:13px; font-weight:800; letter-spacing:.03em; box-shadow:0 8px 0 rgba(20,55,69,.12); transition:transform .2s, box-shadow .2s; }
        .button:hover { transform:translateY(-2px); box-shadow:0 10px 0 rgba(20,55,69,.12); }
        .hero { position:relative; overflow:hidden; background:var(--cream); }
        .hero:before { content:""; position:absolute; width:360px; height:360px; left:-190px; top:80px; border:70px solid var(--aqua); border-radius:50%; opacity:.32; }
        .hero-grid { min-height:700px; display:grid; grid-template-columns:1.02fr .98fr; align-items:center; gap:70px; padding-block:72px 92px; }
        .eyebrow { display:flex; align-items:center; gap:12px; margin:0 0 18px; color:var(--blue); font-size:12px; font-weight:900; letter-spacing:.15em; text-transform:uppercase; }
        .eyebrow:before { content:""; width:34px; height:3px; background:var(--coral); }
        h1,h2,h3,p { margin-top:0; }
        h1,h2 { font-family:Georgia, 'Times New Roman', serif; font-weight:500; letter-spacing:-.045em; }
        h1 { max-width:680px; margin-bottom:24px; font-size:clamp(54px, 6vw, 88px); line-height:.96; }
        h1 em { color:var(--blue); font-weight:inherit; }
        .hero-copy>p { max-width:580px; margin-bottom:32px; color:#48636c; font-size:18px; line-height:1.7; }
        .hero-photo { position:relative; height:560px; }
        .hero-photo img { width:100%; height:100%; object-fit:cover; object-position:50% 25%; border-radius:220px 220px 28px 28px; }
        .seal { position:absolute; left:-58px; bottom:42px; width:146px; height:146px; display:grid; place-content:center; border:8px solid #fcfbf7; border-radius:50%; background:var(--blue); color:white; text-align:center; transform:rotate(-7deg); }
        .seal strong { font:500 44px/1 Georgia,serif; }
        .seal span { max-width:100px; font-size:10px; font-weight:900; line-height:1.3; letter-spacing:.1em; text-transform:uppercase; }
        .proof-bar { background:var(--blue); color:white; }
        .proof-grid { display:grid; grid-template-columns:repeat(3, 1fr); }
        .proof { padding:28px 34px; border-right:1px solid rgba(255,255,255,.26); text-align:center; }
        .proof:last-child { border:0; }
        .proof strong { display:block; font:500 30px/1.1 Georgia,serif; }
        .proof span { display:block; margin-top:7px; color:#d6f4f3; font-size:11px; font-weight:800; letter-spacing:.09em; text-transform:uppercase; }
        section { padding-block:110px; }
        .section-head { max-width:720px; margin-bottom:50px; }
        h2 { margin-bottom:18px; font-size:clamp(42px,5vw,67px); line-height:1.02; }
        .section-head>p, .intro { color:#5a7078; font-size:17px; line-height:1.7; }
        .award { background:var(--ink); color:white; overflow:hidden; }
        .award-grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:80px; align-items:center; }
        .award-art { position:relative; }
        .award-art img { width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:18px; transform:rotate(-2deg); }
        .award-art:after { content:"COMMUNITY CHOICE"; position:absolute; right:-30px; bottom:-30px; padding:17px 22px; background:var(--aqua); color:var(--ink); font-size:11px; font-weight:900; letter-spacing:.14em; transform:rotate(4deg); }
        .award h2 { color:white; }
        .award .eyebrow { color:var(--aqua); }
        .award p { color:#c6d5d9; font-size:17px; line-height:1.75; }
        .years { display:flex; flex-wrap:wrap; gap:9px; margin:28px 0 36px; }
        .years span { display:grid; place-items:center; width:58px; height:58px; border:1px solid #54717b; border-radius:50%; font:500 14px Georgia,serif; }
        .doctors { background:#fcfbf7; }
        .doctor-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:24px; }
        .doctor { position:relative; overflow:hidden; min-height:610px; border-radius:180px 180px 20px 20px; background:var(--cream); }
        .doctor img { width:100%; height:400px; object-fit:cover; object-position:50% 20%; filter:saturate(.85); }
        .doctor-copy { padding:30px 30px 34px; }
        .doctor h3 { margin-bottom:8px; font:500 29px/1.1 Georgia,serif; }
        .degree { color:var(--coral); font:800 11px Arial,sans-serif; letter-spacing:.14em; }
        .doctor p { margin:17px 0; color:#61727a; font-size:14px; line-height:1.65; }
        .doctor small { color:var(--blue); font-weight:800; }
        .doctor-cta { margin-top:46px; text-align:center; }
        .reviews { background:var(--cream); }
        .reviews-grid { display:grid; grid-template-columns:1fr 1fr; gap:76px; align-items:center; }
        .review-photo { position:relative; }
        .review-photo img { width:100%; height:590px; object-fit:cover; border-radius:20px 200px 20px 20px; }
        .review-photo:before { content:"4.9"; position:absolute; z-index:1; right:-22px; top:42px; display:grid; place-items:center; width:115px; height:115px; border-radius:50%; background:var(--coral); color:white; font:500 42px Georgia,serif; border:7px solid var(--cream); }
        .quote { padding:26px 0; border-top:1px solid #cfcbc1; }
        .stars { margin-bottom:10px; color:#e3a623; letter-spacing:.15em; }
        blockquote { margin:0; font:500 23px/1.48 Georgia,serif; }
        cite { display:block; margin-top:14px; color:#63757c; font:800 11px Arial,sans-serif; letter-spacing:.1em; text-transform:uppercase; }
        .rating-line { display:flex; gap:24px; margin-top:25px; color:var(--blue); font-size:13px; font-weight:800; }
        .care { background:white; }
        .care-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:22px; }
        .care-card { overflow:hidden; border-radius:18px; background:var(--cream); }
        .care-card img { width:100%; height:260px; object-fit:cover; }
        .care-card:nth-child(2) img { object-position:50% 20%; }
        .care-copy { padding:28px; }
        .care-card h3 { margin-bottom:10px; font:500 27px Georgia,serif; }
        .care-card p { margin:0; color:#5c7078; font-size:14px; line-height:1.65; }
        .tech { background:#d7f0ee; }
        .tech-grid { display:grid; grid-template-columns:.95fr 1.05fr; gap:80px; align-items:center; }
        .tech img { width:100%; height:500px; object-fit:contain; mix-blend-mode:multiply; }
        .checks { display:grid; gap:14px; margin:28px 0 34px; }
        .check { display:flex; align-items:flex-start; gap:13px; font-size:15px; line-height:1.5; }
        .check:before { content:"✓"; flex:0 0 25px; display:grid; place-items:center; height:25px; border-radius:50%; background:var(--blue); color:white; font-weight:900; }
        .faq { background:#fcfbf7; }
        .faq-grid { display:grid; grid-template-columns:.82fr 1.18fr; gap:75px; align-items:start; }
        .faq-image { position:sticky; top:24px; }
        .faq-image img { width:100%; height:590px; object-fit:cover; border-radius:200px 200px 20px 20px; }
        details { border-top:1px solid #ccd2d1; padding:23px 0; }
        details:last-child { border-bottom:1px solid #ccd2d1; }
        summary { cursor:pointer; list-style:none; display:flex; justify-content:space-between; gap:20px; font:500 21px Georgia,serif; }
        summary::-webkit-details-marker { display:none; }
        summary:after { content:"+"; color:var(--coral); font:400 28px Arial,sans-serif; }
        details[open] summary:after { content:"−"; }
        details p { max-width:610px; margin:16px 40px 0 0; color:#5b7078; font-size:15px; line-height:1.7; }
        .final { padding-block:0; background:var(--ink); color:white; }
        .final-grid { min-height:570px; display:grid; grid-template-columns:1fr 1fr; }
        .final-copy { display:flex; flex-direction:column; justify-content:center; padding:80px max(48px, calc((100vw - 1180px)/2)); padding-right:70px; }
        .final-copy h2 { color:white; }
        .final-copy p { max-width:550px; color:#c7d6da; line-height:1.7; }
        .final-copy .button { align-self:flex-start; margin-top:17px; }
        .final img { width:100%; height:100%; min-height:570px; object-fit:cover; }
        footer { padding:60px 0 30px; background:#0c2935; color:#bdd0d6; }
        .footer-grid { display:grid; grid-template-columns:1.2fr 1fr 1fr; gap:50px; padding-bottom:45px; }
        .footer-brand { color:white; font:500 25px/1.3 Georgia,serif; }
        footer h3 { color:white; font:800 11px Arial,sans-serif; letter-spacing:.13em; text-transform:uppercase; }
        footer p, footer a { color:#bdd0d6; font-size:13px; line-height:1.8; text-decoration:none; }
        .legal { padding-top:24px; border-top:1px solid #284653; font-size:11px; }
        @media (max-width:900px) {
          .links a:not(.button) { display:none; }
          .hero-grid,.award-grid,.reviews-grid,.tech-grid,.faq-grid { grid-template-columns:1fr; }
          .hero-grid { padding-top:60px; }
          .hero-photo { height:510px; }
          .award-grid,.reviews-grid,.tech-grid,.faq-grid { gap:50px; }
          .doctor-grid,.care-grid { grid-template-columns:1fr; }
          .doctor { min-height:0; border-radius:160px 160px 20px 20px; }
          .doctor img { height:520px; }
          .care-card { display:grid; grid-template-columns:1fr 1fr; }
          .care-card img { height:100%; min-height:270px; }
          .faq-image { position:relative; top:0; }
          .final-grid { grid-template-columns:1fr; }
          .final-copy { padding:80px 48px; }
          .final img { min-height:430px; }
        }
        @media (max-width:620px) {
          .wrap { width:min(100% - 30px, 1180px); }
          .announcement { font-size:10px; }
          nav { height:76px; }
          .logo { width:126px; }
          nav .button { min-height:44px; padding:0 14px; font-size:10px; }
          .hero-grid { min-height:0; gap:45px; padding-block:56px 72px; }
          h1 { font-size:51px; }
          .hero-copy>p { font-size:16px; }
          .hero-photo { height:420px; }
          .seal { left:-8px; bottom:-30px; width:125px; height:125px; }
          .proof-grid { grid-template-columns:1fr; }
          .proof { padding:20px; border-right:0; border-bottom:1px solid rgba(255,255,255,.22); }
          section { padding-block:78px; }
          h2 { font-size:43px; }
          .award-grid,.reviews-grid,.tech-grid,.faq-grid { gap:38px; }
          .award-art:after { right:-4px; }
          .doctor img { height:390px; }
          .review-photo img,.faq-image img { height:440px; }
          .review-photo:before { right:-4px; }
          blockquote { font-size:20px; }
          .care-card { display:block; }
          .care-card img { height:240px; }
          .tech img { height:340px; }
          .final-copy { padding:70px 24px; }
          .final img { min-height:350px; }
          .footer-grid { grid-template-columns:1fr; gap:28px; }
        }
      `}</style>

      <div className="announcement">New Fernley location now open · Reno care, closer to home</div>
      <header className="wrap">
        <nav aria-label="Main navigation">
          <a href="#top" aria-label="OG Ortho home"><img className="logo" src="/images/og-ortho-logo-f918ac8188.png" alt="O'Gara-Gilbert-Silvaroli Orthodontics" /></a>
          <div className="links">
            <a href="#doctors">Doctors</a><a href="#care">Treatment</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a>
            <a className="button" href="#schedule">{CTA}</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Northern Nevada&apos;s hometown orthodontists</p>
            <h1>Three experts.<br />One <em>remarkable</em> smile.</h1>
            <p>Personalized orthodontic care from three board-certified specialists who call Reno home. One collaborative team, one straightforward price, and over 30 years of local trust.</p>
            <a className="button" href="#schedule">{CTA}</a>
          </div>
          <div className="hero-photo">
            <img src="/images/og2025-179_compressed-74024a3065.jpg" alt="Dr. Gilbert, Dr. O'Gara, and Dr. Silvaroli" />
            <div className="seal"><strong>6×</strong><span>Best of Reno winner</span></div>
          </div>
        </div>
      </section>

      <div className="proof-bar" aria-label="Practice highlights">
        <div className="wrap proof-grid">
          <div className="proof"><strong>2021–2026</strong><span>Best Orthodontist in Reno</span></div>
          <div className="proof"><strong>4.9 ★</strong><span>228 Google reviews</span></div>
          <div className="proof"><strong>30+ years</strong><span>Privately owned in Nevada</span></div>
        </div>
      </div>

      <section className="award">
        <div className="wrap award-grid">
          <div className="award-art"><img src="/images/best-orthodontist-reno-2026-ogara-gilbert-silvaroli-award--641b270b4d.jpg" alt="Best Orthodontist in Reno 2026 award" /></div>
          <div>
            <p className="eyebrow">Chosen by our community</p>
            <h2>Reno&apos;s best, six years running.</h2>
            <p>The Best of Reno Community&apos;s Choice Awards are decided by the people who live here. Being named Best Orthodontist every year from 2021 through 2026 reflects the confidence local families place in our doctors and team.</p>
            <div className="years" aria-label="Award years"><span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span></div>
            <a className="button" href="#schedule">{CTA}</a>
          </div>
        </div>
      </section>

      <section className="doctors" id="doctors">
        <div className="wrap">
          <div className="section-head"><p className="eyebrow">Meet your doctors</p><h2>Local roots. Exceptional credentials.</h2><p>Every treatment plan benefits from three specialists&apos; combined perspective, for the cost of one. Your care is always directed by doctors who know your name and your goals.</p></div>
          <div className="doctor-grid">
            {doctors.map((doctor) => <article className="doctor" key={doctor.name}>
              <img src={doctor.image} alt={`Dr. ${doctor.name}`} />
              <div className="doctor-copy"><span className="degree">{doctor.degree}</span><h3>Dr. {doctor.name}</h3><p>{doctor.detail}</p><small>{doctor.note}</small></div>
            </article>)}
          </div>
          <div className="doctor-cta"><a className="button" href="#schedule">{CTA}</a></div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="wrap reviews-grid">
          <div className="review-photo"><img src="/images/ogo21_126-2db946a639.jpg" alt="A confident OG Ortho patient smiling" /></div>
          <div>
            <p className="eyebrow">Kind words, healthy smiles</p><h2>Care that families remember.</h2>
            <div className="quote"><div className="stars">★★★★★</div><blockquote>“Dr. Gilbert is the best — kind, great with patients, and a stellar doc. He&apos;s served adults and kids in our family.”</blockquote><cite>Sarah Bisbing · Google review</cite></div>
            <div className="quote"><div className="stars">★★★★★</div><blockquote>“Everyone is friendly, professional, and always makes us feel welcome. The results have been fantastic.”</blockquote><cite>Adriana · Google review</cite></div>
            <div className="rating-line"><span>Google 4.9 · 228 reviews</span><span>Yelp 4.6 · 35 reviews</span></div>
          </div>
        </div>
      </section>

      <section className="care" id="care">
        <div className="wrap">
          <div className="section-head"><p className="eyebrow">Care for every chapter</p><h2>Your smile, your way.</h2><p>From a child&apos;s first screening to subtle adult treatment, we pair modern options with a plan made for real life.</p></div>
          <div className="care-grid">
            <article className="care-card"><img src="/images/new-picture-3-c58d28cc3d.jpg" alt="Child receiving an early orthodontic screening" /><div className="care-copy"><h3>Growing smiles</h3><p>Complimentary observation and age-seven screenings help us find the right time to begin, without rushing treatment.</p></div></article>
            <article className="care-card"><img src="/images/orthodontics-ed9f789652.jpeg" alt="Patient smiling with braces" /><div className="care-copy"><h3>Braces</h3><p>Traditional and ceramic braces, precisely planned and supported by a team that keeps every visit efficient and encouraging.</p></div></article>
            <article className="care-card"><img src="/images/young-smiling-woman-holding-invisalign-braces-over-2021-06-09-17-34-32-utc-1-9ba0185ca8.jpg" alt="Woman holding a clear aligner" /><div className="care-copy"><h3>Clear aligners</h3><p>Discreet treatment with Spark, Invisalign, or custom in-house ULab aligners, selected around your needs.</p></div></article>
          </div>
        </div>
      </section>

      <section className="tech">
        <div className="wrap tech-grid">
          <img src="/images/i-cat_dexis_product_header_0_0-f0634672d4.png" alt="i-CAT 3D dental imaging system" />
          <div><p className="eyebrow">Precision without guesswork</p><h2>See more. Plan smarter.</h2><p className="intro">Our i-CAT 3D imaging gives your doctors a detailed view of teeth and jaws while using 95% less radiation than traditional hospital-based CT machines.</p><div className="checks"><div className="check">Digital scans for a more comfortable start</div><div className="check">Three-dimensional, doctor-directed planning</div><div className="check">In-house lab technicians for personalized appliances</div></div><a className="button" href="#schedule">{CTA}</a></div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="wrap faq-grid">
          <div className="faq-image"><img src="/images/work-of-modern-dentist-orthodontist-with-children-em3yaqt-a0a94a367b.jpg" alt="Orthodontist welcoming a young patient" /></div>
          <div><p className="eyebrow">Good to know</p><h2>Your first questions, answered.</h2>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="final" id="schedule">
        <div className="final-grid">
          <div className="final-copy"><p className="eyebrow">No referral. No obligation. Just smiles.</p><h2>Let&apos;s meet your future smile.</h2><p>Your complimentary exam includes a complete evaluation, any needed digital imaging, and an unhurried conversation with one of our doctors. Visit us in Reno or Fernley.</p><a className="button" href="https://ogortho.com/new-patient-exam-scheduling/">{CTA}</a></div>
          <img src="/images/fernley-website--scaled-6dd8769e03.jpg" alt="The OG Ortho team at the Fernley office" />
        </div>
      </section>

      <footer>
        <div className="wrap footer-grid">
          <div><div className="footer-brand">O&apos;Gara · Gilbert · Silvaroli<br />Orthodontics</div><p>Three experts. One price.<br />One Northern Nevada community.</p></div>
          <div><h3>Reno</h3><p>505 Hammill Lane<br />Reno, NV 89511<br /><a href="tel:+17758251881">(775) 825-1881</a></p></div>
          <div><h3>Fernley</h3><p>1042 Inglewood Dr.<br />Building G, Suite 100<br />Fernley, NV 89408</p></div>
        </div>
        <div className="wrap legal">© 2026 O&apos;Gara-Gilbert-Silvaroli Orthodontics · Privately owned and proudly serving Northern Nevada for over 30 years.</div>
      </footer>
    </main>
  );
}
