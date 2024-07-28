import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface MenuResponse {
  cardapio: CategoryItemType[]
}

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getCategoryBanner: builder.query<HomeItemType, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getCategoryProducts: builder.query<CategoryItemType[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: MenuResponse) => response.cardapio
    }),
    getHomeItems: builder.query<HomeItemType[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetCategoryBannerQuery,
  useGetCategoryProductsQuery,
  useGetHomeItemsQuery,
  usePurchaseMutation
} = api
export default api
