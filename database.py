from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

#SQLALCHEMY_DATABASE_URL = "mysql://jbudiman@mydb.ics.purdue.edu/jbudiman"
SQLALCHEMY_DATABASE_URL = "cockroachdb://jbudiman:TqfnbuidXkLJtkvBuMcucQ@dapper-pointer-6940.5xj.cockroachlabs.cloud:26257/storage_solution?sslmode=verify-full"

#SQLALCHEMY_DATABASE_URL = "mysql+pymysql://g1124542:IE332G24@lpvdbamypr04.itap.purdue.edu:3306/g1124542"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()