import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getDriverLicense = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Водительское удостоверение',
        hint: 'При наличии водительского удостоверения необходимо загрузить скан-копию документа с обеих сторон',
        data: [],
        optionalCheckbox: {
            fieldName: 'dr_lic_none',
            title: 'Водительское удостоверение отсутствует',
            value: data.dr_lic_none,
            required: true,
        },
        documents: { files: [], required: true, fieldName: 'driveLicenseFiles', maxFiles: 1 },
        confirmed: false,
    }
}

export default getDriverLicense