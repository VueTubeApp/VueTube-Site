
# Vuetube

  

To successfully build on GitHub actions, the base-href needs to be amended in `package.json` on line 10

`"build:prod": "ng build --configuration production --base-href https://pekempy.github.io/VueTube-Website-Test/"`

The base-href should be the URL the site is being hosted on (e.g `https://vuetube.app/`) including the trailing slash.
