import React from 'react';

const FooterCount = ({ getCount }) => {
  const count = getCount();
  const itemWord = count === 1 ? 'item' : 'items';

  return (
    <span>
      <strong>{count || 'No'}</strong> {itemWord} left
    </span>
  );
};

export default FooterCount;
