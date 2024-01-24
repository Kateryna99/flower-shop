import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/MainPages/HomePage.vue";
import { useAuthStore } from "@/store/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
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
  },
  {
    path: '/login/:message?',
    name: 'LoginPage',
    component: () => import('../views/SettingsPages/LoginPage.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "page-not-found",
    component: () =>
      import( "../views/SettingsPages/PageNotFound.vue"),
    meta: {
      requiresAuth: false,
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  const isAuthenticated = authStore.getUser;

    if (!isAuthenticated) {
      try {
        await authStore.loginWithCredential();
      } catch (error) {
        console.error('Unable to log in with credential:', error);
        next({ name: 'LoginPage' });
        return;
      }
    }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });


  next();
});



export default router;
