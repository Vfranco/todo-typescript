export interface IRepositoryLocalStorage {
  saveItem(key: string, data: any): void
  getItem(key: string): any,
  updateItem(id: number, taskName: string): void
  deleteItem(id: number): void
  changeStatusItem(id: number): void
}
