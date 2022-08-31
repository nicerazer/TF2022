import Alpine from 'alpinejs'

import '../css/index.css'
// import { run as runService } from './services'

let isDevelopment = !['127.0.0.1', 'localhost'].every((hostname: string) => !window.location.hostname.includes(hostname))

const pathnamePre = isDevelopment ? window.location.pathname.replace('/pages/', '') : window.location.pathname as string
const pathname = pathnamePre.substring(0, pathnamePre.length-1) as string

// Navbar data
document.addEventListener('alpine:init', () => {
    Alpine.data('navbarData', () => ({
        notifications: 5,
        currentPageName: pathname,
    }))
})

let pageScriptsMap = {
    // 'services': runService,
    'home': () => {},
    'services': () => {},
    'neworder': () => {},
    'orders': () => {},
    'subscriptions': () => {},
    'refill': () => {},
    'addfunds': () => {},
    'account': () => {},
}

pageScriptsMap[pathname as keyof typeof pageScriptsMap]()

Alpine.start()
