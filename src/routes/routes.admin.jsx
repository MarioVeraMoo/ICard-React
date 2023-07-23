import { AdminLayout } from "../layouts"
import { OrdersAdmin, UsersAdmin, CategoriesAdmin,ProductAdmin, TablesAdmin, TableDatailsAdmin } from "../pages/Admin"

const routesAdmin = [
    {
        path: "/Admin",
        layout: AdminLayout,
        component: OrdersAdmin,
    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UsersAdmin,
        exact: true,
    },
    {
        path: "/admin/categories",
        layout: AdminLayout,
        component: CategoriesAdmin,
        exact: true,
    },
    {
        path: "/admin/products",
        layout: AdminLayout,
        component: ProductAdmin,
        exact: true,
    },
    {
        path: "/admin/tables",
        layout: AdminLayout,
        component: TablesAdmin,
        exact: true,
    },
    {
        path: "/admin/table/:id",
        layout: AdminLayout,
        component: TableDatailsAdmin,
        exact: true,
    }

]

export default routesAdmin;