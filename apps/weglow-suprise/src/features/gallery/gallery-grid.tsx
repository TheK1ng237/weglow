'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './gallery-grid.module.css';

const filters = [
  'Tout',
  'Anniversaires',
  'Mariages',
  'Baby shower',
  'Romantique',
  'Cadeaux',
] as const;

type GalleryFilter = (typeof filters)[number];

const inspirations: {
  title: string;
  category: Exclude<GalleryFilter, 'Tout'>;
  image: string;
  alt: string;
}[] = [
  {
    title: 'Un coffret préparé pour une belle surprise',
    category: 'Cadeaux',
    image: '/images/maquette/surprise-galerie-00.jpg',
    alt: 'Coffret cadeau bordeaux dans une ambiance tamisée',
  },
  {
    title: 'Un anniversaire haut en couleur',
    category: 'Anniversaires',
    image: '/images/maquette/surprise-galerie-01.jpg',
    alt: 'Enfant célébrant son anniversaire entourée de ballons colorés',
  },
  {
    title: 'Une célébration à deux',
    category: 'Romantique',
    image: '/images/maquette/surprise-galerie-02.jpg',
    alt: 'Couple partageant un moment de célébration',
  },
  {
    title: 'Une réception habillée avec soin',
    category: 'Mariages',
    image: '/images/maquette/surprise-galerie-03.jpg',
    alt: 'Salle de réception préparée pour un mariage',
  },
  {
    title: 'Un décor floral pour les mariés',
    category: 'Mariages',
    image: '/images/maquette/surprise-galerie-04.jpg',
    alt: 'Couple sous une arche fleurie pendant une cérémonie',
  },
  {
    title: 'Une baby shower tout en douceur',
    category: 'Baby shower',
    image: '/images/maquette/surprise-galerie-05.jpg',
    alt: 'Décoration de baby shower dans des tons doux',
  },
  {
    title: 'Une soirée imaginée pour deux',
    category: 'Romantique',
    image: '/images/maquette/surprise-galerie-06.jpg',
    alt: 'Dîner romantique préparé à la lumière des bougies',
  },
  {
    title: 'Un bouquet de roses blanches',
    category: 'Cadeaux',
    image: '/images/maquette/surprise-galerie-07.jpg',
    alt: 'Bouquet de roses blanches emballé dans un papier sombre',
  },
  {
    title: 'Une composition florale rouge',
    category: 'Cadeaux',
    image: '/images/maquette/surprise-galerie-08.jpg',
    alt: 'Composition de roses rouges dans un vase',
  },
  {
    title: 'Un panier personnalisé',
    category: 'Cadeaux',
    image: '/images/maquette/surprise-galerie-09.jpg',
    alt: 'Panier garni de cadeaux et de produits choisis',
  },
  {
    title: 'Une box à partager',
    category: 'Cadeaux',
    image: '/images/maquette/surprise-galerie-10.jpg',
    alt: 'Coffret garni de gourmandises et de fleurs',
  },
  {
    title: 'Un coffret pour une attention particulière',
    category: 'Cadeaux',
    image: '/images/maquette/surprise-galerie-11.jpg',
    alt: 'Coffret en bois personnalisé présenté dans une ambiance chaleureuse',
  },
  {
    title: 'Les détails d’une table de fête',
    category: 'Mariages',
    image: '/images/maquette/surprise-galerie-12.jpg',
    alt: 'Table de réception ornée de fleurs et de bougies',
  },
];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('Tout');
  const visibleInspirations = inspirations.filter(
    (item) => activeFilter === 'Tout' || item.category === activeFilter,
  );

  return (
    <div>
      <div aria-label="Filtrer les inspirations" className={styles.filters} role="group">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={activeFilter === filter ? styles.activeFilter : ''}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      {visibleInspirations.length ? (
        <div className={styles.grid}>
          {visibleInspirations.map((item) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.image}>
                <Image
                  alt={item.alt}
                  fill
                  sizes="(max-width: 760px) 90vw, 33vw"
                  src={item.image}
                />
              </div>
              <div className={styles.caption}>
                <span>{item.category}</span>
                <h2>{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p aria-live="polite" className={styles.empty}>
          Les inspirations de cette catégorie seront ajoutées avec les photos
          des réalisations.
        </p>
      )}
    </div>
  );
}
