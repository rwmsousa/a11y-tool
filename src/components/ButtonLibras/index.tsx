import React from 'react';

import { useEffect } from 'react';

export default function Libras() {
  useEffect(() => {
    if (localStorage.getItem('storageLibras') === '2') {
      setTimeout(() => {
        const closeWidget: HTMLElement = document.getElementsByClassName(
          'vpw-settings-btn-close',
        )[0] as HTMLElement;
        if (closeWidget) {
          closeWidget.style.opacity = '0';
          closeWidget.addEventListener('click', () =>
            localStorage.setItem('storageLibras', JSON.stringify(1)),
          );
        }

        const titleWidget: HTMLElement = document.getElementsByClassName(
          'vpw-mes',
        )[0] as HTMLElement;
        if (titleWidget) titleWidget.innerText = 'LIBRAS';
      }, 10000);
    }
  }, []);

  const setLibras = () => {
    const storageLibras = localStorage.getItem('storageLibras');

    if (storageLibras == '1') {
      localStorage.setItem('storageLibras', JSON.stringify(2));

      setTimeout(() => {
        const closeWidget: HTMLElement = document.getElementsByClassName(
          'vpw-header-btn-close',
        )[0] as HTMLElement;

        if (closeWidget) {
          closeWidget.addEventListener('click', () =>
            localStorage.setItem('storageLibras', JSON.stringify(1)),
          );
          closeWidget.style.display = 'none';
        }

        const aboutVlibras = document.getElementsByClassName(
          'vpw-header-btn-about',
        )[0] as HTMLElement;
        if (aboutVlibras) aboutVlibras.style.display = 'none !important';

        const titleWidget: HTMLElement = document.getElementsByClassName(
          'vpw-mes',
        )[0] as HTMLElement;
        if (titleWidget) titleWidget.innerText = 'LIBRAS';
      }, 10000);

      try {
        const showWidget = document.getElementsByClassName(
          'access-button',
        )[0] as HTMLElement;
        showWidget.style.display = 'none';
        showWidget.click();
      } catch (error) {
        console.log('error: ' + error);
      }
    }

    if (storageLibras == '2') {
      localStorage.setItem('storageLibras', JSON.stringify(1));

      try {
        const closeWidget: HTMLElement = document.getElementsByClassName(
          'vpw-header-btn-close',
        )[0] as HTMLElement;
        closeWidget.click();
      } catch (error) {
        console.log('error: ' + error);
      }
    }
  };

  return (
    <div
      className="divButtonToolbar"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid transparent',
      }}
    >
      <button
        type="button"
        aria-label="Abrir ou fechar tradutor de Libras"
        style={{
          padding: '2px 4px',
          border: '1px solid #000000',
          borderRadius: '7px',
          cursor: 'pointer',
        }}
        className="a11yIcon"
        onClick={() => setLibras()}
      >
        <svg
          className="iconToolbar"
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          width="25"
          viewBox="0 96 960 960"
        >
          <path d="M210 1060q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h190v-60H150q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h250v-60H110q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h290v-60H170q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h336l-45-88q-9-19-3-38t26-29l4-3 224 214q14 13 21 30t7 35v209q0 37-26 63.5t-64 26.5H210Zm250-60h170q21 0 35.5-15t14.5-35V769q0-11-3.5-19.5T665 733L540 615v85h-80v300Zm-16-562L315 302q-8-9-7.5-21.5T317 259q9-8 21.5-7.5T359 261l139 148q-17 8-29.5 15T444 438Zm-87 82-88-92q-8-9-7.5-21.5T271 385q9-8 21.5-7.5T313 387l93 96q-5 10-7.5 19.5T396 520h-39Zm417 157q-5-7-11-13.5T750 650l-16-16 71-66q8-8 11.5-16.5T820 532V361l-62 59-56-58-126 121-43-42 41-41-199-211q-8-9-8-21t9-21q9-8 22-7.5t21 9.5l199 210 44-42-159-166q-8-9-7.5-21.5T505 108q9-8 21.5-7.5T547 110l231 244 33-95q7-20 26-28t39-2l4 2v310q0 19-7.5 36T851 607l-77 70ZM570 807Zm82-251Z" />
        </svg>
      </button>
      <p
        style={{
          margin: '0',
          padding: '0',
          fontSize: '8px',
          color: '#000000 !important',
          fontFamily: 'Lexend Deca, sans-serif',
        }}
        className="legendButton"
      >
        Libras
      </p>
    </div>
  );
}
