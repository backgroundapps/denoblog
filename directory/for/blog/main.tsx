/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Jon'Z",
  description: "Welcome to my letter lines.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://avatars.githubusercontent.com/u/576151",
  avatarClass: "rounded-full",
  author: "Jon'Z",
  links: [
    { title: "Email", url: "mailto:jonatasemidio@gmail.com" },
    { title: "GitHub", url: "https://github.com/jonatasemidio" },
    { title: "Twitter", url: "https://twitter.com/jonatasemidio" },
  ],

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
