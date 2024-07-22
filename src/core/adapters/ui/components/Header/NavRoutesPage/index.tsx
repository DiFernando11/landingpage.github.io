import { fetchRouteItems } from '../../../../api/routePageApi';
import Anclaje from '../../Anclaje';

function NavRoutesPage() {
  const routesItems = fetchRouteItems();
  return (
    <ul className="d-flex justify-content-between gap-3 p-3 bg-red">
      {routesItems.map((item) => (
        <li className={`cursor-pointer list-unstyled ${!item.visible && 'd-none d-lg-block'}`} key={item.name}>
          <Anclaje className="nav-link active text-light">
            {item.name}
          </Anclaje>
        </li>
      ))}
    </ul>
  );
}

export default NavRoutesPage;
