import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Filter.scss';

const CATEGORYS = [
  'Breitensport',
  'Verein',
  'Allgemein',
];

function Filter({ categoryFilter, setCategoryFilter, searchQuery, setSearchQuery }) {
  return (
    <div className="Filter">
      <div className="Filter__search">
        <Input type="text" placeholder="Suche ..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div>
        {CATEGORYS.map((category) => (
          <Button
            key={category}
            secondary
            active={categoryFilter === category}
            onClick={() => setCategoryFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
