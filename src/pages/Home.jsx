import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { ChevronDown, Code2, Palette, Smartphone, Terminal } from 'lucide-react';
import './Home.css';

export default function Home() {
  const [aboutRef, aboutInView] = useInView();
  const [skillsRef, skillsInView] = useInView();
  const [qualitiesRef, qualitiesInView] = useInView();
  const [internshipRef, internshipInView] = useInView();

  const qualities = [
    'Быстро учусь и применяю новые знания на практике',
    'Целеустремлённый, с высокой мотивацией к профессиональному росту',
    'Умею работать самостоятельно, открыт к обратной связи и командной работе',
    'Ответственно подхожу к дедлайнам и качеству кода',
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar">
              <span className="hero__avatar-text">СК</span>
            </div>
          </div>
          <p className="hero__greeting">Привет, я</p>
          <h1 className="hero__name">Кочуров Степан</h1>
          <p className="hero__title">Стажёр-программист (Frontend / Mobile / Web)</p>
          <p className="hero__description">
            Студент 3-го курса по специальности «Информационные системы и программирование» в ИжГТУ.
            Создаю веб-приложения, мобильные приложения и телеграм-ботов. Ищу стажировку для профессионального роста.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--outline">
              <Code2 size={18} />
              Мои проекты
            </Link>
          </div>
          <div className="hero__socials">
            <a href="https://github.com/Ro1fy" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://t.me/Ro1fy" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="Telegram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="mailto:skochurov3@gmail.com" className="hero__social-link" aria-label="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
        <div className="hero__scroll">
          <ChevronDown size={24} className="hero__scroll-icon" />
          <span>Прокрутите вниз, чтобы узнать больше</span>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className={`section about ${aboutInView ? 'section--visible' : ''}`}
      >
        <div className="section__inner">
          <h2 className="section__title">О себе</h2>
          <p className="about__text">
            Студент 3-го курса по специальности «Информационные системы и программирование».
            Активно развиваюсь в направлениях веб- и мобильной разработки. Имею практический опыт
            создания проектов на Python, JavaScript, Flutter и PHP. Участвовал в хакатонах, создаю
            пет-проекты для отработки навыков. Быстро учусь, мотивирован расти в профессиональной среде.
          </p>
          <p className="about__fun">
            В свободное время играю на бас-гитаре и занимаюсь брейк-дансом — это развивает
            дисциплину, чувство ритма и креативность.
          </p>
          <div className="about__cards">
            <div className="about__card">
              <Terminal size={28} className="about__card-icon" />
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML/CSS</p>
            </div>
            <div className="about__card">
              <Smartphone size={28} className="about__card-icon" />
              <h3>Mobile</h3>
              <p>Flutter, Dart</p>
            </div>
            <div className="about__card">
              <Code2 size={28} className="about__card-icon" />
              <h3>Backend</h3>
              <p>Python, PHP, SQL</p>
            </div>
            <div className="about__card">
              <Palette size={28} className="about__card-icon" />
              <h3>Design</h3>
              <p>Адаптивный дизайн, UI/UX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className={`section skills ${skillsInView ? 'section--visible' : ''}`}
      >
        <div className="section__inner">
          <h2 className="section__title">Технические навыки</h2>
          <div className="skills__grid">
            <div className="skills__group">
              <h3 className="skills__category">Языки</h3>
              <div className="skills__items">
                {['Python', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'SQL'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skills__group">
              <h3 className="skills__category">Фреймворки / Библиотеки</h3>
              <div className="skills__items">
                {['React', 'Flutter'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skills__group">
              <h3 className="skills__category">Инструменты</h3>
              <div className="skills__items">
                {['Git', 'VS Code'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualities Section */}
      <section
        ref={qualitiesRef}
        className={`section qualities ${qualitiesInView ? 'section--visible' : ''}`}
      >
        <div className="section__inner">
          <h2 className="section__title">Личные качества</h2>
          <ul className="qualities__list">
            {qualities.map((q, idx) => (
              <li key={idx} className="qualities__item">
                <span className="qualities__bullet">✦</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Internship Section */}
      <section
        ref={internshipRef}
        className={`section internship ${internshipInView ? 'section--visible' : ''}`}
      >
        <div className="section__inner">
          <h2 className="section__title">Пожелания к стажировке</h2>
          <div className="internship__cards">
            <div className="internship__card">
              <h3>🎯 Направление</h3>
              <p>Frontend, веб-разработка, мобильная разработка</p>
            </div>
            <div className="internship__card">
              <h3>🕐 График</h3>
              <p>Частичная занятость, удалённый формат</p>
            </div>
            <div className="internship__card">
              <h3>🚀 Готовность</h3>
              <p>К обучению, код-ревью, работе в команде и решению реальных задач</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
