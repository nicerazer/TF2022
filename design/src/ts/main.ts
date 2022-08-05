import Alpine from 'alpinejs'

import '../css/index.css'
import orderScript from './orders'
import homeScript from './home'

// import html from './../pages/orders.table.html?raw'
import html from './../pages/home.html?raw'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = html

// orderScript();
homeScript();

Alpine.start()
