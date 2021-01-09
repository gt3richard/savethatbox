import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Editor from "@/views/Editor";
import Category from "@/views/Category";
import Discover from "@/views/Discover";
import Doc from "@/views/Doc";
import Story from "@/views/Story";

Vue.use(Router);

export default new Router({
  mode: "history",
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
      path: "/story/",
      name: "Story",
      component: Story,
    },
    {
      path: "/story/:title",
      name: "Story",
      component: Story,
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
