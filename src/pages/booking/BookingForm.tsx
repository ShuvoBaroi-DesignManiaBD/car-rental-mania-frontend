import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import DesignToken from '@/lib/providers/antDesign/DesignToken';

const BookingForm = () => {
  return (
    <div className="p-6 rounded-md shadow-md self-start" style={{backgroundColor: DesignToken().colorBgContainer, color: DesignToken().colorText,}}>
      {/* NID / Passport */}
      <Input
        placeholder="Enter your NID/Passport"
        className="mb-4"
      />
      
      {/* Driving License */}
      <Input
        placeholder="Enter your Driving License"
        className="mb-4"
      />

      {/* Additional Options */}
      <div className="my-4">
        <Checkbox>Include GPS</Checkbox>
        <Checkbox>Child Seat</Checkbox>
      </div>

      {/* Payment */}
      <Input
        placeholder="Credit Card Info"
        className="mb-4"
      />

      <Button type="primary" className="w-full">
        Confirm Booking
      </Button>
    </div>
  );
};

export default BookingForm;