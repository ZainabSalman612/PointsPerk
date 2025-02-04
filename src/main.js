import app from "./config/configApp";
import router from "./routes/protectedRoute";
import store from "@/vuex/store";
import "./static/css/style.css";
import MazUIPlugin from "./config/maz-ui/maz-ui-plugin";
// Vue 3rd party plugins
import "@/core/plugins/ant-design";
import "@/core/plugins/fonts";
import "@/core/plugins/unicons";
import "@/core/components/custom";
import "@/core/components/style";
import "@/i18n/config";

app.config.productionTip = false;
app.use(store);
app.use(router);
app.use(MazUIPlugin);
app.mount("#app");
