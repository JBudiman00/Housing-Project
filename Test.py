from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import crud, models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

#Get requests
#Returns list of all users
@app.get("/users/", response_model=List[schemas.User])
def read_users(db: Session = Depends(get_db)):
    #users = crud.get_user(db)
    users = db.query(models.User).all()
    return users

#Post requests