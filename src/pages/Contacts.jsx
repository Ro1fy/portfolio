import { Mail, Phone, MapPin, Link as LinkIcon, Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import './Contacts.css';

function Contacts() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('skochurov3@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contacts-page">
      <section className="page-header">
        <div className="page-header__inner">
          <h1 className="page-header__title">Контакты</h1>
          <p className="page-header__subtitle">Свяжитесь со мной</p>
        </div>
      </section>

      <section className="contacts__section">
        <div className="contacts__inner">
          <div className="contacts__cards">
            <div className="contacts__card">
              <Mail size={22} className="contacts__card-icon" />
              <div>
                <h3>Email</h3>
                <div className="contacts__email-row">
                  <span>skochurov3@gmail.com</span>
                  <button className="contacts__copy-btn" onClick={copyEmail} aria-label="Скопировать email">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && <span className="contacts__copied-label">Скопировано!</span>}
              </div>
            </div>

            <div className="contacts__card">
              <Phone size={22} className="contacts__card-icon" />
              <div>
                <h3>+7 (982) 116-00-11</h3>
                <p>Telegram / WhatsApp</p>
              </div>
            </div>

            <div className="contacts__card">
              <MapPin size={22} className="contacts__card-icon" />
              <div>
                <h3>г. Ижевск</h3>
                <p>Удалённая работа</p>
              </div>
            </div>
          </div>

          <div className="contacts__socials">
            <h3>Соцсети</h3>
            <div className="contacts__social-links">
              <a href="https://github.com/Ro1fy" target="_blank" rel="noopener noreferrer" className="contacts__social-link">
                <LinkIcon size={20} />
                GitHub
              </a>
              <a href="https://t.me/Ro1fy" target="_blank" rel="noopener noreferrer" className="contacts__social-link">
                <Send size={20} />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Contacts;