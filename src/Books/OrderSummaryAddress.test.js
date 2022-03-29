import React from "react";
import Address from "./OrderSummaryAddress";
import {render} from '@testing-library/react'

describe('Address', () => {

     it('should display address line one label', function () {
            const { getByText } = render(<Address data={address()}/>);
            expect(getByText('Address Line 1:')).toBeTruthy();
      });

      it('should display value of address line one when address model has line one', function () {
              const { getByText } = render(<Address data={address()}/>);
              expect (getByText('C/001')).toBeTruthy();
          });

      it('should display address line two label', function () {
              const { getByText } = render(<Address data={address()}/>);
              expect(getByText('Address Line 2:')).toBeTruthy();
            });

      it('should display value of address line two when address model has line two', function () {
              const { getByText } = render(<Address data={address()}/>);
              expect (getByText('Parker Street')).toBeTruthy();
         });

         it('should display value of city when address model has city', function () {
               const { getByText } = render(<Address data={address()}/>);
               expect (getByText('City:')).toBeTruthy();
               expect (getByText('Pune')).toBeTruthy();
          });

       it('should display value of state when address model has city', function () {
              const { getByText } = render(<Address data={address()}/>);
              expect (getByText('State:')).toBeTruthy();
              expect (getByText('Maharashtra')).toBeTruthy();
         });

       it('should display value of pin code when address model has pin code', function () {
             const { getByText } = render(<Address data={address()}/>);
             expect (getByText('PIN Code:')).toBeTruthy();
             expect (getByText('400192')).toBeTruthy();
        });
        it('should display value of country  when address model has country', function () {
                 const { getByText } = render(<Address data={address()}/>);
                 expect (getByText('Country:')).toBeTruthy();
                 expect (getByText('India')).toBeTruthy();
            });

        function address() {
                return {lineNoOne:"C/001",lineNoTwo:"Parker Street",city:"Pune",state:"Maharashtra",pinCode:"400192",country:"India"};
            }
})

