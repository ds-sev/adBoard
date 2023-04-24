export interface ICategory {
  id: string,
  parentId: string | null,
  name: string,
  isActive: boolean,
  createdAt: string
}
