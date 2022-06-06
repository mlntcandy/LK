import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const PersonaIncomeTaxReferenceWrapper = styled.div`
    height: auto;
`

const PersonaIncomeTaxReferencePage = () => {
    return (
        <PersonaIncomeTaxReferenceWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </PersonaIncomeTaxReferenceWrapper>
    )
}

export default PersonaIncomeTaxReferencePage