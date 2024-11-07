import { CgArrowLongRight } from "react-icons/cg";
import CarouselCTA from "@/components/ui/callToActions/CarouselCTA";
import ThemeConfig from "@/configs/ThemeConfig";
import { Button, Card, Carousel, Collapse, Layout, Typography,GlobalToken, theme } from "antd";
import SiteMeta from "@/components/seo/SiteMeta";
import ButtonWithSpinner from "@/components/ui/buttons/ButtonWithSpinner";
import { Navigate, NavLink } from "react-router-dom";
import CustomContainer from "@/components/layouts/CustomContainer";
import Icon, {
  CaretRightOutlined,
  CarOutlined,
  CustomerServiceOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import {
  UserOutlined,
  LeftOutlined,
  RightOutlined,
  QuoteLeftOutlined,
} from "@ant-design/icons";
import { FaQuoteLeft } from "react-icons/fa";
import Title from "antd/es/typography/Title";
import DesignToken from "@/lib/providers/antDesign/DesignToken";
import Hero from "./Hero";
import FeaturedCars from "./FeaturedCars";
import WhyChoseUs from "./WhyChoseUs";
import TestimonialsSection from "./TestimonialsSection";


const { Panel } = Collapse;

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all our products. If you're not satisfied, you can return the item within 30 days of purchase for a full refund.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You will receive a tracking number via email once your order has shipped. You can use it to track your order on our website or on the courier's website.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 100 countries worldwide. Shipping fees and delivery times will vary depending on your location.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Absolutely! We offer customization options for certain products. Contact our support team to discuss your specific requirements.",
  },
  {
    question: "How do I make a bulk purchase?",
    answer:
      "For bulk purchases, please reach out to our sales team at sales@example.com to discuss pricing and availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for large orders. Please select your preferred payment method at checkout.",
  },
];

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




const Home = () => {
  const {token} = theme.useToken();

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <span
        className={className}
        style={{ ...style, ...customArrowStyle, left: "-30px",backgroundColor: DesignToken()?.colorPrimary,
          borderColor: DesignToken()?.colorPrimary,
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
          backgroundColor: DesignToken()?.colorPrimary,
          borderColor: DesignToken()?.colorPrimary,
          color: "#fff",
        }}
        onClick={onClick}
      />
    );
  };
  // const { data, isLoading, isFetching, refetch } = useFilterProductsQuery({
  //   queries: null,
  //   page: 1,
  //   limit: 4,
  // });
  // const { data: bestProducts, isFetching: status } = useFilterProductsQuery({
  //   queries: { rating: 5 },
  //   page: 1,
  //   limit: 4,
  // });
  // console.log(isFetching);

  // const handleScroll = () => {
  //   const nextSection = document.getElementById("discover");

  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <Layout className="w-full bg-center bg-repeat overflow-hidden">
      <SiteMeta tagLine="Elevate Your Car Rental Experience"></SiteMeta>
      {/* Hero Section */}
      <Hero></Hero>
      
      {/* Featured Cars Section */}
      <FeaturedCars></FeaturedCars>

      {/* Why choose us  */}
      <WhyChoseUs></WhyChoseUs>

      {/* Testimonials Section */}
      <TestimonialsSection></TestimonialsSection>
      
    </Layout>
  );
};

export default Home;
