import React from 'react';
import { Link } from 'gatsby';
import './Navigation.scss';
import { getSectionHeadlines } from '../../cms/customBlocks';

function Navigation({ items }) {
  return (
    <nav className="Navigation">
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
                      <li>
                        <a href={`${node.fields.slug}#${slug}`}>{headline}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Navigation;
