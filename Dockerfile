# Server setup

# nginx state for serving content
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm /etc/nginx/conf.d/default.conf

# Change permissions
RUN chmod -R 777 /var ; chmod -R 777 /var/cache ; chmod -R 777 /run

# Copy static assets from builder stage
COPY dist .
COPY nginx.conf /etc/nginx/conf.d/

# Export settings
EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
