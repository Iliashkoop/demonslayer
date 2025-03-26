# Используем образ Nginx для статики
FROM nginx:alpine

# Копируем все файлы и папки из текущей директории в контейнер
COPY E:/demonslayer /usr/share/nginx/html

# Открываем порт 80 для веб-сервера
EXPOSE 80