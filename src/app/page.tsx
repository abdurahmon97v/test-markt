import { getProducts } from "@/service/query/get-products";
import Image from "next/image";

export default async function Home() {
  const data = await getProducts();

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div>
            <Image src={item.img} width={200} height={200} alt="lorem" />
          </div>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}
