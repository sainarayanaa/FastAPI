from pydantic import BaseModel

class Todo(BaseModel):
    
    description: str