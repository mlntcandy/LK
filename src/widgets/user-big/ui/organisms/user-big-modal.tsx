import { SETTINGS_ROUTE } from '@app/routes/general-routes'
import { OLD_LK_URL } from '@consts'
import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import { LinkButton, Message } from '@ui/atoms'
import { Button } from '@ui/button'
import { Divider } from '@ui/divider'
import List from '@ui/list'
import React from 'react'
import { FiArrowLeftCircle, FiLogOut, FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useModal from 'widgets/modal'
import User from 'widgets/user'
import WhatsNew from 'widgets/whats-new'
import { UserList } from '../molecules'

const UserBigModal = () => {
    const { open } = useModal()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    return (
        <>
            <List
                visible={!!user?.available_accounts}
                padding="10px"
                title="Аккаунты"
                direction="horizontal"
                gap={0}
                showPages
                horizontalAlign="left"
                onAdd={() => {
                    open(<UserList />)
                    contextMenuModel.events.close()
                }}
            >
                {user?.available_accounts?.map((account) => {
                    return (
                        <User
                            key={account.name}
                            type={'teacher'}
                            onClick={() => {
                                confirmModel.events.evokeConfirm({
                                    message: 'Вы уверены, что хотите сменить аккаунт?',
                                    onConfirm: () => {
                                        localStorage.setItem(
                                            'token',
                                            JSON.stringify({
                                                token: account.token,
                                            }),
                                        )
                                        location.reload()
                                    },
                                })
                                contextMenuModel.events.close()
                            }}
                            size="small"
                            name={account.name}
                            orientation="vertical"
                        />
                    )
                })}
            </List>
            <Link to={SETTINGS_ROUTE}>
                <Button
                    text="Настройки"
                    background="var(--schedule)"
                    icon={<FiSettings />}
                    width="100%"
                    align="left"
                    onClick={() => contextMenuModel.events.close()}
                />
            </Link>
            <LinkButton
                text={'Cтарый дизайн'}
                onClick={() => {
                    localStorage.setItem('useOldVersion', 'true')
                }}
                background="var(--schedule)"
                icon={<FiArrowLeftCircle />}
                width="100%"
                align="left"
                href={`${OLD_LK_URL}/index.php`}
            />
            <Divider />
            <Button
                align="left"
                icon={<FiLogOut />}
                onClick={() => {
                    confirmModel.events.evokeConfirm({
                        message: 'Вы точно хотите выйти из аккаунта?',
                        onConfirm: userModel.events.logout,
                    })
                    contextMenuModel.events.close()
                }}
                text="Выйти"
                width="100%"
                background="var(--schedule)"
            />
            <Divider />
            <Button
                align="left"
                icon={<Message icon={null} type="info" title={'v2.0.0'} width="fit-content" />}
                onClick={() => {
                    contextMenuModel.events.close()
                    open(<WhatsNew />)
                }}
                text="Что нового"
                width="100%"
                background="var(--schedule)"
            />
        </>
    )
}

export default UserBigModal
