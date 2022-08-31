import Alpine from 'alpinejs'

export default function (): void {
  document.addEventListener('alpine:init', () => {
      Alpine.data('tableContent', () => ({
        helloworldText: 'heelowrold',
        openFilter: true,
        page: 1,
        data: tableData,
        currentPage: 2,
        search: '',
        tableLoading: false,
        sorting: {
          title: {isAscending: null},
          date: {isAscending: null},
        },
        sortBy: (src: string) => {
          tableData.sort((a: any, b: any) => {
            return a.createdAt.date.raw - b.createdAt.date.raw
            // const isAscending = true
            // if (isAscending)
            // else
            //   return b.createdAt.date.raw - a.createdAt.date.raw
          })
          console.log(src)
        },
        filters: {
          date: {
            from: null, to: null
          }
        },
        prevPage() {
          if (this.page > 1) this.page--
          else this.page = 1
        },
        nextPage() { this.page++ },
        cleanPage() {
          if (this.page < 1) this.page = 1
        },
        switchPage() {

        }
      }))
    });

  var objDiv = document.getElementById("your_div")!
  objDiv.scrollLeft = objDiv.scrollWidth
}

import { faker } from '@faker-js/faker'

let tableData:object[] = []

const formatters = {
  date: (date: Date): string => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  },
  zeroPad: (num: number, places: number): string => String(num).padStart(places, '0')
}


interface orderInterface {
  id: string;
  createdAt: {
    date: {
      formatted: string;
      raw: Date;
    };
    time: string;
  };
  link: string;
  charge: string;
  startCount: number;
  quantity: number;
  serviceId: string;
  service: string;
  category: string;
  status: string;
  remains: string;
  refill: string | null;
  refilling: boolean;
  cancel: string | null;
  refillAvailableTime: Date;
}

for (let i = 0; i < 50; ++i) {
  let isRefill = [true, false][Math.floor(Math.random() * 2)];
  let date = faker.date.recent(50);
  let orderSeed: orderInterface = {
    id: Math.floor(Math.random() * 999999).toString(),
    createdAt: {
      date: {
        formatted: formatters.date(date),
        raw: date
      },
      time: `
        ${formatters.zeroPad(
          date.getHours() < 12 ? date.getHours() : date.getHours() - 12,
          2
        )}:${formatters.zeroPad(date.getMinutes(), 2)}
        ${date.getHours() < 12 ? ' AM' : ' PM'}
      `
    },
    link: faker.internet.url() + '/' + faker.random.alpha(Math.floor(Math.random() * 1000)),
    charge: `RM${Math.round((Math.random() * 140 + Number.EPSILON) * 100) / 100}`,
    startCount: Math.floor(Math.random() * 293585),
    quantity: Math.floor(Math.random() * 293585),
    serviceId: Math.floor(Math.random() * 293585).toString(),
    service: [
      "✔❤new❤ Instagram Views [NO REELS] [Max: 9M] [Start Time: 0-1 Hour] [Speed: 100K/Day]",
      "Instagram Followers [5K] [With PP & Posts] [1H - 500/Hour]",
      "TikTok Followers [50K] [1H - 5K/Day]",
      "8 JAM MASUK Tiktok Followers [30K] [R30] [6H - 5K/Day]",
      "TikTok Followers [NO REFILL] [Max: 50K] [Start Time: 4 Hours] [Speed: 500/Day]",
    ][Math.floor(Math.random() * 5)],
    category: `pending`,
    status: ['Pending', 'In Progress', 'Dah Siap', 'Partial', 'Tengah Proses', 'Canceled'][Math.floor(Math.random() * 6)],
    remains: Math.floor(Math.random() * 293585).toString(),

    // IF????
    refill: isRefill ? faker.internet.url() : null,
    refilling: isRefill,
    cancel: [faker.internet.url(), null][Math.floor(Math.random() * 2)],
    refillAvailableTime: faker.date.recent(),
  }
  tableData.push(orderSeed)
}