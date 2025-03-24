import React from "react";
import { motion } from "framer-motion";
import { Button } from "./components/button";
import './App.css'; // ⬅️ Important pour appliquer les styles

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="main">
      {/* Header / Bannière */}
      <motion.section 
        className="section banner"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
      >
        <h1>NovusWay</h1>
        <p className="subtitle">"Simplifiez l’après-accident. Protégez-vous dès maintenant."</p>
        <div className="button-group">
          <Button onClick={() => scrollToSection("conducteurs")}>Conducteur / Assuré</Button>
          <Button onClick={() => scrollToSection("experts")}>Expert / Assurance</Button>
        </div>
      </motion.section>

      <hr />

      {/* Fonctionnalités */}
      <motion.section 
        className="section"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Ce que l’app permet dès maintenant :</h2>
        <div className="grid">
          {[
            { title: "DashCam intelligente", desc: "Capturez la scène de l’accident avec localisation automatique." },
            { title: "QR Code sécurisé", desc: "Partagez vos infos d’assurance sans dévoiler vos données personnelles." },
            { title: "Guide interactif", desc: "Suivez les étapes après un accident sans stress ni confusion." },
            { title: "Enregistrement cloud (optionnel)", desc: "Sauvegardez vos vidéos dans le cloud pour plus de sécurité." },
            { title: "À venir : IA & intégration", desc: "Déclaration rapide, analyse de conduite, et contact assurance intelligent." },
          ].map((f, i) => (
            <motion.div key={i} className="card" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <hr />

      {/* Pourquoi NovusWay */}
      <motion.section 
        id="conducteurs"
        className="section"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Pourquoi NovusWay ?</h2>
        <p className="description">
          Une application québécoise, gratuite et éthique conçue pour aider les conducteurs à gérer les accidents, enregistrer leurs trajets, et protéger leurs données personnelles.
        </p>
        <div className="grid">
          {[
            { title: "DashCam + géolocalisation", desc: "Enregistrez chaque trajet avec précision pour plus de sécurité." },
            { title: "QR Code sécurisé", desc: "Échange d'infos simplifié sans divulguer vos données personnelles." },
            { title: "Guide après accident", desc: "Suivez facilement toutes les étapes pour gérer la situation." },
            { title: "Confidentialité totale", desc: "Vos données restent stockées sur votre appareil uniquement." },
            { title: "Application gratuite", desc: "Zéro pub, zéro frais caché. Juste une aide simple et efficace." },
          ].map((item, i) => (
            <motion.div key={i} className="card" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <hr />

      {/* Avantages */}
      <motion.section 
        className="section"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Avantages pour les conducteurs et assurés</h2>
        <div className="grid-3">
          {[
            { title: "Simplicité", desc: "Des étapes guidées pour ne jamais être perdu après un accident." },
            { title: "Sécurité", desc: "Données privées, protégées, et jamais partagées sans votre consentement." },
            { title: "Gain de temps", desc: "Fini les paperasses : tout est centralisé dans votre application." },
          ].map((a, i) => (
            <div key={i} className="card">
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <hr />

      {/* Experts */}
      <motion.section 
        id="experts"
        className="section"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Accédez aux données du tiers via NovusWay</h2>
        <div className="expert-section">
          <div className="expert-box">
            <h3>Procédure simple et sécurisée :</h3>
            <ul>
              <li>Votre assuré a eu un accident avec un tiers.</li>
              <li>Le tiers a généré une clé via son QR Code personnel.</li>
              <li>Votre assuré vous fournit cette clé pour accéder aux données.</li>
            </ul>
          </div>
          <div className="expert-box">
            <h3>Comment procéder :</h3>
            <p>Envoyez un courriel à : <a href="mailto:contact.novusway@gmail.com">contact.novusway@gmail.com</a><br/>
            Objet : <em>Demande de données – Clé [identifiant fourni]</em><br/>
            Incluez :<br/>
            • Le nom de l’assureur<br/>
            • Votre identité professionnelle<br/>
            • La clé fournie par votre assuré</p>
          </div>
          <div className="expert-box">
            <h3>Pourquoi ce système ?</h3>
            <ul>
              <li>Aucune prise de contact directe avec le tiers</li>
              <li>Gain de temps et centralisation des données</li>
              <li>Respect de la confidentialité avec traçabilité complète</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <hr />

      {/* Contact */}
      <motion.section 
        className="section"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Contact & Support</h2>
        <p>Une question ? Un partenariat ? Écrivez-nous :</p>
        <a href="mailto:contact.novusway@gmail.com">contact.novusway@gmail.com</a>
      </motion.section>

      <footer>
        <a href="https://docs.google.com/document/d/1cyUWV7gbvWOqs2GHAwnHhu-XY3hIGLqXmD4-EKHGSEQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a>
        <a href="https://docs.google.com/document/d/1XkcN3eyvqBsq8wIfQsoez2y5A7g9q-s_q6OgAPqfHqY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">CGU</a>
        <br/>
        &copy; {new Date().getFullYear()} Technologies NovusWay Inc. Tous droits réservés.
      </footer>
    </main>
  );
}