const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const langButtons = document.querySelectorAll('.lang-btn');

const pageName = document.body.dataset.page || 'home';

const translations = {
  nl: {
    // Algemene site-teksten
    logo_aria_label: "Agralin home",
    logo_alt: "Agralin logo",
    main_nav_aria: "Hoofdnavigatie",
    language_switcher_aria: "Taalkeuze",
    menu_open_aria: "Menu openen",

    nav_home: "Home",
    nav_about: "Over ons",
    nav_products: "Producten",
    nav_contact: "Contact",
    nav_call: "Bel ons",

    call_now: "Bel ons vandaag nog",

    footer_tagline: "Verwerking van vlas met kwaliteit en vertrouwen.",
    footer_contact_title: "Contact",
    footer_address_title: "Adres",
    footer_address: "Krekelstraat 48<br />8770 Ingelmunster<br />België",

    // Homepage
    home_page_title: "Agralin | Verwerking van vlas met kwaliteit en vertrouwen",
    home_meta_description:
      "Agralin is een familiaal vlasverwerkend bedrijf uit Ingelmunster. Sinds 1995 gespecialiseerd in de verwerking van vlas, kroten, lijnzaad en verwerkt vlas.",

    hero_eyebrow: "Familiebedrijf sinds 1995",
    hero_title: "Agralin – Verwerking van vlas met kwaliteit en vertrouwen",
    hero_text:
      "Agralin is een Belgisch familiebedrijf uit Ingelmunster, gespecialiseerd in de verwerking van vlas en de verkoop van kroten, lijnzaad en verwerkt vlas. Wij staan voor eerlijke communicatie, betrouwbare service en een constante focus op kwaliteit.",
    view_products: "Bekijk onze producten",

    about_label: "Over Agralin",
    about_title: "Een betrouwbare partner in vlasverwerking",
    about_text_1:
      "Sinds 18 juli 1995 bouwt Agralin aan een sterke reputatie binnen de lokale landbouw- en vlasverwerkende sector. Als familiebedrijf combineren wij ervaring, betrokkenheid en een persoonlijke aanpak met een duidelijke belofte: kwaliteit leveren en correct communiceren over elk product.",
    about_text_2:
      "Wij werken voornamelijk voor B2B-klanten, landbouwers en agrarische ondernemingen die op zoek zijn naar een partner waarop ze kunnen rekenen.",
    about_cta: "Lees meer over ons verhaal",
    about_image_alt: "Vlasplant van Agralin",

    products_label: "Onze producten",
    products_title: "Kwalitatieve producten voor professionele klanten",
    products_intro:
      "Agralin legt de nadruk niet op verschillende kwaliteitsniveaus, maar op een consequente en zo hoog mogelijke standaard.",

    product_kroten_alt: "Landbouwomgeving met natuurlijke materialen",
    product_kroten_title: "Kroten",
    product_kroten_text:
      "Stevige en kwalitatieve vlasbundels, zorgvuldig verwerkt en geleverd met aandacht voor betrouwbaarheid.",

    product_lijnzaad_alt: "Close-up van lijnzaad",
    product_lijnzaad_title: "Lijnzaad",
    product_lijnzaad_text:
      "Lijnzaad met focus op degelijke kwaliteit en een correcte service voor landbouw- en professionele toepassingen.",

    product_vlas_alt: "Verwerking in industriële landbouwomgeving",
    product_vlas_title: "Verwerkt vlas",
    product_vlas_text:
      "Professioneel verwerkt vlas voor klanten die waarde hechten aan continuïteit, helderheid en vakkennis.",

    trust_label: "Waarom Agralin",
    trust_title: "Gebouwd op vertrouwen",

    trust_item_1_badge: "1995",
    trust_item_1_title: "Sinds 1995 actief",
    trust_item_1_text:
      "Decennialange ervaring in vlasverwerking en samenwerking met professionele klanten.",

    trust_item_2_badge: "Familiaal",
    trust_item_2_title: "Persoonlijke aanpak",
    trust_item_2_text:
      "Als familiebedrijf hechten wij veel belang aan rechtstreeks contact en duurzame relaties.",

    trust_item_3_badge: "Eerlijk",
    trust_item_3_title: "Duidelijke communicatie",
    trust_item_3_text:
      "Wij zijn altijd eerlijk over de kwaliteit van onze producten en over wat klanten mogen verwachten.",

    trust_item_4_badge: "Service",
    trust_item_4_title: "Betrouwbare samenwerking",
    trust_item_4_text:
      "Wij leveren service waarop klanten kunnen bouwen, van eerste contact tot levering.",

    cta_label: "Direct contact",
    cta_title: "Bespreek uw vraag rechtstreeks met Agralin",
    cta_text:
      "Wenst u meer informatie over onze vlasverwerking, kroten, lijnzaad of verwerkt vlas? Neem rechtstreeks telefonisch contact op voor een snelle en persoonlijke opvolging.",
    cta_contact_page: "Contactpagina",

    // About pagina
    about_page_title: "Over ons | Agralin",
    about_meta_description:
      "Leer Agralin kennen: een Belgisch familiebedrijf in vlasverwerking sinds 1995, gebouwd op eerlijkheid, kwaliteit en service.",

    about_page_label: "Over ons",
    about_page_title_text: "Een familiebedrijf met wortels in vakmanschap",
    about_page_intro:
      "Agralin werd opgericht op 18 juli 1995 en groeide uit tot een betrouwbare naam in de lokale vlasverwerking. Doorheen de jaren zijn eerlijkheid, kwaliteit en service steeds de basis gebleven van onze werking.",

    about_story_label: "Ons verhaal",
    about_story_title: "Sinds 1995 actief in vlasverwerking",
    about_story_text_1:
      "Wat begon als een familiale onderneming met een duidelijke visie, groeide stap voor stap uit tot een bedrijf dat bekendstaat om zijn persoonlijke benadering en betrouwbare service. Bij Agralin geloven we dat een sterke samenwerking start met vertrouwen.",
    about_story_text_2:
      "Daarom kiezen wij bewust voor heldere communicatie, correcte afspraken en producten waarvan wij de kwaliteit eerlijk toelichten. Onze klanten weten waar ze aan toe zijn, en net daarin schuilt onze sterkte.",
    about_story_image_alt: "Landelijk bedrijfsterrein en natuurlijke omgeving",

    values_label: "Onze waarden",
    values_title: "De basis van elke samenwerking",

    value_1_title: "Eerlijkheid",
    value_1_text:
      "Wij communiceren open en correct over onze producten, onze kwaliteit en onze service.",

    value_2_title: "Kwaliteit",
    value_2_text:
      "Wij streven niet naar meerdere kwaliteitsniveaus, maar naar een constante en zo hoog mogelijke standaard.",

    value_3_title: "Service",
    value_3_text:
      "Wij geloven in een betrouwbare opvolging en een persoonlijke aanpak voor elke professionele klant.",

    about_cta_label: "Contacteer ons",
    about_cta_title: "Op zoek naar een betrouwbare partner?",
    about_cta_text:
      "Neem rechtstreeks telefonisch contact met ons op. Zo kunnen wij uw vraag snel en persoonlijk behandelen.",
    about_cta_call: "Bel Agralin",
    about_cta_contact_link: "Bekijk contactgegevens",

    // Producten pagina
    products_page_title: "Producten | Agralin",
    products_meta_description:
      "Ontdek de producten van Agralin: kroten, lijnzaad en verwerkt vlas, met focus op kwaliteit, betrouwbaarheid en service.",

    products_page_label: "Onze producten",
    products_page_title_text: "Kwalitatieve producten, zorgvuldig verwerkt",
    products_page_intro:
      "Agralin levert producten voor professionele klanten die belang hechten aan betrouwbaarheid, duidelijke communicatie en een constante focus op kwaliteit.",

    products_kroten_label: "Kroten",
    products_kroten_title: "Vlasbundels met aandacht voor kwaliteit",
    products_kroten_text_1:
      "Onze kroten worden verwerkt met zorg en vakkennis. Voor klanten die op zoek zijn naar betrouwbaarheid en een correcte opvolging, biedt Agralin een product waarop kan worden gebouwd.",
    products_kroten_text_2:
      "Wij kiezen niet voor ingewikkelde productniveaus, maar voor een consistente standaard en een eerlijke beoordeling van kwaliteit.",
    products_kroten_alt: "Natuurlijke vezels en landbouwtexturen",

    products_lijnzaad_label: "Lijnzaad",
    products_lijnzaad_title: "Lijnzaad voor professionele toepassingen",
    products_lijnzaad_text_1:
      "Agralin levert lijnzaad met de nadruk op degelijke kwaliteit en correcte service. Dankzij onze ervaring en persoonlijke aanpak kunnen klanten rekenen op een helder en betrouwbaar contact.",
    products_lijnzaad_text_2:
      "Wij geloven dat vertrouwen niet ontstaat door grote woorden, maar door constante kwaliteit en duidelijke afspraken.",
    products_lijnzaad_alt: "Close-up van zaden in natuurlijke omgeving",

    products_vlas_label: "Verwerkt vlas",
    products_vlas_title: "Professioneel verwerkt met kennis van het vak",
    products_vlas_text_1:
      "Verwerkt vlas van Agralin staat voor een doordachte aanpak, ervaring sinds 1995 en een sterke focus op service. Wij begeleiden onze klanten met eerlijk advies en een product dat zorgvuldig wordt opgevolgd.",
    products_vlas_text_2:
      "Voor B2B-klanten, landbouwers en agrarische bedrijven is Agralin een toegankelijke en betrouwbare partner in de sector.",
    products_vlas_alt: "Agrarische verwerking en veldomgeving",

    products_cta_label: "Snel contact",
    products_cta_title: "Wenst u meer informatie over onze producten?",
    products_cta_text:
      "Bel ons rechtstreeks. Zo kunnen wij u snel en persoonlijk verder helpen met de juiste informatie.",
    products_cta_call: "Bel nu",
    products_cta_contact: "Naar contact",

    // Contact pagina
    contact_page_title: "Contact | Agralin",
    contact_meta_description:
      "Neem contact op met Agralin in Ingelmunster. Bel rechtstreeks voor snelle en persoonlijke opvolging.",

    contact_page_label: "Contact",
    contact_page_title_text: "Neem rechtstreeks contact op met Agralin",
    contact_page_intro:
      "Voor een snelle en persoonlijke opvolging belt u ons best rechtstreeks. Zo kunnen wij uw vraag onmiddellijk en efficiënt behandelen.",

    contact_card_label: "Bel ons",
    contact_card_title: "Telefonisch contact heeft onze voorkeur",
    contact_card_intro:
      "Wenst u informatie over onze vlasverwerking, producten of samenwerking? Aarzel niet om ons rechtstreeks te bellen.",

    contact_phone_label: "Telefoon",
    contact_email_label: "E-mail",
    contact_address_label: "Adres",
    contact_address_text: "Krekelstraat 48, 8770 Ingelmunster, België",
    contact_map_title: "Kaart van Agralin in Ingelmunster"
  },

  fr: {
    logo_aria_label: "Accueil Agralin",
    logo_alt: "Logo Agralin",
    main_nav_aria: "Navigation principale",
    language_switcher_aria: "Choix de la langue",
    menu_open_aria: "Ouvrir le menu",

    nav_home: "Accueil",
    nav_about: "À propos",
    nav_products: "Produits",
    nav_contact: "Contact",
    nav_call: "Appelez-nous",

    call_now: "Appelez-nous dès aujourd’hui",

    footer_tagline: "Transformation du lin avec qualité et confiance.",
    footer_contact_title: "Contact",
    footer_address_title: "Adresse",
    footer_address: "Krekelstraat 48<br />8770 Ingelmunster<br />Belgique",

    home_page_title: "Agralin | Transformation du lin avec qualité et confiance",
    home_meta_description:
      "Agralin est une entreprise familiale de transformation du lin située à Ingelmunster. Spécialisée depuis 1995 dans la transformation du lin, les bottes de lin, les graines de lin et le lin transformé.",

    hero_eyebrow: "Entreprise familiale depuis 1995",
    hero_title: "Agralin – Transformation du lin avec qualité et confiance",
    hero_text:
      "Agralin est une entreprise familiale belge située à Ingelmunster, spécialisée dans la transformation du lin et la vente de bottes de lin, de graines de lin et de lin transformé. Nous misons sur une communication honnête, un service fiable et une attention constante à la qualité.",
    view_products: "Voir nos produits",

    about_label: "À propos d’Agralin",
    about_title: "Un partenaire fiable dans la transformation du lin",
    about_text_1:
      "Depuis le 18 juillet 1995, Agralin s’est forgé une solide réputation dans le secteur local de l’agriculture et de la transformation du lin. En tant qu’entreprise familiale, nous combinons expérience, engagement et approche personnelle avec une promesse claire : fournir de la qualité et communiquer honnêtement sur chaque produit.",
    about_text_2:
      "Nous travaillons principalement pour des clients B2B, des agriculteurs et des entreprises agricoles à la recherche d’un partenaire fiable.",
    about_cta: "En savoir plus sur notre histoire",
    about_image_alt: "Plant de lin d’Agralin",

    products_label: "Nos produits",
    products_title: "Des produits de qualité pour les clients professionnels",
    products_intro:
      "Agralin ne met pas l’accent sur différents niveaux de qualité, mais sur une norme constante et la plus élevée possible.",

    product_kroten_alt: "Environnement agricole avec matériaux naturels",
    product_kroten_title: "Bottes de lin",
    product_kroten_text:
      "Bottes de lin solides et de qualité, soigneusement transformées et livrées avec un souci de fiabilité.",

    product_lijnzaad_alt: "Gros plan sur des graines de lin",
    product_lijnzaad_title: "Graines de lin",
    product_lijnzaad_text:
      "Graines de lin avec un accent sur une qualité sérieuse et un service correct pour les applications agricoles et professionnelles.",

    product_vlas_alt: "Transformation dans un environnement agricole industriel",
    product_vlas_title: "Lin transformé",
    product_vlas_text:
      "Lin transformé professionnellement pour les clients qui attachent de l’importance à la continuité, à la clarté et au savoir-faire.",

    trust_label: "Pourquoi Agralin",
    trust_title: "Construit sur la confiance",

    trust_item_1_badge: "1995",
    trust_item_1_title: "Actif depuis 1995",
    trust_item_1_text:
      "Des décennies d’expérience dans la transformation du lin et la collaboration avec des clients professionnels.",

    trust_item_2_badge: "Familial",
    trust_item_2_title: "Approche personnelle",
    trust_item_2_text:
      "En tant qu’entreprise familiale, nous accordons une grande importance au contact direct et aux relations durables.",

    trust_item_3_badge: "Honnête",
    trust_item_3_title: "Communication claire",
    trust_item_3_text:
      "Nous sommes toujours honnêtes sur la qualité de nos produits et sur ce que les clients peuvent attendre.",

    trust_item_4_badge: "Service",
    trust_item_4_title: "Collaboration fiable",
    trust_item_4_text:
      "Nous offrons un service sur lequel les clients peuvent compter, du premier contact à la livraison.",

    cta_label: "Contact direct",
    cta_title: "Discutez directement de votre demande avec Agralin",
    cta_text:
      "Vous souhaitez plus d’informations sur notre transformation du lin, nos bottes de lin, nos graines de lin ou notre lin transformé ? Contactez-nous directement par téléphone pour un suivi rapide et personnel.",
    cta_contact_page: "Page de contact",

    about_page_title: "À propos | Agralin",
    about_meta_description:
      "Découvrez Agralin : une entreprise familiale belge active dans la transformation du lin depuis 1995, fondée sur l’honnêteté, la qualité et le service.",

    about_page_label: "À propos",
    about_page_title_text: "Une entreprise familiale ancrée dans le savoir-faire",
    about_page_intro:
      "Agralin a été fondée le 18 juillet 1995 et est devenue un nom fiable dans la transformation locale du lin. Au fil des années, l’honnêteté, la qualité et le service sont restés la base de notre activité.",

    about_story_label: "Notre histoire",
    about_story_title: "Active dans la transformation du lin depuis 1995",
    about_story_text_1:
      "Ce qui a commencé comme une entreprise familiale avec une vision claire est progressivement devenu une société reconnue pour son approche personnelle et son service fiable. Chez Agralin, nous croyons qu’une collaboration solide commence par la confiance.",
    about_story_text_2:
      "C’est pourquoi nous choisissons délibérément une communication claire, des accords corrects et des produits dont nous expliquons honnêtement la qualité. Nos clients savent à quoi s’attendre, et c’est précisément là que réside notre force.",
    about_story_image_alt: "Terrain d’entreprise rural et environnement naturel",

    values_label: "Nos valeurs",
    values_title: "La base de chaque collaboration",

    value_1_title: "Honnêteté",
    value_1_text:
      "Nous communiquons de manière ouverte et correcte sur nos produits, notre qualité et notre service.",

    value_2_title: "Qualité",
    value_2_text:
      "Nous ne visons pas plusieurs niveaux de qualité, mais une norme constante et la plus élevée possible.",

    value_3_title: "Service",
    value_3_text:
      "Nous croyons en un suivi fiable et une approche personnelle pour chaque client professionnel.",

    about_cta_label: "Contactez-nous",
    about_cta_title: "Vous cherchez un partenaire fiable ?",
    about_cta_text:
      "Contactez-nous directement par téléphone. Nous pourrons ainsi traiter votre demande rapidement et personnellement.",
    about_cta_call: "Appeler Agralin",
    about_cta_contact_link: "Voir les coordonnées",

    products_page_title: "Produits | Agralin",
    products_meta_description:
      "Découvrez les produits d’Agralin : bottes de lin, graines de lin et lin transformé, avec un accent sur la qualité, la fiabilité et le service.",

    products_page_label: "Nos produits",
    products_page_title_text: "Des produits de qualité, soigneusement transformés",
    products_page_intro:
      "Agralin fournit des produits pour les clients professionnels qui attachent de l’importance à la fiabilité, à une communication claire et à une attention constante à la qualité.",

    products_kroten_label: "Bottes de lin",
    products_kroten_title: "Des bottes de lin avec une attention particulière à la qualité",
    products_kroten_text_1:
      "Nos bottes de lin sont transformées avec soin et savoir-faire. Pour les clients à la recherche de fiabilité et d’un suivi correct, Agralin offre un produit sur lequel ils peuvent compter.",
    products_kroten_text_2:
      "Nous ne choisissons pas des niveaux de produits compliqués, mais une norme cohérente et une évaluation honnête de la qualité.",
    products_kroten_alt: "Fibres naturelles et textures agricoles",

    products_lijnzaad_label: "Graines de lin",
    products_lijnzaad_title: "Des graines de lin pour des applications professionnelles",
    products_lijnzaad_text_1:
      "Agralin fournit des graines de lin en mettant l’accent sur une qualité sérieuse et un service correct. Grâce à notre expérience et à notre approche personnelle, les clients peuvent compter sur un contact clair et fiable.",
    products_lijnzaad_text_2:
      "Nous croyons que la confiance ne naît pas de grands mots, mais d’une qualité constante et d’accords clairs.",
    products_lijnzaad_alt: "Gros plan sur des graines dans un environnement naturel",

    products_vlas_label: "Lin transformé",
    products_vlas_title: "Transformé professionnellement avec connaissance du métier",
    products_vlas_text_1:
      "Le lin transformé d’Agralin représente une approche réfléchie, une expérience depuis 1995 et une forte attention au service. Nous accompagnons nos clients avec des conseils honnêtes et un produit suivi avec soin.",
    products_vlas_text_2:
      "Pour les clients B2B, les agriculteurs et les entreprises agricoles, Agralin est un partenaire accessible et fiable dans le secteur.",
    products_vlas_alt: "Transformation agricole et environnement de champ",

    products_cta_label: "Contact rapide",
    products_cta_title: "Souhaitez-vous plus d’informations sur nos produits ?",
    products_cta_text:
      "Appelez-nous directement. Nous pourrons ainsi vous aider rapidement et personnellement avec les bonnes informations.",
    products_cta_call: "Appeler maintenant",
    products_cta_contact: "Vers contact",

    contact_page_title: "Contact | Agralin",
    contact_meta_description:
      "Contactez Agralin à Ingelmunster. Appelez directement pour un suivi rapide et personnel.",

    contact_page_label: "Contact",
    contact_page_title_text: "Contactez Agralin directement",
    contact_page_intro:
      "Pour un suivi rapide et personnel, il est préférable de nous appeler directement. Nous pourrons ainsi traiter votre demande immédiatement et efficacement.",

    contact_card_label: "Appelez-nous",
    contact_card_title: "Le contact téléphonique a notre préférence",
    contact_card_intro:
      "Vous souhaitez des informations sur notre transformation du lin, nos produits ou une collaboration ? N’hésitez pas à nous appeler directement.",

    contact_phone_label: "Téléphone",
    contact_email_label: "E-mail",
    contact_address_label: "Adresse",
    contact_address_text: "Krekelstraat 48, 8770 Ingelmunster, Belgique",
    contact_map_title: "Carte d’Agralin à Ingelmunster"
  },

  en: {
    logo_aria_label: "Agralin home",
    logo_alt: "Agralin logo",
    main_nav_aria: "Main navigation",
    language_switcher_aria: "Language selection",
    menu_open_aria: "Open menu",

    nav_home: "Home",
    nav_about: "About us",
    nav_products: "Products",
    nav_contact: "Contact",
    nav_call: "Call us",

    call_now: "Call us today",

    footer_tagline: "Flax processing with quality and trust.",
    footer_contact_title: "Contact",
    footer_address_title: "Address",
    footer_address: "Krekelstraat 48<br />8770 Ingelmunster<br />Belgium",

    home_page_title: "Agralin | Flax processing with quality and trust",
    home_meta_description:
      "Agralin is a family-owned flax processing company based in Ingelmunster. Specialized since 1995 in flax processing, flax bundles, linseed, and processed flax.",

    hero_eyebrow: "Family business since 1995",
    hero_title: "Agralin – Flax processing with quality and trust",
    hero_text:
      "Agralin is a Belgian family business based in Ingelmunster, specialized in flax processing and the sale of flax bundles, linseed, and processed flax. We stand for honest communication, reliable service, and a constant focus on quality.",
    view_products: "View our products",

    about_label: "About Agralin",
    about_title: "A reliable partner in flax processing",
    about_text_1:
      "Since July 18, 1995, Agralin has built a strong reputation within the local agricultural and flax processing sector. As a family business, we combine experience, commitment, and a personal approach with a clear promise: deliver quality and communicate honestly about every product.",
    about_text_2:
      "We mainly work for B2B clients, farmers, and agricultural businesses looking for a partner they can rely on.",
    about_cta: "Read more about our story",
    about_image_alt: "Flax plant of Agralin",

    products_label: "Our products",
    products_title: "Quality products for professional clients",
    products_intro:
      "Agralin does not focus on different quality levels, but on a consistent and as high as possible standard.",

    product_kroten_alt: "Agricultural environment with natural materials",
    product_kroten_title: "Flax bundles",
    product_kroten_text:
      "Strong and high-quality flax bundles, carefully processed and delivered with attention to reliability.",

    product_lijnzaad_alt: "Close-up of linseed",
    product_lijnzaad_title: "Linseed",
    product_lijnzaad_text:
      "Linseed with a focus on solid quality and proper service for agricultural and professional applications.",

    product_vlas_alt: "Processing in an industrial agricultural environment",
    product_vlas_title: "Processed flax",
    product_vlas_text:
      "Professionally processed flax for clients who value continuity, clarity, and expertise.",

    trust_label: "Why Agralin",
    trust_title: "Built on trust",

    trust_item_1_badge: "1995",
    trust_item_1_title: "Active since 1995",
    trust_item_1_text:
      "Decades of experience in flax processing and cooperation with professional clients.",

    trust_item_2_badge: "Family",
    trust_item_2_title: "Personal approach",
    trust_item_2_text:
      "As a family business, we attach great importance to direct contact and long-term relationships.",

    trust_item_3_badge: "Honest",
    trust_item_3_title: "Clear communication",
    trust_item_3_text:
      "We are always honest about the quality of our products and about what clients can expect.",

    trust_item_4_badge: "Service",
    trust_item_4_title: "Reliable cooperation",
    trust_item_4_text:
      "We provide service clients can build on, from first contact to delivery.",

    cta_label: "Direct contact",
    cta_title: "Discuss your request directly with Agralin",
    cta_text:
      "Would you like more information about our flax processing, flax bundles, linseed, or processed flax? Contact us directly by phone for fast and personal follow-up.",
    cta_contact_page: "Contact page",

    about_page_title: "About us | Agralin",
    about_meta_description:
      "Get to know Agralin: a Belgian family-owned flax processing company since 1995, built on honesty, quality, and service.",

    about_page_label: "About us",
    about_page_title_text: "A family business rooted in craftsmanship",
    about_page_intro:
      "Agralin was founded on July 18, 1995 and grew into a trusted name in local flax processing. Over the years, honesty, quality, and service have always remained the foundation of our work.",

    about_story_label: "Our story",
    about_story_title: "Active in flax processing since 1995",
    about_story_text_1:
      "What started as a family business with a clear vision gradually grew into a company known for its personal approach and reliable service. At Agralin, we believe strong cooperation starts with trust.",
    about_story_text_2:
      "That is why we consciously choose clear communication, fair agreements, and products whose quality we explain honestly. Our clients know what to expect, and that is exactly where our strength lies.",
    about_story_image_alt: "Rural company grounds and natural surroundings",

    values_label: "Our values",
    values_title: "The foundation of every partnership",

    value_1_title: "Honesty",
    value_1_text:
      "We communicate openly and correctly about our products, our quality, and our service.",

    value_2_title: "Quality",
    value_2_text:
      "We do not strive for multiple quality levels, but for a consistent and as high as possible standard.",

    value_3_title: "Service",
    value_3_text:
      "We believe in reliable follow-up and a personal approach for every professional client.",

    about_cta_label: "Contact us",
    about_cta_title: "Looking for a reliable partner?",
    about_cta_text:
      "Contact us directly by phone. That way, we can handle your request quickly and personally.",
    about_cta_call: "Call Agralin",
    about_cta_contact_link: "View contact details",

    products_page_title: "Products | Agralin",
    products_meta_description:
      "Discover Agralin’s products: flax bundles, linseed, and processed flax, with a focus on quality, reliability, and service.",

    products_page_label: "Our products",
    products_page_title_text: "Quality products, carefully processed",
    products_page_intro:
      "Agralin supplies products for professional clients who value reliability, clear communication, and a constant focus on quality.",

    products_kroten_label: "Flax bundles",
    products_kroten_title: "Flax bundles with attention to quality",
    products_kroten_text_1:
      "Our flax bundles are processed with care and expertise. For clients looking for reliability and proper follow-up, Agralin offers a product they can build on.",
    products_kroten_text_2:
      "We do not choose complicated product levels, but a consistent standard and an honest assessment of quality.",
    products_kroten_alt: "Natural fibres and agricultural textures",

    products_lijnzaad_label: "Linseed",
    products_lijnzaad_title: "Linseed for professional applications",
    products_lijnzaad_text_1:
      "Agralin supplies linseed with an emphasis on solid quality and proper service. Thanks to our experience and personal approach, clients can count on clear and reliable contact.",
    products_lijnzaad_text_2:
      "We believe trust is not created by big words, but by consistent quality and clear agreements.",
    products_lijnzaad_alt: "Close-up of seeds in a natural environment",

    products_vlas_label: "Processed flax",
    products_vlas_title: "Professionally processed with knowledge of the trade",
    products_vlas_text_1:
      "Processed flax from Agralin stands for a thoughtful approach, experience since 1995, and a strong focus on service. We guide our clients with honest advice and a product that is carefully followed up.",
    products_vlas_text_2:
      "For B2B clients, farmers, and agricultural businesses, Agralin is an accessible and reliable partner in the sector.",
    products_vlas_alt: "Agricultural processing and field environment",

    products_cta_label: "Quick contact",
    products_cta_title: "Would you like more information about our products?",
    products_cta_text:
      "Call us directly. That way, we can help you quickly and personally with the right information.",
    products_cta_call: "Call now",
    products_cta_contact: "Go to contact",

    contact_page_title: "Contact | Agralin",
    contact_meta_description:
      "Contact Agralin in Ingelmunster. Call directly for fast and personal follow-up.",

    contact_page_label: "Contact",
    contact_page_title_text: "Contact Agralin directly",
    contact_page_intro:
      "For fast and personal follow-up, it is best to call us directly. That way, we can handle your request immediately and efficiently.",

    contact_card_label: "Call us",
    contact_card_title: "We prefer contact by phone",
    contact_card_intro:
      "Would you like information about our flax processing, products, or cooperation? Do not hesitate to call us directly.",

    contact_phone_label: "Phone",
    contact_email_label: "E-mail",
    contact_address_label: "Address",
    contact_address_text: "Krekelstraat 48, 8770 Ingelmunster, Belgium",
    contact_map_title: "Map of Agralin in Ingelmunster"
  }
};

