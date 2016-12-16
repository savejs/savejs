# save.js
save.js allows ease of saving anything in an input field to a text file.

### Getting Started

save.js is very easy to start with, simply create a new instance of save.js with your `<button>` or `<a>` id and the input id to the data-save-target attribute of your `<button>` or `<a>`. The input can be an `<input>` or `<div>` or anything.
You can set the mime type to anything you would like, which by default is `application/octet-stream`.

After configuring the instance, you can initialize it by using `.init()`.

Here is an example:

```js
var test = savejs.create({
    buttonId: 'saveBtn',
    mimeType: 'text/plain',
    // requestFileName: true, //default filename is guid
    // requestFileNameMessage: 'Enter a file name',
});

test.init();
```
HTML Code:
```html
<h2>Textbox (text)</h2>
<input type="text" id="saveTextarea"/>
<a href="javascript:void(0)" id="saveTextareaBtn" data-save-target="saveTextarea">SAVE</a>
```

### Credits
#### [lltr](https://github.com/lltr)

### License
Licenced under the [MIT License](https://opensource.org/licenses/MIT)


