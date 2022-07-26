require('./bootstrap');


import React from 'react'
import { render } from 'react-dom'
import { InertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    color: 'blue',
    showSpinner: true
})

const app = document.getElementById('app')

render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={name => import(`./pages/${name}`).then(module => module.default)}
    />,
    app
)