import DesignToken from '@/lib/providers/antDesign/DesignToken';
import { HomeOutlined, RightOutlined, SwapRightOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';


const CustomBreadCumb = ({links}:any) => {
  const home = {
    href: "",
    title: (
      <>
        <HomeOutlined style={{color: DesignToken()?.colorText}} className="size-3"/>
        <span style={{color: DesignToken()?.colorText}}>Home</span>
      </>
    ),
  }
  const updatedLinks = [home,...links];
  return <Breadcrumb
    items={updatedLinks}
    separator={<SwapRightOutlined className="size-5" style={{color: DesignToken()?.colorText}}/>}
    className='font-medium text-sm'
  />
}

export default CustomBreadCumb;