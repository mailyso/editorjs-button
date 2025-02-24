import css from './index.css';

export default class AnyButton {

  /**
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      title: "Button",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="3" y1="12" x2="6" y2="12" />
      <line x1="12" y1="3" x2="12" y2="6" />
      <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
      <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
      <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
      <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
    </svg>`
    }
  }

  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   *
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return false;
  }


  /**
   *
   * @returns {{EDIT: number, VIEW: number}}
   * @constructor
   */
  static get STATE() {
    return {
      EDIT: 0,
      VIEW: 1
    };
  }

  /**
   * Allowed button alignments
   *
   * @public
   * @returns {{left: string, center: string}}
   */
  static get ALIGNMENTS() {
    return {
      left: 'left',
      center: 'center',
      right: 'right',
      justify: 'justify'
    };
  }

  /**
   * Default button alignment
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGNMENT() {
    return AnyButton.ALIGNMENTS.center;
  }

  static get DEFAULT_TEXT_COLOR() {
    return "#000000";
  }

  static get DEFAULT_BACKGROUND_COLOR() {
    return "#F2F2F2";
  }

  /**
   *
   * @param data
   */
  set data(data) {
    this._data = Object.assign({}, {
      link: this.api.sanitizer.clean(data.link || "", AnyButton.sanitize),
      text: data.text,
      text_color: data.text_color || this.config.defaultTextColor || AnyButton.DEFAULT_TEXT_COLOR,
      background_color: data.background_color || this.config.defaultBackgroundColor || AnyButton.DEFAULT_BACKGROUND_COLOR,
      alignment: data.alignment || this.config.defaultAlignment || AnyButton.DEFAULT_ALIGNMENT,
    });
  }
  /**
   *
   * @returns {{text: string, link: string}}
   */
  get data() {
    return this._data;
  }

  /**
   * セーブ時のバリデーション
   * @param savedData
   * @returns {boolean}
   */
  validate(savedData) {
    if (this._data.link === "" || this._data.text === "") {
      return false;
    }

    return true;
  }
  /**
   *
   * @param block
   * @returns {{caption: string, text: string, alignment: string}}
   */
  save(block) {
    return this._data;
  }

  /**
   * タグを全部削除する
   * @returns {{link: boolean, text: boolean}}
   */
  static get sanitize() {
    return {
      text: false,
      link: false
    }
  }

  /**
   *
   * @param data
   * @param config
   * @param api
   * @param readOnly
   */
  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.config = config;
    this.readOnly = readOnly;

    this.nodes = {
      wrapper: null,
      container: null,
      inputHolder: null,
      toggleHolder: null,
      anyButtonHolder: null,
      textInput: null,
      linkInput: null,
      textColorInput: null,
      backgroundColorInput: null,
      registButton: null,
      anyButton: null,
    }
    //css overwrite
    const _CSS = {
      baseClass: this.api.styles.block,
      hide: "hide",
      btn: "btn",
      container: "anyButtonContainer",
      input: "anyButtonContainer__input",
      inputHolder: "anyButtonContainer__inputHolder",
      colorsHolder: "anyButtonContainer__colorsHolder",
      colorHolder: "anyButtonContainer__colorHolder",
      colorHolderLabel: "anyButtonContainer__colorHolder__label",
      colorSettingHolder: "anyButtonContainer__colorSettingHolder",
      colorSettingLink: "anyButtonContainer__colorSettingLink",
      inputText: "anyButtonContainer__input--text",
      inputLink: "anyButtonContainer__input--link",
      inputColor: "anyButtonContainer__input--color",
      registButton: "anyButtonContainer__registerButton",
      anyButtonHolder: "anyButtonContainer__anyButtonHolder",
      btnColor: "btn--default",
      editButtonContainer: "anyButtonContainer_editButtonHolder",
      editButton: "anyButtonContainer_editButton",
      inputLinkError: "anyButtonContainer__input--link--error",
      inputTextError: "anyButtonContainer__input--text--error",
      alignment: {
        left: 'anyButtonContainer__anyButtonHolder--left',
        center: 'anyButtonContainer__anyButtonHolder--center',
        right: 'anyButtonContainer__anyButtonHolder--right',
        justify: 'anyButtonContainer__anyButtonHolder--justify',
      }
    }

