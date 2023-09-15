import { IColorPalette, MEDIA_QUERIES } from '@shared/consts'
import React from 'react'
import styled from 'styled-components'

const pulse = ({ color, start }: { color: string; start: boolean }) => `
&::before {
    content: '';
    background: ${color};
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    position: absolute;
    inset: 0;
    animation: ${start ? 'pulse-animation 1s infinite linear' : 'none'};
}

@keyframes pulse-animation {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform:  scale(2);
        opacity: 0;
    }
}`

const TimeCircle = styled.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({ color }) => color};
    position: relative;

    ${pulse}
`

const TimeIndicatorStyled = styled.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`

const TimeIntervalStyled = styled.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${MEDIA_QUERIES.isMobile} {
        font-size: 0.7rem;
    }
`

type Props = {
    timeInterval?: string
    color: IColorPalette
    isCurrentEvent: boolean
}

export const TimeIndicator = ({ timeInterval, color, isCurrentEvent }: Props) => {
    return (
        <TimeIndicatorStyled>
            <TimeCircle start={isCurrentEvent} color={color.main} />
            {timeInterval && <TimeIntervalStyled>{timeInterval}</TimeIntervalStyled>}
        </TimeIndicatorStyled>
    )
}