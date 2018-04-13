#!/bin/bash

docker-compose up -d --scale backend=5 --scale frontend=2
