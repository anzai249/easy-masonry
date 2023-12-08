# Easy Masonry

This is a simple masonry generator.

![EasyMasonry](./public/easy-masonry.png)

Testing hexo compatibility.

![HexoTest](./public/hexo-test.png)

## Usage

Edit `images.json` in `src`

```json
{
    "list": [
        {
                "image": "link/to/image1",
                "title": "title1",
                "description": "desc1"
        },
        {
                "image": "link/to/image2",
                "title": "title2",
                "description": "desc2"
        }
    ]
}
```

And then

```shell
npm install
```

```shell
npm run build
```

Check `dist/index.html`, this single file is what you want.

## Embedding using iframe

Note: This method does not support CORS. And sometime it's not working well.

```html
<script>
    function resizeIframe() {
        var iframe = document.getElementById("easyMasonry");
        var iframeHeight = iframe.contentWindow.document.body.scrollHeight;
        iframe.height = iframeHeight;
    }
</script>

<iframe id="easyMasonry" height=2000px width=100% scrolling=no 
    src="path/to/your/index" onload="resizeIframe()"></iframe>
```

## License

### Code

MIT

### Photos

These photos are all taken myself, so I will set them to...

**Public Domain!!!**