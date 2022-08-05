export default function(): void {
    __home__socialmedias_list_init();
}

const __home__socialmedias__scrollPositionIncrementalValue = 2.25,
      __home__socialmedias__textElements = [
        'instagram', 'facebook', 'youtube',
        'twitter', 'telegram', 'tiktok',
      ];

let __home__socialmedias__scrollIndex = 0;

const __home__socialmedias_list_init = async () => {

  const __home__socialmedias__list = document.getElementById('tf2022--home--social-medias--platform-names')!;

  const listItemBuilder = (title: string) => {
    const node = document.createElement('li');
    node.appendChild(document.createTextNode(title));
    return node;
  }
  
  __home__socialmedias__list.innerHTML = '';

  for (let i = 0; i < 3; ++i) {    
    __home__socialmedias__textElements.forEach(title => {    
      __home__socialmedias__list.appendChild(
        listItemBuilder(title)
      )
    })
  }
  
  const parentFrame = document.getElementById('tf2022--home--social-medias--platform-frame')!;
  const listElements = parentFrame.firstElementChild!.children;
  
  let output = document.getElementById('output')!;
  const calcListHeightInPixel = (totalElement: number) => totalElement*20 + (totalElement-1)*16;
  let scrollResult = calcListHeightInPixel(listElements.length) / 2;
  parentFrame.scrollTop = scrollResult;
  // output.innerHTML = parentFrame.firstChild.length.toString() + ' ' + scrollResult;
//   output.innerHTML = parentFrame.firstElementChild!.children.length.toString();
//   parentFrame.addEventListener('scroll', e => {    
//     // output.innerHTML = parentFrame.scrollTop;
//   }, { passive: true });
  window.addEventListener('cheeze', () => {
    alert('crust');
  });
}

const __home__socialmedias_list_move = async () => {

}

const __home__socialmedias_list_rotate = async () => {
  
}

