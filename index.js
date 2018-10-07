exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .tab_text {
        color: hsla(0,40%,70%,0.8);
      }
      .tab_textActive {
        color: white;
      }
    `
  });
}
