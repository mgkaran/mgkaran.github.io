/* =============================================================
   TRANSLATIONS  —  de (primary) | en (secondary)
   ============================================================= */
const translations = {

  de: {
    /* ── Navigation ── */
    'nav.about'      : 'Über mich',
    'nav.experience' : 'Erfahrung',
    'nav.education'  : 'Bildung',
    'nav.skills'     : 'Fähigkeiten',
    'nav.projects'   : 'Projekte',
    'nav.contact'    : 'Kontakt',

    /* ── Hero ── */
    'hero.ai.pill'        : 'KI-gestützte Testautomatisierung',
    'hero.greeting'       : 'Hallo, ich bin',
    'hero.title.testing'  : 'Software Testing mit KI',
    'hero.title.istqb'    : 'ISTQB Zertifiziert',
    'hero.tagline'        : 'Ich verwandle Anforderungen in zuverlässige Test-Suites und Fehler in bessere Software. Spezialisiert auf Automatisierungs-Frameworks, CI/CD-Integration und qualitätsorientierte Auslieferung.',
    'hero.btn.cv'         : 'Lebenslauf herunterladen',
    'hero.btn.projects'   : 'Projekte ansehen',
    'hero.scroll'         : 'Scrollen',

    /* ── About ── */
    'about.label' : 'Über mich',
    'about.title' : 'Wer ich <span>bin</span>',
    'about.bio'   : 'ISTQB-zertifizierter QA Engineer mit ca. 2 Jahren Expertise in Testautomatisierung und Qualitätssicherung. Kompetent in funktionalen Tests, CI/CD-Integration, Regressionstests und E2E-Testing mit praktischer Erfahrung in Fehleranalyse, strukturiertem Testdesign und agiler Scrum-Lieferung. Nutzt KI-Tools wie GitHub Copilot und LLM-gestützte Testgenerierung, um Automatisierungs-Workflows zu beschleunigen und die Testabdeckung zu verbessern. Bekannt für qualitätsorientiertes Denken, funktionsübergreifende Zusammenarbeit und kontinuierliche Prozessverbesserung in regulierten Umgebungen.',

    /* ── Stats ── */
    'stats.years'      : 'Jahre Erfahrung',
    'stats.scripts'    : 'Automatisierungsskripte',
    'stats.saved'      : 'Jährliche Kosteneinsparung',
    'stats.frameworks' : 'Frameworks beherrscht',

    /* ── Experience ── */
    'exp.label' : 'Karriere',
    'exp.title' : 'Berufliche <span>Erfahrung</span>',
    'exp.dxc.p1'   : 'Aufgebaut und gewartet: 120+ Playwright-Automatisierungsskripte für Cerner Millennium Healthcare-Applikationen.',
    'exp.dxc.p2'   : 'Test-Suites in GitHub Actions CI/CD integriert und manuellen Regressionsaufwand um ~15 Stunden pro Zyklus reduziert – Kosteneinsparung von 18.000 USD jährlich.',
    'exp.dxc.p3'   : 'Funktionale, Regressions- und Integrationstests mit JIRA-Fehler-Traceability, Ursachenanalyse und teamübergreifender Zusammenarbeit zwischen USA und Indien.',
    'exp.forge.p1' : 'Leitung eines 6-köpfigen cross-funktionalen Teams bei der End-to-End-Entwicklung eines Hardware-MVPs – Koordination von Ideenfindung, Roadmap-Planung, Umsetzung und Auslieferung.',
    'exp.forge.p2' : 'Stakeholder-Kommunikation koordiniert mit Mentoren, technischen Leitern und Partnern; Anforderungen in strukturierte Projektpläne und Statusberichte übersetzt.',
    'exp.forge.p3' : 'Projektdokumentation und technische Spezifikationen über den gesamten Produktlebenszyklus gepflegt.',

    /* ── Education ── */
    'edu.label' : 'Akademisch',
    'edu.title' : '<span>Bildung</span>',

    /* ── Skills ── */
    'skills.label'        : 'Fachkenntnisse',
    'skills.title'        : 'Technische <span>Fähigkeiten</span>',
    'skills.subtitle'     : 'Tools, Technologien und Methoden, die ich in jedes Projekt einbringe.',
    'skills.automation'   : 'Testautomatisierung',
    'skills.languages'    : 'Programmiersprachen',
    'skills.methods'      : 'Testmethoden',
    'skills.tools'        : 'Werkzeuge',
    'skills.processes'    : 'Prozesse',
    /* translatable badges in Testing Methods */
    'badge.e2e'           : 'End-to-End (E2E)',
    'badge.api'           : 'API-Tests',
    'badge.functional'    : 'Funktionale Tests',
    'badge.integration'   : 'Integrationstests',
    'badge.regression'    : 'Regressionstests',
    'badge.uat'           : 'UAT',
    'badge.image'         : 'Bildbasierte Tests',
    'badge.ui-component'  : 'UI- & Komponententests',

    /* ── Languages & Certs ── */
    'lang.label'       : 'Kommunikation',
    'lang.title'       : 'Sprachkenntnisse <span></span>',
    'lang.en.sublabel' : 'C1 · Fließend',
    'lang.ta.sublabel' : 'Muttersprache',
    'cert.label'       : 'Qualifikationen',
    'cert.title'       : '<span>Zertifizierungen</span>',
    'cert.show'        : 'Zertifikat ansehen',

    /* ── Projects ── */
    'proj.label'       : 'Open-Source-QA-Projekte',
    'proj.title'       : 'QA <span>Projekte</span>',
    'proj.subtitle'    : 'Eigenständig entwickelte Automatisierungs-Frameworks für reale Applikationen – vollständig dokumentiert.',
    'proj.1.type'      : 'E2E · Web-App-Tests',
    'proj.1.title'     : 'E2E Automatisierungs-Test-Suite',
    'proj.1.f1'        : 'Erstellung von Testfällen & Teststrategie',
    'proj.1.f2'        : 'Funktionale, Barrierefreiheits- & Integrationstests',
    'proj.1.f3'        : 'UI/UX-Tests',
    'proj.1.f4'        : 'Testautomatisierung mit Cypress',
    'proj.1.f5'        : 'CI/CD-Pipeline via GitHub Actions',
    'proj.article'     : 'Artikel lesen',
    'proj.2.type'      : 'E2E · E-Commerce-Tests',
    'proj.2.title'     : 'E2E E-Commerce Automatisierungs-Suite',
    'proj.2.f1'        : 'Funktionale, Barrierefreiheits- & Integrationstests',
    'proj.2.f2'        : 'UI- & API-Tests',
    'proj.2.f3'        : 'BDD mit Cucumber & Gherkin',
    'proj.2.f4'        : 'Testautomatisierung mit Cypress',
    'proj.2.f5'        : 'CI/CD-Pipeline via GitHub Actions',
    'proj.soon.badge'  : 'In Entwicklung',
    'proj.soon.title'  : 'Playwright Automatisierungsprojekt',
    'proj.soon.desc'   : 'Nächstes Projekt – Aufbau eines umfassenden E2E-Frameworks mit Playwright & TypeScript. Dokumentation und GitHub-Repository folgen in Kürze.',

    /* Project 3 — Playwright AI-Assisted */
    'proj.3.type'  : 'E2E · KI-gestützte Tests',
    'proj.3.title' : 'KI-gestützte Automatisierung mit Playwright',
    'proj.3.f1'    : 'E2E-Automatisierung mit Playwright & TypeScript',
    'proj.3.f2'    : 'KI-gestützte Testfall-Generierung',
    'proj.3.f3'    : 'Funktionale & Barrierefreiheitstests',
    'proj.3.f4'    : 'UI- & API-Tests',
    'proj.3.f5'    : 'CI/CD-Pipeline via GitHub Actions',

    /* Project 4 — nammarental.com */
    'proj.4.badge' : 'Kommt bald',
    'proj.4.title' : 'nammarental.com — Startup QA',
    'proj.4.desc'  : 'Reales Startup-Projekt – Aufbau einer Automatisierungsstrategie und Test-Suite für eine Live-Vermietungsplattform.',

    /* ── Contact ── */
    'contact.label'            : 'Kontakt aufnehmen',
    'contact.title'            : 'Lass uns <span>verbinden</span>',
    'contact.intro'            : 'Ich bin aktiv auf der Suche nach <strong>Vollzeitstellen als QA Automation Engineer in Deutschland</strong> und offen für spannende Kooperationen. Ob Stelle, Projekt oder ein Gespräch über Quality Engineering – ich freue mich, von Ihnen zu hören.',
    'contact.roles.title'      : 'Vollzeitstellen',
    'contact.roles.desc'       : 'Offen für QA Automation Engineer-Positionen in Deutschland – vor Ort, hybrid oder remote',
    'contact.startup.title'    : 'Startup-Projekte',
    'contact.startup.desc'     : 'Helfe gerne Frühphasen-Teams beim Aufbau von Qualitätsprozessen und Testautomatisierung von Grund auf',
    'contact.talks.title'      : 'Vorträge & Mentoring',
    'contact.talks.desc'       : 'Verfügbar für QA-Workshops, Wissenstransfer und Einzelmentoring',
    'form.name.label'          : 'Name',
    'form.email.label'         : 'E-Mail',
    'form.topic.label'         : 'Ich melde mich wegen',
    'form.topic.default'       : 'Thema auswählen',
    'form.topic.opt1'          : 'Vollzeitstelle',
    'form.topic.opt2'          : 'Startup & Projektkooperation',
    'form.topic.opt3'          : 'Vortrag oder Workshop',
    'form.topic.opt4'          : 'Mentoring & Beratung',
    'form.topic.opt5'          : 'Sonstiges',
    'form.message.label'       : 'Nachricht',
    'form.submit'              : 'Nachricht senden',
    'form.success'             : 'Nachricht gesendet! Ich melde mich innerhalb von 24 Stunden.',
    'form.name.placeholder'    : 'Vollständiger Name',
    'form.email.placeholder'   : 'ihre@email.de',
    'form.message.placeholder' : 'Was haben Sie im Sinn…',

    /* ── CV Modal ── */
    'cv.title' : 'Lebenslauf herunterladen',
    'cv.sub'   : 'Sprache wählen',

    /* ── Footer ── */
    'footer.tagline'   : 'QA Automation Engineer · ISTQB Zertifiziert · Ansässig in Deutschland',
    'footer.nav'       : 'Navigation',
    'footer.contact'   : 'Kontakt',
    'footer.copyright' : '© 2026 Karan Muthusamy. Alle Rechte vorbehalten.',
    'footer.built'     : 'Gestaltet & entwickelt mit',
  },

  en: {
    /* ── Navigation ── */
    'nav.about'      : 'About',
    'nav.experience' : 'Experience',
    'nav.education'  : 'Education',
    'nav.skills'     : 'Skills',
    'nav.projects'   : 'Projects',
    'nav.contact'    : 'Contact',

    /* ── Hero ── */
    'hero.ai.pill'        : 'AI-Driven Test Automation',
    'hero.greeting'       : 'Hello, I\'m',
    'hero.title.testing'  : 'Software Testing with AI',
    'hero.title.istqb'    : 'ISTQB Certified',
    'hero.tagline'        : 'I turn requirements into reliable test suites and defects into better software. Specialising in automation frameworks, CI/CD integration, and quality-first delivery.',
    'hero.btn.cv'         : 'Download CV',
    'hero.btn.projects'   : 'View Projects',
    'hero.scroll'         : 'Scroll',

    /* ── About ── */
    'about.label' : 'About Me',
    'about.title' : 'Who I <span>Am</span>',
    'about.bio'   : 'ISTQB-certified QA Engineer with ~2 years of expertise in Test Automation and Quality Assurance. Proficient in Functional, CI/CD Integration, Regression, and E2E Testing with hands-on experience in defect analysis, structured test design, and Agile Scrum delivery. Leverages AI tools including GitHub Copilot and LLM-assisted test generation to accelerate automation workflows and improve test coverage. Recognised for a quality-driven mindset, cross-functional collaboration, and continuous process improvement in regulated environments.',

    /* ── Stats ── */
    'stats.years'      : 'Years Experience',
    'stats.scripts'    : 'Automation Scripts',
    'stats.saved'      : 'Annual Cost Saved',
    'stats.frameworks' : 'Frameworks Mastered',

    /* ── Experience ── */
    'exp.label' : 'Career',
    'exp.title' : 'Work <span>Experience</span>',
    'exp.dxc.p1'   : 'Built and maintained 120+ Playwright automation scripts for Cerner Millennium healthcare applications.',
    'exp.dxc.p2'   : 'Integrated test suites with GitHub Actions CI/CD, reducing manual regression effort by ~15 hours per cycle saving $18,000 per year.',
    'exp.dxc.p3'   : 'Performed functional, regression, and integration testing with JIRA defect traceability, RCA, and cross-team collaboration across USA/India.',
    'exp.forge.p1' : 'Led a 6-member cross-functional team through end-to-end development of a hardware MVP, coordinating ideation, roadmap planning, execution, and delivery against milestones.',
    'exp.forge.p2' : 'Managed stakeholder communication across mentors, technical leads, and partners, translating requirements into structured project plans and status reports.',
    'exp.forge.p3' : 'Maintained project documentation and technical specifications throughout the product lifecycle.',

    /* ── Education ── */
    'edu.label' : 'Academic',
    'edu.title' : '<span>Education</span>',

    /* ── Skills ── */
    'skills.label'       : 'Expertise',
    'skills.title'       : 'Technical <span>Skills</span>',
    'skills.subtitle'    : 'Tools, technologies, and methodologies I bring to every project.',
    'skills.automation'  : 'Test Automation',
    'skills.languages'   : 'Programming Languages',
    'skills.methods'     : 'Testing Methods',
    'skills.tools'       : 'Tools',
    'skills.processes'   : 'Processes',
    'badge.e2e'          : 'End-to-End (E2E)',
    'badge.api'          : 'API Testing',
    'badge.functional'   : 'Functional',
    'badge.integration'  : 'Integration',
    'badge.regression'   : 'Regression',
    'badge.uat'          : 'UAT',
    'badge.image'        : 'Image-Based Testing',
    'badge.ui-component' : 'UI & Component Testing',

    /* ── Languages & Certs ── */
    'lang.label'       : 'Communication',
    'lang.title'       : 'Language <span>Skills</span>',
    'lang.en.sublabel' : 'C1 · Proficient',
    'lang.ta.sublabel' : 'Native',
    'cert.label'       : 'Credentials',
    'cert.title'       : '<span>Certifications</span>',
    'cert.show'        : 'Show Credential',

    /* ── Projects ── */
    'proj.label'       : 'Open Source QA Research',
    'proj.title'       : 'QA <span>Projects</span>',
    'proj.subtitle'    : 'Independently designed and built automation frameworks on real-world applications — fully documented end-to-end.',
    'proj.1.type'      : 'E2E · Web App Testing',
    'proj.1.title'     : 'E2E Automation Test Suite',
    'proj.1.f1'        : 'Test Case Creation & Strategy',
    'proj.1.f2'        : 'Functional, Accessibility & Integration Testing',
    'proj.1.f3'        : 'UI/UX Testing',
    'proj.1.f4'        : 'Test Automation with Cypress',
    'proj.1.f5'        : 'CI/CD Pipeline via GitHub Actions',
    'proj.article'     : 'View Article',
    'proj.2.type'      : 'E2E · E-Commerce Testing',
    'proj.2.title'     : 'E2E E-Commerce Automation Suite',
    'proj.2.f1'        : 'Functional, Accessibility & Integration Testing',
    'proj.2.f2'        : 'UI & API Testing',
    'proj.2.f3'        : 'BDD with Cucumber & Gherkin',
    'proj.2.f4'        : 'Test Automation with Cypress',
    'proj.2.f5'        : 'CI/CD Pipeline via GitHub Actions',
    'proj.soon.badge'  : 'In Progress',
    'proj.soon.title'  : 'Playwright Automation Project',
    'proj.soon.desc'   : 'Next project — building a comprehensive E2E framework with Playwright & TypeScript. Documentation and GitHub repository coming soon.',

    /* Project 3 — Playwright AI-Assisted */
    'proj.3.type'  : 'E2E · AI-Assisted Testing',
    'proj.3.title' : 'AI-Assisted Automation with Playwright',
    'proj.3.f1'    : 'E2E Automation with Playwright & TypeScript',
    'proj.3.f2'    : 'AI-Assisted Test Case Generation',
    'proj.3.f3'    : 'Functional & Accessibility Testing',
    'proj.3.f4'    : 'UI & API Testing',
    'proj.3.f5'    : 'CI/CD Integration via GitHub Actions',

    /* Project 4 — nammarental.com */
    'proj.4.badge' : 'Upcoming',
    'proj.4.title' : 'nammarental.com — Startup QA',
    'proj.4.desc'  : 'Upcoming real-world engagement — building automation strategy and test suite for a live startup rental platform.',

    /* ── Contact ── */
    'contact.label'            : 'Get In Touch',
    'contact.title'            : 'Let\'s <span>Connect</span>',
    'contact.intro'            : 'I\'m actively looking for <strong>full-time QA Automation Engineer roles in Germany</strong> and open to exciting collaborations. Whether you have a position, a project to discuss, or just want to talk quality engineering — I\'d love to hear from you.',
    'contact.roles.title'      : 'Full-Time Roles',
    'contact.roles.desc'       : 'Open to QA Automation Engineer positions in Germany — on-site, hybrid, or remote',
    'contact.startup.title'    : 'Startup Projects',
    'contact.startup.desc'     : 'Happy to help early-stage teams establish quality processes and test automation from scratch',
    'contact.talks.title'      : 'Talks & Mentoring',
    'contact.talks.desc'       : 'Available for QA workshops, knowledge-sharing sessions, and one-on-one mentoring',
    'form.name.label'          : 'Name',
    'form.email.label'         : 'Email',
    'form.topic.label'         : 'I\'m reaching out about',
    'form.topic.default'       : 'Select a topic',
    'form.topic.opt1'          : 'Full-Time Role Opportunity',
    'form.topic.opt2'          : 'Startup & Project Collaboration',
    'form.topic.opt3'          : 'Tech Talk or Workshop',
    'form.topic.opt4'          : 'Mentoring & Advice',
    'form.topic.opt5'          : 'Other',
    'form.message.label'       : 'Message',
    'form.submit'              : 'Send Message',
    'form.success'             : 'Message sent! I\'ll get back to you within 24 hours.',
    'form.name.placeholder'    : 'Your full name',
    'form.email.placeholder'   : 'your@email.com',
    'form.message.placeholder' : 'Tell me what you have in mind…',

    /* ── CV Modal ── */
    'cv.title' : 'Download CV',
    'cv.sub'   : 'Choose your preferred language',

    /* ── Footer ── */
    'footer.tagline'   : 'QA Automation Engineer · ISTQB Certified · Based in Germany',
    'footer.nav'       : 'Navigation',
    'footer.contact'   : 'Contact',
    'footer.copyright' : '© 2026 Karan Muthusamy. All rights reserved.',
    'footer.built'     : 'Designed & built with',
  }
};
