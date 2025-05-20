import { Product } from "~/utils/dataType";
const products: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
  },
];

export default defineEventHandler(async (event) => {  
  return {
    id: event.context.auth.id,
    user: event.context.auth.user,
    count: (+event.context.auth.id)+(+event.context.auth.user),
    products,
  };
});
