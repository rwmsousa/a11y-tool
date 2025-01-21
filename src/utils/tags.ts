export default function Tags(): (HTMLHeadingElement | HTMLElement | HTMLDivElement | HTMLButtonElement | SVGSVGElement)[] | null {
  let tagsH1: HTMLHeadingElement[];
  let tagsH2: HTMLHeadingElement[];
  let tagsH3: HTMLHeadingElement[];
  let tagsH4: HTMLHeadingElement[];
  let tagsH5: HTMLHeadingElement[];
  let tagsH6: HTMLHeadingElement[];
  let tagsP: HTMLHeadingElement[];
  let tagsLI: HTMLElement[];
  let tagsA: HTMLAnchorElement[];
  let tagsIMG: HTMLElement[];
  let tagsSVG: SVGSVGElement[];
  let tagsDiv: HTMLDivElement[];
  let tagsButton: HTMLButtonElement[];
  let tagHeader: HTMLElement[];
  let arrayTags: (HTMLHeadingElement | HTMLElement | HTMLDivElement | HTMLButtonElement | SVGSVGElement)[];

  if (typeof window !== 'undefined') {
    tagsH1 = Array.from(document.querySelectorAll('h1'));
    tagsH2 = Array.from(document.querySelectorAll('h2'));
    tagsH3 = Array.from(document.querySelectorAll('h3'));
    tagsH4 = Array.from(document.querySelectorAll('h4'));
    tagsH5 = Array.from(document.querySelectorAll('h5'));
    tagsH6 = Array.from(document.querySelectorAll('h6'));
    tagsP = Array.from(document.querySelectorAll('p'));
    tagsLI = Array.from(document.querySelectorAll('li'));
    tagsA = Array.from(document.querySelectorAll('a'));
    tagsIMG = Array.from(document.querySelectorAll('img'));
    tagsSVG = Array.from(document.querySelectorAll('svg'));
    tagsDiv = Array.from(document.querySelectorAll('div'));
    tagsButton = Array.from(document.querySelectorAll('button'));
    tagHeader = Array.from(document.querySelectorAll('header'));
    arrayTags = [tagHeader, tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsLI, tagsA, tagsDiv, tagsIMG, tagsSVG, tagsButton].flatMap<
      HTMLElement | SVGSVGElement
    >(tagArray => tagArray);

    const filterTags = arrayTags.filter(
      (tag) => tag.getAttribute('id') !== '__next'
        && tag.getAttribute('id') !== 'gameContainer'
        && tag.parentElement?.getAttribute('id') !== 'gameContainer'
        && !tag.getAttributeNames().includes('vp')
        && !tag.getAttributeNames().includes('vw')
        && !tag.classList.contains('toolbar')
        && !tag.classList.contains('containerToolbar')
        && !tag.classList.contains('divButtonToolbar')
        && !tag.classList.contains('floatingIcon')
        && !tag.classList.contains('vpw-component-play')
        && !tag.classList.contains('vpw-component-pause')
        && !tag.classList.contains('vpw-component-restart')
        && !tag.classList.contains('noUi-base')
        && !tag.classList.contains('noUi-origin')
        && !tag.classList.contains('noUi-handle')
        && !tag.classList.contains('vpw-slider')
        && !tag.classList.contains('vpw-settings-btn')
        && !tag.classList.contains('vpw-settings-content')
        && !tag.classList.contains('vp-container')
        && !tag.classList.contains('vpw-content')
        && !tag.classList.contains('vpw-controls')
        && !tag.classList.contains('vpw-regions')
        && !tag.classList.contains('vpw-cont')
        && !tag.classList.contains('vpw-flag')
        && !tag.classList.contains('vpw-container-regions')
        && !tag.classList.contains('vpw-border-default')
        && !tag.classList.contains('vpw-img-default')
        && !tag.classList.contains('vpw-header-btn-settings')
        && !tag.classList.contains('vpw-header-btn-dictionary')
        && !tag.classList.contains('vpw-header-btn-about')
        && !tag.classList.contains('vpw-header-btn-close')
        && !tag.classList.contains('vpw-screen-header')
        && !tag.classList.contains('vpw-options-container')
        && !tag.classList.contains('vpw-options-content')
        && !tag.classList.contains('vpw-option-content')
        && !tag.classList.contains('vpw-regions-container')
        && !tag.classList.contains('vpw-selected-region')
        && !tag.classList.contains('vpw-opacity-range')
        && !tag.classList.contains('vpw-opacity-info')
        && !tag.classList.contains('vpw-position-box')
        && !tag.classList.contains('vp-button-change-avatar')
        && !tag.classList.contains('vp-settings-menu')
        && !tag.parentElement?.getAttributeNames().includes('vw')
        && !tag.parentElement?.getAttributeNames().includes('vp')
        && !tag.parentElement?.getAttributeNames().includes('vp-box')
        && !tag.parentElement?.getAttributeNames().includes('vp-info-screen')
        && !tag.parentElement?.getAttributeNames().includes('vp-suggestion-screen')
        && !tag.parentElement?.getAttributeNames().includes('vp-suggestion-button')
        && !tag.parentElement?.getAttributeNames().includes('vp-rate-box')
        && !tag.parentElement?.getAttributeNames().includes('vp-rate-button')
        && !tag.parentElement?.getAttributeNames().includes('vp-controls')
        && !tag.parentElement?.classList.contains('containerToolbar')
        && !tag.parentElement?.classList.contains('toolbar')
        && !tag.parentElement?.classList.contains('floatingIcon')
        && !tag.parentElement?.classList.contains('vp-controls-play')
        && !tag.parentElement?.classList.contains('vpw-slider')
        && !tag.parentElement?.classList.contains('vpw-content')
        && !tag.parentElement?.classList.contains('vpw-localism')
        && !tag.parentElement?.classList.contains('vpw-national')
        && !tag.parentElement?.classList.contains('vpw-settings-btn')
        && !tag.parentElement?.classList.contains('vpw-settings-content')
        && !tag.parentElement?.classList.contains('vpw-option-content')
        && !tag.parentElement?.classList.contains('vpw-controls-speed')
        && !tag.parentElement?.classList.contains('vpw-options-container')
        && !tag.parentElement?.classList.contains('vpw-regions-container')
        && !tag.parentElement?.classList.contains('vpw-selected-region')
        && !tag.parentElement?.classList.contains('vp-close-button')
        && !tag.parentElement?.classList.contains('vpw-controls-subtitles')
        && !tag.parentElement?.classList.contains('vpw-screen-header')
        && !tag.parentElement?.classList.contains('vpw-btn-close')
        && !tag.parentElement?.classList.contains('vpw-clickable')
        && !tag.parentElement?.classList.contains('vpw-container-opacity')
        && !tag.parentElement?.classList.contains('vpw-vlibras-logo')
        && !tag.parentElement?.classList.contains('vp-button-change-avatar')
        && !tag.parentElement?.classList.contains('vp-button')
        && !tag.parentElement?.classList.contains('vp-container')
        && !tag.parentElement?.classList.contains('vw-text'),
    );

    return filterTags;
  }

  return null;
}
