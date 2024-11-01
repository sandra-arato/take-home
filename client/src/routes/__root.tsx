import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="font-light">
              <Link to="/">Home</Link>{' '}
            </NavigationMenuItem>
            <NavigationMenuItem className="font-light">
              <Link to="/transactions">Transactions</Link>{' '}
            </NavigationMenuItem>
            <NavigationMenuItem className="font-light">
              <Link to="/spending">Spending</Link>{' '}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})
