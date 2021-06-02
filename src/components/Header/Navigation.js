import React from 'react';
import { Link } from 'gatsby';
import urlSlug from 'url-slug';
import './Navigation.scss';
import CloseIcon from '../Icons/CloseIcon';

const fromBlock = (match) => {
  return {
    headline: !match[1] || match[1] === 'undefined' ? '' : match[1],
  };
};

function getSectionHeadlines(body) {
  const regex = RegExp(/^[^\n\r]*subPageHeadline ([^\n\r]*)$/, 'gm');
  const headlines = [];
  let matches;

  while ((matches = regex.exec(body)) !== null) {
    if (matches.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    const obj = fromBlock(matches);
    headlines.push({
      headline: obj.headline,
      slug: urlSlug(obj.headline),
    });
  }

  return headlines;
}

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
        if (isOpen) {
          setIsOpen(false);
        }
      }
    }
  };

  return (
    <nav className={`Navigation${isOpen ? ' Navigation--isOpen' : ''}`}>
      <button onClick={() => setIsOpen(false)} className="Navigation__close">
        <CloseIcon />
      </button>

      <div className="Navigation__wrapper">
        <Link to="/" className="Navigation__link" activeClassName="Navigation__link--active">Startseite</Link>
        {items.map(({ node }) => {
          const sections = getSectionHeadlines(node.rawMarkdownBody);
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
