import { IGrade } from '@api/model/acad-performance'
import { WidthByGrade } from '@shared/constants/consts'

const findProgressBarWidth = (grade: keyof IGrade) => {
    return grade ? WidthByGrade[grade] || WidthByGrade.default : 0
}

export default findProgressBarWidth
