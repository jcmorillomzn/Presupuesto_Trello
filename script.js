// Inicializamos el Power-Up
TrelloPowerUp.initialize({

  // Botón en la tarjeta
  'card-buttons': function(t, options) {
    return [{
      text: 'Nuevo Presupuesto',
      callback: function(t) {
        // Abrimos el modal con index.html
        return t.modal({
          url: './index.html',
          accentColor: '#FF9F1C',
          height: 600,
          title: 'Nuevo Presupuesto'
        });
      }
    }];
  },

  // Configuración del Power-Up (show-settings)
  'show-settings': function(t, options) {
    return t.modal({
      url: './settings.html',
      accentColor: '#FF9F1C',
      height: 600,
      title: 'Configuración de Presupuestos'
    });
  }
});
