import { popUpMessageModel } from '@entities/pop-up-message'
import { SelectPage } from '@features/select'
import React, { useEffect, useState } from 'react'
import { IComplexInputAreaData, IInputArea, IInputAreaCheckbox, IInputAreaData } from '../model'

interface Props {
    documents?: { files: File[]; required: boolean; checkboxCondition?: 'straight' | 'reverse' }
    optionalCheckbox?: IInputAreaCheckbox
    data: IInputAreaData[] | IComplexInputAreaData
    optional?: boolean
    setData: React.Dispatch<React.SetStateAction<IInputArea>>
}

const useInputArea = ({ documents, optionalCheckbox, data, setData, optional }: Props) => {
    const [changeInputArea, setChangeInputArea] = useState(false)
    const [openArea, setOpenArea] = useState(true)
    const [included, setIncluded] = useState(false)

    const handleConfirm = () => {
        if (!Array.isArray(data[0])) {
            if (!documents) {
                if (
                    (optionalCheckbox?.value && optionalCheckbox.required) ||
                    (!(data as IInputAreaData[]).find((el) => !el.value && el.required) &&
                        !(data as IInputAreaData[]).find(
                            (el) => (el.value as SelectPage).id === 'not-chosen' && !!el.items?.length,
                        ))
                ) {
                    setData((area: IInputArea) => {
                        area.confirmed = true
                        return { ...area }
                    })
                    setChangeInputArea(false)
                    setOpenArea(false)
                } else {
                    popUpMessageModel.events.evokePopUpMessage({
                        message: 'Не все необходимые поля заполнены',
                        type: 'failure',
                        time: 5000,
                    })
                }
            } else {
                if (!optionalCheckbox?.required) {
                    if (
                        (!changeInputArea && !(data as IInputAreaData[]).find((el) => !el.value && el.required)) ||
                        (optionalCheckbox?.value && !documents.required) ||
                        documents.files.length ||
                        !documents.required
                    ) {
                        setData((area: IInputArea) => {
                            area.confirmed = true
                            return { ...area }
                        })
                        setChangeInputArea(false)
                        setOpenArea(false)
                    } else {
                        popUpMessageModel.events.evokePopUpMessage({
                            message: 'Необходимо загрузить файл',
                            type: 'failure',
                            time: 5000,
                        })
                    }
                } else {
                    if ((documents.files.length && documents.required) || optionalCheckbox.value) {
                        setData((area: IInputArea) => {
                            area.confirmed = true
                            return { ...area }
                        })
                        setChangeInputArea(false)
                        setOpenArea(false)
                    } else {
                        popUpMessageModel.events.evokePopUpMessage({
                            message:
                                'Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой',
                            type: 'failure',
                            time: 5000,
                        })
                    }
                }
            }
        } else {
            if (!documents) {
                if (
                    (optionalCheckbox?.value && optionalCheckbox.required) ||
                    (!(data as IComplexInputAreaData).find((arr) => !!arr.find((el) => !el.value && el.required)) &&
                        !(data as IComplexInputAreaData).find(
                            (arr) =>
                                !!arr.find((el) => (el.value as SelectPage).id === 'not-chosen' && !!el.items?.length),
                        ))
                ) {
                    setData((area: IInputArea) => {
                        area.confirmed = true
                        return { ...area }
                    })
                    setChangeInputArea(false)
                    setOpenArea(false)
                } else {
                    popUpMessageModel.events.evokePopUpMessage({
                        message: 'Не все необходимые поля заполнены',
                        type: 'failure',
                        time: 5000,
                    })
                }
            } else {
                if (!optionalCheckbox?.required) {
                    if (
                        (!changeInputArea &&
                            !(data as IComplexInputAreaData).find(
                                (arr) => !!arr.find((el) => !el.value && el.required),
                            )) ||
                        (optionalCheckbox?.value && !documents.required) ||
                        documents.files.length ||
                        !documents.required
                    ) {
                        setData((area: IInputArea) => {
                            area.confirmed = true
                            return { ...area }
                        })
                        setChangeInputArea(false)
                        setOpenArea(false)
                    } else {
                        popUpMessageModel.events.evokePopUpMessage({
                            message: 'Необходимо загрузить файл',
                            type: 'failure',
                            time: 5000,
                        })
                    }
                } else {
                    if ((documents.files.length && documents.required) || optionalCheckbox.value) {
                        setData((area: IInputArea) => {
                            area.confirmed = true
                            return { ...area }
                        })
                        setChangeInputArea(false)
                        setOpenArea(false)
                    } else {
                        popUpMessageModel.events.evokePopUpMessage({
                            message:
                                'Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой',
                            type: 'failure',
                            time: 5000,
                        })
                    }
                }
            }
        }
    }
    const handleAddNew = () => {
        setData((area: IInputArea) => {
            const newFields = (area.default as IComplexInputAreaData)[0].map(
                (field, index): IInputAreaData => ({
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    fieldName: field.fieldName ?? '',
                    title: field.title,
                    value: field.type === 'select' && field?.items ? field?.items?.[0] : '',
                    type: field.type,
                    items: field.items,
                    width: field.width,
                    required: field.required,
                }),
            )

            return { ...area, data: [...area.data, newFields] as IComplexInputAreaData }
        })
    }
    const handleRemove = (i: number) => {
        setData((area: IInputArea) => {
            const newFields = (area.data as IComplexInputAreaData).filter((_, index) => i !== index)

            return { ...area, data: newFields }
        })
    }

    const handleLoadFiles = (files: File[]) => {
        setData((area) => {
            if (area.documents) area.documents.files = [...files]
            return { ...area }
        })
    }

    const handleCheckbox = () => {
        if (optionalCheckbox) optionalCheckbox.value = !optionalCheckbox.value

        setData((area) => ({ ...area, optionalCheckbox }))
    }

    useEffect(() => {
        if (!included && optional) {
            setOpenArea(false)
        } else {
            setOpenArea(true)
        }
    }, [included])

    return {
        openArea,
        changeInputArea,
        included,
        setOpenArea,
        setIncluded,
        setChangeInputArea,
        handleRemove,
        handleAddNew,
        handleLoadFiles,
        handleConfirm,
        handleCheckbox,
    }
}

export default useInputArea