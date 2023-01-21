from typing import List, Union

from pydantic import BaseModel

class UserBase(BaseModel):
    email: str
    name: str
    phonenum: int

class UserCreate(UserBase):
    password: str

class User(UserBase):
    class Config:
        orm_mode = True

