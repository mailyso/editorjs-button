![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Set Link, Text, Alignment, Colors and Generate button plugin for Editor.js

![example](https://user-images.githubusercontent.com/18032062/239719694-1c025beb-6355-4a10-bbbe-ed71edf6c08e.png)

## Installation

### Install via NPM

Get the package

```shell
yarn add https://github.com/mailyso/editorjs-button
```

Include module at your application

```javascript
import AnyButton from "editorjs-button";
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```json
tools: {
        AnyButton: {
          class: AnyButton,
          inlineToolbar: false,
          config:{
            css:{
              "btnColor": "btn--gray",
            },
            defaultAlignment: "center",
            defaultTextColor: "#000",
            defaultBackgroundColor: "#000",
          }
        },
      },
      i18n: {
        messages: {
          tools: {
            "AnyButton": {
            'Button Text': '버튼의 내용을 입력하세요.',
            'Link Url': '버튼의 URL을 입력하세요. (https:// 포함)',
            'Set': "확인",
            'Default Button': "클릭",
            'Edit': "수정",
            'Text Color': "글자 색",
            'Background Color': "배경 색",
            },
          }
        },
      },
}
```

if customize css, input filed, button design, and etc... 

```
config:{
    css:{
      "btnColor": "btn--gray",
    }
}
```

## Output data

| Field            | Type     | Description              |
|------------------| -------- |--------------------------|
| link             | `string` | Exclusion HTML Tag text  |
| text             | `string` | Exclusion HTML Tag text  |
| alignment        | `string` | Exclusion HTML Tag text  |
| text_color       | `string` | Color picker value |
| background_color | `string` | Color picker value  |


```json
{
            "type" : "AnyButton",
            "data" : {
                "link" : "https://editorjs.io/",
                "text" : "editorjs official",
                "alignment": "center",
                "text_color": "#000",
                "button_color": "#fff"
            }
        }
```
