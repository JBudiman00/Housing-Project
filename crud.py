from sqlalchemy.orm import Session

import models, schemas


def get_user(db: Session, user_email: str):
    return db.query(models.User).filter(models.User.email == user_email).first()