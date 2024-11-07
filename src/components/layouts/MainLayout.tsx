import { Outlet, useNavigation } from "react-router-dom";
import { Layout, Spin, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import Header from "@/pages/shared/header/Header";
import Footer from "@/pages/shared/footer/Footer";
import CartDrawer from "../ui/drawers/CartDrawer";
import DesignToken from "@/lib/providers/antDesign/DesignToken";



const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state !== "idle";
  console.log(isLoading);
  
  return (
    <Layout style={{backgroundColor: DesignToken()?.colorBgBase}}>
      <Header />
      <Content className="bg-center bg-repeat">
        {isLoading ? (
          <>
            <div className="h-[80vh] mx-auto py-20 flex justify-center items-center">
              <Spin
                size="large"
                tip="Loading"
                className="text-secondary"
              />
            </div>
          </>
        ) : (
          <>
          <CartDrawer></CartDrawer>
          <Outlet />
          </>
        )}
      </Content>
      <Footer className="bg-secondary text-text text" />
    </Layout>
  );
};

export default MainLayout;
