from sqlalchemy.orm import Session

import models, schemas

def get_user(db: Session):
    return db.query(models.User).first()
