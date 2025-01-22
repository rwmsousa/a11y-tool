import React, { useEffect, useState } from 'react';
import Head from './src/utils/head';
import FloatingIcon from './src/components/ButtonFloatingIcon';
import Toolbar from './src/components/Toolbar';
import VLibrasWid from './src/components/VLibras';
import { IStorageSettings } from './src/interfaces/IStorageSettings';

export default function AccToolbar() {
  const [showToolbar, setShowToolbar] = useState(false);

  useEffect(() => {
    Head();
    new VLibrasWid();
    initializeStorageSettings();
    hideAccessButtons(document.body);
  }, []);

  const initializeStorageSettings = () => {
    const defaultSettings: IStorageSettings = {
      storageContrast: 1,
      storageTextStyle: 1,
      storageZoomPage: 1,
      storageLibras: 1,
    };

    Object.keys(defaultSettings).forEach((key) => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(defaultSettings[key]));
      }
    });
  };

  const hideAccessButtons = (element: HTMLElement) => {
    if (element.getAttribute('vw-access-button')) {
      element.style.display = 'none';
    }

    Array.from(element.children).forEach((child) => {
      hideAccessButtons(child as HTMLElement);
    });
  };

  return (
    <div>
      <Toolbar />
      <FloatingIcon />
    </div>
  );
}
