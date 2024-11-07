import React from 'react';
import { Card, Button } from 'antd';

const carData = [
  {
    id: 1,
    name: 'SUV - Toyota Highlander',
    description: 'Spacious 7-seater SUV',
    image: 'path_to_image.jpg',
    price: '$100/day'
  },
  {
    id: 2,
    name: 'Luxury - Mercedes S-Class',
    description: 'Top-tier luxury vehicle',
    image: 'path_to_image.jpg',
    price: '$200/day'
  }
];

const SearchResults = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {carData.map((car) => (
        <Card
          key={car.id}
          className="shadow-lg"
          cover={<img alt={car.name} src={car.image} />}
        >
          <h2 className="text-lg font-bold">{car.name}</h2>
          <p>{car.description}</p>
          <p className="text-blue-600 font-bold">{car.price}</p>
          <Button type="primary" className="bg-blue-600">
            Book Now
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default SearchResults;
