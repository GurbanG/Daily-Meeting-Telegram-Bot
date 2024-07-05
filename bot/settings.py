# https://docs.pydantic.dev/latest/concepts/pydantic_settings/

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    bot_token: str
    mongo_host: str
    mongo_port: int
    # mongo_username: str
    # mongo_password: str
