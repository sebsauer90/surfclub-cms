import React from 'react';
import { Link } from 'gatsby';
import './Navigation.scss';
import { getSectionHeadlines } from '../../cms/customBlocks';
import CloseIcon from '../Icons/CloseIcon';

function Navigation({ isOpen, setIsOpen, items }) {
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
            <div className="Navigation__item">
              <Link
                key={node.id}
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
                        <li className="SubNavigation__item">
                          <a  className="SubNavigation__link" href={`${node.fields.slug}#${slug}`}>{headline}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;
