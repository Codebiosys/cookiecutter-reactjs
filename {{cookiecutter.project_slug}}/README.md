# {{cookiecutter.project_name}}

To install:

  ```
  cd ./{{cookiecutter.project_slug}}; yarn install
  cd ./{{cookiecutter.project_slug}}; yarn install
  ```

## Configuration

You can configure application behavior via environment variables:

| Variable  | Default | Description  |
|---|---|---|
| DEBUG  | 1  | Flag indicating that the application is running in a DEBUG setting  |
| GRAPHQL_HOST | window.location  | GRAPHQL service hostname |
| GRAPHQL_PORT | 4000  | GRAPHQL service port number |
| GRAPHQL_ENDPOINT | /graphql  | GRAPHQL service endpoint |

## Development

This application uses [Docker Compose] to setup a *development environment*.
**Please ensure you have it installed and have a some basic knowledge of how it
works**

[Docker Compose]: https://docs.docker.com/compose/overview/

### Installation

1. Clone the application:

  ```
  > git clone https://github.com/CodeBiosys/{{cookiecutter.project_slug}}
  > cd {{cookiecutter.project_slug}}
  ```

1. Provision a new Docker machine called `{{cookiecutter.project_slug}}`:

  ```
  > docker-machine create -d virtualbox {{cookiecutter.project_slug}}
  > eval $(docker-machine env {{cookiecutter.project_slug}})
  > docker-machine ls
  NAME             ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER        ERRORS
  {{ cookiecutter.project_slug.ljust(16) }} *        virtualbox   Running   tcp://192.168.99.100:2376           v17.06.0-ce
  ```

  **Note the asterisk in the "ACTIVE" column.**


1. Build the application stack and start the services:

  ```
  > docker-compose build
  > docker-compose up -d
  ```

1. Get the IP address of the machine and use it to navigate to it on your browser:

  ```
  > docker-machine ip {{cookiecutter.project_slug}}
