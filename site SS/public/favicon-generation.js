const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Создаем различные размеры иконок
console.log('Генерация favicon...');

try {
  // Проверяем, существует ли SVG файл
  if (!fs.existsSync(path.join(__dirname, 'favicon.svg'))) {
    console.error('Ошибка: favicon.svg не найден');
    process.exit(1);
  }

  // Создаем директорию для временных файлов
  const tempDir = path.join(__dirname, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  // Генерируем PNG файлы разных размеров
  const sizes = [16, 32, 48, 64, 128, 256];

  for (const size of sizes) {
    const outputPath = path.join(tempDir, `favicon-${size}.png`);
    execSync(`bun install -g svgexport && svgexport ${path.join(__dirname, 'favicon.svg')} ${outputPath} ${size}:${size}`);
    console.log(`Создан PNG размером ${size}x${size}`);
  }

  // Конвертируем все PNG в один ICO файл
  execSync(`bun install -g png2ico && png2ico ${path.join(__dirname, 'favicon.ico')} ${tempDir}/favicon-*.png`);
  console.log('Favicon.ico создан успешно');

  // Создаем также apple-touch-icon
  execSync(`cp ${path.join(tempDir, 'favicon-180.png')} ${path.join(__dirname, 'apple-touch-icon.png')}`);
  console.log('Apple Touch Icon создан');

  // Удаляем временную директорию
  execSync(`rm -rf ${tempDir}`);
  console.log('Временные файлы удалены');

} catch (error) {
  console.error('Ошибка при генерации favicon:', error);
}
