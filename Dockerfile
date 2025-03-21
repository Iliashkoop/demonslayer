# Используем официальный образ Nginx
FROM nginx:latest

# Копируем папку demonslayer в контейнер
COPY demonslayer /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80