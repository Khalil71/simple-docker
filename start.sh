#!/bin/bash

docker-compose up -d --scale backend=5 --scale frontend=2
# docker-compose --scale backend=5
# docker-compose --scale frontend=2
