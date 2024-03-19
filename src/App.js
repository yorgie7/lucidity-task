import InventoryPage from './container/InventoryPage';
import './App.css';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <InventoryPage />
    </ErrorBoundary>
  );
}

export default App;
