import {defaultTitle} from '@/constance';

export function createHeader(state) {
  return `
    <input type="text" class="input" value="${state.title || defaultTitle}">
      <div class="">
        <div class="button">
          <i class="material-icons">delete</i>
        </div>
        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>
      </div>
  `
}

