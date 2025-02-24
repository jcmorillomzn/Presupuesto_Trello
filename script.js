TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: 'Nuevo Presupuesto',
      callback: function(t) {
        // Aquí abrimos un modal con tu index.html
        return t.modal({
          url: './index.html', // Ajusta la ruta si tu archivo se llama distinto
          accentColor: '#FF9F1C',
          height: 600,
          title: 'Nuevo Presupuesto'
        });
      }
    }];
  }
});
