import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
    <nav>
        <a href="/index.html">
            <img src="/public/logo-style-3.svg" alt="Logo" class="logo" id="nav-logo">
        </a>
        <ul class="nav-links">
            <li><a href="#" class="nav-link">Accueil</a></li>
            <li><a href="#" class="nav-link">Projets</a></li>
            <li><a href="#" class="nav-link" target="_blank">Blog</a></li>
        </ul>
        <div class="nav-actions">
            <div class="nav-social-buttons">
                <img src="/public/global-line.svg" alt="Languages" class="nav-icons">
                <img src="/public/contrast-fill.svg" alt="Theme" class="nav-icons">
                <a href="https://github.com/DodgeElfry" target="_blank"><img src="/public/github-line.svg" alt="Github" class="nav-icons"></a>
                <a href="https://www.linkedin.com/in/dodge-nguia/" target="_blank"><img src="/public/linkedin-fill.svg" alt="LinkedIn" class="nav-icons"></a>
            </div>
            <button class="cv-button">
                <img class="cv-download-icon" src="/public/download-2-line.svg" alt="Télécharger">
                <p class="text-cv-button">CV</p>
            </button>
        </div>
    </nav>
</header>
<main>
    <aside>
        <a href="#presentation" class="aside-button">Présentation</a>
        <a href="#services" class="aside-button">Services</a>
        <a href="#stack" class="aside-button">Stack</a>
        <a href="#realisation" class="aside-button">Réalisations</a>
        <a href="#methodology" class="aside-button">Méthodologie</a>
        <a href="#contact" class="aside-button">Contact</a>
        <a href="#" class="aside-button">
            <img src="" alt="Télécharger" class="portfolio-download-icon">
            <p class="text-portfolio-button">Portfolio</p>
        </a>
    </aside>
    <div class="main-container">
        <section id="presentation">
            <div id="presentation-container">
                <p class="status">Disponible pour de nouveaux projets</p>
                <h1 class="big-title">L'innovation par le <strong>Web / Mobile</strong></h1>
                <p class="text-presentation">Je suis Dodge Elfry, développeur spécialisé dans la création d'interfaces numériques modernes, performantes et centrées sur l'humain.</p>
                <div>
                    <a href="/src/pages/projects.html" class="action-button action-button-projects">
                        <p>Voir mes projets</p>
                        <img src="/public/arrow-right-line.svg" alt="Flèche direction" class="action-button-icon">
                    </a>
                    <a href="#" class="action-button action-button-download">
                        <img src="/public/download-2-line.svg" alt="Télécharger" class="action-button-icon">
                        <p>Télécharger CV</p>
                    </a>
                </div>
            </div>
            <img src="/src/assets/img/dodge.jpg" alt="Photo de profil">
        </section>
        <section id="services">
            <h2 class="section-title">SERVICES</h2>
            <p class="intro-section">Mon offre de services pour répondre à vos besoins</p>
            <div class="services-container">
                <div class="services-card">
                    <span class="services-domain">Design</span>
                    <ul class="services-list">
                        <li class="one-sevice">Maquettage de site web et application</li>
                        <li class="one-sevice">Création de charte graphique</li>
                        <li class="one-sevice">Création de prototypes interactifs</li>
                    </ul>
                </div>
                <div class="services-card">
                    <span class="services-domain">Developpement web</span>
                    <ul class="services-list">
                        <li class="one-sevice">Intégration</li>
                        <li class="one-sevice">Déploiement</li>
                        <li class="one-sevice">Maintenance</li>
                    </ul>
                </div>
                <div class="services-card">
                    <span class="services-domain">Autres services</span>
                    <ul class="services-list">
                        <li class="one-sevice">Conseil</li>
                        <li class="one-sevice">Fourniture d'équipements</li>
                        <li class="one-sevice">Fourniture et configuration de logiciels</li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="stack">
            <h2 class="section-title">STACK</h2>
            <p class="intro-section">Un arsenal technologique moderne pour répondre à tous vos besoins</p>
            <div class="stack-container">
                <article class="stack-card">
                    <div class="container-icon">
                        <img class="domain-icon" src="/public/code-s-slash-line.svg" alt="Frontend">  
                    </div>
                    <h3>Frontend</h3>
                    <ul class="technologies">
                        <li class="technology">HTML</li>
                        <li class="technology">CSS</li>
                        <li class="technology">Tailwind</li>
                        <li class="technology">TypeScript</li>
                    </ul>
                </article>
                <article class="stack-card">
                    <div class="container-icon">
                        <img class="domain-icon" src="/public/stack-line.svg" alt="Backend">  
                    </div>
                    <h3>Backend</h3>
                    <ul class="technologies">
                        <li class="technology">NodeJS</li>
                        <li class="technology">ExpressJS</li>
                        <li class="technology">Fastify</li>
                        <li class="technology">PostgreSQL</li>
                    </ul>
                </article>
                <article class="stack-card">
                    <div class="container-icon">
                        <img class="domain-icon" src="/public/stacked-chart-line.svg" alt="Autre">  
                    </div>
                    <h3>Autres</h3>
                    <ul class="technologies">
                        <li class="technology">Linux</li>
                        <li class="technology">Github</li>
                        <li class="technology">Figma</li>
                        <li class="technology">Adobe CC</li>
                    </ul>
                </article>
            </div>
        </section>
        <section id="realisation">
            <h2 class="section-title">REALISATIONS</h2>
            <p class="intro-section">Une sélection de mes réalisations les plus marquantes, alliant complexité technique et élégance visuelle</p>
            <div class="projects-container">
                <article class="project-card">
                    <div>
                        <img src="/public/temporary-picture.jpg" alt="" class="project-picture">
                        <span class="status">En cours</span>
                    </div>
                    <h3 class="project-tilte">DUDU</h3>
                    <p class="project-description">Plateforme d'inscription det gestion d'événements</p>
                    <ul class="project-technologies">
                        <li class="badge-technology">Figma</li>
                        <li class="badge-technology">HTML</li>
                        <li class="badge-technology">CSS</li>
                        <li class="badge-technology">TypeScript</li>
                        <li class="badge-technology">ExpressJS</li>
                        <li class="badge-technology">PostgreSQL</li>
                    </ul>
                </article>
                <article class="project-card">
                    <div>
                        <img src="/public/temporary-picture.jpg" alt="" class="project-picture">
                        <span class="status">En cours</span>
                    </div>
                    <h3 class="project-tilte">BISSI</h3>
                    <p class="project-description">Application de gestion associative et syndicale</p>
                    <ul class="project-technologies">
                        <li class="badge-technology">Figma</li>
                        <li class="badge-technology">HTML</li>
                        <li class="badge-technology">CSS</li>
                        <li class="badge-technology">TypeScript</li>
                        <li class="badge-technology">ExpressJS</li>
                        <li class="badge-technology">PostgreSQL</li>
                    </ul>
                </article>
                <article class="project-card">
                    <div>
                        <img src="/public/temporary-picture.jpg" alt="" class="project-picture">
                        <span class="status">En cours</span>
                    </div>
                    <h3 class="project-tilte">OYERI</h3>
                    <p class="project-description">Jeux éducatif</p>
                    <ul class="project-technologies">
                        <li class="badge-technology">Figma</li>
                        <li class="badge-technology">HTML</li>
                        <li class="badge-technology">CSS</li>
                        <li class="badge-technology">TypeScript</li>
                        <li class="badge-technology">Fastify</li>
                        <li class="badge-technology">PostgreSQL</li>
                    </ul>
                </article>
                <article class="project-card">
                    <div>
                        <img src="/public/temporary-picture.jpg" alt="" class="project-picture">
                        <span class="status">En cours</span>
                    </div>
                    <h3 class="project-tilte">WURA</h3>
                    <p class="project-description">Application marketplace mobile</p>
                    <ul class="project-technologies">
                        <li class="badge-technology">Figma</li>
                        <li class="badge-technology">HTML</li>
                        <li class="badge-technology">CSS</li>
                        <li class="badge-technology">React Native</li>
                        <li class="badge-technology">Fastify</li>
                        <li class="badge-technology">SQLite</li>
                    </ul>
                </article>
                <article class="project-card">
                    <div>
                        <img src="/public/temporary-picture.jpg" alt="" class="project-picture">
                        <span class="status">En cours</span>
                    </div>
                    <h3 class="project-tilte">G-RH+</h3>
                    <p class="project-description">Logiciel de GRH</p>
                    <ul class="project-technologies">
                        <li class="badge-technology">Figma</li>
                        <li class="badge-technology">HTML</li>
                        <li class="badge-technology">CSS</li>
                        <li class="badge-technology">React</li>
                        <li class="badge-technology">Hono</li>
                        <li class="badge-technology">PostgreSQL</li>
                    </ul>
                </article>
                <article class="project-card">
                    <div>
                        <img src="/public/temporary-picture.jpg" alt="" class="project-picture">
                        <span class="status">En cours</span>
                    </div>
                    <h3 class="project-tilte">G-Compta</h3>
                    <p class="project-description">Application de gestion comptable</p>
                    <ul class="project-technologies">
                        <li class="badge-technology">Figma</li>
                        <li class="badge-technology">HTML</li>
                        <li class="badge-technology">CSS</li>
                        <li class="badge-technology">React</li>
                        <li class="badge-technology">Hono</li>
                        <li class="badge-technology">PostgreSQL</li>
                    </ul>
                </article>
            </div>
        </section>
        <section id="methodology">
            <h2 class="section-title">METHODOLOGIE</h2>
            <p class="intro-section">Mon approche ne se limite pas à l'écriture de code. Je m'immerge dans vos problématiques métiers pour concevoir des solutions durables. Passionné par l'écosystème JavaScript, j'accorde une importance capitale à l'accécibilité et aux performances</p>
            <div class="methodology-container">
                <div class="methodology-card">
                    <img src="/public/lightbulb-ai-line.svg" alt="Innovation" class="methodologie-icon">
                    <h3 class="methodology-title">Innovation</h3>
                    <p class="methodology-text">En quête permanente des dernières technologies pour créer des solutions modernes et efficaces.</p>
                </div>
                <div class="methodology-card">
                    <img src="/public/file-code-line.svg" alt="Qualité" class="methodologie-icon">
                    <h3 class="methodology-title">Code qualitatif</h3>
                    <p class="methodology-text">Le clean code et la clean architechture sont au cœur de mon approche de développement.</p>
                </div>
                <div class="methodology-card">
                    <img src="/public/p2p-line.svg" alt="Collaboration" class="methodologie-icon">
                    <h3 class="methodology-title">Collaboration</h3>
                    <p class="methodology-text">Une communication franche et transparente avec mes clients pour atteindre ensemble les meilleurs résultats.</p>
                </div>
            </div>

        </section>
        <section id="contact">
            <h2 class="section-title">CONTACT</h2>
            <p class="intro-section">Prêt à donner vie à votre prochain grand projet ?</p>
            <div class="contact-container">
                <div class="contact-info">
                    <p class="text-contact">Que vous ayez une idée précise ou juste une ébauche, discutons-en ensemble pour définir la meilleure stratégie pour la concrétiser.</p>
                    <div class="delay">
                        <img src="/public/timer-2-line.svg" alt="Delay" class="delay-icon">
                        <p class="text-delay">Réponse sous 24h ouvrées</p>
                    </div>
                </div>
                <div class="contact-card">
                    <div class="input-area">
                        <label for="completname">Nom complet :</label>
                        <input type="text" value="" id="completname" placeholder="ex : Martin Bonheur">
                    </div>
                    <div class="input-area">
                    <label for="contactemail">Email :</label>
                    <input type="email" value="" id="contactemail" placeholder="ex : martin@solution.com">
                    </div>
                    <div class="input-area">
                    <label for="contactphone">Téléphone :</label>
                    <input type="tel" value="" id="contactphone" placeholder="ex : +241 00 00 00 00">
                    </div>
                    <div class="input-area">
                    <label for="message">Message :</label>
                    <input type="text" value="" id="message" placeholder="ex : Parlez-moi de votre projet">
                    </div>
                    <button type="submit" class="submit-button">
                        <p class="text-button-submit">Envoyer le message</p>
                        <img src="/public/send-plane-fill.svg" alt="Envoyer" class="icon-button-submit">
                    </button>
                </div>
            </div>
        </section>
    </div>
</main>
<footer>
    <div class="footer-top">
        <div class="logo-area">
            <img src="/public/logo-style-2.svg" alt="Logo" class="logo footer-logo">
            <p class="slogan"></p>
        </div>
        <div class="footer-links">
            <h4 class="navigation-links">Navigation</h4>
            <a href="/index.html">Accueil</a>
            <a href="#">Projets</a>
            <a href="#" target="_blank">Blog</a>
        </div>
        <div class="footer-links">
            <h4 class="ressources-links">Ressources</h4>
            <a href="#">Télécharger le CV</a>
            <a href="#">Télécharger le portfolio</a>
            <a href="#" target="_blank">Github</a>
            <a href="#" target="_blank">LinkedIn</a>
        </div>
    </div>
    <p class="copiright">©2026 · Dodge Elfry · Tous droits réservés</p>
</footer>
`