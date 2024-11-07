import CustomContainer from '@/components/layouts/CustomContainer';
import ButtonWithSpinner from '@/components/ui/buttons/ButtonWithSpinner';
import CarCard from '@/components/ui/cards/CarCard';
import { useFilterCarsQuery } from '@/redux/features/carFilters/carFiltersApi';
import { TCar } from '@/types/car.type';
import { Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';

const FeaturedCars = () => {
  const { data, isLoading, isFetching, refetch } = useFilterCarsQuery({
    queries: null,
    page: 1,
    limit: 4,
  });
  const { data: featuredCars, isFetching: status } = useFilterCarsQuery({
    queries: null,
    page: 1,
    limit: 4,
  });
    return (
        <CustomContainer className="text-gray-600 body-font">
        <div className="flex flex-col container px-5 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-20">
            <Title level={2} className="mb-4">
              Featured Cars
            </Title>
            <Typography.Text className="">
              Browse our exclusive collection of top-rated vehicles. Rent with
              confidence from our high-quality selection.
            </Typography.Text>
            <div className="flex mt-6 justify-center">
              <span className="w-16 h-1 rounded-full bg-secondary inline-flex" />
            </div>
          </div>

          {/* Car Cards */}
          <div className="flex flex-wrap gap-5 justify-center items-center -mx-4 mb-10 -mt-4 md:space-y-0 px-4 md:px-0">
          {featuredCars?.data?.map((car:TCar) => (
            <CarCard
              key={car._id}
              car={car}
              isLoading={isFetching}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] flex-grow"
            />
          ))}
        </div>

          {/* View More Button */}
          <ButtonWithSpinner
            text="View more cars"
            className="mx-auto hover:text-white"
            url="/cars"
          />
        </div>
      </CustomContainer>
    );
};

export default FeaturedCars;