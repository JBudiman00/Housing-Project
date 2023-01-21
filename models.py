from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from database import Base

class User(Base):
    __tablename__ = "User"

    #Table columns
    email = Column(String, primary_key=True, index=True)
    name = Column(String)
    password = Column(String)
    phoneNum = Column(Integer)

    #Relationships
    #items = relationship("Item", back_populates="owner")

'''
class Storage(Base):
    __tablename__ = "Storage"

    #Column headers
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True)
    address_1 = Column(String)
    address_2 = Column(String)
    city = Column(String)
    state = Column(String)
    size = Column(Integer)
    rate = Column(Integer)

    #Relationships
    #owner = relationship("User", back_populates="items")
    '''