import { AppShell } from '@mantine/core';
import './App.css';
import FAQs from './components/accordion';

function App() {
  return (
    <div className="App">
      <AppShell>
        <FAQs />
      </AppShell>
    </div>
  );
}

export default App;
