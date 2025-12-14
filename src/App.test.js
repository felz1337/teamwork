import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main header text', () => {
    render(<App />);
    // Шукаємо текст "My dream team", який знаходиться всередині компонента <Header />
    // 'i' означає case-insensitive (нечутливий до регістру)
    const headerElement = screen.getByText(/My dream team/i);
    expect(headerElement).toBeInTheDocument();
});