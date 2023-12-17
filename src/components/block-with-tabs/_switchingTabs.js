export function switchingTabs(tabsBlock) {
  const tabsSelector = 'tab';
  const tabs = tabsBlock.querySelectorAll(`.${tabsSelector}`);
  const tabsInner = tabsBlock.querySelector('.block-with-tabs__tabs-inner');
  const content = tabsBlock.querySelectorAll('.tab__content');

  console.log('tabsBlock', tabsBlock);
  console.log('tabs', tabs);
  console.log('content', content);

  function tabSwitching(tabsItems, tabsContainer, contentBlocks, selector) {
    function hideTabContent(a) {
      console.log('a', a);
      for (let i = a; i < contentBlocks.length; i++) {
        console.log('i', i);
        contentBlocks[i].classList.remove('tab__content_show');
        contentBlocks[i].classList.add('tab__content_hide');
        tabs[i].classList.remove('tab_active', 'tab_hidden-after');
      }
    }

    function showTabContent(b) {
      if (contentBlocks[b].classList.contains('tab__content_hide')) {
        contentBlocks[b].classList.add('tab__content_show');
        contentBlocks[b].classList.remove('tab__content_hide');
        tabs[b].classList.add('tab_active');
        if (b > 0) {
          tabs[b - 1].classList.add('tab_hidden-after');
        }
      }
    }

    hideTabContent(1);
    tabsContainer.addEventListener('click', (event) => {
      const { target } = event;

      console.log(target);

      if (target && target.classList.contains(selector)) {
        for (let i = 0; i < tabsItems.length; i++) {
          if (target === tabsItems[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    });
  }

  tabSwitching(tabs, tabsInner, content, tabsSelector);
}
