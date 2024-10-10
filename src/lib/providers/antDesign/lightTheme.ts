import { theme } from "antd";

// Light theme tokens based on the two primary colors: #E2460D and #FF8901
export const lightTheme = {
  // algorithm: theme.defaultAlgorithm,
  token: {
    // -------- Primary Colors --------
    colorPrimary: "#E2460D", // Main primary color for buttons, links, and active states
    colorPrimaryBg: "#FF8901", // Background for primary buttons and highlights
    colorPrimaryHover: "#FF8901", // Hover state for primary buttons
    colorPrimaryTextHover: "#FFFFFF", // Text color for primary buttons on hover
    colorPrimaryText: "#FFFFFF", // Text color for primary buttons

    // -------- Neutral Colors --------
    colorBgBase: "#F8FAFC", // Base background color
    colorBgLayout: "#F8FAFC", // Layout background
    colorText: "#1F2937", // Default text color (Dark Gray)
    colorTextHeading: "#E2460D", // Primary color for headings
    colorTextSecondary: "#4B5563", // Secondary text color
    colorBorder: "#D1D5DB", // Neutral border color
    colorLink: "#FF8901",

    // -------- Backgrounds --------
    colorBgContainer: "#FFFFFF", // Container backgrounds (cards, modals, etc.)
    colorBgElevated: "#F9FAFB", // Elevated component backgrounds (hovered states)

    // -------- Custom Section Backgrounds --------
    homeHeroBg: "#FF8901", // Background for hero sections
    heroBg: "#FF8901", // Alternative hero section background
    communitySectionBg: "#E2460D", // Community section background with primary color

    // -------- Success & Error Colors --------
    colorSuccess: "#4CAF50", // Success color
    colorError: "#F85149", // Error color

    // -------- Typography --------
    fontFamily: "Inter, sans-serif", // Font family for the entire app

    // Base Font Sizes
    fontSize: 16, // Default font size for body text
    fontSizeSM: 14, // Small text size
    fontSizeLG: 18, // Large text size
    fontSizeXL: 20, // Extra-large text size

    // Heading Font Sizes
    fontSizeHeading1: 40, // H1
    fontSizeHeading2: 32, // H2
    fontSizeHeading3: 28, // H3
    fontSizeHeading4: 24, // H4
    fontSizeHeading5: 20, // H5
    fontSizeHeading6: 16, // H6

    // Line Heights for Headings
    lineHeightHeading1: 1.3,
    lineHeightHeading2: 1.4,
    lineHeightHeading3: 1.4,
    lineHeightHeading4: 1.5,
    lineHeightHeading5: 1.5,
    lineHeightHeading6: 1.6,

    // Font Weights
    fontWeightBase: 400, // Base font weight for regular text
    fontWeightHeading: 600, // Font weight for headings

    // Button Heights
    controlHeightSM: 32, // Small button height
    controlHeightLG: 48, // Large button height
    controlHeight: 40, // Default button height

    // Typography-specific adjustments
    titleFontWeight: 700, // Font weight for titles
    headingFontWeight: 800, // Font weight for heading tags
  },
  components: {
    Button: {
      colorPrimary: "#E2460D", // Button primary color
      colorPrimaryHover: "#FF8901", // Button primary hover color
      colorTextPrimary: "#FFFFFF", // Text color inside primary buttons
    },
    Layout: {
      headerBg: "#FFFFFF", // Header background color
      footerBg: "#FFFFFF", // Footer background color
    },
    Card: {
      borderColor: "#E2460D", // Border color for cards
      boxShadow: "0 4px 8px rgba(226, 70, 13, 0.2)", // Custom shadow with primary color tint
    },
    Menu: {
      itemSelectedColor: "#FF8901", // Selected menu item background color
      itemActiveBg: "#FFE7CC", // Menu item active background with a lighter tint
    },
    Typography: {
      colorHeading: "#E2460D", // Primary color for headings
    },
  },
};