const pageConfig = {
  home: {
    titleKey: 'home_page_title',
    metaKey: 'home_meta_description'
  },
  about: {
    titleKey: 'about_page_title',
    metaKey: 'about_meta_description'
  },
  products: {
    titleKey: 'products_page_title',
    metaKey: 'products_meta_description'
  },
  contact: {
    titleKey: 'contact_page_title',
    metaKey: 'contact_meta_description'
  }
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

function applyTranslations(lang) {
  const currentTranslations = translations[lang] || translations.nl;
  const currentPageConfig = pageConfig[pageName] || pageConfig.home;

  document.documentElement.lang = lang;

  if (currentTranslations[currentPageConfig.titleKey]) {
    document.title = currentTranslations[currentPageConfig.titleKey];
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && currentTranslations[currentPageConfig.metaKey]) {
    metaDescription.setAttribute('content', currentTranslations[currentPageConfig.metaKey]);
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');

    if (currentTranslations[key]) {
      if (key === 'footer_address') {
        element.innerHTML = currentTranslations[key];
      } else {
        element.textContent = currentTranslations[key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const key = element.getAttribute('data-i18n-alt');
    if (currentTranslations[key]) {
      element.setAttribute('alt', currentTranslations[key]);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.getAttribute('data-i18n-aria-label');
    if (currentTranslations[key]) {
      element.setAttribute('aria-label', currentTranslations[key]);
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const key = element.getAttribute('data-i18n-title');
    if (currentTranslations[key]) {
      element.setAttribute('title', currentTranslations[key]);
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('selectedLanguage', lang);
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLang = button.dataset.lang;
    applyTranslations(selectedLang);
  });
});

const savedLanguage = localStorage.getItem('selectedLanguage') || 'nl';
applyTranslations(savedLanguage);

const header = document.querySelector('.site-header');

function handleHeaderShrink() {
  if (!header) return;

  if (window.scrollY > 60) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
}

window.addEventListener('scroll', handleHeaderShrink);
handleHeaderShrink();