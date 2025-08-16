import { type SchemaTypeDefinition } from 'sanity'
import { studentType } from './studentType'
import { courseType } from './courseType'
import { instructorType } from './instructorType'
import { moduleType } from './moduleType'
import { categoryType } from './categoryType'
import { blockContent } from './blockContent'
import { enrollmentType } from './enrollmentType'
import { lessonCompletionType } from './lessonCompletionType'
import { lessonType } from './lessonType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    studentType,
    courseType,
    lessonType,
    instructorType,
    moduleType,
    categoryType,
    blockContent,
    enrollmentType,
    lessonCompletionType,

  ],
}
