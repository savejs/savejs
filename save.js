/**
 * Author: lltr
 * Version: 1.0.0
 * https://savejs.com
 */
var savejs = 
{
    buttonId: '',
    inputId: '',
    requestFileName: false,
    fileName: null,
    requestFileNameMessage: 'Enter file name',
    mimeType: 'application/octet-stream',

    _generateUUID: function() 
    {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") 
        {
            d += performance.now();
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) 
        {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },

    init: function()
    {
        this._bindEvents();
    },

    create: function (values) 
    {
        var instance = Object.create(this);
        Object.keys(values).forEach(function (key) 
        {
            instance[key] = values[key];
        });
        return instance;
    },

    _bindEvents: function()
    {
        var x = this;
        document.getElementById(this.buttonId).onclick = function()
        {
            x._save();
        }
    },

    _save: function () 
    {
        var output = document.getElementById(this.inputId).value;
        var saveBlob = window.Blob || window.webkitBlob || window.mozBlob || window.msBlob;
        var outputFileAsBlob = new saveBlob([output], { type: this.mimeType });
        var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

        this.requestFileName ? this.fileName = window.prompt(this.requestFileNameMessage, "") : this.fileName = this._generateUUID();
        var downloadLink = document.createElement("a");
        downloadLink.download = this.fileName;
        downloadLink.innerHTML = "Download File";

        if (window.webkitURL != null) 
        {
            downloadLink.href = URL.createObjectURL(outputFileAsBlob);
            console.log("chrome");
        }
        else if (URL != null)
        {
            downloadLink.href = URL.createObjectURL(outputFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        downloadLink.click();

        function destroyClickedElement(event) 
        {
            document.body.removeChild(event.target);
        }
    }

}
