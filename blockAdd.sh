#!/bin/bash

#Проверка указания названия блока
if [ "$1" == "" ]; then
	echo "Ошибка! Не указано название блока!"
	exit 1
fi

#Проверка существования блока
if [ -d "src/blocks/$1" ]; then
	echo "Блок $1 уже существует!"
	exit 1
fi

#Создадим каталог блока
mkdir src/blocks/$1

# Проверяем наличие технологии 1
if [ "$2" != "" ]; then
	if [ "$3" != "" ]; then
		touch src/blocks/$1/$1.$3

		# Вписываем зависимости для стилей
		if [ "$3" == "scss" ]; then
			echo -e "@import \"../blocks/$1/$1.scss\";\n" >> src/sass/blocks.scss
		fi

		# Вписываем зависимости для скриптов
		if [ "$3" == "js" ]; then
			echo -e "require(\"../blocks/$1/$1.js\");\n" >> src/scripts/main.js		
		fi
	fi
fi

# Проверяем наличие технологии 2
if [ "$4" != "" ]; then
	if [ "$5" != "" ]; then
		touch src/blocks/$1/$1.$5

		# Вписываем зависимости для стилей
		if [ "$5" == "scss" ]; then
			echo -e "@import \"../blocks/$1/$1.scss\";\n" >> src/sass/blocks.scss
		fi

		# Вписываем зависимости для скриптов
		if [ "$5" == "js" ]; then
			echo -e "require(\"../blocks/$1/$1.js\");\n" >> src/scripts/main.js		
		fi
	fi
fi

# Проверяем наличие технологии 3
if [ "$6" != "" ]; then
	if [ "$7" != "" ]; then
		touch src/blocks/$1/$1.$7

		# Вписываем зависимости для стилей
		if [ "$7" == "scss" ]; then
			echo -e "@import \"../blocks/$1/$1.scss\";\n" >> src/sass/blocks.scss
		fi

		# Вписываем зависимости для скриптов
		if [ "$7" == "js" ]; then
			echo -e "require(\"../blocks/$1/$1.js\");\n" >> src/scripts/main.js		
		fi
	fi
fi

# Проверяем наличие технологии 4
if [ "$8" != "" ]; then
	if [ "$9" != "" ]; then
		touch src/blocks/$1/$1.$9

		# Вписываем зависимости для стилей
		if [ "$9" == "scss" ]; then
			echo -e "@import \"../blocks/$1/$1.scss\";\n" >> src/sass/blocks.scss
		fi

		# Вписываем зависимости для скриптов
		if [ "$9" == "js" ]; then
			echo -e "require(\"../blocks/$1/$1.js\");\n" >> src/scripts/main.js		
		fi
	fi
fi

echo "Блок $1 создан!"