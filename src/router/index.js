import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Editor from "@/views/Editor";
import Category from "@/views/Category";
import Discover from "@/views/Discover";
import Doc from "@/views/Doc";
import Blog from "@/views/Blog";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/editor/:type",
      name: "Editor",
      component: Editor,
      props: true,
    },
    {
      path: "/category/:category",
      name: "Category",
      component: Category,
      props: true,
    },
    {
      path: "/discover/:title",
      name: "Discover",
      component: Discover,
      props: true,
    },
    {
      path: "/doc/:page",
      name: "Doc",
      component: Doc,
      props: true,
    },
    {
      path: "/blog/",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/blog/:title",
      name: "Blog",
      component: Blog,
      props: true,
    },
    {
      path: "*",
      name: "Home",
      component: Home,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
