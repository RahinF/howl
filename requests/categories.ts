import { client } from '@/sanity/lib/client';

export const fetchCategories = async () => {
  const response: { _id: string; title: string }[] | [] = await client.fetch(
    `*[_type == "category"]{
              _id,
              title
           }`,
  );

  const categories = response.map((category) => ({
    label: category.title,
    value: category._id,
  }));

  return categories;
};
