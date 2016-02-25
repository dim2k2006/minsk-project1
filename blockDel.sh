#!/bin/bash

#Проверка указания названия блока
if [ "$1" == "" ]; then
	echo "Ошибка! Не указано название блока!"
	exit 1
fi

# Удаляем зависимости стилей
sed -i -e "s/@import \"..\/blocks\/$1\/$1.scss\";//g" src/sass/blocks.scss

# Удаляем зависимости скриптов
sed -i -e "s/require(\"..\/blocks\/$1\/$1.js\");//g" src/scripts/main.js

# Удаляем блок
rm -rf src/blocks/$1

echo "Блок $1 удален!"