**Learnings 1**

1. Server Components 

Learn about Next.js server component: The Server Components in Next.js allow you to write code that runs on the server-side, and the results are sent to the client. This can be particularly useful for parts of your page that do not need client-side interactivity and can be rendered once per request on the server. It can lead to better performance and less load on the client.

2. Client Components

Next.js Client Components are the part of the application that runs on the client side. Unlike Server Components, these can interact with the users' input, manage states, and be updated on the client side without requiring a server roundtrip. They are perfect for interactive parts of the page like forms or modals. They can be written using traditional React techniques and can be mixed with Server Components to build a complete application.\

3. App Routing

Next.js has a file-based routing system where files under the `pages` directory become routes in the application. For example, a file named `about.js` in the `pages` directory would be accessible at `yourwebsite.com/about`.

4. Dynamic Routing

Next.js supports dynamic routes, which are routes that depend on specific pieces of data. This is useful for parts of your application that display different content based on identifiers such as a unique ID, name, or other parameters. For example, a blog might use dynamic routing to display different posts. To create a dynamic route, you simply create a file in the `pages` directory with square brackets in the name, like `[id].js`. This file will then be used to render pages that match that pattern, and the value inside the brackets will be available inside your component as a parameter.

**Learnings 2**

1.  how to change title metadata using params
    1. {params.post.split('%20').join(" ")} used split and change the text with whitespace  
2. use of “use client””
    1. cant use react hooks without specifying client component in server component rendering
3. use of react - toastify 
    1. npm react-toastify
4. use of **Tailwind CSS Table - Flowbite**
5. use of event of window as parameter
    1. e.target.value; , [e.target.name](http://e.target.name/); , e.preventDefault();
6. implementing to take input value of form in useState hook