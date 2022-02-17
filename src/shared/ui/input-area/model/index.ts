import { SelectPage } from '@features/select'

export interface IInputAreaData {
    title: string
    value: string | SelectPage | boolean
    type?: 'select' | 'text' | 'tel' | 'email' | 'date' | 'checkbox' | 'number'
    items?: SelectPage[]
    width?: string
    required?: boolean
    mask?: boolean
}

export type IComplexInputAreaData = IInputAreaData[][]

export interface IInputArea {
    title: string
    hint?: string
    data: IInputAreaData[] | IComplexInputAreaData
    default?: IInputAreaData[] | IComplexInputAreaData
    confirmed?: boolean
    optional?: boolean
    documents?: { files: File[]; required: boolean; checkboxCondition?: 'straight' | 'reverse' }
    addNew?: boolean
    optionalCheckbox?: { value: boolean; title: string; required?: boolean; fileNeeded?: boolean }
}
