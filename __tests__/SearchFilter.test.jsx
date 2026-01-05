import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilter from '../src/webpages/SearchFilter';

describe('SearchFilter Component', () => {
    const mockFilters = {
        type: '',
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        dateFrom: '',
        dateTo: '',
        postcode: ''
    };

    const mockSetFilters = jest.fn();

    beforeEach(() => {
        mockSetFilters.mockClear();
    });

    test('renders all filter fields', () => {
        render(<SearchFilter filters={mockFilters} setFilters={mockSetFilters} />);

        expect(screen.getByLabelText(/House Type/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Min/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Max/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Bedrooms/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Postcode Area/i)).toBeInTheDocument();
    });

    test('updates local state when input changes', () => {
        render(<SearchFilter filters={mockFilters} setFilters={mockSetFilters} />);

        const typeSelect = screen.getByLabelText(/House Type/i);
        fireEvent.change(typeSelect, { target: { value: 'detached' } });
        expect(typeSelect.value).toBe('detached');

        const minPriceInput = screen.getByPlaceholderText(/Min/i);
        fireEvent.change(minPriceInput, { target: { value: '100000' } });
        expect(minPriceInput.value).toBe('100000');
    });

    test('calls setFilters when Apply button is clicked', () => {
        render(<SearchFilter filters={mockFilters} setFilters={mockSetFilters} />);

        const typeSelect = screen.getByLabelText(/House Type/i);
        fireEvent.change(typeSelect, { target: { value: 'flat' } });

        const applyButton = screen.getByText(/Apply Filters/i);
        fireEvent.click(applyButton);

        expect(mockSetFilters).toHaveBeenCalledWith(expect.objectContaining({
            type: 'flat'
        }));
    });

    test('clears all filters when Clear button is clicked', () => {
        const activeFilters = { ...mockFilters, type: 'house', minPrice: '500000' };
        render(<SearchFilter filters={activeFilters} setFilters={mockSetFilters} />);

        const clearButton = screen.getByText(/Clear All/i);
        fireEvent.click(clearButton);

        expect(mockSetFilters).toHaveBeenCalledWith({
            type: '',
            minPrice: '',
            maxPrice: '',
            minBedrooms: '',
            dateFrom: '',
            dateTo: '',
            postcode: ''
        });
    });
});
