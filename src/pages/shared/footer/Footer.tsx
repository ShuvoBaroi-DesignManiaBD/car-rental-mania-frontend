import { Divider, Layout, theme, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useAppSelector } from "@/redux/hooks";
import { FacebookFilled, GithubFilled, InstagramFilled, InstagramOutlined, LinkedinFilled, TwitterOutlined } from "@ant-design/icons";
import Logo from "@/components/ui/Logo";
import { NavLink } from "react-router-dom";
import { selectCurrentTheme } from "@/redux/features/theme/themeSlice";

const { Footer:FooterPart } = Layout;
const Footer = ({ className }: {className?:string}) => {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const isDark = currentTheme === "dark";
    const {
      token
    } = theme.useToken();
  
  return (
    <FooterPart className={`${className} border-t`} style={{backgroundColor: token?.colorBgContainer, borderColor: token?.colorBorder}}>
      <div className="container max-w-screen-xl mx-auto text-text text-center sm:text-left pt-20">
        <div className="mx-auto">
          {/* =========== Top Part =========== */}
          <div className="grid grid-cols-1 justify-items-center sm:justify-items-start sm:grid-cols-8 sm:gap-4 sm:justify-between sm:items-stretch pb-20">
            <div className="sm:max-w-[60%] md:max-w-[70%] mb-20 sm:mb-0 sm:col-span-4 sm:pr-20 space-y-6">
              <Logo className="!mb-5 m-auto sm:m-0 h-7"></Logo>
              <Typography.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa officia dolores ab autem. Animi dolorum tempore sed dignissimos praesentium quidem magnam</Typography.Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 sm:col-span-4">
              <div>
                <Title level={5} className="!mb-5 !text-base font-semibold uppercase">
                  Quick Links
                </Title>
                <ul>
                  <li className="mb-4">
                    <NavLink
                      to="/"
                    >
                      <Typography style={{color:!isDark ? token.colorText:'', fontWeight:400}}>Home</Typography>
                      
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                    >
                       <Typography style={{color:!isDark ? token.colorText:'', fontWeight:400}}>About</Typography>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
              <Title level={5} className="!mb-5 !text-base font-semibold uppercase">
              Follow us
                </Title>
                <ul className="">
                  <li className="mb-4">
                    <NavLink
                      to="/"
                    >
                       <Typography style={{color:!isDark ? token.colorText:'', fontWeight:400}}>Github</Typography>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                    >
                       <Typography style={{color:!isDark ? token.colorText:'', fontWeight:400}}>Discord</Typography>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
              <Title level={5} className="!mb-5 !text-base font-semibold uppercase">Legal</Title>
                <ul className="">
                  <li className="mb-4">
                    <NavLink
                      to="/"
                    >
                       <Typography style={{color:!isDark ? token.colorText:'', fontWeight:400}}>Privacy Policy</Typography>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                    >
                       <Typography style={{color:!isDark ? token.colorText:'', fontWeight:400}}>Terms &amp; Conditions</Typography>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Divider />
          {/* =========== Bottom Part ============ */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <Typography.Text className="text-sm sm:text-center">
              Copyright
              © {new Date(Date.now()).getFullYear()}{" "}
              <NavLink
                to="/"
              >
                Tech Mania
              </NavLink>
              . All Rights Reserved.
            </Typography.Text>
            <div className="flex mt-4 space-x-6 justify-center sm:mt-0" style={{backgroundColor: token?.colorBgContainer, borderColor: token?.colorText}}>
              <NavLink
                to="/"
              >
                <FacebookFilled style={{color: token?.colorText}}></FacebookFilled>
              </NavLink>
              <NavLink
                to="/"
              >
                <InstagramOutlined style={{color: token?.colorText}}></InstagramOutlined>
              </NavLink>
              <NavLink
                to="/"
              >
                <TwitterOutlined style={{color: token?.colorText}}></TwitterOutlined>
              </NavLink>
              <NavLink
                to="/"
              >
                <GithubFilled style={{color: token?.colorText}}></GithubFilled>
              </NavLink>
              <NavLink
                to="/"
              >
                <LinkedinFilled style={{color: token?.colorText}}></LinkedinFilled>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </FooterPart>
  );
};

export default Footer;
