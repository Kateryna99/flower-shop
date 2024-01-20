import { createRouter, createWebHistory } from "vue-router";
//import informationView from "@/views/MainPages/cart/InformationView";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('../views/MainPages/HomePage.vue')
  },
  {
    path: '/our-story',
    name: 'OurStoryPage',
    component: () => import('../views/MainPages/OurStoryPage.vue')
  },
  {
    path: '/shop',
    name: 'ShopPage',
    component: () => import('../views/MainPages/ShopPage.vue')
  },
  {
    path: '/flower-subscription',
    name: 'FlowerSubscriptionPage',
    component: () => import('../views/MainPages/FlowerSubscriptionPage.vue')
  },
  {
    path: '/category/:category',
    name: 'CategoryPage',
    component: () => import('../views/MainPages/CategoryPage.vue')
  },
  {
    path: '/product-collection/:productSubtitle/:productId',
    name: 'ProductPage',
    component: () => import('../views/MainPages/ProductPage.vue')
  },
  {
    path: '/cart',
    name: 'CartPage',
    redirect: '/cart/information',
    component: () => import('../views/MainPages/CartPage.vue'),
    children: [
      {
        path:'information',
        name: 'CartInfo',
        component: () => import('../views/MainPages/cart/InformationView.vue'),
      },
      {
        path: 'payment',
        name: 'CartPayment',
        component: () => import('../views/MainPages/cart/PaymentView.vue')
      },
      {
        path: 'shipping',
        name: 'CartShipping',
        component: () => import('../views/MainPages/cart/ShippingView.vue')
      }
    ]
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
