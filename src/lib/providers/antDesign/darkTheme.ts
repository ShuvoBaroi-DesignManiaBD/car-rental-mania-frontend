import { theme } from "antd";

// Custom dark theme tokens based on the two primary colors: #E2460D and #FF8901
export const darkTheme = {
  // algorithm: theme.darkAlgorithm,
  token: {
    // -------- Primary Colors --------
    colorPrimary: "#E2460D", // Main primary color for buttons and active states
    colorPrimaryBg: "#FF8901", // Background for primary buttons and highlights
    colorPrimaryHover: "#FF8901", // Hover state for primary buttons
    colorPrimaryTextHover: "#FFFFFF", // Text color for primary buttons on hover
    colorPrimaryText: "#FFFFFF", // Text color for primary buttons
    colorLink: "#FF8901",

    // -------- Neutral Colors --------
    colorBgBase: "#1C1C1E", // Base background color for dark mode (Very dark gray)
    colorBgLayout: "#121212", // Layout background color for dark mode (Blackish-gray)
    colorText: "#E4E4E7", // Default text color for dark mode (Light gray)
    colorTextHeading: "#FF8901", // Primary color for headings in dark mode
    colorTextSecondary: "#A1A1AA", // Secondary text color (Grayish-white)
    colorBorder: "#636363", // Neutral border color for dark backgrounds (Dark gray)

    // -------- Backgrounds --------
    colorBgContainer: "#2D2D2F", // Container backgrounds (cards, modals, etc.)
    colorBgElevated: "#3A3A3C", // Elevated component backgrounds (hovered states)

    // -------- Custom Section Backgrounds --------
    homeHeroBg: "#E2460D", // Background for hero sections with the primary color
    heroBg: "#FF8901", // Alternative hero section background with the secondary color
    communitySectionBg: "#FF8901", // Community section background with the secondary color

    // -------- Success & Error Colors --------
    colorSuccess: "#4CAF50", // Success color (Green)
    colorError: "#F85149", // Error color (Red)

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
      colorPrimary: "#E2460D", // Primary button color
      colorPrimaryHover: "#FF8901", // Primary button hover color
      colorTextPrimary: "#FFFFFF", // Text color inside primary buttons
    },
    Layout: {
      headerBg: "#1C1C1E", // Header background color (Very dark gray)
      footerBg: "#1C1C1E", // Footer background color (Very dark gray)
    },
    Card: {
      borderColor: "#E2460D", // Border color for cards with primary color
      boxShadow: "0 4px 8px rgba(255, 137, 1, 0.2)", // Custom shadow with secondary color tint
    },
    Menu: {
      itemSelectedColor: "#E2460D", // Selected menu item background color
      itemActiveBg: "#FF8901", // Menu item active background with secondary color
    },
    Typography: {
      colorHeading: "#FF8901", // Primary color for headings
    },
  },
};
