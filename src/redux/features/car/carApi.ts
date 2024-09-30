import { baseAPI } from "@/redux/api/baseApi";

import { TCar } from "@/types/car.type";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentCars, setCars } from "./carSlice";

const carApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query<any, any>({
      query: ({ page = 1, limit = 6 }) => ({
        url: `cars?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      onQueryStarted: async ({ dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          const cars = useAppSelector(selectCurrentCars);
          !cars && dispatch(setCars(data.data as TCar[])); // Dispatch the action to save cars
        } catch (error) {
          console.error("Error fetching cars:", error);
        }
      },
      providesTags: ["cars"],
    }),
    getACar: builder.query<any, string>({
      query: (id) => ({
        url: `cars/${id}`,
        method: "GET",
      }),
    }),
    updateACar: builder.mutation<
      void,
      {
        carId: string;
        updatedCar: Partial<TCar | unknown>;
      }
    >({
      query: ({ carId, updatedCar }) => (
        console.log('update_query=>',updatedCar, carId),
        {
          url: `cars/update-car?carId=${carId}&type=car`,
          method: "PATCH",
          body: updatedCar,
        }
      ),
      invalidatesTags: ["cars"],
    }),
    deleteACar: builder.mutation<void, { id: string }>({
      query: (id) => ({
        url: `cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),
    AddACar: builder.mutation<void, {data: Partial<TCar | unknown>}>({
      query: ({data}) => (
        console.log(data),
        {
        url: `cars/create-car?type=car`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cars"],
    }),
  }),
});

export const {
  useGetAllCarsQuery,
  useGetACarQuery,
  useAddACarMutation,
  useDeleteACarMutation,
  useUpdateACarMutation,
} = carApi;
