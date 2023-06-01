import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import Error404 from "../pages/Error404";
//import {ClientLayout} from "../layouts"
import { BasicLayout } from "../layouts";

const routes = [...routesClient, ...routesAdmin, {
        path: "*",
        layout: BasicLayout,
        component:Error404
}]

export default routes;