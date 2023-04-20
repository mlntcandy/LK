import React, { useEffect } from 'react'
import useDebounce from '@shared/lib/hooks/use-debounce'
import Search, { Hint } from '../search'

type GlobalSearchProps = {
    setExternalValue?: (value: string) => void
    placeholder?: string
    inputAppearance?: boolean
    validationCheck?: boolean
    searchApi: (value: string) => void
    triggerSearchOn?: string[]
    hints?: Hint[]
}

const GlobalSearch = ({
    setExternalValue,
    inputAppearance,
    placeholder,
    validationCheck,
    searchApi,
    triggerSearchOn,
    hints,
}: GlobalSearchProps) => {
    const onSearch = (value: string) => {
        searchApi(value)
    }

    const [value, setValue, loading] = useDebounce({ onDebounce: onSearch, onClear: onSearch, delay: 500 })

    const handleChangeValue = (v: string) => {
        setValue(v)
        setExternalValue && setExternalValue(v)
    }

    useEffect(() => {
        onSearch(value ?? '')
    }, [...(triggerSearchOn ?? [])])

    return (
        <Search
            value={value ?? ''}
            setValue={handleChangeValue}
            inputAppearance={inputAppearance}
            placeholder={placeholder}
            validationCheck={validationCheck}
            loading={loading}
            hints={hints}
        />
    )
}

export default GlobalSearch