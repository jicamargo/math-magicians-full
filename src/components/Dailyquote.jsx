// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '@/styles/dailyquote.module.css';
import { useState, useEffect } from 'react';

function Dailyquote() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const category = 'inspirational';
      const apiKey = 'Tsp1dK3i0tBVwfFRvOL65A==Z7UsUjDNLwOBXRHH';
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

      fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            setHasError(true);
          }
          return response.json();
        })
        .then((jsonData) => {
          setData(jsonData[0]);
        })
        .catch(() => {
          setHasError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  /* show error message with style ;) */
  if (hasError) {
    return (
      <section className={styles.dailyQuote}>
        <p className="quote">Error loading daily quote...</p>
      </section>
    );
  }

  /* show loading message with style ;) */
  if (loading) {
    return (
      <section className={styles.dailyQuote}>
        <p className="quote">Loading...</p>
      </section>
    );
  }

  return (
    <section className={styles.dailyQuote}>
      <p className={styles.titleQuote}>Daily Quote</p>
      <p className={styles.quote}>{data.quote}</p>
      <p className={styles.author}>{data.author}</p>
    </section>
  );
}

export default Dailyquote;
