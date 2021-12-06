import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';


describe("Testing for Header Component", () => {

    test('HEADER has h1 with expected word Green', () => {
        render(<Header searchValue={''} setSearchValue={function (value: string): void {
            throw new Error('Function not implemented.');
        } }/>);
        const heading = screen.getByText(/Green/)
        expect(heading).toBeInTheDocument();
    });
})

