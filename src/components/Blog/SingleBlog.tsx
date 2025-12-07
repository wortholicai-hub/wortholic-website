import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, publishDate } = blog;
  return (
    <div className="shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-md border bg-white duration-300">
      <Link href="/blog-details" className="relative block">
        <Image
          src={image}
          alt="image"
          width={400} // your custom width
          height={250} // your custom height
          className="object-cover"
        />
      </Link>

      <div className="p-2">
        <h3>
          <Link
            href="/blog-details"
            className="hover:text-primary dark:hover:text-primary mb-2 block text-lg font-semibold text-black dark:text-white line-clamp-2 h-[56px]"
          >
            {title}
          </Link>
        </h3>
        <p className="border-body-color/10 text-body-color mb-4 border-b pb-4 text-sm dark:border-white/10 line-clamp-3 h-[60px]">
          {paragraph}
        </p>
        <div className="flex items-center">
          <div className="border-body-color/10 mr-3 flex items-center border-r pr-3 dark:border-white/10">
            <div className="mr-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image src={author.image} alt="author" fill sizes="32px" />
              </div>
            </div>
            <div>
              <h4 className="text-dark mb-0.5 text-xs font-medium dark:text-white">
                By {author.name}
              </h4>
              <p className="text-body-color text-[10px]">
                {author.designation}
              </p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="text-dark mb-0.5 text-xs font-medium dark:text-white">
              Date
            </h4>
            <p className="text-body-color text-[10px]">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
