This is a next js project created by nirbhayfr/github.

## Getting Started

First, run the development server:

installing dependencies

```bash
npm install

#run
npm run dev
```

Filtering includes filtering the data fetched using react query based on minimum price, maximum price, photography styles, rating and place.

Three sorting methods are present, price: low to high , rating; high to low and recently added.

The search takes a string as an input and renders photographers if the keyword is found in the data so avoid using very common words like in, a, the etc.

The application is a mix of server side rendering and client side rendering but it is mostly using CSR because the project required a lot of re-renders based on state updates.

Tech Stack: Nextjs, Reactjs, React Icons, Redux js toolkit, Tailwind CSS.

There are not a lot of re-renders that affect the optimization of the page so there is no use of optimizing techniques in the project.

Could have used .env.local for the api url but it is just a dummy api so it has been left as it is for conserving time.
