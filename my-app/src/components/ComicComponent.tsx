import { useEffect, useState } from 'react';
import { fetchComicId, fetchComicData } from '../api/comicApi';
import { Comic } from '../types';
import { formatDistanceToNow } from 'date-fns';

function ComicComponent() {
  const [comic, setComic] = useState<Comic | null>(null);
  const email = 't.farizunov@innopolis.university';

  useEffect(() => {
    const getComic = async () => {
      try {
        const id = await fetchComicId(email);
        const comicData = await fetchComicData(id);
        setComic(comicData);
      } catch (error) {
        console.error('Error fetching comic:', error);
      }
    };

    getComic();
  }, [email]);

  return (
    <div className="comic">
      {comic ? (
        <>
          <h1 className="comic__title">{comic.safe_title}</h1>
          <img className="comic__img" src={comic.img} alt={comic.alt} />
          <div className="comic__content">{comic.transcript}</div>
          <p className="comic__date">
            Published: {new Date(`${comic.year}-${comic.month}-${comic.day}`).toLocaleDateString()} (
            {formatDistanceToNow(
              new Date(`${comic.year}-${comic.month}-${comic.day}`),
              { addSuffix: true }
            )}
            )
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ComicComponent;

