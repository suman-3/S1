import { tracks_type } from "@/interface";
import Image from "next/image";

function CategoryCard({ img, title, icon: Icon }: tracks_type) {
  return (
    <section className="relative grid min-h-[12rem] w-full overflow-hidden rounded-xl hover:shadow-xl">
      <Image
        width={768}
        height={768}
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 h-full w-full bg-black/70" />
      <div className="relative flex flex-col justify-between p-4">
        <Icon className="h-8 w-8 text-white" />
        <div>
          <h1 className="mb-1 text-white font-semibold">{title}</h1>
        </div>
      </div>
    </section>
  );
}
export default CategoryCard;

