import { RestaurantAPIProvider } from "./contextAPI/RestaurantAPI";
import { RootNavigation } from "./navigation";
export default function App() {
  return (
    <RestaurantAPIProvider>
        <RootNavigation/>
    </RestaurantAPIProvider>
  );
}
