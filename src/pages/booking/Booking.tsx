import React from 'react';
import { useParams } from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import CarDetails from './CarDetails';
import BookingForm from './BookingForm';
import { useGetACarQuery } from '@/redux/features/car/carApi';
import LoadingSpin from '@/components/ui/spinners/LoadingSpin';
import CustomContainer from '@/components/layouts/CustomContainer';

const Booking = () => {
  const { carId } = useParams<{ carId: string }>();
  console.log(carId);
  
  const { data, isLoading, isFetching } = useGetACarQuery(carId || "");
  console.log(data);

  if (isLoading || isFetching) {
    return <LoadingSpin></LoadingSpin>;
  }

  if (!data) {
    return <p>Product not found.</p>;
  }
  // You can manage the display of components with states, e.g., based on search results, car selection, and form submission.
  return (
    <CustomContainer className="flex flex-col justify-center gap-8">
      <SearchForm />
      <div className="flex gap-8">

      <div className='flex flex-col gap-8'>
      {/* Search Form */}

      {/* Search Results */}
      {/* <SearchResults /> */}

      {/* Car Details */}
      {/* You can pass selected car data here */}
      <CarDetails car={data?.data} />
      </div>

      {/* Booking Form */}
      <BookingForm />
      </div>
    </CustomContainer>
  );
};

export default Booking;
