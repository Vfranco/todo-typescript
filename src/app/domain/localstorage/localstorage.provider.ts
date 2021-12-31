import { Provider } from "@angular/core";
import { RepositoryProvider } from "@app/core/constants/repository";
import { LocalStorageService } from "@app/services/localstorage.service";

export const LocalStorageProvider : Provider = {
  provide: RepositoryProvider.localStorageProvider,
  useClass : LocalStorageService
}
