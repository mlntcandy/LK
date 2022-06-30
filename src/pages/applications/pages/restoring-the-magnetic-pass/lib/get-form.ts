import { IInputArea } from '@ui/input-area/model'

const getForm = (): IInputArea => {
    return {
        title: 'Запрос на восстановление магнитного пропуска',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Прошу восстановить мой магнитный пропуск в связи с:',
                type: 'textarea',
                fieldName: 'reason',
                value: '',
                editable: true,
            },
        ],
        alert:
            '1. Заполнить это заявление.' +
            '2. Получить в своем отделении Центра по работе со студентами распечатанное заявление с визой руководителя.\n' +
            '3. Оплатить услугу по изготовлению нового пропуска в банке, получить квитанцию об оплате.\n' +
            '4. Предоставить заявление и квитанцию об оплате в бюро пропусков (Центральная проходная).\n' +
            '5. Получить готовый пропуск в бюро пропусков (Центральная проходная).\n' +
            '\n' +
            'Срок изготовления магнитного пропуска: 1-2 рабочих дня с момента предоставления оформленного заявления.',
    }
}

export default getForm
