import { boot } from "quasar/wrappers";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default boot(async ({ app }) => {
  app.use(pinia);

  const stores = await import("src/store/index");
  app.config.globalProperties.$piniaStores = stores;
});

export { pinia };
