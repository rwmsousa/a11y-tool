/*eslint-disable */
declare global {
  interface Window {
    VLibras: any;
  }
}

// type Props = {
//   forceOnload?: boolean;
// };

export default function VLibrasWid() {
  if (typeof window !== 'undefined') {
    const scriptLibras = document.createElement('script');

    scriptLibras.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    scriptLibras.async = true;

    scriptLibras.onload = () => {
      new window.VLibras.Widget('https://vlibras.gov.br/app');
      // if (forceOnload) {
      //   window.onload();
      // }
    };
    document.head.appendChild(scriptLibras);

    const vwWidget = document.createElement('div');

    vwWidget.setAttribute('vw', 'true');
    vwWidget.setAttribute('class', 'enabled vlibrasWidget');
    vwWidget.setAttribute('style', 'margin: 10px 3px 10px !important');

    const vwAccessButton = document.createElement('div');

    vwAccessButton.setAttribute('vw-access-button', 'true');
    vwAccessButton.setAttribute('class', 'enabled vlibrasWidget');

    const vwPluginWrapper = document.createElement('div');

    vwPluginWrapper.setAttribute('vw-plugin-wrapper', 'true');

    const vwPluginTopWrapper = document.createElement('div');

    vwPluginTopWrapper.setAttribute('class', 'vw-plugin-top-wrapper');

    vwPluginWrapper.appendChild(vwPluginTopWrapper);
    vwWidget.appendChild(vwPluginWrapper);
    vwWidget.appendChild(vwAccessButton);

    if (document.getElementById('__next')) {
      document.getElementById('__next')?.appendChild(vwWidget);
    } else {
      document.body.appendChild(vwWidget);
    }

    document
      .getElementsByClassName('vpw-settings-btn-close')[0]
      ?.addEventListener('click', () => localStorage.setItem('storageLibras', JSON.stringify(1)));

    const searchButtonLibras = Array.from(document.getElementsByTagName('IMG'));

    for (let index = 0; index < searchButtonLibras.length; index += 1) {
      const element: HTMLElement = searchButtonLibras[index] as HTMLElement;

      if (element.getAttribute('class') === 'access-button') element.click();
    }
  }
}
