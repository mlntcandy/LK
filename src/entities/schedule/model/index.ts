import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'
import { IModules, ISchedule, IWeekSchedule, ViewType } from '@api/model'
import { scheduleApi } from '@api'

const useSchedule = () => {
    return { data: useStore($schedule), loading: useStore(getScheduleFx.pending), error: useStore($schedule).error }
}

const getScheduleFx = createEffect(async (): Promise<IModules> => {
    try {
        const response = await scheduleApi.get()
        const obj: { [key: string]: any } = {}

        for (const key in response.data) {
            const transformedKey = key.charAt(0).toLowerCase() + key.slice(1)
            obj[transformedKey] = response.data[key]
        }

        return {
            '0': obj as IWeekSchedule,
            '1': obj as IWeekSchedule,
        }
    } catch {
        throw new Error('Не удалось загрузить расписание')
    }
})

const changeCurrentModule = createEvent<{ currentModule: number }>()
const changeView = createEvent<{ view: ViewType }>()
const changeCurrentChosenDay = createEvent<{ day: number }>()

const store: ISchedule = {
    schedule: null,
    currentModule: '0',
    currentDay: new Date().getDay(),
    currentChosenDay: new Date().getDay(),
    view: 'full',
    error: null,
}

const $schedule = createStore<ISchedule>(store)
    .on(getScheduleFx, (oldData, _) => ({
        ...oldData,
        error: null,
    }))
    .on(getScheduleFx.doneData, (oldData, newData) => ({
        ...oldData,
        schedule: newData,
    }))
    .on(getScheduleFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(changeCurrentModule, (oldState, newState) => ({
        ...oldState,
        currentModule: newState.currentModule.toString() as keyof IModules,
    }))
    .on(changeView, (oldState, newState) => ({
        ...oldState,
        view: newState.view,
    }))
    .on(changeCurrentChosenDay, (oldState, newState) => ({
        ...oldState,
        currentChosenDay: newState.day,
    }))

export const selectors = {
    useSchedule,
}

export const events = {
    changeCurrentModule,
    changeView,
    changeCurrentChosenDay,
}

export const effects = {
    getScheduleFx,
}