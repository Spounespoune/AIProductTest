# Démarre les conteneurs en arrière-plan
up:
	docker compose up -d

# Arrête les conteneurs
down:
	docker compose down

# Redémarre les conteneurs
restart:
	docker compose down
	docker compose up -d

# Reconstruit les images et redémarre les conteneurs
build:
	docker compose up -d --build


status:
	docker compose ps -a