# *Kacper Czechowicz*

* [Dane techniczne](#dane-techniczne)
* [Zadanie 1a](#zadanie-1a)
* [Zadanie 1b](#zadanie-1b)
* [Zadanie 1c](#zadanie-1c)
* [Zadanie 1d](#zadanie-1d)

## Dane Techniczne

Procesor:
	Intel Core I5 3470 3.2Ghz

RAM:
	Kingston HyperX 4GB 1600MHz DDR3 CL9

Dysk Twardy:
	Seagate 500GB Barracuda 7200x

System operacyjny:
	Xubuntu 14.04

Baza Danych:
	MongoDB 2.6.5, Postgres 9.3


## Zadanie 1a

### Import danych do MongoDB:

Wykorzystanie systemu podczas importu:

![Importowanie mongo](images/mongoimport.png)

Czas importu danych:

![Importowanie mongo time](images/mongoimport-time.png)

### Import danych do PostgreSQL

Wykorzystanie systemu podczas importu:

![Importowanie psql](images/psqlimport.png)

Czas importu danych:

![Importowanie psql time](images/psqlimport-time.png)

## Zadanie 1b

# Zliczanie danych w MongoDB

Funkcja zliczająca w MongoDB wyświetla wynik niemal natychmiastowo, a baza zawierająca dane waży ok 16GB

![Mongo count](images/mongo-count.png)

# Zliczanie danych w PostgreSQL

W psql zliczanie danych jest nieco bardziej czasochłonne:

![Psql count](images/psql-count.png)

## Zadanie 1c

Program wykorzystany w tym zadaniu napisałem w javascript oraz uruchomiłem go za pomocą node.js. Sterownik jaki wykorzystałem to node-mongodb-nativ. Skrypt znajduje się tu: [skrypt](/scripts/index.js)

Wykorzystanie zasobów podczas działania programu: 

![Node zasoby](images/node-zasoby.png)

Wynik działania programu:

![Node wynik](images/node-wynik.png)

Oprócz zliczenia tagów, wynikiem programu jest zamiana ciągu znaków w polu 'Tags' na tablice z tagami w bazie MongoDB:

	Tags: "c# javascript";

	na

	Tags: ["c#", "javascript"];

## Zadanie 1d

Dane wykorzystane w zadaniu zostały pobrane z [koordinates.com](http://koordinates.com)

Pobrałem dane:
	
	- Poligony miast w Colorado USA
	- Punkty lotniska w Colorado USA
	- Linie torowisk w Colorado USA
