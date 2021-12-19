import { createEvent, createStore, forward } from 'effector'
import { useStore } from 'effector-react'

export interface Confirm {
    isOpen: boolean
    message?: string | null
    onConfirm: (params: any) => void
    onReject?: (params: any) => void
}

const defaultStore: Confirm = {
    isOpen: false,
    message: null,
    onConfirm: () => null,
    onReject: () => null,
}

const useConfirm = () => {
    return useStore($confirm)
}

const evokeConfirm =
    createEvent<{ message: string; onConfirm: (params: any) => void; onReject?: (params: any) => void }>()

const closeConfirm = createEvent()

const $confirm = createStore<Confirm>(defaultStore)
    .on(evokeConfirm, (oldState, { message, onReject, onConfirm }) => ({
        isOpen: true,
        message,
        onConfirm,
        onReject,
    }))
    .on(closeConfirm, (oldState, _) => ({
        ...oldState,
        isOpen: false,
    }))

export const selectors = {
    useConfirm,
}

export const events = {
    evokeConfirm,
    closeConfirm,
}
