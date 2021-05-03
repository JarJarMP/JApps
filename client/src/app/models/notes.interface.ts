export interface Notes {
  _id: number,
  title: string,
  content: string,
  tags: string[],
  isPinned: boolean,
  isArchived: boolean,
  isDeleted: boolean,
  dateOfModified: Date,
  lastModifiedBy: string,
}
