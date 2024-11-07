import React from "react";
import { Carousel, Button, Rate, Card, Typography } from "antd";
import {
  HeartOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { TCar } from "@/types/car.type";
import { NavLink } from "react-router-dom";
import DesignToken from "@/lib/providers/antDesign/DesignToken";

const CarCard = ({ car, isLoading=false,className='' }: { car: TCar , isLoading: boolean,className:string}) => {
  const carImages = [
    "/react/template/assets/img/cars/car-01.jpg",
    "/react/template/assets/img/cars/car-01-slide1.jpg",
    "/react/template/assets/img/cars/car-01-slide2.jpg",
    "/react/template/assets/img/cars/car-01-slide3.jpg",
  ];

  return (
    <Card className={`listing-item p-0 rounded-lg overflow-hidden ${className}`} hoverable loading={isLoading ? true : false}>
      <div className="listing-img relative">
        <Carousel autoplay>
          <div key={0}>
            <div className="slide-images">
            <NavLink to={`${car?._id}`}>
                <img
                  className="w-full h-auto"
                  src={car?.thumbnail}
                  alt="Toyota"
                />
              </NavLink>
            </div>
          </div>
          <div key={1}>
            <div className="slide-images">
            <NavLink to={`${car?._id}`}>
                <img
                  className="w-full h-auto"
                  src={car?.thumbnail}
                  alt="Toyota"
                />
              </NavLink>
            </div>
          </div>
          {/* {car?.images?.map((src, index) => (
            <div key={index}>
              <div className="slide-images">
                <a href="/react/template/listings/listing-details">
                  <img className="w-full h-auto" src={src} alt="Toyota" />
                </a>
              </div>
            </div>
          ))} */}
        </Carousel>
        <div className="fav-item absolute top-2 right-2 flex justify-end items-center">
          <span className="img-count flex items-center">
            <i className="feather icon-image mr-2"></i>04
          </span>
          <a href="/react/template/index" className="fav-icon ml-4">
            <HeartOutlined style={{ fontSize: "24px", color: DesignToken().colorPrimary }} />
          </a>
        </div>
        <span className="featured-text bg-danger absolute top-2 left-2 text-white px-2 py-1">
          Toyota
        </span>
      </div>

      <div className="listing-content mt-4">
        <div className="listing-features flex items-end justify-between">
          <div className="list-rating flex items-center">
            <div className="">
              <h3 className="listing-title text-lg font-bold">
                <a href="/react/template/listings/listing-details">
                  {car?.name}
                </a>
              </h3>
              <Rate allowHalf defaultValue={car?.customerReviews.reduce((a, b) => a + b.rating, 0) / car?.customerReviews.length} />{" "}
              <Typography.Text className="text-gray-500">(4.0) 138 Reviews</Typography.Text>
            </div>
          </div>
          <div className="list-km flex items-center">
            <EnvironmentOutlined className="mr-2" /> 3.2m
          </div>
        </div>

        <div className="listing-details-group grid grid-cols-2 gap-4 mt-4">
          <ul className="space-y-2">
            <li className="flex items-center">
              <img
                src="https://dreamsrent.dreamstechnologies.com/react/template/assets/img/icons/car-parts-05.svg"
                alt="Auto"
              />{" "}
              <p className="ml-2">Auto</p>
            </li>
            <li className="flex items-center">
              <img
                src="https://dreamsrent.dreamstechnologies.com/react/template/assets/img/icons/car-parts-02.svg"
                alt="10 KM"
              />{" "}
              <p className="ml-2">10 KM</p>
            </li>
            <li className="flex items-center">
              <img
                src="https://dreamsrent.dreamstechnologies.com/react/template/assets/img/icons/car-parts-03.svg"
                alt="Petrol"
              />{" "}
              <p className="ml-2">Petrol</p>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img
                src="https://dreamsrent.dreamstechnologies.com/react/template/assets/img/icons/car-parts-04.svg"
                alt="Power"
              />{" "}
              <p className="ml-2">Power</p>
            </li>
            <li className="flex items-center">
              <img
                src="https://dreamsrent.dreamstechnologies.com/react/template/assets/img/icons/car-parts-05.svg"
                alt="2018"
              />{" "}
              <p className="ml-2">2018</p>
            </li>
            <li className="flex items-center">
              <img
                src="https://dreamsrent.dreamstechnologies.com/react/template/assets/img/icons/car-parts-06.svg"
                alt="Persons"
              />{" "}
              <p className="ml-2">5 Persons</p>
            </li>
          </ul>
        </div>

        <div className="listing-location-details flex justify-between mt-4">
          <div className="listing-price flex items-center">
            <EnvironmentOutlined className="mr-2" /> Washington
          </div>
          <div className="listing-price">
            <Typography.Text className="text-lg font-semibold">
              ${car?.pricePerHour} <span className="text-sm text-gray-500">/ Day</span>
            </Typography.Text>
          </div>
        </div>

        <div className="listing-button mt-4">
          <Button
            type="primary"
            icon={<CalendarOutlined />}
            block
          >
            <NavLink to={`${car?._id}`}>Rent Now</NavLink>
          </Button>
        </div>
      </div>
      <Typography.Text className="!text-xs feature-text absolute top-3 -left-9 -rotate-45 bg-primary text-white px-2 py-1 rounded w-32 text-center">
        Featured
      </Typography.Text>
    </Card>
  );
};

export default CarCard;
