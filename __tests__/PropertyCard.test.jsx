import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PropertyCard from '../src/webpages/PropertyPage/PropertyCard';
import '@testing-library/jest-dom';

// Mock FontAwesome components to avoid icon rendering issues
jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: ({ icon, style }) => (
        <span data-testid="fa-icon" style={style}>
            {icon?.iconName}
        </span>
    ),
}));

// Mock the image import
jest.mock('../src/assets/property-thumbnail.jpg', () => 'test-file-stub');

const mockProperty = {
    id: '1',
    type: 'House',
    bedrooms: 3,
    location: 'London',
    price: 500000,
    thumbnailpicture: 'house.jpg'
};

describe('PropertyCard', () => {
    const mockOnFavourite = jest.fn();

    test('renders property details: type, bedrooms, location, and price', () => {
        render(
            <MemoryRouter>
                <PropertyCard
                    property={mockProperty}
                    onFavourite={mockOnFavourite}
                    isFavourite={false}
                />
            </MemoryRouter>
        );

        // Check if property type is rendered (it appears in h3 and badge)
        const typeElements = screen.getAllByText(/House/i);
        expect(typeElements.length).toBeGreaterThan(0);

        // check each property detail
        expect(screen.getByText(/3 Bedrooms/i)).toBeInTheDocument();
        expect(screen.getByText(/London/i)).toBeInTheDocument();
        expect(screen.getByText(/£500,000/i)).toBeInTheDocument();
    });

    test('renders the "View Details" link with correct href', () => {
        render(
            <MemoryRouter>
                <PropertyCard
                    property={mockProperty}
                    onFavourite={mockOnFavourite}
                    isFavourite={false}
                />
            </MemoryRouter>
        );

        const link = screen.getByRole('link', { name: /view details/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/property/1');
    });

    test('calls onFavourite when the heart button is clicked', () => {
        render(
            <MemoryRouter>
                <PropertyCard
                    property={mockProperty}
                    onFavourite={mockOnFavourite}
                    isFavourite={false}
                />
            </MemoryRouter>
        );

        const favButton = screen.getByTitle(/add to favourites/i);
        fireEvent.click(favButton);

        expect(mockOnFavourite).toHaveBeenCalledWith(mockProperty);
    });

    test('displays red heart and correct title when property is a favourite', () => {
        render(
            <MemoryRouter>
                <PropertyCard
                    property={mockProperty}
                    onFavourite={mockOnFavourite}
                    isFavourite={true}
                />
            </MemoryRouter>
        );

        const favButton = screen.getByTitle(/added to favourites/i);
        expect(favButton).toBeInTheDocument();

        // Check if the icon has red color
        const icon = screen.getByTestId('fa-icon');
        expect(icon).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    });
});
