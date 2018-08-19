FROM httpd:2.4
LABEL maintainer="haritkumar@hotmail.com"
COPY ./build/ /usr/local/apache2/htdocs/