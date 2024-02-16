// App.js
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import { UserProvider } from '../contexts/UserContext';
import { ConfigProvider } from '../contexts/ConfigContext';
import MyComponent from '../components/MyComponent';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UserProvider>
          <ConfigProvider>
            <MyComponent />
          </ConfigProvider>
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
