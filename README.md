Frontend web site for connecting IATI and local 3W activities
=============================================================

_*Note:* This code is in an alpha state, and should not yet be used for any
purpose but evaluation of the prototype itself._

This repository contains the code for a prototype website that
combines activity data from the [International Aid Transparency
Initiative](https://iatistandard.org) (IATI) and UN OCHA's [Who? What?
Where?](https://data.humdata.org/dataset/somalia-operational-presence)
(3W) data for Somalia with the goal of connecting the work of local
and national aid actors with the funding and programming of
international and regional aid actors, and increasing the
international visibility of those local and national actors.

The prototype is being implemented by [Development
Initiatives](https://www.devinit.org/) on behalf of the [Grand
Bargain](https://interagencystandingcommittee.org/grand-bargain)
Transparency Workstream.

This repository is paired with
[iati3w-data](https://github.com/davidmegginson/iati3w-data), which
handles the backend data preparation.

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Overview

This web site will render entirely on in the browser. It depends on
prepared data stored in JSON format at
https://humportal.github.io/iati3w-data/ and will load and render
that data as needed.

## Credits

David Megginson wrote the initial prototype, with support from Mark
Brough and the team at Development Initiatives. The front-end code
was subsequently rewritten by Mark Brough, using the Nuxt.js
framework.

Special thanks to the individuals and organisations in the humanitarian
community who have provided information, made suggests, and given
feedback, and special thanks to the many organisations who publish
their activities in IATI and/or via the monthly 3W report that OCHA
Somalia publishes.

And finally, thanks to GitHub for providing free hosting.
