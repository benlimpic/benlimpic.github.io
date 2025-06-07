const handleNewTab = (url) => {
  if (!url || typeof window === 'undefined') {
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
};

export default handleNewTab;
