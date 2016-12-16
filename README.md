# save.js
save.js allows ease of saving anything in an input field to a text file.

### Getting Started

save.js is very easy to start with, simply create a new instance of save.js with your `<button>` or `<a>` id and the `<input>` id. 
You can set the mime type to anything you would like, which by default is `application/octet-stream`.

Afte configuring the instance, you can instantiate it by using `.init()`.

Here is an example:

```js
var test = savejs.create({
    buttonId: 'saveBtn',
    inputId: 'saveTextarea',
    mimeType: 'text/plain',
    // requestFileName: true,
    // requestFileNameMessage: 'Enter a file name',
});

test.init();
```

```html
<h2>Textbox (text)</h2>
<input type="text" id="saveTextarea"/>
<a href="javascript:void(0)" id="saveTextareaBtn" data-save-target="saveTextarea">SAVE</a>
```

### Credits
#### [lltr](https://github.com/lltr)

### License
Licenced under the [MIT License](https://opensource.org/licenses/MIT)


