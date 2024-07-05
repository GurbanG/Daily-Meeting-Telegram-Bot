from dataclasses import dataclass
from enum import Enum

from pydantic import BaseModel


class Language(Enum):
    ru = "ru"
    en = "en"
    default = "en"