    this.CSS = Object.assign(_CSS, config.css)

    this.settings = [
      {
        name: 'left',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>`
      },
      {
        name: 'center',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>`
      },
      {
        name: 'right',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>`
      },
      {
        name: 'justify',
        icon: `<svg viewBox="0 0 64 64" width="20" height="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.867 19 L 10.914 19 C 9.26 19 7.918 19.896 7.918 21 C 7.918 22.104 9.26 23 10.914 23 L 52.867 23 C 54.522 23 55.863 22.104 55.863 21 C 55.863 19.896 54.522 19 52.867 19 Z" style=""></path><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.779 41 L 11.113 41 C 9.469 41 8.136 41.896 8.136 43 C 8.136 44.104 9.469 45 11.113 45 L 52.779 45 C 54.421 45 55.754 44.104 55.754 43 C 55.754 41.896 54.421 41 52.779 41 Z" style=""></path></svg>`
      }
    ];

    this.data = {
      link: data.link || "",
      text: data.text || "",
      text_color: data.text_color || config.defaultTextColor || AnyButton.DEFAULT_TEXT_COLOR,
      background_color: data.background_color || config.defaultBackgroundColor || AnyButton.DEFAULT_BACKGROUND_COLOR,
      alignment: data.alignment || config.defaultAlignment || AnyButton.DEFAULT_ALIGNMENT
    };
  }

  render() {
    this.nodes.container = this.make('div', [this.CSS.baseClass, this.CSS.container]);

    //入力用
    this.nodes.inputHolder = this.makeInputHolder();
    //toggle
    this.nodes.toggleHolder = this.makeToggle();
    //display button
    this.nodes.anyButtonHolder = this.makeAnyButtonHolder();

    this.nodes.container.appendChild(this.nodes.anyButtonHolder);
    this.nodes.container.appendChild(this.nodes.toggleHolder);
    this.nodes.container.appendChild(this.nodes.inputHolder);

    this.init();
    this.show(AnyButton.STATE.EDIT);

    return this.nodes.container;
  }

  renderSettings() {
    const wrapper = document.createElement('div');

    this.settings.map(tune => {
      /**
       * buttonのdomを作成して、alignのtoggleをactiveに設定する
       * @type {HTMLDivElement}
       */
      const button = document.createElement('div');
      button.classList.add('cdx-settings-button');
      button.innerHTML = tune.icon;

      button.classList.toggle(this.api.styles.settingsButtonActive, tune.name === this.data.alignment);

      wrapper.appendChild(button);

      return button;
    }).forEach((element, index, elements) => {

      element.addEventListener('click', () => {

        this._toggleTune(this.settings[index].name);

        elements.forEach((el, i) => {
          const { name } = this.settings[i];
          el.classList.toggle(this.api.styles.settingsButtonActive, name === this.data.alignment);
          //paragraphのdivにalignmentのclassをつける。
          this.nodes.anyButtonHolder.classList.toggle(this.CSS.alignment[name], name === this.data.alignment)
        });
      });
    });

    return wrapper;
  }

  makeInputHolder() {
    const inputHolder = this.make('div', [this.CSS.inputHolder]);
    this.nodes.textInput = this.make('div', [this.api.styles.input, this.CSS.input, this.CSS.inputText], {
      contentEditable: !this.readOnly,
    });
    this.nodes.textInput.dataset.placeholder = this.api.i18n.t('Button Text');
    this.nodes.textInput.addEventListener("keyup", (e) => {
      if (this.validateTextInput(e.target.textContent)) {
        this.onEditInput(this.nodes);
      }
    });

    this.nodes.linkInput = this.make('div', [this.api.styles.input, this.CSS.input, this.CSS.inputLink], {
      contentEditable: !this.readOnly,
    })
    this.nodes.linkInput.dataset.placeholder = this.api.i18n.t('Link Url');
    this.nodes.linkInput.addEventListener("keyup", (e) => {
      if (this.validateLinkInput(e.target.textContent)) {
        this.onEditInput(this.nodes);
      }
    });

    const colorsHolder = this.make('div', [this.CSS.colorsHolder]);

    const textColorHolder = this.make('div', [this.CSS.colorHolder]);
    const textColorLabel = this.make('p', [this.CSS.colorHolderLabel]);
    this.nodes.textColorInput = this.make('input', [this.CSS.inputColor], {
      contentEditable: !this.readOnly,
      type: "color",
      value: this.config.defaultTextColor || AnyButton.DEFAULT_TEXT_COLOR
    })
    this.nodes.textColorInput.addEventListener('input', (event) => {
      this.onEditInput(this.nodes)
    })

    textColorLabel.innerText = this.api.i18n.t('Text Color');
    textColorHolder.appendChild(textColorLabel)
    textColorHolder.appendChild(this.nodes.textColorInput)

    const backgroundColorHolder = this.make('div', [this.CSS.colorHolder]);
    const backgroundColorLabel = this.make('p', [this.CSS.colorHolderLabel]);
    this.nodes.backgroundColorInput = this.make('input', [this.CSS.inputColor], {
      contentEditable: !this.readOnly,
      type: "color",
      value: this.config.defaultBackgroundColor || AnyButton.DEFAULT_BACKGROUND_COLOR
    })

    this.nodes.backgroundColorInput.addEventListener('input', (event) => {
      this.onEditInput(this.nodes)
    })

    backgroundColorLabel.innerText = this.api.i18n.t('Background Color');
    backgroundColorHolder.appendChild(backgroundColorLabel)
    backgroundColorHolder.appendChild(this.nodes.backgroundColorInput)

    colorsHolder.appendChild(textColorHolder);
    colorsHolder.appendChild(backgroundColorHolder);

    if (this.config.colorSettingLink) {
      const colorSettingHolder = this.make('div', [this.CSS.colorSettingHolder]);
      const colorSettingLink = this.make('a', [this.CSS.colorSettingLink], {
        href: this.config.colorSettingLink,
        target: '_blank',
        rel: 'nofollow noindex noreferrer',
      });

      colorSettingLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"><path d="M11.992 21c-.728 -.003 -1.455 -.442 -1.667 -1.317a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c.882 .214 1.32 .95 1.317 1.684"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"></path></svg>`;
      colorSettingHolder.appendChild(colorSettingLink);
      colorsHolder.appendChild(colorSettingHolder);
    }

    inputHolder.appendChild(this.nodes.textInput);
    inputHolder.appendChild(this.nodes.linkInput);
    inputHolder.appendChild(colorsHolder);

    return inputHolder;
  }

  onEditInput(nodes) {
    this.data = {
      link: nodes.linkInput.textContent,
      text: nodes.textInput.textContent,
      text_color: nodes.textColorInput.value,
      background_color: nodes.backgroundColorInput.value,
      alignment: this.data.alignment
    }

    this.show(AnyButton.STATE.EDIT);
  }

  validateLinkInput(urlString) {
    const isValidLink = /(https:\/\/|http:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(urlString);
    if (isValidLink) {
      this.nodes.linkInput.classList.remove(this.CSS.inputLinkError);
    } else {
      this.nodes.linkInput.classList.add(this.CSS.inputLinkError);
    }

    return isValidLink;
  }

  validateTextInput(textString) {
    const isValidText = (textString !== null && textString !== "");
    if (isValidText) {
      this.nodes.textInput.classList.remove(this.CSS.inputTextError);
    } else {
      this.nodes.textInput.classList.add(this.CSS.inputTextError);
    }

    return isValidText;
  }

  init() {
    this.nodes.textInput.textContent = this._data.text;
    this.nodes.linkInput.textContent = this._data.link;
    this.nodes.textColorInput.value = this._data.text_color;
    this.nodes.backgroundColorInput.value = this._data.background_color;
  }

  show(state) {
    this.nodes.anyButton.textContent = this._data.text || this.api.i18n.t("Default Button");
    this.nodes.anyButton.setAttribute("href", this._data.link);
    this.nodes.anyButton.style.background = this._data.background_color;
    this.nodes.anyButton.style.color = this._data.text_color;
    this.changeState(state);
  }

  makeAnyButtonHolder() {
    const anyButtonHolder = this.make('div', [this.CSS.anyButtonHolder, this.CSS.alignment[this.data.alignment]]);
    this.nodes.anyButton = this.make('a', [this.CSS.btnColor], {
      target: '_blank',
      rel: 'nofollow noindex noreferrer',
    });
    this.nodes.anyButton.textContent = this.api.i18n.t("Default Button");
    anyButtonHolder.appendChild(this.nodes.anyButton);
    return anyButtonHolder;
  }

  changeState(state) {
    switch (state) {
      case AnyButton.STATE.EDIT:
        this.nodes.inputHolder.classList.remove(this.CSS.hide);
        this.nodes.registButton.classList.remove(this.CSS.hide);
        this.nodes.editButton.classList.add(this.CSS.hide);

        break;
      case AnyButton.STATE.VIEW:
        this.nodes.inputHolder.classList.add(this.CSS.hide);
        this.nodes.registButton.classList.add(this.CSS.hide);
        this.nodes.editButton.classList.remove(this.CSS.hide);

        break;
    }
  }

  makeToggle() {
    /**
     * <div class="toggle-switch">
     <button class="edit-button" type='button'>Edit</button>
     </div>
     */
    const toggleHolder = this.make('div', [this.CSS.editButtonContainer]);
    this.nodes.editButton = this.make('button', [this.CSS.hide, this.CSS.editButton],
      {
        "type": "button"
      });
    this.nodes.editButton.innerHTML = this.api.i18n.t('Edit');
    this.nodes.editButton.addEventListener("click", (event) => {
      this.data = {
        link: this.nodes.linkInput.textContent,
        text: this.nodes.textInput.textContent,
        text_color: this.nodes.textColorInput.value,
        background_color: this.nodes.backgroundColorInput.value,
        alignment: this.data.alignment,
      }
      this.show(AnyButton.STATE.EDIT);
    })

    this.nodes.registButton = this.make('button', [this.CSS.registButton]);
    this.nodes.registButton.type = 'button';
    this.nodes.registButton.textContent = this.api.i18n.t('Set');
    this.nodes.registButton.addEventListener('click', (event) => {
      if (this.validateTextInput(this.nodes.textInput.textContent) && this.validateLinkInput(this.nodes.linkInput.textContent)) {
        this.data = {
          link: this.nodes.linkInput.textContent,
          text: this.nodes.textInput.textContent,
          text_color: this.nodes.textColorInput.value,
          background_color: this.nodes.backgroundColorInput.value,
          alignment: this.data.alignment
        }
        this.show(AnyButton.STATE.VIEW);
      }
    });

    toggleHolder.appendChild(this.nodes.editButton);
    toggleHolder.appendChild(this.nodes.registButton);

    return toggleHolder;
  }

  /**
   * node 作成用
   * @param tagName
   * @param classNames
   * @param attributes
   * @returns {*}
   */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }

  get shortcut() {
    return 'CMD+SHIFT+A';
  }

  /**
 * @private
 * Click on the Settings Button
 * @param {string} tune — tune name from this.settings
 */
  _toggleTune(tune) {
    this.data.alignment = tune;
  }
}