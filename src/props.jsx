import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', width: '200px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      {imageUrl && <img src={imageUrl} alt={title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }} />}
      <h3 style={{ marginTop: '10px' }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CardList = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      imageUrl: '/vite.svg'
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      imageUrl: '/vite.svg'
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      imageUrl: '/vite.svg'
    },
    {
      title: 'Card 4',
      description: 'This is the description for card 4.',
      imageUrl: '/vite.svg'
    },
    {
      title: 'Card 5',
      description: 'This is the description for card 5.',
      imageUrl: '/vite.svg'
    },
    {
      title: 'Card 6',
      description: 'This is the description for card 6.',
      imageUrl: '/vite.svg'
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList;
