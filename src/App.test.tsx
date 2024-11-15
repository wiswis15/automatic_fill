import React from 'react';
import { render, screen } from '@testing-library/react';
import AppComponent from './App'; // Rename the import to avoid conflict
import UploadButtons from './UploadButtons';

const App: React.FC = () => {
    return (
        <div>
            <UploadButtons />
        </div>
    );
};

export default App;

test('renders learn react link', () => {
  render(<AppComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
