export function purchase() {
  return {
    activeTab: 'regular',
    toggleTabs(e) {
      const target = e.target.getAttribute('data-tab')
      this.activeTab = target
    },
  }
}
