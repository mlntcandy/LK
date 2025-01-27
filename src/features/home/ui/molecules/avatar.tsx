import Checkbox from '@ui/checkbox'
import Notification from '@ui/notification'
import getLettersColors from '@utils/get-letters-colors'
import getNameFirstLetters from '@utils/get-name-first-letters'
import React, { useState } from 'react'
import { useModal } from 'widgets'
import { Container, Img } from '../atoms/avatar'

export default Avatar

interface Props {
    avatar: string | undefined
    name: string
    width?: string
    height?: string
    marginRight?: string
    notifications?: number
    selected?: boolean
    checked?: boolean
    boxShadow?: string
    border?: boolean
    avatarModal?: boolean
    icon?: ChildrenType
    background?: string
    borderRadius?: number
    adaptive?: boolean
    centerHorizontally?: boolean
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function Avatar({
    selected,
    name,
    avatar,
    width,
    height,
    marginRight,
    notifications,
    checked,
    boxShadow,
    border,
    icon,
    avatarModal,
    onClick,
    borderRadius,
    background,
    adaptive,
    centerHorizontally,
}: Props) {
    const [isLoaded, setIsLoaded] = useState<boolean>(true)
    const shortName = getNameFirstLetters(name)[0] + (getNameFirstLetters(name)[1] ?? '')
    const { open } = useModal()

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (avatarModal) {
            open(
                <Avatar
                    name={name}
                    width="400px"
                    height="400px"
                    marginRight="0"
                    avatar={avatar}
                    adaptive
                    centerHorizontally
                />,
            )
        } else {
            onClick?.(e)
        }
    }

    return (
        <Container
            selected={selected}
            width={width}
            height={height}
            marginRight={marginRight}
            background={background ?? getLettersColors(name)}
            boxShadow={boxShadow}
            border={border}
            onClick={handleClick}
            borderRadius={borderRadius}
            adaptive={adaptive}
            centerHorizontally={centerHorizontally}
        >
            {avatar && isLoaded ? (
                <Img
                    loading="lazy"
                    round
                    onLoadedData={() => setIsLoaded(true)}
                    onError={() => setIsLoaded(false)}
                    src={avatar}
                    adaptive={adaptive}
                />
            ) : (
                <div className="name">{shortName}</div>
            )}
            {icon && <span className="icon">{icon}</span>}
            <Checkbox
                invisibleOnFalse
                checked={checked ?? false}
                visible={checked !== undefined}
                setChecked={() => null}
            />
            <Notification left="80%" top="90%" outline="4px solid var(--block)" visible={!!notifications}>
                {notifications}
            </Notification>
        </Container>
    )
}
