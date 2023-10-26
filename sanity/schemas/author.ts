import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      hidden: false,
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'username',
      media: 'avatar',
    },
  },
});
