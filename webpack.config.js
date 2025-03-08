const path = require('path')// Импортируем модуль "path" для работы с путями файлов

module.exports = {
  entry: 'server.js', // Точка входа для сборки проекта

  output: {
    filename: 'bundle.js', // Имя выходного файла сборки
    path: path.resolve(__dirname, 'public'), // Путь для выходного файла сборки
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'production ', // Режим сборки
}