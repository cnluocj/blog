import blog from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "luocj",
  title: "Blog",
  description: "The blog description.",
  avatar: "https://deno-avatar.deno.dev/avatar/83a531.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "cnluocj@gmail.com" },
    { title: "GitHub", url: "https://github.com/cnluocj" },
  ],
  lang: "zh",
});
