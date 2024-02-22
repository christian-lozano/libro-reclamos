import React, { useEffect, useRef } from 'react';
import { useInfiniteHits } from 'react-instantsearch';

export function InfiniteHits({ hitComponent: HitComponent, ...props }) {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  return (
    <div className="ais-InfiniteHits">
      <ul className="ais-InfiniteHits-list laptop:gap-5 gap-y-3 grid laptop:grid-cols-4 xl:grid-cols-3  grid-cols-2">
        {hits.map((hit) => (
          <li key={hit.objectID} className="ais-InfiniteHits-item">
            <HitComponent hit={hit} />
          </li>
        ))}
        <li
          className="ais-InfiniteHits-sentinel"
          ref={sentinelRef}
          aria-hidden="true"
        />
      </ul>
    </div>
  );
}
