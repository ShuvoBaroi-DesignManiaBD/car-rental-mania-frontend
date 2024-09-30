export interface TBooking {
  date: Date;
  user: string ; // reference to user model
  car: string; // reference to car model
  startTime: string; // in 24hr format
  endTime: string | null; // in 24hr format
  totalCost: number; 
}

export interface TBookingInitial {
  date: Date;
  carId: string;
  startTime: string;
}
