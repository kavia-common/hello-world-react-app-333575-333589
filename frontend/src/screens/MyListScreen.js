import React from 'react';
import { useDetail } from '../context/DetailContext';
import { myListContent } from '../data/content';

/**
 * MyListScreen - Displays the user's saved content list in a 2-column grid.
 */

// PUBLIC_INTERFACE
function MyListScreen() {
  /** Renders the "My List" screen with a 2-column portrait grid of saved content. */
  const { showDetail } = useDetail();

  return (
    <div id="screen-mylist" className="page mylist-screen" role="main">
      <h1 className="mylist-screen__title">My List</h1>
      <div className="mylist-grid" role="list">
        {myListContent.map((item) => (
          <div
            key={item.id}
            className="mylist-card"
            onClick={() => showDetail(item.title, item.detailMeta, item.desc, item.colorClass)}
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') showDetail(item.title, item.detailMeta, item.desc, item.colorClass); }}
            aria-label={item.title}
          >
            <div className={item.colorClass} style={{ width: '100%', height: '100%' }} aria-hidden="true" />
            <div className="mylist-card__overlay">
              <div className="mylist-card__title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyListScreen;
