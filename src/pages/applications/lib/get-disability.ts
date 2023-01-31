import { IInputArea } from '@ui/input-area/model'

const getDisability = (): IInputArea => {
    return {
        title: 'Период предоставления льготы',
        hint: 'Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа',
        optionalCheckbox: {
            fieldName: 'is_not_invalid',
            value: true,
            title: 'Нет документа о соответствии льготной категории граждан',
            required: true,
        },
        data: [
            {
                title: 'Начало периода соответствия льготной категории',
                type: 'date',
                value: '',
                fieldName: 'beginning_of_benefit_period',
                editable: true,
                required: true,
            },
            {
                title: 'Окончание периода соответствия льготной категории',
                type: 'date',
                value: '',
                fieldName: 'end_of_benefit_period',
                editable: true,
                required: true,
            },
        ],
        documents: {
            files: [],
            required: true,
            checkboxCondition: 'reverse',
            fieldName: 'invalidFiles',
            maxFiles: 1,
            allowedTypes: ['application/pdf'],
        },
    }
}

export default getDisability
