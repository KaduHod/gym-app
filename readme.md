docker-compose up --build


MYSQL
    - docker build -t gymapp-db-image -f dockerfile .

    - docker run -d --rm -p 3306:3306 --name gymapp-db-container gymapp-db-image

    - docker exec -i gymapp-db-container mysql -uroot -p123456 <docker exec -i gymapp-db-container mysql -uroot -p123456 < seeders/scripts.sql

    - docker exec -it gymapp-db-container bash