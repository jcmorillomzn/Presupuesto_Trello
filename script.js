TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: 'Nuevo Presupuesto',
      callback: function(t) {
        // Abrir modal con index.html con altura aumentada a 800px
        return t.modal({
          url: './index.html',
          accentColor: '#FF9F1C',
          height: 800,  // Altura aumentada para evitar scroll excesivo
          title: 'Nuevo Presupuesto'
        });
      }
    }];
  },
  'show-settings': function(t, options) {
    // Abrir modal de configuración con settings.html con altura aumentada a 800px
    return t.modal({
      url: './settings.html',
      accentColor: '#FF9F1C',
      height: 800,  // Altura aumentada para que se muestre todo el contenido sin scroll
      title: 'Configuración de Presupuestos'
    });
  }
});
