# Angular 6 Clipchamp Element

Commands:
* `npm run start` to test the component
  
* `npm run build && npm run package` to create a build of a sample component
  
* `npm run serve` to run a http-server with the clipchamp button element.

Usage:
```html
<script src="clipchamp.js"></script>
<clipchamp-button api="dZRI20N2Moz1l0qGoWE165mWu-s" label="Clipchamp" title="This is a title"></clipchamp-button>
```

| Options |  Info |  Example |
| ------------- | ------- |:-------------:| 
| api  | your clipchamp api key| dZRI20N2Moz1l0qGoWE165mWu-s |
| style | stylesheet for popup  |  https://api.clipchamp.com/static/button/themes/modern-dark.css | 
| output | where you want the uploaded file to end up |  dummy, blob, azure, s3, youtube, gdrive, dropbox |
| title | the words that apear at top of the widget | upload with clipchamp |
| lalel | what will be written on to the button | Upload here |

this interpretation of the clipchamp api needs polish and testing 