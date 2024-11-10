This is a demo CRUD application built to help me learn how to use [Next.js](https://nextjs.org/).

[Here's a screen recording](https://www.youtube.com/watch?v=lhOlx8kOhZw)

## Notes
- This project was built using a PostgreSQL database with a single table called 'posts'.
    - `CREATE TABLE public.posts ( id SERIAL PRIMARY KEY, title VARCHAR(255), body VARCHAR(2047) );`
    - The environment variables used by the file `database.tsx` can be configured from the `.env` file.
- The CSS elements used for this project come from [NES.css](https://nostalgic-css.github.io/NES.css/).