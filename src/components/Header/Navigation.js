import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import './Navigation.scss';
import { getSectionHeadlines } from '../../cms/customBlocks';
import CloseIcon from '../Icons/CloseIcon';

function Navigation({ isOpen, setIsOpen, items }) {
  const scrollToId = (id) => {
    const node = document.getElementById(id);
  
    if (typeof window !== 'undefined' && node) {
      const top = node.getBoundingClientRect().top;
      window.scroll({
        top, 
        left: 0, 
        behavior: 'smooth'
      });
    }
  };

  const handleSublinkClick = (event, page, id) => {
    if (typeof window !== 'undefined') {
      const pathName = window.location.pathname;
      if (pathName.includes(page)) {
        event.preventDefault();
        scrollToId(id);
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let hash = window.location.hash;
      hash = hash.replace('#/', '');
      hash = hash.replace('#', '');
  
      if (hash) {
        setTimeout(() => {
          scrollToId(hash);
        }, 250);
      }
    }
  }, []);

  return (
    <nav className={`Navigation${isOpen ? ' Navigation--isOpen' : ''}`}>
      <button onClick={() => setIsOpen(false)} className="Navigation__close">
        <CloseIcon />
      </button>

      <div className="Navigation__wrapper">
        <Link to="/" className="Navigation__link" activeClassName="Navigation__link--active">Startseite</Link>
        {items.map(({ node }) => {
          const sections = getSectionHeadlines(node.html);
          return (
            <div key={node.id} className="Navigation__item">
              <Link
                to={node.fields.slug}
                className="Navigation__link"
                activeClassName="Navigation__link--active">
                {node.frontmatter.title}
              </Link>

              {sections.length > 0 && (
                <div className="SubNavigation">
                  <ul className="SubNavigation__list">
                    {sections.map(({ slug, headline }) => {
                      return (
                        <li key={slug} className="SubNavigation__item">
                          <a
                            className="SubNavigation__link"
                            href={`${node.fields.slug}#${slug}`}
                            onClick={(e) => handleSublinkClick(e, node.fields.slug, slug)}
                          >
                            {headline}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}

        <Link
          to="/events"
          className="Navigation__link"
          activeClassName="Navigation__link--active">
          Termine
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
