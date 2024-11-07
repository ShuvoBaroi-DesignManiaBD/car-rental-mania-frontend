import DesignToken from "@/lib/providers/antDesign/DesignToken";
import { CarOutlined, CustomerServiceOutlined, DollarOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";

const WhyChoseUs = () => {
    return (
        <div className="py-20" style={{ backgroundColor: "#f5710514" }}>
        <div className="container mx-auto text-center">
          {/* Section Title */}
          <Typography.Title level={2} className="font-semibold mb-4 text-gray-900">
            Why Choose Us?
          </Typography.Title>
          <Typography.Text className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-8 block">
            Experience exceptional car rental services with the best prices, a
            wide range of vehicles, and reliable support.
          </Typography.Text>

          {/* Horizontal Separator */}
          <div className="flex justify-center mb-12">
            <span className="w-16 h-1 rounded-full bg-secondary inline-flex"></span>
          </div>

          {/* Cards with unique selling points */}
          <div className="flex flex-wrap justify-center gap-5">
            {/* Best Prices */}
            <Card
              className="w-full sm:w-[30%] hover:shadow-lg transition-shadow duration-300"
              hoverable
              bordered={false}
            >
              <DollarOutlined
                style={{ fontSize: "48px", color: DesignToken()?.colorPrimary }}
                className="mb-4"
              />
              <Typography.Title level={4}>Best Prices</Typography.Title>
              <Typography.Text className="">
                Enjoy unbeatable prices that fit your budget without
                compromising on quality or service.
              </Typography.Text>
            </Card>

            {/* Wide Selection */}
            <Card
              className="w-full sm:w-[30%] hover:shadow-lg transition-shadow duration-300"
              hoverable
              bordered={false}
            >
              <CarOutlined
                style={{ fontSize: "48px", color: DesignToken()?.colorPrimary }}
                className="mb-4"
              />
              <Typography.Title level={4}>Wide Selection</Typography.Title>
              <Typography.Text className="">
                Choose from a wide variety of cars—from economy to luxury—to
                suit your travel needs.
              </Typography.Text>
            </Card>

            {/* 24/7 Support */}
            <Card
              className="w-full sm:w-[30%] hover:shadow-lg transition-shadow duration-300"
              hoverable
              bordered={false}
            >
              <CustomerServiceOutlined
                style={{ fontSize: "48px", color: DesignToken()?.colorPrimary }}
                className="mb-4"
              />
              <Typography.Title level={4}>24/7 Support</Typography.Title>
              <Typography.Text className="">
                Get assistance anytime with our 24/7 customer support for a
                hassle-free rental experience.
              </Typography.Text>
            </Card>
          </div>
        </div>
      </div>
    );
};

export default WhyChoseUs;