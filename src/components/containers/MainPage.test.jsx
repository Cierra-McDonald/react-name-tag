import React from 'react';
import { getAllByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/react';
import MainPage from './MainPage'

describe('MainPage container testing', () => { 
    it('MainPage should render a name tag with a text field', async () => { 
        render(<MainPage/>);

        screen.getByText('Hi! My Name is...')

     
    })
})