# Используем официальный образ Nginx
FROM nginx:alpine

# Копируем ВСЕ файлы проекта в контейнер
COPY . /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80