import {ExcelComponent} from '@/core/ExcelComponent';
import {$} from '@/core/dom';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText', 'rowState'],
      ...options
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div 
        class="input"
        id="formula"
        contenteditable="" 
        spellcheck="false"
      >
      </div>
    `
  }

  init() {
    this.$formula = this.$root.find('#formula')
    super.init()
    this.$on('table:select', $cell => {
      this.$formula.text($cell.data.value)
    })
  }

  storeChanged({currentText}) {
    this.$formula.text(currentText)
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text())
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tav']
    if (keys.includes(event.key)) {
      event.preventDefault()
      this.$emit('formula:done')
    }
  }
}

