import CustomContainer from "@/components/layouts/CustomContainer";
import { Button, Typography } from "antd";
import Title from "antd/es/typography/Title";

const Hero = () => {
    return (
      <div className="hero pt-16">
      <CustomContainer className="flex items-center justify-between h-[70vh]">
        <div className="flex flex-col justify-center items-start self-start w-4/5">
          <Title className="!text-[44px]">
            Rent a car effortlessly—find, book, and drive with ease!
          </Title>

          <Typography.Text className="text-lg mb-10">
            Simplify your car rental process with quick bookings and flexible
            options tailored to your needs.
          </Typography.Text>

          <Button title="Book Now" type="primary">
            Explore Cars
          </Button>
        </div>
        <div className="hero__image-container">
          <div className="hero__image content-center">
            <img src="/hero.webp" alt="hero" className="object-contain" />
          </div>
        </div>
      </CustomContainer>

      <img src="/hero-bg.webp" className="hero__image-overlay" />
    </div>
    );
};

export default Hero;