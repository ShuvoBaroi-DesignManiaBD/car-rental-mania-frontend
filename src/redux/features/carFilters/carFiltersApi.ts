import { baseAPI } from "@/redux/api/baseApi";
import { setCars } from "../car/carSlice";
import { setCarsCount } from "./carFiltersSlice";
import { TCar } from "@/types/car.type";
import { FormValues } from "@/types/form.type";
;

const carApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    filterCars: builder.query<
      any,
      { queries: FormValues | null; page?: number; limit?: number }
    >({
      query: ({ queries = null, page = 1, limit = 6 }) => {
        if (queries !== null) {
          const { searchTerm, categories, priceRange, rating, sort } = queries;
          // Build query parameters
          const queryParams = new URLSearchParams();

          if (searchTerm) {
            queryParams.append("searchTerm", searchTerm);
          }

          if (categories && categories.length > 0) {
            queryParams.append("categories", categories.join(","));
          }

          if (
            priceRange &&
            typeof priceRange.minPrice !== "undefined" &&
            typeof priceRange.maxPrice !== "undefined"
          ) {
            queryParams.append("minPrice", priceRange.minPrice.toString());
            queryParams.append("maxPrice", priceRange.maxPrice.toString());
          }

          if (typeof rating !== "undefined" && rating !== null) {
            queryParams.append("ratings", rating.toString());
          }

          // Manually construct the sort parameter to prevent URL encoding
          if (sort) {
            const sortParams: string[] = [];

            if (sort.price) {
              sortParams.push(`price:${sort.price}`);
            }

            if (sort.rating) {
              sortParams.push(`ratings:${sort.rating}`);
            }

            if (sortParams.length > 0) {
              queryParams.append("sort", sortParams.join(","));
            }
          }

          queryParams.append("page", `${page}`);
          queryParams.append("limit", `${limit}`);
          const queryString = queryParams.toString().replace(/%3A/g, ":"); // Replace encoded colon with plain colon

          return {
            url: `cars?${queryString}`,
            method: "GET",
          };
        } else {
          return {
            url: `cars?page=${page}&limit=${limit}`,
            method: "GET",
          };
        }
      },
      onQueryStarted: async ({}, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCars(data.data as TCar[])); // Dispatch the action to save cars
          dispatch(setCarsCount(data?.totalCars as number)); // Dispatch the action to save the car count
        } catch (error) {
          console.error("Error fetching cars:", error);
        }
      },
    }),
  }),
});

export const { useFilterCarsQuery } = carApi;
