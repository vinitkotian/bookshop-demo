import React from "react";
import {render, waitFor} from '@testing-library/react'
import OrderSummaryContainer from "./OrderSummaryContainer";

describe('Order Summary', () => {

    it('should have title of order summary', async function () {
        const { getByText } = render(<OrderSummaryContainer/>);
        expect(getByText('Order Summary')).toBeInTheDocument();
        })

    it('should have book name in the order summary', async function () {
        const { getByText } = render(<OrderSummaryContainer/>);
        expect(getByText('Book Name:')).toBeInTheDocument();
       })

     it('should have book name in the order summary', async function () {
       const { getByText } = render(<OrderSummaryContainer/>);
       expect(getByText('Author Name:')).toBeInTheDocument();
      })
})