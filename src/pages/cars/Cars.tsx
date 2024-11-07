import CustomContainer from "@/components/layouts/CustomContainer";
import CustomBreadCumb from "@/components/ui/BreadCumb";
import CarCard from "@/components/ui/cards/CarCard";
import FilterSidebar from "@/components/ui/sidebars/FilterSidebar";
import DesignToken from "@/lib/providers/antDesign/DesignToken";
import { selectCurrentCars } from "@/redux/features/car/carSlice";
import { useFilterCarsQuery } from "@/redux/features/carFilters/carFiltersApi";
import {
  selectCarsCount,
  selectCurrentFilters,
  selectPage,
  selectPageSize,
  setPage,
  setPageSize,
} from "@/redux/features/carFilters/carFiltersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  Breadcrumb,
  Card,
  Empty,
  Pagination,
  Skeleton,
  Typography,
} from "antd";
import Title from "antd/es/typography/Title";
import { title } from "process";
import { useEffect } from "react";

const BreadCumbItems = [
  {
    title: "cars",
  },
];

const Cars = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectCurrentFilters);
  const currentPage = useAppSelector(selectPage);
  const pageSize = useAppSelector(selectPageSize);
  const { data, isLoading, isFetching, refetch } = useFilterCarsQuery({
    queries: (filters as any) || null,
    page: currentPage,
    limit: pageSize,
  });

  const cars = useAppSelector(selectCurrentCars);
  const carsCount = useAppSelector(selectCarsCount);
  console.log("data", cars);

  const handlePageChange = (page: number, newPageSize?: number) => {
    console.log(page, newPageSize);
    if (newPageSize && newPageSize !== pageSize) {
      dispatch(setPage(1));
      dispatch(setPageSize(newPageSize));
      // refetch();
    } else if (page && currentPage !== page) {
      dispatch(setPage(page));
      // dispatch(setProducts(products || []));
      // refetch();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 500);
  }, [currentPage, filters]);
  return (
    <div style={{
      backgroundColor: DesignToken().colorBgBase,
    }}>
      <section className="relative w-full py-3 border-t-4 border-secondary" style={{
              backgroundColor: DesignToken().colorPrimaryLight,
            }}>
        <div className="flex items-center justify-start max-w-screen-xl mx-auto">
          <div
            className="relative z-10 text-left"
          >
            {/* <Title className="!text-lg md:text-5xl font-bold mb-4">
              All Cars
            </Title> */}
            <CustomBreadCumb links={[{ title: "cars" }]} />
          </div>
        </div>
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      </section>
      <CustomContainer className="py-8 antialiased md:py-20">
        <div className="mx-auto container px-4 2xl:px-0">
          {/* Heading & Filters */}
          
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-6 items-start">
            <FilterSidebar />
            <div className="mb-4 grid justify-center gap-4 grid-cols-[repeat(autofit,_minmax(280px,_1fr))] sm:grid-cols-[repeat(3,_minmax(280px,_1fr))] sm:col-span-3 md:mb-8">
              {isLoading || isFetching ? (
                [...Array(pageSize)].map((_, index) => (
                  <Card
                    key={index}
                    style={{ width: "100%" }}
                    cover={<Skeleton.Image active={true} className="!w-full" />}
                  >
                    <Skeleton active className="col-span-4" />
                  </Card>
                ))
              ) : cars.length === 0 ? (
                <div className="h-[60vh] flex items-center justify-center col-span-full">
                  <Empty
                    imageStyle={{ width: "240px", height: "200px" }}
                    className=""
                  />
                </div>
              ) : (
                cars?.map((car) => <CarCard key={car?._id} car={car} />)
              )}
            </div>
          </div>

          <Pagination
            total={carsCount || 0}
            current={currentPage}
            onChange={handlePageChange}
            pageSize={pageSize}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `Total ${total} items`}
            className="col-span-4 mt-14 mx-auto flex justify-center"
            pageSizeOptions={["6", "9", "12", "18"]}
          />
        </div>
      </CustomContainer>
    </div>
  );
};

export default Cars;
