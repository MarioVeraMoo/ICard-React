import { AdminLayout } from "../layouts"
import { HomeAdmin } from "../pages/Admin"

const routesAdmin = [
    {
        path: "/Admin",
        layout: AdminLayout,
        component: HomeAdmin,
    },

]

export default routesAdmin;