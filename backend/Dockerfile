FROM php:8.1-fpm
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
RUN apt-get update && apt-get install -y \
		libfreetype6-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
        libonig-dev \
	&& docker-php-ext-install \
        pdo \
        pdo_mysql \
		gd \
		gettext \
	&& docker-php-ext-enable \
		pdo_mysql \

# RUN docker-php-ext-install mysqli pdo pdo_mysql