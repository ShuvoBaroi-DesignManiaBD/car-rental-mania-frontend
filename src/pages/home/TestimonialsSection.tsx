import DesignToken from "@/lib/providers/antDesign/DesignToken";
import { UserOutlined } from "@ant-design/icons";
import { Card, Carousel, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { FaQuoteLeft } from "react-icons/fa";


const testimonials = [
    {
      name: "John Doe",
      review:
        "The service was exceptional and the team went above and beyond to make sure I was satisfied.",
      avatar: <UserOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
    },
    {
      name: "Jane Smith",
      review:
        "Great quality and fantastic customer support. I highly recommend this company!",
      avatar: <UserOutlined style={{ fontSize: "40px", color: "#faad14" }} />,
    },
    {
      name: "Michael Johnson",
      review:
        "A truly professional team that delivers on their promises. I’m impressed with the results.",
      avatar: <UserOutlined style={{ fontSize: "40px", color: "#52c41a" }} />,
    },
    {
      name: "Sarah Brown",
      review:
        "The products exceeded my expectations and the delivery was quick and seamless.",
      avatar: <UserOutlined style={{ fontSize: "40px", color: "#f5222d" }} />,
    },
    {
      name: "Emma Wilson",
      review:
        "Their attention to detail and customer service is second to none. I would definitely work with them again.",
      avatar: <UserOutlined style={{ fontSize: "40px", color: "#722ed1" }} />,
    },
  ];

  
  
  
  const TestimonialsSection = () => {
      const customArrowStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: DesignToken()?.colorPrimary,
        padding: "16px",
        borderRadius: "50px",
        textAlign: "center",
      };
      const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <span
            className={className}
            style={{ ...style, ...customArrowStyle, left: "-30px",
              color: "#fff", }}
            onClick={onClick}
          />
        );
      };
      const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <span
            className={className}
            style={{
              ...style,
              ...customArrowStyle,
              right: "-30px",
              fontWeight: "700",
              color: "#fff",
            }}
            onClick={onClick}
          />
        );
      };
    return (
        <section className="pb-12 md:py-20  body-font">
        <div className="container mx-auto px-5">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Title level={2} className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Customer Reviews
            </Title>
            <Typography.Text className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Hear from our satisfied customers and see why we are the top
              choice for car rentals.
            </Typography.Text>
            <div className="flex justify-center mt-6">
              <span className="w-16 h-1 rounded-full bg-secondary inline-flex"></span>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-6xl mx-auto px-5">
            <Carousel
              autoplay
              dots={{ className: "custom-dots" }}
              slidesToShow={3}
              responsive={[
                { breakpoint: 768, settings: { slidesToShow: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 1440, settings: { slidesToShow: 3 } },
              ]}
              arrows
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <Card hoverable bordered={false} className="text-center">
                    <div className="mb-2">
                      <FaQuoteLeft
                        style={{
                          fontSize: "24px",
                          marginBottom: "-20px",
                          color: DesignToken()?.colorPrimary,
                        }}
                      />
                    </div>
                    <Title level={5} className="text-lg font-semibold mb-2">
                      {testimonial.name}
                    </Title>
                    <p className="leading-relaxed italic">
                      {testimonial.review}
                    </p>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    );
};

export default TestimonialsSection;