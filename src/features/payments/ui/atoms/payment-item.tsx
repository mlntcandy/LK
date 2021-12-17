import { IPaymentItem } from '@api/model'
import React from 'react'
import styled from 'styled-components'

const PaymentItemWrapper = styled.div`
    width: 100%;
    padding: 15px;
    border-radius: var(--brLight);
    background: var(--theme);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .payment-item-date {
        font-weight: 500;
    }

    .payment-item-money {
        color: var(--green);
        font-weight: 600;
    }
`

const PaymentItem = ({ date, value }: IPaymentItem) => {
    return (
        <PaymentItemWrapper>
            <span className="payment-item-date">{date}</span>
            <span className="payment-item-money">{value}</span>
        </PaymentItemWrapper>
    )
}

export default PaymentItem